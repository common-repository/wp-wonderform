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
abstract class WFAbstractActionsManager
{
  /**
   * @var array the managers
   */
  private $_mgrs;


  /**
   * Constructor
   */
  public function __construct()
  {
    $this->_mgrs = array();
    $this->_mgrs[WFProductType::WF_QUIZ_ID] = new WFQuizManager();
    $this->_mgrs[WFProductType::WF_CONTACT_ID] = new WFContactManager();
  }

  /**
   * Get all managers
   * @return $_mgrs
   */
  public function getManagers() {
    return $this->_mgrs;
  }

  /**
   * Register a new manager
   * @param productTypeId the product type identifier
   * @param mgr the new manager to register
   */
  public function registerManager($productTypeId, WFAddonManager $mgr) {
    $this->_mgrs[$productTypeId] = $mgr;
  }

  /**
   * Get a registered manager
   * @param productTypeId the product type identifier
   * @return the manager if found else null
   */
  public function getManager($productTypeId) {
    if (isset($this->_mgrs[$productTypeId])) {
      return $this->_mgrs[$productTypeId];
    } else {
      return null;
    }
  }

  /**
   * Get quiz manager
   * @return WFQuizManager
   */
  public function getQuizMgr() {
    return $this->getManager(WFProductType::WF_QUIZ_ID);
  }

  /**
   * Get contact manager
   * @return WFContactManager
   */
  public function getContactMgr() {
    return $this->getManager(WFProductType::WF_CONTACT_ID);
  }

 /**
  * Add/update entry
  * @param Request $request
  * @param WFormConfig $wfc
  * @param WFormPostValidator $validator
  * @param integer $entryId the entry identifier in case of update
  * @return array the entry added or updated
  */
  abstract public function addOrUpdate(
    Request $request,
    WFormConfig &$wfc,
    WFormPostValidator &$validator,
    $entryId);

 /**
  * Delete entry - action
  * @param Request $request
  * @param WFormConfig $wfc
  * @param integer $id the identifier of the entry to delete
  * @return array|WFErrorMessage
  */
  abstract public function del(Request $request, WFormConfig &$wfc, $id);

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
  abstract public function search(
    Request $request,
    WFormConfig &$wfc,
    $countRows,
    $start, 
    $limit, 
    $orderBy,
    $orderByDirection,
    &$queryVars,
    $categoryId);

  /**
   * Find entry by its identifier - action
   * @param WFormConfig $wfc
   * @param integer $id identifier of the table entry
   * @return array|WFErrorMessage
   */
  abstract public function findById(WFormConfig &$wfc, $id);

 /**
  * Called each time on add/update action succeeded
  * @param Request $request
  * @param WFormConfig $wfc
  * @param array $entry a given entry
  * @param array $extraData hold extra data
  */
  abstract public function onAddOrUpdateSuccess(
    Request $request, WFormConfig &$wfc, array $entry, array $extraData);

  /**
   * Execute form action
   * @param Request $request
   * @param WFormConfig $wfc
   * @param WFormAction $action
   * @param $entry
   */
  abstract public function executeAction(
    Request $request, WFormConfig &$wfc, WFormAction $action, $entry);

  /**
   * Execute form notify action
   * @param Request $request
   * @param WFormConfig $wfc
   * @param WFormAction $action
   * @param $entry
   * @param $mailBodyTemplate
   */
  abstract public function executeNotifyAction(
    Request $request,
    WFormConfig &$wfc,
    WFormAction $action,
    $entry,
    $mailBodyTemplate = null);
}
/* EOF */
