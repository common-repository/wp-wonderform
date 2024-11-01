<?php

/*
* This file is part of the WonderForm package.
*
* (c) Wonderform <contact@wonderform.net>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
 */

namespace WF\Lib\Core;

require_once __DIR__.'/WFEnv.php';
require_once __DIR__.'/WFDbManager.php';
require_once __DIR__.'/WFDataTypes.php';
require_once __DIR__.'/WFieldConfig.php';
require_once __DIR__.'/WFieldConfigManager.php';
require_once __DIR__.'/WFormConfig.php';
require_once __DIR__.'/WFormAction.php';
require_once __DIR__.'/WFormStep.php';
require_once __DIR__.'/WFOption.php';
require_once __DIR__.'/WFOptionEntry.php';
require_once __DIR__.'/WFCategoryEntry.php';
require_once __DIR__.'/WFAddonEntry.php';
require_once __DIR__.'/WFormConfigManager.php';
require_once __DIR__.'/WFormActionManager.php';
require_once __DIR__.'/WFormStatsManager.php';
require_once __DIR__.'/WFOptionManager.php';
require_once __DIR__.'/WFOptionEntryManager.php';
require_once __DIR__.'/WFSettingManager.php';
require_once __DIR__.'/WFSettingParams.php';
require_once __DIR__.'/WFCategoryEntryManager.php';
require_once __DIR__.'/WFUser.php';
require_once __DIR__.'/WFStr.php';

use Doctrine\ORM\EntityManager;
use Doctrine\DBAL\Schema\Schema;
use Doctrine\DBAL\Schema\Comparator;

/**
 * @author Wonderform <contact@wonderform.net>
 */
class WFCoreService
{
  /**
   * @var WFCoreService The single instance of the class
   */
  private static $_sInstance = null;

  /**
   * @var WFormConfigManager
   */
  private $_formConfigMgr;

  /**
   * @var WFieldConfigManager
   */
  private $_fieldConfigMgr;

  /**
   * @var WFormActionManager
   */
  private $_formActionMgr;

  /**
   * @var WFormStatsManager
   */
  private $_formStatsMgr;

  /**
   * @var WFOptionEntryManager
   */
  private $_optionEntryMgr;

  /**
   * @var WFOptionManager
   */
  private $_optionMgr;

  /**
   * @var WFCategoryEntryManager
   */
  private $_categoryEntryMgr;

  /**
   * Main WFCoreService Instance
   *
   * Ensures only one instance of WFCoreService is loaded or can be 
   * loaded.
   *
   * @static
   * @return WFCoreService - Main instance
   */
  public static function getInstance() {
    if (is_null(self::$_sInstance)) {
      self::$_sInstance = new self();
    }
    return self::$_sInstance;
  }

  /**
   * Constructor
   */
  private function __construct()
  {
    $this->_formConfigMgr = new WFormConfigManager();
    $this->_fieldConfigMgr = new WFieldConfigManager();
    $this->_formActionMgr = new WFormActionManager();
    $this->_formStatsMgr = new WFormStatsManager();
    $this->_optionEntryMgr = new WFOptionEntryManager();
    $this->_optionMgr = new WFOptionManager();
    $this->_categoryEntryMgr = new WFCategoryEntryManager();
  }

  /**
   * Build addon form name
   * @param string $parentFormName the form config parent name
   * @param string $originalFormName the form original name
   * @return string
   */
  public function buildAddonFormName(
    $parentFormName, $originalFormName)
  {
    return $this->_formConfigMgr
      ->buildAddonFormName($parentFormName, $originalFormName);
  }

  /**
   * Load form configs
   * @param WFormConfig $wfc a given form config
   */
  public function createFirstFormStep($formConfig) {
    $formStep = new WFormStep($formConfig, 1, 'step1');
    WFDbManager::getInstance()->save($formStep);
    return $formStep;
  }

  /**
   * Load form configs
   * @param $moduleName
   * @param $document
   * @param string $formName the form config name
   */
  public function loadFormConfigs(
    $moduleName,
    $document,
    $isAddon = false,
    $formName = "") {
    // get top form config and set its parent format
    $wfc = null;
    if (!empty($formName)) {
      $wfc =
        WFCoreService::getInstance()
        ->getFormConfigMgr()->findOneByName($formName);
    }

    $module =
      WFDbManager::getInstance()->findModuleByName($moduleName);

    $docJson = file_get_contents($document);
    $doc = json_decode($docJson, true);

    $forms = $doc['forms'];
    $nbForms = count($forms);
    $formNamesArray = array();

    for ($i = 0; $i < $nbForms; $i++) {
      $form = $forms[$i];
      // map fields by name
      $fields = array();
      if (isset($form['fields'])) {
        foreach ($form['fields'] as $fld) {
          $fields[$fld['name']] = $fld;
        } 
      }

      // get form required attributes
      if (!is_null($wfc)) {
        if ($i == 0) {
          $name = $wfc->getName();
          $formNamesArray[$form['name']] = $name;
          $title = $wfc->getTitle();
        } else {
          $name =
            $this->buildAddonFormName(
              $wfc->getName(), $form['name']);
          $formNamesArray[$form['name']] = $name;
          // set form title
          $title = $wfc->getTitle().' - '. $form['title'];
        }
      } else {
        $name = $form['name'];
        $title = $form['title'];
      }

      $entriesTable = $form['entries_table'];

      // get form config
      if ($i == 0 && !is_null($wfc)) {
        $formConfig = $wfc;
      } else {
        $formConfig =
          WFCoreService::getInstance()
          ->getFormConfigMgr()->findOneByName($name);
      }

      if (is_null($formConfig)) { // create form config if not exists
        $formConfig = new WFormConfig($name, $module);
        WFDbManager::getInstance()->add($formConfig);
      } else if (!empty($fields)) {
        WFDbManager::getInstance()
          ->removeObsoleteFields($moduleName, $formConfig->getId(), $fields);
      }

      // set form config properties

      $formConfig->setEntriesTable($entriesTable);
      $formConfig->setTitle($title);

      if (array_key_exists('is_addon', $form)) {
        $isAddon = $form['is_addon'];
      }
      $formConfig->setIsAddon($isAddon);

      if (array_key_exists('published', $form)) {
        $formConfig->setPublished($form['published']);
      } else if ($isAddon) {
        $formConfig->setPublished(false);
      }

      if (array_key_exists('wf_producttype_name', $form)) {
        $productTypeName = $form['wf_producttype_name'];
        $productType =
          WFDbManager::getInstance()->findProductTypeByName(
            $productTypeName);
        if (!is_null($productType)) {
          $formConfig->setProductType($productType);
        } else {
          echo 'Couldnt find producttype with name='.$productTypeName;
        }
      }

      if (array_key_exists('description', $form)) {
        $formConfig->setDescription($form['description']);
      }

      if (array_key_exists('public_search_enabled', $form)) {
        $formConfig->setPublicSearchEnabled($form['public_search_enabled']);
      }

      if (array_key_exists('front_publish_enabled', $form)) {
        $formConfig->setFrontPublishEnabled($form['front_publish_enabled']);
      }

      if (array_key_exists('create_table', $form)) {
        $formConfig->setCreateTable($form['create_table']);
      }

      if (array_key_exists('create_entries', $form)) {
        $formConfig->setCreateEntries($form['create_entries']);
      }

      if (array_key_exists('delete_entries', $form)) {
        $formConfig->setDeleteEntries($form['delete_entries']);
      }

      if (array_key_exists('search_entries', $form)) {
        $formConfig->setSearchEntries($form['search_entries']);
      }

      if (array_key_exists('single_content_tpl', $form)) {
        $formConfig->setSingleContentTpl($form['single_content_tpl']);
      }

      if (array_key_exists('archive_content_tpl', $form)) {
        $formConfig->setArchiveContentTpl($form['archive_content_tpl']);
      }

      if (array_key_exists('attributes', $form)) {
        $formConfig->setAttributes(json_encode($form['attributes']));
      }

      // flush data before adding fields
      // is needed for ref formconfig fields to work properly
      WFDbManager::getInstance()->flushData();

      // add form fields
      foreach ($fields as $attrs) {
        $field =
          WFCoreService::getInstance()
          ->getFieldConfigMgr()->findByName($formConfig, $attrs['name']);
        if (is_null($field)) {
          $field = new WFieldConfig();
          WFDbManager::getInstance()->add($field);
        }

        $field->set($attrs);
        $field->setFormConfig($formConfig);
        $field->setIsAddon($isAddon);
        if (array_key_exists('ref_form_config', $attrs)) {
          $refName = $attrs['ref_form_config'];
          if (array_key_exists($refName, $formNamesArray)) {
            $refName = $formNamesArray[$refName];
          }
          $refFormConfig =
            WFCoreService::getInstance()
            ->getFormConfigMgr()->findOneByName($refName);
          if (!is_null($refFormConfig)) {
            $field->setRefFormConfig($refFormConfig);
          }
        }
      }

      // flush data before passing to next formconfig
      // is needed for ref formconfig fields to work properly
      WFDbManager::getInstance()->flushData();
      if ($moduleName == WFModule::WF_CUSTOM_MODULE_NAME) {
        $this->createOptionGroups($formConfig);
        // save modifications on formConfig
        WFDbManager::getInstance()->save($formConfig);
      }
    }
  }

  /**
   * Create option groups
   * @param WFormConfig $wfc
   * @return WFOption
   */
  public function createOptionGroups(WFormConfig &$wfc) {
    $isPrivate = true;

    $productTypeId = $wfc->getProductTypeId();

    $optGrp =
      WFCoreService::getInstance()->getOptionMgr()
      ->getOrCreate($wfc->getName(), null, true);

    // set option group
    $wfc->setOptionGroup($optGrp);

    // set category group
    if ($productTypeId == WFProductType::WF_CONTENT_ITEM_ID) {
      $catGrpName = $wfc->getName().'-cat-grp';
      $catGrp =
        WFCoreService::getInstance()->getOptionMgr()
        ->getOrCreate($catGrpName, null, false);
      $wfc->setCategoryGroup($catGrp);
    }
  }

  /**
   * Get form config manager
   * @return WFormConfigManager
   */
  public function getFormConfigMgr() {
    return $this->_formConfigMgr;
  }

  /**
   * Get field config manager
   * @return WFieldConfigManager
   */
  public function getFieldConfigMgr() {
    return $this->_fieldConfigMgr;
  }

  /**
   * Get form action manager
   * @return WFormActionManager
   */
  public function getFormActionMgr() {
    return $this->_formActionMgr;
  }

  /**
   * Get form stats manager
   * @return WFormStatsManager
   */
  public function getFormStatsMgr() {
    return $this->_formStatsMgr;
  }

  /**
   * Get option entry manager
   * @return WFOptionEntryManager
   */
  public function getOptionEntryMgr() {
    return $this->_optionEntryMgr;
  }

  /**
   * Get option manager
   * @return WFOptionManager
   */
  public function getOptionMgr() {
    return $this->_optionMgr;
  }

  /**
   * Get category entry manager
   * @return WFCategoryEntryManager
   */
  public function getCategoryEntryMgr() {
    return $this->_categoryEntryMgr;
  }

 /**
  * Add/update category entry
  * @param WFormConfig $wfc
  * @param array $data hold data that will be inserted in database
  * @param array $extraData hold extra data
  * @param array $messages hold error messages
  * @param integer $entryId the entry identifier in case of update
  * @return array the entry added or updated
  */
  public function addOrUpdateCategoryEntry(
    WFormConfig &$wfc,
    array &$data,
    array $extraData,
    array &$messages,
    $entryId)
  {
    $entry = $this->linkEntryToCategory(
      $wfc,
      $data,
      $messages,
      $entryId);

    $option =
      WFDbManager::getInstance()->
      findById(
        $wfc->getId(),
        'wf_option',
        $data['category_id'],
        $wfc->getModuleId()
      );
    while (!empty($option)) {
      $groupId = $option['wf_optiongroup_id'];
      if (!empty($groupId)) {
        $tmp =
          array(
            'entry_id' => $data['entry_id'],
            'wf_formconfig_id' => $data['wf_formconfig_id'],
            'category_id' => $groupId);
        $e = $this->linkEntryToCategory(
          $wfc,
          $tmp,
          $messages);
      }

      $option =
        WFDbManager::getInstance()->
        findById(
          $wfc->getId(),
          'wf_option',
          $groupId,
          $wfc->getModuleId()
        );
    }

    return $entry;
  }

 /**
  * link entry to category
  * @param WFormConfig $wfc
  * @param array $data hold data that will be inserted in database
  * @param array $messages hold error messages
  * @param integer $entryId the entry identifier in case of update
  * @return array the entry added or updated
  */
  private function linkEntryToCategory(
    WFormConfig &$wfc,
    array &$data,
    array &$messages,
    $entryId = 0)
  {
    $queryVars = array();
    $queryVars['entry_id'] = array(intval($data['entry_id']), '=');
    $queryVars['category_id'] = array(intval($data['category_id']), '=');
    $queryVars['wf_formconfig_id'] = array(intval($data['wf_formconfig_id']), '=');

    $count = WFDbManager::getInstance()->search(
      $wfc->getEntriesTable(),
      $wfc->getModule()->getId(),
      $wfc->getId(),
      $wfc->getName(),
      True,
      0,
      1,
      null,
      null,
      $queryVars,
      false
    );

    if ($count) {
      $messages[] = 'An entry with entry_id="'.$data['entry_id'].
        '" and category_id="'.$data['category_id'].
        '" and wf_formconfig_id="'.$data['wf_formconfig_id'].
        '" already exists';
      return [];
    } else {
      return WFDbManager::getInstance()->addOrUpdate(
        $wfc->getId(),
        $wfc->getEntriesTable(),
        $data,
        $entryId,
        $wfc->getModuleId());
    }
  }

 /**
  * Publish form
  * @param string $formName a custom form config name
  * @return boolean
  */
  public function publish($formName)
  {
    $wfc = $this->getFormConfigMgr()->findOneByName($formName);

    if (!is_null($wfc)) {
      return $this->doPublish($wfc);
    } else {
      return false;
    }
  }

 /**
  * Do Publish form
  * @param WFormConfig $wfc a custom form config
   * @param array tableNames
  * @return boolean
  */
  public function doPublish(WFormConfig &$wfc)
  {
    if ($wfc->getCreateTable()
      && ($wfc->getProductTypeId() == WFProductType::WF_CUSTOM_ID
      || $wfc->getProductTypeId() == WFProductType::WF_CUSTOM_CUSTOM_ID)) {
      $success = $this->createCustomFormTable($wfc);
      if ($success) {
        $wfc->setPublished(true);
        WFDbManager::getInstance()->save($wfc);
      }
    } else {
      $wfc->setPublished(true);
      WFDbManager::getInstance()->save($wfc);
    }

    return $wfc->getPublished();
  }


  /**
   * create/update a custom form config table
   * @param WFormConfig $wfc a custom form config
   * @return boolean true when success
   */
  public function createCustomFormTable(WFormConfig &$wfc) {
    try {
      $tableNames = array();
      $tableNames[$wfc->getEntriesTable()] = $wfc->getEntriesTable();
      // get form ref tables
      $refTables = array();
      foreach ($wfc->getFieldsAsArray() as $fld) {
        if ($fld->getCreateColumn()) {
          if ($fld->isForeignField()) {
            $refTables[$fld->getRefFormConfig()->getEntriesTable()] =
              $fld->getRefFormConfig()->getEntriesTable();
            // define foreign table if not exists.
            if (
              !WFDbManager::getInstance()->tableExist(
                $fld->getRefFormConfig()->getEntriesTable())) {
              $schema = new Schema;
              $reftable =
                $schema->createTable(
                  $fld->getRefFormConfig()->getEntriesTable());
              // we define primary key as autoincrement
              $id = $reftable->addColumn('id', 'integer');
              $id->setAutoincrement(true);
              $reftable->setPrimaryKey(array('id'));

              $platform =
                WFDbManager::getInstance()->getEntityManager()->
                getConnection()->getDatabasePlatform();

              $queries = $schema->toSql($platform);
              foreach ($queries as $query) {
                WFDbManager::getInstance()->getEntityManager()
                  ->getConnection()->executeQuery($query);
              }
            }
          }
        }
      }

      // get fromSchema (old schema)
      $fromSchema = WFDbManager::getInstance()
        ->getEntityManager()->getConnection()
        ->getSchemaManager()->createSchema();


      foreach ($fromSchema->getTables() as $table) {
        if (
          !isset($tableNames[$table->getName()])
          && !isset($refTables[$table->getName()])) {
          $fromSchema->dropTable($table->getName());
        }
      }

      // populate toSchema (new schema)
      $toSchema = new Schema;
      $newtable = $toSchema->createTable($wfc->getEntriesTable());
      // we define primary key as autoincrement
      $id = $newtable->addColumn('id', 'integer');
      $id->setAutoincrement(true);
      $newtable->setPrimaryKey(array('id'));
      // add columns
      foreach ($wfc->getFieldsAsArray() as $fld) {
        if ($fld->getCreateColumn()) {
          if ($fld->isForeignField()) {
            $ref_table =
              $fromSchema->getTable(
                $fld->getRefFormConfig()->getEntriesTable());
            $newtable->addColumn(
              $fld->getName(),
              'integer',
              array('notnull' => $fld->getRequired()));
            $newtable->addForeignKeyConstraint(
              $ref_table, 
              array($fld->getName()), 
              array('id'),
              array("onUpdate" => "CASCADE", "onDelete" => "CASCADE"));
          } else if (
            $fld->getType() == WFDataTypes::WF_SELECT_SINGLE
            || $fld->getType() == WFDataTypes::WF_SELECT_MULTIPLE) {
            $newtable->addColumn(
              $fld->getName(),
              'text',
              array(
                'notnull' => $fld->getRequired(),
                'default' => $fld->getDefaultValue()));
          } else if ($fld->getType() == WFDataTypes::WF_DECIMAL) {
            $newtable->addColumn(
              $fld->getName(),
              $fld->getDbType(),
              array(
                'length' => $fld->getLen(),
                'default' => $fld->getDefaultValue(),
                'scale' => $fld->getPrecision(),
                'notnull' => $fld->getRequired()));
          } else {
            $newtable->addColumn(
              $fld->getName(),
              $fld->getDbType(),
              array(
                'length' => $fld->getLen(),
                'default' => $fld->getDefaultValue(),
                'notnull' => $fld->getRequired()));
            if ($fld->getUniq()) {
              $newtable->addUniqueIndex(array($fld->getName()));
            } else if ($fld->getIndexable()) {
              $newtable->addIndex(array($fld->getName()));
            }
          }
        }
      }

      // get custom schema diff
      $comparator = new Comparator();
      $schemaDiff = $comparator->compare($fromSchema, $toSchema);

      $sqlArray = $schemaDiff->toSaveSql(
        WFDbManager::getInstance()->getEntityManager()
        ->getConnection()->getDatabasePlatform());

      //print_r($sqlArray);
      // execute query. update table description.
      $nbQueries = count($sqlArray);
      for ($i = 0; $i < $nbQueries; $i++) {
        WFDbManager::getInstance()->getEntityManager()
          ->getConnection()->executeQuery($sqlArray[$i]);
      }

      return true;
    }
    catch(Exception $err)
    {
      return false;
    }
  }

  /**
   * Load core module settings
   */
  private function loadSettings()  {
    $count = 0;
    foreach (WFSettingParams::getParamsNames() as $k => $v) {
      $isParamExists =  WFDbManager::getInstance()->isParamNameExists($k);
      if (!$isParamExists) { // not exists ==> create it
        $setting = new WFSetting($k, $v, WFProductType::WF_CORE_ID);
        WFDbManager::getInstance()->add($setting);
        $count++;
      }
    }
    if ($count) {
      WFDbManager::getInstance()->flushData();
    }
  }

  /**
   * Update module database schemas.
   */
  public function updateSchema()
  {
    $this->getFormConfigMgr()->updateSchema();
    $this->loadFormConfigs(
      WFModule::WF_WFC_MODULE_NAME,
      __DIR__.'/../../form/core/document.json');
    $this->loadSettings();
  }

  /**
   * Drop this module database schema
   */
  public function dropSchema()
  {
    WFDbManager::getInstance()->delFormsByModuleId(WFModule::WF_WFC_MODULE_ID);
    $this->getFormConfigMgr()->dropSchema();
  }
}
/* EOF */
