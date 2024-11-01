<?php

/*
* This file is part of the WonderForm package.
*
* (c) Wonderform <contact@wonderform.net>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
 */

namespace WF\Lib\Addons;

require_once __DIR__.'/../core/WFEnv.php';
require_once __DIR__.'/../post/WFPostService.php';
require_once __DIR__.'/../post/WFormPostAction.php';
require_once __DIR__.'/../core/WFCoreService.php';
require_once __DIR__.'/../custom/WFCustomManager.php';
require_once __DIR__.'/quiz/WFQuizManager.php';
require_once __DIR__.'/contact/WFContactManager.php';
require_once __DIR__.'/WFActionsManager.php';

use Symfony\Component\HttpFoundation\Request;

use WF\Lib\Core\WFCoreService;
use WF\Lib\Core\WFDbManager;
use WF\Lib\Core\WFModule;
use WF\Lib\Core\WFormConfigManager;
use WF\Lib\Core\WFEnv;
use WF\Lib\Core\WFUser;
use WF\Lib\Core\WFormConfig;
use WF\Lib\Core\WFormAction;
use WF\Lib\Core\WFormActionType;
use WF\Lib\Core\WFDataTypes;
use WF\Lib\Core\WFProductType;
use WF\Lib\Core\WFieldConfig;
use WF\Lib\Custom\WFCustomManager;
use WF\Lib\Addons\Quiz\WFQuizManager;
use WF\Lib\Addons\Contact\WFContactManager;
use WF\Lib\Post\WFormPostValidator;

/**
 * @author Wonderform <contact@wonderform.net>
 */
class WFAddonsService
{
  /**
   * @var WFAddonsService the single instance of the class
   */
  private static $_sInstance = null;

  /**
   * @var WFAbstractActionsManager manager
   */
  private $_actionsMgr = null;

  /**
   * Main WFAddonsService Instance
   *
   * Ensures only one instance of WFAddonsService is loaded or can be 
   * loaded.
   *
   * @static
   * @return WFAddonsService - Main instance
   */
  public static function getInstance() {
    if (is_null(self::$_sInstance)) {
      self::$_sInstance = new self();
    }
    return self::$_sInstance;
  }

  /**
   * Constructor
   * @param $actionsMgr
   */
  public function __construct() {
    $this->_actionsMgr = new WFActionsManager;
  }

  /**
   * Set a new actions manager
   * @param $actionsMgr the new actions manager to set
   */
  public function setActionsMgr(WFAbstractActionsManager $actionsMgr) {
    $this->_actionsMgr = $actionsMgr;
  }

  /**
   * Get actions manager
   * @return WFAbstractActionsManager
   */
  public function getActionsMgr() {
    return $this->_actionsMgr;
  }

  /**
   * Get quiz manager
   * @return WFQuizManager
   */
  public function getQuizMgr() {
    return $this->_actionsMgr->getQuizMgr();
  }

  /**
   * Get contact manager
   * @return WFContactManager
   */
  public function getContactMgr() {
    return $this->_actionsMgr->getContactMgr();
  }

 /**
  * Add new form config
  * @param Request $request
  * @param WFormConfig $wfc
  * @param array $data hold data that will be inserted in database
  * @param array $messages hold error messages
  * @return array the entry added or updated
  */
  public function addFormConfig(
    Request $request,
    WFormConfig &$wfc,
    array &$data,
    array &$messages)
  {
    $subProductTypeId = intval($data['wf_producttype_id']);
    $productTypeId = WFProductType::getTopProductTypeId($subProductTypeId);

    if ($productTypeId 
      && $subProductTypeId > WFProductType::WF_MAX_ADDON_ID) {
      $mgr = $this->_actionsMgr->getManager($productTypeId);
      if ($mgr) {
        $mgr->loadValidatorFormConfigs();
        $formConfig = WFCoreService::getInstance()
          ->getFormConfigMgr()->findOneByName($data['name']);
        if (is_null($formConfig)) {
          return $mgr->addFormConfig($request, $wfc, $data, $messages);
        } else {
          $messages[] = __('A FormConfig with the same name exists.');
          return [];
        }
      } else {
        return WFDbManager::getInstance()->insert(
          $wfc->getId(),
          $wfc->getEntriesTable(),
          $data,
          $wfc->getModuleId());
      }
    } else {
      $messages =
        ['Invalid wf_producttype_id should be greater than 99'];
      return [];
    }
  }

 /**
  * Add/update entry
  * @param Request $request
  * @param WFormConfig $wfc
  * @param WFormPostValidator $validator
  * @param integer $entryId the entry identifier in case of update
  * @return array the entry added or updated
  */
  public function addOrUpdate(
    Request $request,
    WFormConfig &$wfc,
    WFormPostValidator &$validator,
    $entryId)
  {
    $entry = $this->_actionsMgr->addOrUpdate(
      $request, $wfc, $validator, $entryId);
    if (is_array($entry)
      && !empty($entry) 
      && isset($entry['id'])
      && !$wfc->getParent() // sub forms should not insert in wf_formpost
      && $wfc->getModule()->getId() == WFModule::WF_CUSTOM_MODULE_ID) {
      // check if category_id is set ==> then link entry to the given category
      $formId = $wfc->getId();
      if (isset($validator->extraData['category_id'])) {
        WFCoreService::getInstance()
          ->getCategoryEntryMgr()->addOrUpdate(
            $formId,
            $entry['id'],
            $validator->extraData['category_id']);
      }
      // add or update field option entries
      WFCoreService::getInstance()
        ->getOptionEntryMgr()->massAddOrUpdate(
          $wfc, $entry['id'], $validator->optionEntryData, $validator->extraData);
      // add or update post infos
      $this->addOrUpdatePost($request, $wfc, $validator, $entry);
      $entry = $this->findById($wfc, $entry['id']);
      // get entry options
      $entry['entry_options'] =
        WFDbManager::getInstance()->doFindEntryOptions(array($entry['id']));
    }

    // execute form actions
    if ($entryId == 0
      && !empty($entry)
      && $wfc->getModule()->getId() == WFModule::WF_CUSTOM_MODULE_ID) {
      // new insert ==> execute form actions
      $this->executeFormActions($request, $wfc, $entry);
    }

    return $entry;
  }

  /**
  * Execute form actions
  * @param Request $request
  * @param WFormConfig $wfc
  * @param $entry array a given form entry
  */
  public function executeFormActions(
    Request $request, WFormConfig &$wfc, $entry) {
    if (!is_null($wfc->getFormActions())) {
      foreach($wfc->getFormActions() as $action) {
        $this->getActionsMgr()->executeAction(
            $request, $wfc, $action, $entry);
      }
    }
  }

  /**
   * Create post entry
   * @param Request $request
   * @param WFormConfig $wfc
   * @param WFormPostValidator $validator
   * @param integer $entryId the entry identifier in case of update
   * @return array the entry added or updated
   */
  public function addOrUpdatePost(
    Request $request,
    WFormConfig &$wfc,
    WFormPostValidator &$validator,
    array &$entry)
  {
    $now = new \DateTime('now');
    $id = WFDbManager::getInstance()->getPostId($wfc->getId(), $entry['id']);
    $data = array();
    if (!empty($validator->attributes)) {
      $data['attributes'] = $validator->attributes;
    }

    if ($id == 0) {
      // not exists
      // create form post entry
      $data['wf_formconfig_id'] = $wfc->getId();
      $data['wf_formentry_id'] = $entry['id'];
      $data['created_tms'] = $now->format(WFEnv::getDateTimeFormat());
      $data['modified_tms'] = $now->format(WFEnv::getDateTimeFormat());

      $postEntry = WFDbManager::getInstance()->insert(0, 'wf_formpost', $data, $wfc->getModuleId());
      // set updated values of entry
      $entry['attributes'] = $postEntry['attributes'];
      $entry['created_tms'] = $postEntry['created_tms'];
      $entry['modified_tms'] = $postEntry['modified_tms'];
    } else {
      $data['modified_tms'] = $now->format(WFEnv::getDateTimeFormat());

      $postEntry = WFDbManager::getInstance()->update(0, 'wf_formpost', $id, $data, $wfc->getModuleId());
      // set updated values of entry
      $entry['attributes'] = $postEntry['attributes'];
      $entry['modified_tms'] = $postEntry['modified_tms'];
    }
  }

 /**
  * Delete entry - action
  * @param Request $request
  * @param WFormConfig $wfc
  * @param integer $id the identifier of the entry to delete
  * @return array|WFErrorMessage
  */
  public function del(Request $request, WFormConfig &$wfc, $id) {
    return $this->_actionsMgr->del($request, $wfc, $id);
  }

  /**
   * Get addon document file
   * @param integer $productTypeId
   * @param integer $subProductTypeId
   * @return string or null
   */
  private function getDocumentFile($productTypeId, $subProductTypeId) {
    $documentFile = null;

    $mgr = $this->_actionsMgr->getManager($productTypeId);
    if ($mgr) {
      $documentFile = $mgr->getJsonDocumentFile($subProductTypeId);
    }

    return $documentFile;
  }

 /**
  * Called each time on add/update action succeeded
  * @param Request $request
  * @param WFormConfig $wfc
  * @param array $entry a given entry
  * @param array $extraData hold extra data
  */
  public function onAddOrUpdateSuccess(
    Request $request, WFormConfig &$wfc, array $entry, array $extraData)
  {
    $entryId = intval($request->request->get('entry_id', '0'));

    if ($wfc->getName() == 'form-config') {
      $productTypeId = $entry['wf_producttype_id'];
    } else {
      $productTypeId = $wfc->getProductTypeId();
    }

    $topProductTypeId = WFProductType::getTopProductTypeId($productTypeId);
    $documentFile = $this->getDocumentFile($topProductTypeId, $productTypeId);

    if ($wfc->getName() == 'form-config')  {
      $formName = $entry['name'];
      $formConfig =
        WFCoreService::getInstance()
        ->getFormConfigMgr()->findOneByName($formName);
      if (!empty($documentFile)
        && $productTypeId !=  WFProductType::WF_CUSTOM_ID)  {
        if ($entryId == 0) { // form config add
          WFCoreService::getInstance()->loadFormConfigs(
            WFModule::WF_CUSTOM_MODULE_NAME,
            $documentFile,
            true,
            $formName);
        }
      } else {
        if ($entryId == 0) { // form config add
          // set form option group
          $optGrp =
            WFCoreService::getInstance()->getOptionMgr()
            ->getOrCreate($formConfig->getName());
          $formConfig->setOptionGroup($optGrp);
          // save modifications on formConfig
          WFDbManager::getInstance()->save($formConfig);
        }
      }
      // create first formstep
      // TODO(lybaba) CHECKME
      /*if ($entryId == 0) { // form config add
        WFCoreService::getInstance()->createFirstFormStep($formConfig);
      }*/
    }
  }

 /**
  * Publish form
  * @param WFormConfig $wfc a custom form config
  * @return boolean
  */
  public function publish(WFormConfig &$wfc)
  {
    $productTypeId = $wfc->getTopProductTypeId();

    WFCoreService::getInstance()->doPublish($wfc);

    $mgr = $this->_actionsMgr->getManager($productTypeId);
    if ($mgr) {
      $mgr->updateSchema();
    }
  }

  /**
   * Load addons form configs
   */
  public function loadFormConfigs() {
    $this->_actionsMgr->getQuizMgr()->loadValidatorFormConfigs();
    $this->_actionsMgr->getContactMgr()->loadValidatorFormConfigs();
  }

  /**
   * Search entries
   * When $countRows = True ==> return number of rows found
   * @param $request Request
   * @param WFormConfig $wfc
   * @param boolean $countRows
   * @param integer $start
   * @param integer $limit
   * @param string $orderBy
   * @param string $orderByDirection
   * @param array $queryVars
   * @param integer $categoryId
   * @return array of entries or number of rows depending on flag $countRows
   */
  public function search(
    Request $request,
    WFormConfig &$wfc,
    $countRows,
    $start, 
    $limit, 
    $orderBy,
    $orderByDirection,
    &$queryVars,
    $categoryId)
  {
    return
      $this->_actionsMgr->search(
        $request,
        $wfc,
        $countRows,
        $start, 
        $limit, 
        $orderBy,
        $orderByDirection,
        $queryVars,
        $categoryId
      );
  }

  /**
   * Find entry by its identifier - action
   * @param WFormConfig $wfc
   * @param integer $id identifier of the table entry
   * @return array|WFErrorMessage
   */
  public function findById(WFormConfig &$wfc, $id)
  {
    return $this->_actionsMgr->findById($wfc, $id);
  }

  /**
   * Update addons database schemas.
   */
  public function updateSchema()
  {
    $this->loadFormConfigs();
  }

  /**
   * Drop addons database schemas
   */
  public function dropSchema()
  {
    foreach ($this->getActionsMgr()->getManagers() as $mgr) {
      $mgr->dropSchema();
    }
  }
}
/* EOF */
