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
require_once __DIR__.'/WFormStats.php';

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityRepository;

/**
 * Provides basic utility to manipulate a wonder form config.
 *
 * @author Wonderform <contact@wonderform.net>
 */
class WFormStatsManager extends EntityRepository
{
  /**
   * Constructor
   */
  public function __construct()
  {
    global $wfem;
    parent::__construct(
      $wfem,
      $wfem->getClassMetadata('WF\Lib\Core\WFormStats'));
  }

  /**
   * Find a form stats by its identifier
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
   * Find a form stats by a given dateId
   * @param WFormConfig $formConfig
   * @param integer $dateId
   * @return WFormStats or null if not found
   */
  public function findByDateId(WFormConfig &$formConfig, $dateId)
  {
    try
    {     
      return $this->findOneBy(
        array(
          'formConfig' => $formConfig,
          'dateId' => $dateId)); 
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
      $formStats = new WFormStats($wfc);
      $this->_em->persist($formStats);
      $this->_em->flush();
      return $formStats;
    }
    catch(Exception $err)
    {
      return null;
    }
  }

  /**
   * Find form stats by year groupby month
   * @param integer $formId the form config identifier
   * @param integer $year a given year
   * @return an array collection or null if not found
  */
  public function findFormStatsByYear($formId, $year)
  {
    try
    {
      $sql = 'SELECT 
        date_month,
        sum(view_count) as view_count,
        sum(completed_count) as completed_count,
        sum(uncompleted_count) as uncompleted_count
        FROM wf_formstats WHERE wf_formconfig_id = ?
        AND date_year = ? GROUP BY date_month';

      $sth = $this->getEntityManager()->getConnection()->prepare($sql);
      $sth->bindValue(1, $formId, \PDO::PARAM_INT);
      $sth->bindValue(2, $year, \PDO::PARAM_INT);
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
   * Find form stats by year and month groupby week
   * @param integer $formId the form config identifier
   * @param integer $year a given year
   * @param integer $month a given month
   * @return an array collection or null if not found
  */
  public function findFormStatsByYearMonth($formId, $year, $month)
  {
    try
    {
      $sql = 'SELECT 
        date_week,
        sum(view_count) as view_count,
        sum(completed_count) as completed_count,
        sum(uncompleted_count) as uncompleted_count
        FROM wf_formstats WHERE wf_formconfig_id = ?
        AND date_year = ?
        AND date_month = ?
        GROUP BY date_week';

      $sth = $this->getEntityManager()->getConnection()->prepare($sql);
      $sth->bindValue(1, $formId, \PDO::PARAM_INT);
      $sth->bindValue(2, $year, \PDO::PARAM_INT);
      $sth->bindValue(3, $month, \PDO::PARAM_INT);
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
   * Find form stats by year and week
   * @param integer $formId the form config identifier
   * @param integer $year a given year
   * @param integer $week a given week
   * @return an array collection or null if not found
  */
  public function findFormStatsByYearWeek($formId, $year, $week)
  {
    try
    {
      $sql = 'SELECT 
        date_day,
        view_count,
        completed_count,
        uncompleted_count
        FROM wf_formstats WHERE wf_formconfig_id = ?
        AND date_year = ?
        AND date_week = ?';

      $sth = $this->getEntityManager()->getConnection()->prepare($sql);
      $sth->bindValue(1, $formId, \PDO::PARAM_INT);
      $sth->bindValue(2, $year, \PDO::PARAM_INT);
      $sth->bindValue(3, $week, \PDO::PARAM_INT);
      $sth->execute();
      $entries = $sth->fetchAll();
      return $entries;
    }
    catch(Exception $err)
    {
      return null;
    }
  }
}
/* EOF */
