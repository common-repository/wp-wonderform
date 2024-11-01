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
 * @Table(name="wf_setting",
 * indexes={@Index(columns={"group_id"})})
 *
 */
class WFSetting  implements \JsonSerializable
{
  /**
   * @var integer
   * @Id
   * @Column(type="integer", nullable=false)
   * @GeneratedValue(strategy="AUTO")
   */
  private $id;

  /**
   * @var string
   * @Column(type="string", name="param_name", length=64, unique=true, nullable=false)
   */
  private $paramName;

  /**
   * @var string
   * @Column(type="text", name="param_value", nullable=true)
   */
  private $paramValue;

  /**
   * @var integer
   *
   * @Column(name="group_id", type="integer", nullable=true)
   */
  private $groupId = '0';

  /**
   * Constructor
   * @param string $paramName
   * @param string $paramValue
   */
  public function __construct($paramName, $paramValue, $groupId = 0)
  {
    $this->paramName = $paramName;
    $this->paramValue = $paramValue;
    $this->groupId = $groupId;
  }

  /**
   * Get id
   *
   * @return string
   */
  public function getId()
  {
    return $this->id;
  }

  /**
   * Get paramName
   *
   * @return string
   */
  public function getParamName()
  {
    return $this->paramName;
  }

  /**
   * Set paramValue
   *
   * @param string $paramValue
   * @return WFSetting
   */
  public function setParamValue($paramValue)
  {
    $this->paramValue = $paramValue;

    return $this;
  }

  /**
   * Get paramValue
   *
   * @return string 
   */
  public function getParamValue()
  {
    return $this->paramValue;
  }

  /**
   * Set groupId
   *
   * @param integer $groupId
   * @return WFSetting
   */
  public function setGroupIp($groupId)
  {
    $this->groupId = $groupId;

    return $this;
  }

  /**
   * Get groupId
   *
   * @return string 
   */
  public function getGroupId()
  {
    return $this->groupId;
  }

  /**
   * Implements jsonSerialize
   */
  public function jsonSerialize() {
    return [
      'id'   => $this->id,
      'param_name'   => $this->paramName,
      'param_value'   => $this->paramValue,
      'group_id'   => $this->groupId
    ];
  }
}

