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
 * @Table(name="wf_module")
 *
 * @author Wonderform <contact@wonderform.net>
 */
class WFModule  implements \JsonSerializable
{
  // Define constants
  const WF_WFC_MODULE_ID              = 1;
  const WF_CUSTOM_MODULE_ID           = 2;
  const WF_POST_MODULE_ID             = 3;

  const WF_WFC_MODULE_NAME            = 'wfc';
  const WF_CUSTOM_MODULE_NAME         = 'custom';
  const WF_POST_MODULE_NAME           = 'post';

  /**
   * Get module id
   * @param $name the module name
   * @return integer
   */
  public static function getModuleIdByName($name) {
    static $moduleIds;
    if (!$moduleIds) {
      $moduleIds = [
        self::WF_WFC_MODULE_NAME => self::WF_WFC_MODULE_ID,
        self::WF_CUSTOM_MODULE_NAME => self::WF_CUSTOM_MODULE_ID,
        self::WF_POST_MODULE_NAME => self::WF_POST_MODULE_ID
      ];
    }

    if (isset($moduleIds[$name])) {
      return $moduleIds[$name];
    } else {
      return self::WF_UNKOWN_MODULE_ID;
    }
  }

  /**
   * @var integer
   * @Id
   * @Column(type="integer")
   */
  private $id;

  /**
   * @var string
   * @Column(type="string", length=32, unique=true, nullable=false)
   */
  private $name;

  /**
   * @var string
   * @Column(type="string", length=32, nullable=false)
   */
  private $version;

  /**
   * Constructor
   * @param string $name
   */
  public function __construct($name)
  {
    $this->name = $name;
    $this->id = self::getModuleIdByName($name);
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
   * Get name
   *
   * @return string
   */
  public function getName()
  {
    return $this->name;
  }

  /**
   * Set version
   *
   * @param string $version
   * @return WFModule
   */
  public function setVersion($version)
  {
    $this->version = $version;

    return $this;
  }

  /**
   * Get version
   *
   * @return string 
   */
  public function getVersion()
  {
    return $this->version;
  }

  /**
   * Implements jsonSerialize
   */
  public function jsonSerialize() {
    return [
      'id'   => $this->id,
      'name'   => $this->name
    ];
  }
}

