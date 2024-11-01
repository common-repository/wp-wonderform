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

require_once(__DIR__.'/WFModule.php');
require_once(__DIR__.'/WFProductType.php');
require_once(__DIR__.'/WFSetting.php');

use Doctrine\ORM\Tools\SchemaTool;
use Doctrine\ORM\EntityManager;
use Doctrine\DBAL\Schema\Comparator;

/**
 * Provides basic utility to handle wonderform database schemas.
 *
 * @author Wonderform <contact@wonderform.net>
 */
class WFDbManager
{
  /**
   * @var WFDbManager The single instance of the class
   */
  private static $sInstance = null;

  /**
   * @var EntityManager
   */
  private $_em;

  /**
   * @var SchemaTool
   */
  private $tool;

  /**
   * Main WFDbManager Instance
   *
   * Ensures only one instance of WFDbManager is loaded or can be loaded.
   *
   * @static
   * @return WFDbManager - Main instance
   */
  public static function getInstance() {
    if (is_null(self::$sInstance)) {
      self::$sInstance = new self();
    }
    return self::$sInstance;
  }

  /**
   * Constructor
   */
  private function __construct()
  {
    global $wfem;
    $this->_em = $wfem;

    $this->tool = new SchemaTool($this->_em);
  }

  /**
   * @return entity manager
   */
  public function getEntityManager() {
    return $this->_em;
  }

  /**
  * @param string $tableName
  *
  * @return boolean
  */
  public function tableExist($tableName)
  {
    try {
      return $this->_em->getConnection()->getSchemaManager()
      ->tablesExist([$tableName]);
    }
    catch(Exception $err)
    {
      return False;
    }
  }

  /**
   * Check if module exists in database
   * @param name string the module name
   * @return true if module exists in database
   */
  public function isModuleExists($name) {
    try
    {
      $dql = 'SELECT 1 FROM WF\Lib\Core\WFModule m WHERE m.name = :name';
      $query = $this->_em->createQuery($dql);
      $query->setParameter('name', $name);

      $res = $query->getResult();

      return count($res) != 0;
    }
    catch(Exception $err)
    {
      return null;
    }
  }

  /**
   * Find module by id
   * @param id the module identifier
   * @return WFModule or null if not found
   */
  public function findModuleById($id) {
    try
    {
      $dql = 'SELECT m FROM WF\Lib\Core\WFModule m WHERE m.id = :id';
      $query = $this->_em->createQuery($dql);
      $query->setParameter('id', $id);

      $res = $query->getResult();

      if (count($res) != 0) {
        return $res[0];
      } else {
        return null;
      }
    }
    catch(Exception $err)
    {
      return null;
    }
  }

  /**
   * Find module by name
   * @param name the module name
   * @return WFModule or null if not found
   */
  public function findModuleByName($name) {
    try
    {
      $dql = 'SELECT m FROM WF\Lib\Core\WFModule m WHERE m.name = :name';
      $query = $this->_em->createQuery($dql);
      $query->setParameter('name', $name);

      $res = $query->getResult();

      if (count($res) != 0) {
        return $res[0];
      } else {
        return null;
      }
    }
    catch(Exception $err)
    {
      return null;
    }
  }

  /**
   * Find producttype by name
   * @param name the producttype name
   * @return WFProductType or null if not found
   */
  public function findProductTypeByName($name) {
    try
    {
      $dql = 'SELECT t FROM WF\Lib\Core\WFProductType t WHERE t.name = :name';
      $query = $this->_em->createQuery($dql);
      $query->setParameter('name', $name);

      $res = $query->getResult();

      if (count($res) != 0) {
        return $res[0];
      } else {
        return null;
      }
    }
    catch(Exception $err)
    {
      return null;
    }
  }

  /**
   * Find fieldconfig by id
   * @param id the fieldconfig identifier
   * @return WFieldConfig or null if not found
   */
  public function findFieldConfigById($id) {
    try
    {
      $doc =
        $this->_em->getRepository('WF\Lib\Core\WFieldConfig')
        ->findOneBy(array('id' => $id));
      $this->_em->refresh($doc);
      return $doc;
    }
    catch(Exception $err)
    {
      return null;
    }
  }

  /**
   * Find form action type by id
   * @param id the formactiontype identifier
   * @return WFormActionType or null if not found
   */
  public function findFormActionTypeById($id) {
    try
    {
      $doc =
        $this->_em->getRepository('WF\Lib\Core\WFormActionType')
        ->findOneBy(array('id' => $id));
      return $doc;
    }
    catch(Exception $err)
    {
      return null;
    }
  }

  /**
   * Find post by id
   * @param id the post identifier
   * @return WFormPost or null if not found
   */
  public function findPostById($id) {
    try
    {
      $doc =
        $this->_em->getRepository('WF\Lib\Post\WFormPost')
        ->findOneBy(array('id' => $id));
      $this->_em->refresh($doc);
      return $doc;
    }
    catch(Exception $err)
    {
      return null;
    }
  }

  /**
   * Check if setting param name exists
   * @param name the setting name
   * @return true if exists else false
   */
  public function isParamNameExists($name) {
    try
    {
      $sth =
        $this->_em->getConnection()
        ->prepare('SELECT 1 FROM wf_setting WHERE param_name = ?');
      $sth->bindValue(1, $name);
      $sth->execute();
      $value = $sth->fetchColumn();
      return $value != 0;
    }
    catch(Exception $err)
    {
      return null;
    }
  }

  /**
   * Find producttype by id
   * @param name the producttype id
   * @return WFProductType or null if not found
   */
  public function findProductTypeById($id) {
    try
    {
      $dql = 'SELECT t FROM WF\Lib\Core\WFProductType t WHERE t.id = :id';
      $query = $this->_em->createQuery($dql);
      $query->setParameter('id', $id);

      $res = $query->getResult();

      if (count($res) != 0) {
        return $res[0];
      } else {
        return null;
      }
    }
    catch(Exception $err)
    {
      return null;
    }
  }

  /**
   * Create or update the given module in database
   * WFModule $module
   */
  private function createOrUpdateModule(WFModule $module) {
    // create/update the module entry in database
    $old_module = $this->findModuleByName($module->getName());

    if (is_null($old_module)) {
      $this->_em->persist($module);
    } else {
      $old_module->setVersion($module->getVersion());
    }

    $this->_em->flush();
  }

  /**
   * Insert
   * @param integer $formId
   * @param string $tableName
   * @param array $data
   * @param integer $moduleId identifier of the module
   * @return array
   */
  public function insert(
    $formId, $tableName, array $data, $moduleId = WFModule::WF_CUSTOM_MODULE_ID) {
    $this->_em->getConnection()->insert($tableName, $data);

    $id = $this->_em->getConnection()->lastInsertId();
    return $this->findById($formId, $tableName, $id, $moduleId);
  }

  /**
   * Update
   * @param integer $formId
   * @param string $tableName
   * @param integer $id
   * @param array $data
   * @param integer $moduleId identifier of the module
   * @return array
   */
  public function update(
    $formId, $tableName, $id, array $data, $moduleId = WFModule::WF_CUSTOM_MODULE_ID) {
    if (!empty($data)) {
      $this->_em->getConnection()->update($tableName, $data, array('id' => $id));
    }
    return $this->findById($formId, $tableName, $id, $moduleId);
  }

  /**
   * Add or Update
   * @param integer $formId
   * @param string $tableName
   * @param array $data
   * @param integer $id
   * @param integer $moduleId identifier of the module
   * @return array
   */
  public function addOrUpdate(
    $formId, $tableName, array $data, $id = 0, $moduleId = WFModule::WF_CUSTOM_MODULE_ID) {
    if ($id == 0) {
      return $this->insert($formId, $tableName, $data, $moduleId);
    } else {
      return $this->update($formId, $tableName, $id, $data, $moduleId);
    }
  }

  /**
   * Delete
   * @param integer $formId
   * @param string $tableName
   * @param integer $id
   * @param integer $moduleId identifier of the module
   * @return array
   */
  public function del(
    $formId, $tableName, $id, $moduleId = WFModule::WF_CUSTOM_MODULE_ID) {
    $entry = $this->findById($formId, $tableName, $id, $moduleId);
    if (!empty($entry)) {
      if ($tableName == 'wf_fieldconfig') {
        $isAddon = 0;
        if (isset($entry['is_addon'])) {
          $isAddon = intval($entry['is_addon']);
        }

        if (!$isAddon) {
          $this->_em->getConnection()->delete(
            $tableName, array('id' => $id));
        } else { // should not delete addon fields
          $entry = array();
        }
      } else {
        $this->_em->getConnection()->delete(
          $tableName, array('id' => $id));
      }
      $this->_em->getConnection()->delete(
        'wf_optionentry',
        array('wf_formconfig_id' => $formId, 'entry_id' => $id));
    }

    return $entry;
  }

  /**
   * Delete  obsolete form fields
   * @param $moduleName
   * @param integer formId the form config identifier
   * @param array $fields the form config fields
   */
  public function removeObsoleteFields($moduleName, $formId, &$fields) {
    if ($moduleName == WFModule::WF_WFC_MODULE_NAME) {
      $sth = $this->_em->getConnection()
        ->prepare('SELECT id, name FROM wf_fieldconfig  WHERE wf_formconfig_id = ?');
    } else {
      $sth = $this->_em->getConnection()
        ->prepare('SELECT id, name FROM wf_fieldconfig  WHERE wf_formconfig_id = ? AND is_addon = 1');
    }

    $sth->bindValue(1, $formId);
    $sth->execute();
    $entries = $sth->fetchAll();
    foreach ($entries as $entry) {
      if (!array_key_exists($entry['name'], $fields)) {
        $this->_em->getConnection()->delete(
          'wf_fieldconfig', array('id' => $entry['id']));
      }
    }
  }

  /**
   * Delete posts by form config id
   * @param integer $formConfigId
   */
  public function delPostsByFormConfigId($formConfigId) {
    $this->_em->getConnection()->delete(
        'wf_formpost', array('wf_formconfig_id' => $formConfigId));
  }

  /**
   * Delete forms by module id
   * @param integer $moduleId
   */
  public function delFormsByModuleId($moduleId) {
    $this->_em->getConnection()->delete(
        'wf_formconfig', array('wf_module_id' => $moduleId));
  }

  /**
   * Check if a given field value exists.
   * @param string $tableName
   * @param string $fieldName
   * @param string $fieldValue
   * @return boolean
   */
  public function checkIfValueExists($tableName, $fieldName, $fieldValue)
  {
    $sth =
      $this->_em->getConnection()
      ->prepare('SELECT COUNT(id) as total FROM '. $tableName. ' WHERE '. $fieldName. ' = ?');
    $sth->bindValue(1, $fieldValue);
    $sth->execute();
    $value = $sth->fetchColumn();
    return $value != 0;
  }

  /**
   * Check if field name value exists.
   * @param integer formConfigId
   * @param string $fieldName
   * @return boolean
   */
  public function checkIfFieldNameExists($formConfigId, $fieldName)
  {
    $sth =
      $this->_em->getConnection()
      ->prepare('SELECT COUNT(id) as total FROM wf_fieldconfig WHERE wf_formconfig_id = ? AND name = ?');
    $sth->bindValue(1, $formConfigId);
    $sth->bindValue(2, $fieldName);
    $sth->execute();
    $value = $sth->fetchColumn();
    return $value != 0;
  }

  /**
   * Get form post id
   * @param integer formConfigId
   * @param integer formEntryId
   * @return boolean
   */
  public function getPostId($formConfigId, $formEntryId)
  {
    $sth =
      $this->_em->getConnection()
      ->prepare('SELECT id FROM wf_formpost WHERE wf_formconfig_id = ? AND wf_formentry_id = ?');
    $sth->bindValue(1, $formConfigId);
    $sth->bindValue(2, $formEntryId);
    $sth->execute();
    $id = $sth->fetchColumn();
    return $id;
  }

  /**
   * Get module id
   * @param string moduleName
   * @return boolean
   */
  public function getModuleId($moduleName)
  {
    $sth =
      $this->_em->getConnection()
      ->prepare('SELECT id FROM wf_module WHERE name = ?');
    $sth->bindValue(1, $moduleName);
    $sth->execute();
    $id = $sth->fetchColumn();
    return $id;
  }

  /**
   * Find a table entry by its identifier
   * @param integer $formId
   * @param string $tableName
   * @param integer $entryId identifier of the tableName entry
   * @param integer $moduleId identifier of the module
   * @return array or null
   */
  public function findById($formId, $tableName, $entryId, $moduleId)
  {
    try
    {     
      if ($tableName == 'wf_fieldconfig') {
        $doc = $this->findFieldConfigById($entryId);
        return $doc->jsonSerialize();
      } if ($tableName == 'wf_formpost') {
        $doc = $this->findPostById($entryId);
        return $doc->jsonSerialize();
      } else {
        if ($moduleId == WFModule::WF_CUSTOM_MODULE_ID) {
          $sth =
            $this->_em->getConnection()->prepare(
              'SELECT t.*, p.created_tms, p.modified_tms, p.attributes'.
              ' FROM '. $tableName. ' t LEFT OUTER JOIN wf_formpost p'.
              ' ON (t.id = p.wf_formentry_id AND p.wf_formconfig_id = ?) WHERE t.id = ?');
          $sth->bindValue(1, $formId, \PDO::PARAM_INT);
          $sth->bindValue(2, $entryId, \PDO::PARAM_INT);
        } else {
          $sth =
            $this->_em->getConnection()->prepare(
              'SELECT t.* FROM '. $tableName. ' t WHERE t.id = ?');
          $sth->bindValue(1, $entryId, \PDO::PARAM_INT);
        }

        $sth->execute();
        $entry = $sth->fetch();

        return $entry;
      }
    }
    catch(Exception $err)
    {
      return null;
    }
  }

  /**
   * Find option entries by entry identifier
   * Found entries are merged in $entry
   * @param array $entry a given form entry array
  */
  public function findEntryOptions(array &$entry)
  {
    if (isset($entry['id'])) {
      $entryOptions = $this->doFindEntryOptions(array($entry['id']));
      self::mergeEntryOptions($entry, $entryOptions);
    }
  }

  /**
   * Merge $entry with $entryOptions
   * @param array $entry a given form entry array
   * @param array $entryOptions a given entry options
  */
  public static function mergeEntryOptions(array &$entry, array $entryOptions)
  {
    if (isset($entry['id'])) {
      $entryId = $entry['id'];
      if (isset($entryOptions[$entryId])) {
        foreach ($entryOptions[$entryId] as $fldName => $fldVal) {
          if (isset($fldVal['opt_short'])) {
            $entry[$fldName] = json_encode($fldVal['opt_short'], true);
          } else {
            $entry[$fldName] = $fldVal['value'];
          }
        }
      }
    }
  }

  /**
   * Find option entries by entry identifier
   * @param $entryIds an array of entry ids
   * @return an array collection or null if not found
  */
  public function doFindEntryOptions(array $entryIds)
  {
    try
    {
      $sql = "SELECT e.*, fld.name as fieldconfig_name, o.name as option_name,\n"
          . " o.label as option_label, o.attributes as option_attributes\n"
          . " FROM wf_optionentry e LEFT JOIN wf_option o ON(e.wf_option_id = o.id)\n"
          . " INNER JOIN wf_fieldconfig fld ON(fld.id = e.wf_fieldconfig_id)\n"
          . " WHERE e.entry_id IN (?) ORDER BY e.entry_id, e.wf_fieldconfig_id";

      $stmt =
        $this->_em->getConnection()->executeQuery($sql,
          array($entryIds),
          array(\Doctrine\DBAL\Connection::PARAM_INT_ARRAY)
        );

      $res = $stmt->fetchAll();

      $options = array();
      foreach ($res as $val) {
        if (!empty($val['wf_option_id'])) {
          $options[$val['entry_id']][$val['fieldconfig_name']]['opt_long'][] = $val;
          $options[$val['entry_id']][$val['fieldconfig_name']]['opt_short'][$val['wf_option_id']] 
            = $val['option_label'];
        } else {
          $options[$val['entry_id']][$val['fieldconfig_name']]['value'] 
            = $val['value'];
        }
      }
      return $options;
    }
    catch(Exception $err)
    {
      return null;
    }
  }


  /**
   * Find a table entries by a field value
   * @param string $tableName
   * @param string $fieldName
   * @param string $fieldValue
   * @return array or null
   */
  public function findByFieldValue($tableName, $fieldName, $fieldValue)
  {
    try
    {     
      $sth = $this->_em->getConnection()
        ->prepare('SELECT t.* FROM '. $tableName. ' t WHERE '. $fieldName. ' = ?');
      $sth->bindValue(1, $fieldValue);
      $sth->execute();
      $entry = $sth->fetch();
      return $entry;
    }
    catch(Exception $err)
    {
      return null;
    }
  }

  /**
   * Count table entries by a field value
   * @param string $tableName
   * @param string $fieldName
   * @param string $fieldValue
   * @return array or null
   */
  public function countByFieldValue($tableName, $fieldName, $fieldValue)
  {
    try
    {     
      $sth = $this->_em->getConnection()
        ->prepare('SELECT COUNT(t.id) FROM '. $tableName. ' t WHERE '. $fieldName. ' = ?');
      $sth->bindValue(1, $fieldValue);
      $sth->execute();
      return $sth->fetchColumn();
    }
    catch(Exception $err)
    {
      return null;
    }
  }

  /**
   * Search entries
   * When $countRows = True ==> return number of rows found
   * @param string $tableName
   * @param integer $moduleId the module identifier
   * @param integer $formId the form config identifier
   * @param string $formName the form config name
   * @param boolean $countRows
   * @param integer $start
   * @param integer $limit
   * @param string $orderBy
   * @param string $orderByDirection
   * @param array $queryVars
   * @param integer $categoryId
   * @return array of entries or number of rows
   */
  public function search(
    $tableName,
    $moduleId,
    $formId,
    $formName,
    $countRows = False,
    $start = 0, 
    $limit = 50, 
    $orderBy = null,
    $orderByDirection = null,
    $queryVars = null,
    $categoryId = 0)
  {
    $query = $this->_em->getConnection()->createQueryBuilder();

    if (!$countRows) {
      $query->select('t.*');
    } else {
      $query->select('COUNT(t.id) as total');
    }

    $query->from($tableName, 't');
    $query->where("1 = 1");

    if ($tableName == 'wf_formconfig') {
      $query->andWhere('wf_module_id = :module_id');
      $query->setParameter(':module_id', $moduleId);
    } else if ($formName == 'option-group') {
      // when wf_optiongroup_id is null the option is a optiongroup
      $query->andWhere('wf_optiongroup_id is NULL');
      $query->andWhere('parent_id is NULL');
    } else if ($formName == 'product-type') {
      // get only addons producttypes
      $query->andWhere('id > 199');
    }

    if (
      $formId != 0
      && $moduleId == WFModule::WF_CUSTOM_MODULE_ID) {
      $query->innerJoin('t', 'wf_formpost', 'p', 't.id = p.wf_formentry_id');
      if (!$countRows) {
        $query->addSelect(
          'p.created_tms',
          'p.modified_tms',
          'p.attributes'
        );
      }
      $query->andWhere('p.wf_formconfig_id = :form_id');
      $query->setParameter(':form_id', $formId);

      // filter by categoryId
      if ($categoryId) {
        $query->innerJoin('t', 'wf_categoryentry', 'c', 't.id = c.entry_id');
        $query->andWhere('c.wf_formconfig_id = :form_id2');
        $query->andWhere('c.category_id = :category_id');
        $query->setParameter(':form_id2', $formId);
        $query->setParameter(':category_id', $categoryId);
      }
    }

    if (!is_null($queryVars)) {
      foreach ($queryVars as $k => $v) {
        //echo $k. "  ". $v;
        if ($v[1] == 'LIKE') {
          $query->andWhere($k.' LIKE :'.$k);
          $query->setParameter(':'.$k, "%" . $v[0] . "%");
        } else {
          $query->andWhere($k.' '. $v[1].':'.$k);
          $query->setParameter(':'.$k, $v[0]);
        }
      }
    }

    if (!$countRows && $formName == 'option') {
      $query->addOrderBy('parent_id', 'ASC');
    }

    if (!empty($orderBy) && !empty($orderByDirection)) {
      $query->addOrderBy($orderBy, $orderByDirection);
    }

    if (!$countRows && $formName == 'form-config') {
      $query->addOrderBy('modified_tms', 'DESC');
    } else if (
      !$countRows
      && $formId != 0 
      && $moduleId == WFModule::WF_CUSTOM_MODULE_ID) {
      $query->addOrderBy('modified_tms', 'DESC');
    }

    if (!$countRows) {
      $query->setFirstResult($start);
      $query->setMaxResults($limit);
      $sth = $query->execute();
      $rows = $sth->fetchAll();
      if ($moduleId == WFModule::WF_CUSTOM_MODULE_ID) {
        $entryIds = array();
        foreach ($rows as $line) {
          $entryIds[] = $line['id'];
        }

        // get select fields values
        $entriesOptions = $this->doFindEntryOptions($entryIds);
        if (!empty($entriesOptions)) {
          $index = 0;
          foreach ($rows as $line) {
            $entryId = $line['id'];
            if (isset($entriesOptions[$entryId])) {
              foreach ($entriesOptions[$entryId] as $fldName => $fldVal) {
                if (isset($fldVal['opt_short'])) {
                  $rows[$index][$fldName] = json_encode($fldVal['opt_short'], true);
                } else {
                  $rows[$index][$fldName] = $fldVal['value'];
                }
              }
            }
            $index++;
          }
        }
      }
      return $rows;
    } else {
      $sth = $query->execute();
      return $sth->fetchColumn();
    }
  }

  /**
   * Get number of entries
   * @param string $tableName
   * @param integer $moduleId the module identifier
   * @param integer $formId the form config identifier
   * @param string $formName the form config name
   * @return number of entries
   */
  public function getEntriesCount($tableName, $moduleId, $formId, $formName)
  {
    return $this->search($tableName, $moduleId, $formId, $formName, True);
  }

  /**
   * Get number of options by optionGroupId
   * @param integer $optionGroupId
   * @return number of options
   */
  public function getOptionsCount($optionGroupId)
  {
    $query = $this->_em->getConnection()->createQueryBuilder();
    $query->select('COUNT(id) as total');
    $query->from('wf_option');
    $query->where("wf_optiongroup_id = :wf_optiongroup_id");
    $query->setParameter(':wf_optiongroup_id', $optionGroupId);
    $sth = $query->execute();
    return $sth->fetchColumn();
  }

  /**
   * Get number of options by parentId
   * @param integer $parentId
   * @return number of sub options
   */
  public function getSubOptionsCount($parentId)
  {
    $query = $this->_em->getConnection()->createQueryBuilder();
    $query->select('COUNT(id) as total');
    $query->from('wf_option');
    $query->where("parent_id = :parent_id");
    $query->setParameter(':parent_id', $parentId);
    $sth = $query->execute();
    return $sth->fetchColumn();
  }

  /**
   * Update a module database schema
   * @param array wfClasses module entities classes
   * @param array wfTables module entities tables
   * WFModule $module a given module
   *
   * @return array The sequence of SQL statements.
   */
  public function updateSchema($wfClasses, $wfTables, WFModule $module = null)
  {
    $sm = $this->_em->getConnection()->getSchemaManager();

    $fromSchema = $sm->createSchema();
    foreach ($fromSchema->getTables() as $table) {
      if (!isset($wfTables[$table->getName()])) {
        $fromSchema->dropTable($table->getName());
      }
    }

    $toSchema = $this->tool->getSchemaFromMetadata($wfClasses);

    $comparator = new Comparator();
    $schemaDiff = $comparator->compare($fromSchema, $toSchema);

    $updateSchemaSql = $schemaDiff->toSaveSql(
      $this->_em->getConnection()->getDatabasePlatform());

    // update database schema
    /*foreach ($updateSchemaSql as $sql) {
      $this->_em->getConnection()->executeQuery($sql);
    }*/
    $nbQueries = count($updateSchemaSql);
    for ($i = 0; $i < $nbQueries; $i++) {
      $this->_em->getConnection()->executeQuery(
        $updateSchemaSql[$i]);
    }

    // create/update module entry
    if (!is_null($module)) {
      $this->createOrUpdateModule($module);
    }

    /*$tables = $sm->listTables();
    foreach ($tables as $table) {
      echo $table->getName(). ' ';
    }*/

    return $updateSchemaSql;
  }

  /**
   * Drop module database schema
   * @param array wfClasses module entities classes
   * @param array wfTables module entities tables
   * @return array The sequence of SQL statements.
   */
  public function dropSchema($wfClasses, $wfTables)
  {
    $sm = $this->_em->getConnection()->getSchemaManager();

    $fromSchema = $sm->createSchema();
    foreach ($fromSchema->getTables() as $table) {
      if (!isset($wfTables[$table->getName()])) {
        $fromSchema->dropTable($table->getName());
      }
    }

    $toSchema = clone $fromSchema;
    foreach ($wfTables as $tableName) {
      $toSchema->dropTable($tableName);
    }

    $updateSchemaSql =
      $fromSchema->getMigrateToSql(
        $toSchema,
        $this->_em->getConnection()->getDatabasePlatform());

    // drop database schema
    $nbQueries = count($updateSchemaSql);
    for ($i = 0; $i < $nbQueries; $i++) {
      $this->_em->getConnection()->executeQuery(
        $updateSchemaSql[$i]);
    }

    return $updateSchemaSql;
  }

  /**
   * Add new object to save in database
   * @param $obj the object to add
   */
  public function add($obj) {
    try
    {     
      $this->_em->persist($obj);
    }
    catch(Exception $err)
    {
    }
  }

  /**
   * Add new object and save it in database
   * @param $obj the object to add
   * @return the added object if success else null
   */
  public function save($obj) {
    try
    {     
      if (!is_null($obj)) {
        $this->_em->persist($obj);
        $this->_em->flush();
        return $obj;
      }
      return null;
    }
    catch(Exception $err)
    {
      return null;
    }
  }

  /**
   * Flush data => write data in database
   */
  public function flushData() {
    try
    {     
      $this->_em->flush();
    }
    catch(Exception $err)
    {
    }
  }
}
/* EOF */
