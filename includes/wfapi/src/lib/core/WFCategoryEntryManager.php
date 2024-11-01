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
require_once __DIR__.'/WFCategoryEntry.php';

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityRepository;

/**
 * Provides basic utility to manipulate an option entry
 *
 * @author Wonderform <contact@wonderform.net>
 */
class WFCategoryEntryManager extends EntityRepository
{
  /**
   * Constructor
   */
  public function __construct()
  {
    global $wfem;
    parent::__construct(
      $wfem,
      $wfem->getClassMetadata('WF\Lib\Core\WFCategoryEntry'));
  }

  /**
   * Find a category entry by its identifier
   * @param $id integer identifier of the entry
   * @return WFCategoryEntry or null if not found
   */
  public function findById($id)
  {
    try
    {     
      $entry = $this->find($id);
      return $entry;
    }
    catch(Exception $err)
    {
      return null;
    }
  }

  /**
   * Get category entry identifier by its unique identifier
   * @param $formId integer the form config identifier
   * @param $entryId integer the entry identifier
   * @param $categoryId integer the option identifier
   * @return integer (0 if not found)
   */
  public function getId($formId, $entryId, $categoryId)
  {
    try
    {     
      $sql = 'SELECT id FROM wf_categoryentry
        WHERE wf_formconfig_id = ?
        AND entry_id = ? AND category_id = ?';

      $sth = $this->getEntityManager()->getConnection()->prepare($sql);
      $sth->bindValue(1, $formId, \PDO::PARAM_INT);
      $sth->bindValue(2, $entryId, \PDO::PARAM_INT);
      $sth->bindValue(3, $categoryId, \PDO::PARAM_INT);
      $sth->execute();
      $id = $sth->fetchColumn();
      return $id;
    }
    catch(Exception $err)
    {
      return 0;
    }
  }

 /**
  * Add/Update category entry
  * @param integer $formId
  * @param integer $entryId
  * @param integer $categoryId
  * @return array the entry added or updated
  */
  public function addOrUpdate(
    $formId,
    $entryId,
    $categoryId)
  {
    // remove previous category entry link
    $this->del($formId, $entryId);

    // normal behavior
    $data = array(
      'entry_id' => $entryId,
      'wf_formconfig_id' => $formId,
      'category_id' => $categoryId);

    $entry =
      $this->doAddOrUpdate($data);

    $option =
      WFDbManager::getInstance()->
      findById(
        0,
        'wf_option',
        $categoryId,
        WFModule::WF_WFC_MODULE_ID);

    while (!empty($option)) {
      $groupId = $option['wf_optiongroup_id'];
      if (!empty($groupId)) {
        $tmp = array(
          'entry_id' => $data['entry_id'],
          'wf_formconfig_id' => $data['wf_formconfig_id'],
          'category_id' => $groupId);
        $e = $this->doAddOrUpdate($tmp);
      }

      $option =
        WFDbManager::getInstance()->
        findById(
          0,
          'wf_option',
          $groupId,
          WFModule::WF_WFC_MODULE_ID);
    }

    return $entry;
  }

 /**
  * Do Add category entry
  * @param array $data hold data that will be inserted in database
  * @return array the entry added or updated
  */
  private function doAddOrUpdate(array $data)
  {
    return
      WFDbManager::getInstance()->insert(
        0,
        'wf_categoryentry',
        $data,
        WFModule::WF_WFC_MODULE_ID);
  }

  /**
   * Delete
   * @param integer $formId
   * @param integer $entryId
   * @return array
   */
  public function del($formId, $entryId) {
    $this->getEntityManager()->getConnection()->delete(
      'wf_categoryentry',
      array('wf_formconfig_id' => $formId, 'entry_id' => $entryId));
  }
}
/* EOF */
