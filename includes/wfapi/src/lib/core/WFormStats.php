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

use Doctrine\Common\Collections\ArrayCollection;

/**
 * @Entity
 * @Table(name="wf_formstats",
 * uniqueConstraints={
 * @UniqueConstraint(name="wf_stats_date_id_uniq",
 * columns={"wf_formconfig_id", "date_id", "date_year", "date_month", "date_week", "date_day"})})
 *
 * @author Wonderform <contact@wonderform.net>
 */
class WFormStats  implements \JsonSerializable
{
  const WF_DATE_ID_FORMAT = 'Ymd';

  /**
   * @var integer
   * @Id
   * @Column(type="integer", nullable=false)
   * @GeneratedValue(strategy="AUTO")
   */
  private $id;

  /**
   * @ManyToOne(targetEntity="WFormConfig")
   * @JoinColumn(
   * name="wf_formconfig_id",
   * nullable=false,
   * referencedColumnName="id",
   * onDelete="CASCADE")
   */
  private $formConfig;

  /**
   * @var integer
   * @Column(type="integer", name="date_id", nullable=false)
   */
  private $dateId;

  /**
   * @var integer
   * @Column(type="integer", name="date_year", nullable=false)
   */
  private $dateYear;

  /**
   * @var integer
   * @Column(type="integer", name="date_month", nullable=false)
   */
  private $dateMonth;

  /**
   * @var integer
   * @Column(type="integer", name="date_week", nullable=false)
   */
  private $dateWeek;

  /**
   * @var integer
   * @Column(type="integer", name="date_day", nullable=false)
   */
  private $dateDay;

  /**
   * @var integer
   * @Column(type="integer", name="view_count", nullable=false)
   */
  private $viewCount;

  /**
   * @var integer
   * @Column(type="integer", name="completed_count", nullable=false)
   */
  private $completedCount;

  /**
   * @var integer
   * @Column(type="integer", name="uncompleted_count", nullable=false)
   */
  private $uncompletedCount;

  /**
   * Constructor
   * @param WFormConfig $formConfig
   */
  public function __construct(WFormConfig $formConfig)
  {
    /*$now = new \DateTime('now');
    $week = intval($now->format("W"));
    $year  = intval($now->format("Y"));
    $month  = intval($now->format("m"));
    $day  = intval($now->format("d"));
    $stat_id  = intval($now->format("Ymd"));
    echo 'year='.$year. ' month='.$month. ' week='.$week. ' day='.$day. ' stat_id='.$stat_id;*/

    $this->formConfig = $formConfig;
    $now = new \DateTime('now');
    $this->dateId  = intval($now->format(self::WF_DATE_ID_FORMAT));
    $this->dateYear  = intval($now->format("Y"));
    $this->dateMonth  = intval($now->format("m"));
    $this->dateWeek = intval($now->format("W"));
    $this->dateDay  = intval($now->format("d"));
    $this->viewCount = 0;
    $this->completedCount = 0;
    $this->uncompletedCount = 0;
  }

  /**
   * Make date id
   * @return date identifier
   */
  public static function makeDateId() {
    $now = new \DateTime('now');
    return intval($now->format(self::WF_DATE_ID_FORMAT));
  }

  /**
   * Get id
   *
   * @return integer 
   */
  public function getId()
  {
    return $this->id;
  }

  /**
   * Get formConfig
   *
   * @return \WFormConfig 
   */
  public function getFormConfig()
  {
    return $this->formConfig;
  }

  /**
   * Get dateId
   *
   * @return integer 
   */
  public function getDateId()
  {
    return $this->dateId;
  }

  /**
   * Incrment viewCount
   *
   * @param integer $incr the incement
   * @return WFormConfig
   */
  public function incrViewCount($incr = 1)
  {
    $this->viewCount += $incr;

    return $this;
  }

  /**
   * Get viewCount
   *
   * @return integer 
   */
  public function getViewCount()
  {
    return $this->viewCount;
  }

  /**
   * Increment completedCount
   * @param integer $incr the incement
   * @return WFormConfig
   */
  public function incrCompletedCount($incr = 1)
  {
    $this->completedCount += $incr;

    return $this;
  }

  /**
   * Get completedCount
   *
   * @return integer 
   */
  public function getCompletedCount()
  {
    return $this->completedCount;
  }

  /**
   * Increment uncompletedCount
   *
   * @param integer $incr the incement
   * @return WFormConfig
   */
  public function incrUncompletedCount($incr = 1)
  {
    $this->uncompletedCount += $incr;

    return $this;
  }

  /**
   * Get uncompletedCount
   *
   * @return integer 
   */
  public function getUncompletedCount()
  {
    return $this->uncompletedCount;
  }

  /**
   * Implements jsonSerialize
   */
  public function jsonSerialize() {
    return [
      'id'   => $this->id,
      'wf_formconfig_id'   => $this->formConfig->getId(),
      'date_id'   => $this->dateId,
      'view_count' => $this->viewCount,
      'completed_count' => $this->completedCount,
      'uncompleted_count'  => $this->uncompletedCount
    ];
  }
}

