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
require_once __DIR__.'/WFSetting.php';
require_once __DIR__.'/WFStr.php';

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityRepository;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * Provides basic utility to manipulate global settings
 *
 * @author Wonderform <contact@wonderform.net>
 */
class WFSettingManager
{
  /**
   * @var EntityManager
   */
  private $_em;

  /**
   * Constructor
   */
  public function __construct()
  {
    global $wfem;
    $this->_em = $wfem;
  }

  /**
   * Find all settings
   * @return array
   */
  public function findAll()
  {
    $sql = "SELECT param_name, param_value FROM wf_setting\n"
        . " WHERE group_id = 1";

    $sth = $this->_em->getConnection()->prepare($sql);

    $sth->execute();
    $entries = $sth->fetchAll();

    return $entries;
  }
}
/* EOF */
