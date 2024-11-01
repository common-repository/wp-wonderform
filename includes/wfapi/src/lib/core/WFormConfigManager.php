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

require_once(__DIR__.'/WFDbManager.php');
require_once(__DIR__.'/WFormActionType.php');
require_once(__DIR__.'/WFProductType.php');
require_once(__DIR__.'/WFLicense.php');
require_once(__DIR__.'/WFFrontMessage.php');

use Doctrine\ORM\Tools\SchemaTool;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityRepository;
use Doctrine\DBAL\Schema\Schema;
use Doctrine\DBAL\Schema\Comparator;

/**
 * Provides basic utility to manipulate a wonder form config.
 *
 * @author Wonderform <contact@wonderform.net>
 */
class WFormConfigManager extends EntityRepository
{
  /**
   * Define module version
   */
  const MODULE_VERSION = '1.0.0';

  /**
   * Define module name
   */
  const MODULE_NAME = WFModule::WF_WFC_MODULE_NAME;

  /**
   * Define module name
   */
  const MODULE_ID = WFModule::WF_WFC_MODULE_ID;

  /**
   * holds wf core model classes
   * @var array
   */
  private $modelClasses;

  /**
   * holds wf core model tables
   * @var array
   */
  private $modelTables;

  /**
   * Get current module version
   */
  public static function getModuleVersion() {
    return self::MODULE_VERSION;
  }

  /**
   * Get the module name
   */
  public static function getModuleName() {
    return self::MODULE_NAME;
  }

  /**
   * Constructor
   */
  public function __construct()
  {
    global $wfem;
    parent::__construct(
      $wfem,
      $wfem->getClassMetadata('WF\Lib\Core\WFormConfig'));

    // set core model classes
    $this->modelClasses  = array(
      $this->_em->getClassMetadata('WF\Lib\Core\WFormConfig'),
      $this->_em->getClassMetadata('WF\Lib\Core\WFieldConfig'),
      $this->_em->getClassMetadata('WF\Lib\Core\WFormAction'),
      $this->_em->getClassMetadata('WF\Lib\Core\WFormStep'),
      $this->_em->getClassMetadata('WF\Lib\Core\WFModule'),
      $this->_em->getClassMetadata('WF\Lib\Core\WFOption'),
      $this->_em->getClassMetadata('WF\Lib\Core\WFOptionEntry'),
      $this->_em->getClassMetadata('WF\Lib\Core\WFormActionType'),
      $this->_em->getClassMetadata('WF\Lib\Core\WFProductType'),
      $this->_em->getClassMetadata('WF\Lib\Core\WFLicense'),
      $this->_em->getClassMetadata('WF\Lib\Core\WFSetting'),
      $this->_em->getClassMetadata('WF\Lib\Core\WFCategoryEntry'),
      $this->_em->getClassMetadata('WF\Lib\Core\WFAddonEntry'),
      $this->_em->getClassMetadata('WF\Lib\Core\WFormStats')
    );

    // set core model tables
    $this->modelTables  = array();
    $this->modelTables['wf_formconfig']                 = "wf_formconfig";
    $this->modelTables['wf_fieldconfig']                = "wf_fieldconfig";
    $this->modelTables['wf_formaction']                 = "wf_formaction";
    $this->modelTables['wf_formstep']                   = "wf_formstep";
    $this->modelTables['wf_module']                     = "wf_module";
    $this->modelTables['wf_formactiontype']             = "wf_formactiontype";
    $this->modelTables['wf_producttype']                = "wf_producttype";
    $this->modelTables['wf_license']                    = "wf_license";
    $this->modelTables['wf_setting']                    = "wf_setting";
    $this->modelTables['wf_option']                     = "wf_option";
    $this->modelTables['wf_optionentry']                = "wf_optionentry";
    $this->modelTables['wf_formstats']                  = "wf_formstats";
    $this->modelTables['wf_categoryentry']              = "wf_categoryentry";
    $this->modelTables['wf_addonentry']                 = "wf_addonentry";
  }

  /**
   * Get wf model classes
   * @return an array
   */
  public function getModelClasses() {
    return $this->modelClasses;
  }

  /**
   * Get wf model tables
   * @return an array
   */
  public function getModelTables() {
    return $this->modelTables;
  }


  /**
   * Find a form config by its identifier
   * @param $id integer identifier of the form config
   * @return WFormConfig or null if not found
   */
  public function findById($id)
  {
    try
    {     
      $entry = $this->find($id);
      return $entry;
      /*$dql = 'SELECT c, e FROM WF\Lib\Core\WFormConfig c LEFT JOIN WF\Lib\Core\WForm e WITH e.formConfig = c WHERE c.id = :id';
      $query = $this->_em->createQuery($dql);
      $query->setParameter('id', $id);

      return $query->getResult();*/
    }
    catch(Exception $err)
    {
      return null;
    }
  }

  /**
   * Find a form config by its name
   * @param string $formName
   * @param string moduleName
   * @param string parentName
   * @return WFormConfig or null if not found
   */
  public function findOneByName(
    $formName,
    $moduleName = null,
    $parentName = null)
  {
    try
    {     
      $args = array();
      $args['name'] = $formName;

      if (!is_null($moduleName)) {
        $module = WFDbManager::getInstance()->findModuleByName($moduleName);
        $args['module'] = $module;
      }

      if (!is_null($parentName)) {
        $parent = $this->findOneByName($parentName);
        $args['parent'] = $parent;
      }

      return $this->findOneBy($args);
    }
    catch(Exception $err)
    {
      return null;
    }
  }

  /**
   * Find all forms by module
   * @param string moduleName
   * @return WFormConfig or null if not found
   */
  public function findByModule($moduleName)
  {
    try
    {     
      $module = WFDbManager::getInstance()->findModuleByName($moduleName);
      return
        $this->findBy(
          array('module' => $module));
    }
    catch(Exception $err)
    {
      return null;
    }
  }

  /**
   * create a new form config if not exists
   * @param $wfc WFormConfig
   * @return WFormConfig
   */
  public function create(WFormConfig &$wfc) {
    try {
      if (!is_null($wfc)) {
        $this->_em->persist($wfc);
        $this->_em->flush();
        return $wfc;
      }
      return null;
    }
    catch(Exception $err)
    {
      return null;
    }
  }

  /**
   * Create new sub form config
   * @param WFormConfig $parent the parent form config
   * @param string $name the name of the sub form to create
   * @param string $entriesTable the entries table of the sub form to create
   * @param string $title the title of the sub form to create
   * @param string $productTypeId the product type the of the sub form to create
   * @return WFormConfig
   */
  public function createSubForm(
    WFormConfig &$wfc, $name, $entriesTable, $title, $productTypeId) {
    $subFormName = $this->buildAddonFormName($wfc->getName(), $name);
    $subFormTitle = $wfc->getTitle().' -  '.$title;
    $prodt = WFDbManager::getInstance()->findProductTypeById($productTypeId);
    $module =
      WFDbManager::getInstance()
      ->findModuleByName(WFModule::WF_CUSTOM_MODULE_NAME);
    if ($prodt && $module) {
      $subForm = new WFormConfig($subFormName, $module);
      $subForm->setParent($wfc);
      $subForm->setIsAddon(true);
      $subForm->setProductType($prodt);
      $subForm->setTitle($subFormTitle);
      $subForm->setEntriesTable($entriesTable);
      WFDbManager::getInstance()->save($subForm);
      // add default form actions
      $actionType =
        WFDbManager::getInstance()
        ->findFormActionTypeById(WFormActionType::WF_PUBLISH);

      $action100 = new WFormAction();
      $action100->setFormConfig($subForm);
      $action100->setFormActionType($actionType);
      $action100->setAttributes(
        json_encode(WFFrontMessage::getMessage100()->jsonSerialize()));
      $this->_em->persist($action100);

      $action200 = new WFormAction();
      $action200->setFormConfig($subForm);
      $action200->setFormActionType($actionType);
      $action200->setAttributes(
        json_encode(WFFrontMessage::getMessage200()->jsonSerialize()));
      $this->_em->persist($action200);

      $action300 = new WFormAction();
      $action300->setFormConfig($subForm);
      $action300->setFormActionType($actionType);
      $action300->setAttributes(
        json_encode(WFFrontMessage::getMessage300()->jsonSerialize()));
      $this->_em->persist($action300);

      $action800 = new WFormAction();
      $action800->setFormConfig($subForm);
      $action800->setFormActionType($actionType);
      $action800->setAttributes(
        json_encode(WFFrontMessage::getMessage800()->jsonSerialize()));
      $this->_em->persist($action800);

      $action801 = new WFormAction();
      $action801->setFormConfig($subForm);
      $action801->setFormActionType($actionType);
      $action801->setAttributes(
        json_encode(WFFrontMessage::getMessage801()->jsonSerialize()));

      $this->_em->persist($action801);

      $this->_em->flush();
    }
  }

  /**
   * Build addon form name
   * @param string $parentFormName the form config parent name
   * @param string $subFormName the sub form name
   * @return string
   */
  public function buildAddonFormName(
    $parentFormName, $subFormName)
  {
    return $parentFormName.'-'.$subFormName;
  }


  /**
   * Check if form action type exists in database
   * @param id string the form action type identifier
   * @return true if form action type exists in database
   */
  public function isFormActionTypeExists($id) {
    try
    {
      $dql = 'SELECT 1 FROM WF\Lib\Core\WFormActionType at WHERE at.id = :id';
      $query = $this->_em->createQuery($dql);
      $query->setParameter('id', $id);

      $res = $query->getResult();

      return count($res) != 0;
    }
    catch(Exception $err)
    {
      return null;
    }
  }

  /**
   * Load form action type fixtures
   */
  private function loadFormActionTypeFixtures() {
    $nb_entities = 0;

    foreach(WFormActionType::getArray() as $k => $v) {
      // create form action type entries in database
      if (!$this->isFormActionTypeExists($k)) {
        $at = new WFormActionType($k, $v);
        $this->_em->persist($at);
        $nb_entities++;
      }
    }

    // flush data - commit in database
    if ($nb_entities) {
      $this->_em->flush();
    }
  }

  /**
   * Find a field config by its name
   * @param string $formName
   * @param string $fieldName
   * @return WFieldConfig or null if not found
   */
  public function findFieldConfigByName($formName, $fieldName)
  {
    try
    {  
      $fieldConfig = null;
   
      $formConfig = $this->findOneByName($formName);

      if (!is_null($formConfig)) {
        $args = array(
          'formConfig' => $formConfig,
          'name' => $fieldName);

        $fieldConfig =
          $this->_em->getRepository('WF\Lib\Core\WFieldConfig')
          ->findOneBy($args);
      }

      return $fieldConfig;
    }
    catch(Exception $err)
    {
      return null;
    }
  }


  /**
   * Check if product type exists in database
   * @param id string the product type identifier
   * @return true if product type exists in database
   */
  public function isProductTypeExists($id) {
    try
    {
      $dql = 'SELECT 1 FROM WF\Lib\Core\WFProductType ot WHERE ot.id = :id';
      $query = $this->_em->createQuery($dql);
      $query->setParameter('id', $id);

      $res = $query->getResult();

      return count($res) != 0;
    }
    catch(Exception $err)
    {
      return null;
    }
  }

  /**
   * Load product type fixtures
   */
  private function loadProductTypeFixtures() {
    $nb_entities = 0;

    foreach(WFProductType::getArray() as $k => $v) {
      if (!$this->isProductTypeExists($v)) {
        $ot = new WFProductType($v, $k);
        $this->_em->persist($ot);
        $nb_entities++;
      }
    }

    // flush data - commit in database
    if ($nb_entities) {
      $this->_em->flush();
    }
  }

  /**
   * Load sub product type fixtures
   */
  private function loadSubProductTypeFixtures() {
    foreach(WFProductType::getSubArray() as $k => $v) {
      $subPt = WFDbManager::getInstance()->findProductTypeById($v);
      if (!$subPt) {
        $subPt = new WFProductType($v, $k);
        $ptId = WFProductType::getTopProductTypeId($v);
        $pt = WFDbManager::getInstance()->findProductTypeById($ptId);
        $subPt->setParent($pt);
        $this->_em->persist($subPt);
      } else {
        $subPt->setName($k);
      }
    }

    // flush data - commit in database
    $this->_em->flush();
  }

  /**
   * Update this module database schema and
   * load module fixtures
   *
   * @return array The sequence of SQL statements.
   */
  public function updateSchema()
  {
    try
    {
      $module = new WFModule(self::MODULE_NAME);
      $module->setVersion(self::MODULE_VERSION);

      $sql = WFDbManager::getInstance()->updateSchema(
        $this->getModelClasses(),
        $this->getModelTables(),
        $module);

      $this->loadProductTypeFixtures();

      $this->loadSubProductTypeFixtures();

      $this->loadFormActionTypeFixtures();

      return $sql;
    }
    catch(Exception $err)
    {
      return null;
    }
  }

  /**
   * Drop this module database schema
   *
   * @return array The sequence of SQL statements.
   */
  public function dropSchema()
  {
    try
    {
      $sql =
        WFDbManager::getInstance()->dropSchema(
          $this->getModelClasses(),
          $this->getModelTables());

      return $sql;
    }
    catch(Exception $err)
    {
      return null;
    }
  }
}
/* EOF */
