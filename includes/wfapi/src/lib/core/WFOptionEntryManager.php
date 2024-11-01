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
require_once __DIR__.'/WFOptionEntry.php';

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityRepository;

/**
 * Provides basic utility to manipulate an option entry
 *
 * @author Wonderform <contact@wonderform.net>
 */
class WFOptionEntryManager extends EntityRepository
{
  /**
   * Constructor
   */
  public function __construct()
  {
    global $wfem;
    parent::__construct(
      $wfem,
      $wfem->getClassMetadata('WF\Lib\Core\WFOptionEntry'));
  }

  /**
   * Find a optionentry by its identifier
   * @param $id integer identifier of the form config
   * @return WFormConfig or null if not found
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
   * Get option entry identifier by its unique identifier
   * @param $fieldId integer the field config identifier
   * @param $formEntryId integer the entry identifier (external id)
   * @param $optionId integer the option identifier
   * @return integer (0 if not found)
   */
  public function getId($fieldId, $formEntryId, $optionId)
  {
    try
    {     
      if ($optionId) {
        $sql = 'SELECT e.id
          FROM wf_optionentry e
          WHERE e.wf_fieldconfig_id = ?
          AND e.wf_option_id = ? AND e.entry_id = ?';

        $sth = $this->getEntityManager()->getConnection()->prepare($sql);
        $sth->bindValue(1, $fieldId, \PDO::PARAM_INT);
        $sth->bindValue(2, $optionId, \PDO::PARAM_INT);
        $sth->bindValue(3, $formEntryId, \PDO::PARAM_INT);
      } else {
        $sql = 'SELECT e.id
          FROM wf_optionentry e
          WHERE e.wf_fieldconfig_id = ?
          AND e.entry_id = ? LIMIT 1';

        $sth = $this->getEntityManager()->getConnection()->prepare($sql);
        $sth->bindValue(1, $fieldId, \PDO::PARAM_INT);
        $sth->bindValue(2, $formEntryId, \PDO::PARAM_INT);
      }
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
   * Get option entry by its unique identifier
   * @param $fieldId integer the field config identifier
   * @param $formEntryId integer the entry identifier (external id)
   * @param $optionId integer the option identifier
   * @return integer (0 if not found)
   */
  public function getEntry($fieldId, $formEntryId, $optionId)
  {
    try
    {     
      if ($optionId) {
        $sql = 'SELECT e.*
          FROM wf_optionentry e
          WHERE e.wf_fieldconfig_id = ?
          AND e.wf_option_id = ? AND e.entry_id = ?';

        $sth = $this->getEntityManager()->getConnection()->prepare($sql);
        $sth->bindValue(1, $fieldId, \PDO::PARAM_INT);
        $sth->bindValue(2, $optionId, \PDO::PARAM_INT);
        $sth->bindValue(3, $formEntryId, \PDO::PARAM_INT);
      } else {
        $sql = 'SELECT e.*
          FROM wf_optionentry e
          WHERE e.wf_fieldconfig_id = ?
          AND AND e.entry_id = ? LIMIT 1';

        $sth = $this->getEntityManager()->getConnection()->prepare($sql);
        $sth->bindValue(1, $fieldId, \PDO::PARAM_INT);
        $sth->bindValue(2, $formEntryId, \PDO::PARAM_INT);
      }
      $sth->execute();
      $entry = $sth->fetch();
      return $entry;
    }
    catch(Exception $err)
    {
      return [];
    }
  }

  /**
   * create a new option entry if not exists
   * @param $id integer the option entry identifier or zero if not exists
   * @param $fieldId integer the field config identifier
   * @param $formEntryId integer the entry identifier (external id)
   * @param $optionId integer the option identifier
   * @param $value the option entry value
   * @return WFOptionEntry
   */
  public function getOrCreate($id, $fieldId, $formEntryId, $optionId = 0, $value = null) {
    try {
      if ($id == 0) {
        $id = $this->getId($fieldId, $formEntryId, $optionId);
      }

      if ($id == 0) {
        $field =
          $this->_em->getRepository('WF\Lib\Core\WFieldConfig')->find($fieldId);
        $option =
          $this->_em->getRepository('WF\Lib\Core\WFOption')->find($optionId);
        if (!is_null($field)) {
          $obj = new WFOptionEntry($field, $formEntryId, $option);
          if (!is_null($value)) {
            $obj->setValue($value);
          }
          $this->_em->persist($obj);
          $this->_em->flush();
          return $obj;
        } else {
          return null;
        }
      } else {
        $obj = $this->findById($id);
        if (!is_null($value)) {
          $obj->setValue($value);
          $this->_em->persist($obj);
          $this->_em->flush();
        }
        return $obj;
      }
    }
    catch(Exception $err)
    {
      return null;
    }
  }

 /**
  * Mass Add or Update - action
  * @param WFormConfig $wfc
  * @param $formEntryId
  * @param $data
  * @param $extraData
  */
  public function massAddOrUpdate(
    WFormConfig &$wfc, $formEntryId, array $data, array $extraData)
  {
    foreach ($wfc->getFieldsAsArray() as $fld) {
      if ($fld->isSelectField()) {
        $options = null;
        if (isset($data[$fld->getName()])) {
          $options = json_decode(stripslashes($data[$fld->getName()]), true);
        } else if (isset($extraData[$fld->getName()])) {
          $options = json_decode(stripslashes($extraData[$fld->getName()]), true);
        }

        if (!is_null($options)) {
          $this->addOrUpdate($fld->getId(), $formEntryId, $options);
        }
      } else {
        if (isset($extraData[$fld->getName()])) {
          $value = $extraData[$fld->getName()];
          $this->getOrCreate(0, $fld->getId(), $formEntryId, 0, $value);
        }
      }
    }
  }

 /**
  * Add/Update field option entries
  * @param integer $fieldId
  * @param integer $formEntryId
  * @param array $options
  * @return WFOptionEntry or null
  */
  public function addOrUpdate($fieldId, $formEntryId, array $options)
  {
    try {
      $entries = $this->findEntries($fieldId, $formEntryId);
      foreach($entries as $entry) {
        $oldOptionId = $entry['wf_option_id'];
        $id = $entry['id'];
        if (!isset($options[$oldOptionId])) {
          $this->del($id);
        }
      }

      // create option entries
      foreach ($options as $optionId => $v) {
        $obj = $this->getOrCreate(0, $fieldId, $formEntryId, $optionId);
      }

      return $this->findEntries($fieldId, $formEntryId);
    }
    catch(Exception $err)
    {
      return null;
    }
  }

 /**
   * Find option entries
   * @param $fieldId integer the field config identifier
   * @param $formEntryId integer the entry identifier
   * @return an array collection or null if not found
  */
  public function findEntries($fieldId, $formEntryId)
  {
    try
    {
      $sql = "SELECT e.id, e.wf_fieldconfig_id, e.wf_option_id, e.value, o.name as name,\n"
          . " o.label as label, o.attributes as attributes\n"
          . " FROM wf_optionentry e INNER JOIN wf_option o ON(e.wf_option_id = o.id)\n"
          . " WHERE e.wf_fieldconfig_id = ?\n"
          . " AND e.entry_id = ?";
      $sth = $this->getEntityManager()->getConnection()->prepare($sql);
      $sth->bindValue(1, $fieldId, \PDO::PARAM_INT);
      $sth->bindValue(2, $formEntryId, \PDO::PARAM_INT);
      $sth->execute();
      $entries = $sth->fetchAll();
      return $entries;
    }
    catch(Exception $err)
    {
      return null;
    }
  }

  /**
   * Count entries
   * @param $formId integer
   * @return an array collection or null if not found
  */
  public function countEntries($formId)
  {
    try
    {
      $sql = "SELECT e.wf_fieldconfig_id, e.wf_option_id, \n"
          . " count(e.wf_option_id) as options_count, o.name as name,\n"
          . " o.label as label, o.attributes as attributes \n"
          . " FROM wf_optionentry e INNER JOIN wf_option o ON(e.wf_option_id = o.id)\n"
          . " WHERE e.wf_formconfig_id = ?\n"
          . " GROUP BY e.wf_fieldconfig_id, e.wf_option_id";

      $sth = $this->getEntityManager()->getConnection()->prepare($sql);
      $sth->bindValue(1, $formId, \PDO::PARAM_INT);
      $sth->execute();
      $entries = $sth->fetchAll();
      return $entries;
    }
    catch(Exception $err)
    {
      return null;
    }
  }

  /**
   * Delete
   * @param integer $id
   * @return array
   */
  public function del($id) {
    $this->getEntityManager()->getConnection()->delete(
        'wf_optionentry', array('id' => $id));
  }
}
/* EOF */
