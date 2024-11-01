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
require_once __DIR__.'/WFOption.php';
require_once __DIR__.'/WFStr.php';

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityRepository;

/**
 * Provides basic utility to manipulate an option entry
 *
 * @author Wonderform <contact@wonderform.net>
 */
class WFOptionManager extends EntityRepository
{
  /**
   * Constructor
   */
  public function __construct()
  {
    global $wfem;
    parent::__construct(
      $wfem,
      $wfem->getClassMetadata('WF\Lib\Core\WFOption'));
  }

  /**
   * Find a form stats by its identifier
   * @param $id integer identifier of the option
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
   * Get option tree id
   * @param integer $parentId identifier of parent option
   * @return integer
   */
  public function getTreeId($parentId) {
    $treeId = 0;
    $entry = $this->findById($parentId);
    if (!is_null($entry)) {
      $treeId = 
        $entry->getTreeId() == 0 ? $entry->getId() :  $entry->getTreeId();
    }

    return $treeId;
  }

  /**
   * Get or Create a new option if not exists
   * @param string $name the option name
   * @param string $label the option label
   * @param boolean $isPrivate
   * @return WFOption|null
   */
  public function getOrCreate($name, $label = null, $isPrivate = true) {
    try {
      if (!empty($name)) {
        if (empty($label)) {
          $label = $name;
        }

        $option =
          $this->_em->getRepository('WF\Lib\Core\WFOption')
          ->findOneBy(array('name' => $name));
        if (is_null($option)) {
          $option = new WFOption($name, $label, $isPrivate);
          $this->_em->persist($option);
          $this->_em->flush();
        }
        return $option;
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
   * Update option name - Set a nice slug
   * @param integer $id the option identifier
   * @param string $label the option label
   */
  public function updateName($id, $label) {
    try {
      $option =
        $this->_em->getRepository('WF\Lib\Core\WFOption')
        ->find($id);
      if (!is_null($option) && !empty($label)) {
        $name = WFStr::slugify($label).'-'.$option->getId();
        $option->setName($name);
        WFDbManager::getInstance()->save($option);
      }
    }
    catch(Exception $err)
    {
      return null;
    }
  }

  /**
   * Get options by tree id
   * @param $treeId
   * @return array
   */
  public function getOptionsByTreeId($treeId)
  {
    try
    {     
      $sql = 'SELECT o.* FROM wf_option o WHERE o.tree_id = ?';

      $sth = $this->getEntityManager()->getConnection()->prepare($sql);
      $sth->bindValue(1, $treeId, \PDO::PARAM_INT);
      $sth->execute();
      $rows = $sth->fetchAll();
      // return options as tree
      $map = [$treeId => []];
      $nbOpts = count($rows);
      for ($i = 0; $i < $nbOpts; $i++) {
        $a = $rows[$i];
        $map[$a['wf_optiongroup_id']][] = $a;
      }
      $tree = $this->createOptionTree($map, $map[$treeId]);

      $res = array('rows' => $tree);
      return $res;
    }
    catch(Exception $err)
    {
      return [];
    }
  }

  /**
   * Get leafs by tree id
   * @param $treeId
   * @return array
   */
  public function getLeafsByTreeId($treeId)
  {
    try
    {     
      $sql = 'SELECT o.* FROM wf_option o WHERE o.tree_id = ?
         AND o.id NOT IN 
         (SELECT wf_optiongroup_id FROM wf_option WHERE tree_id = ?) 
         ORDER BY o.name ASC';

      $sth = $this->getEntityManager()->getConnection()->prepare($sql);
      $sth->bindValue(1, $treeId, \PDO::PARAM_INT);
      $sth->bindValue(2, $treeId, \PDO::PARAM_INT);
      $sth->execute();
      $rows = $sth->fetchAll();
      $res = array('rows' => $rows);
      return $res;
    }
    catch(Exception $err)
    {
      return [];
    }
  }

  /**
   * Create option tree
   * @param array $list
   * @param integer $parent
   */
  private function createOptionTree(&$list, $parent){
    $tree = array();
    foreach ($parent as $k=>$l){
      if (isset($list[$l['id']])){
        $l['children'] = $this->createOptionTree($list, $list[$l['id']]);
      }
      $tree[] = $l;
    }
    return $tree;
  }
}
/* EOF */
