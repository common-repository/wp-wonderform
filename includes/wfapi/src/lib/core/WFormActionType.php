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
 * @Table(name="wf_formactiontype")
 *
 * @author Wonderform <contact@wonderform.net>
 */
class WFormActionType  implements \JsonSerializable
{
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

  // Define types constants
  const WF_PUBLISH                  = 1;
  const WF_NOTIFY                   = 2;
  const WF_SUCCESS_MESSAGE          = 3;
  const WF_ERROR_MESSAGE            = 4;
  const WF_FORM_ANALYTICS           = 5;
  const WF_FIELD_ANALYTICS          = 6;
  const WF_NEXUS_STRATEGY           = 7;
  const WF_REDIRECT                 = 8;
  const WF_FILE_DOWNLOAD            = 9;

  const WF_PUBLISH_STR              = 'publish';
  const WF_NOTIFY_STR               = 'notify';
  const WF_SUCCESS_MESSAGE_STR      = 'success_message';
  const WF_ERROR_MESSAGE_STR        = 'error_message';
  const WF_FORM_ANALYTICS_STR       = 'form_analytics';
  const WF_FIELD_ANALYTICS_STR      = 'field_analytics';
  const WF_NEXUS_STRATEGY_STR       = 'nexus_strategy';
  const WF_REDIRECT_STR             = 'redirect';
  const WF_FILE_DOWNLOAD_STR        = 'file_download';
  const WF_FORM_SUBMIT_STR          = 'form_submit';

  private static $types = null;

  /**
   * Get form action type identifiers
   */
  public static function getArray() {
    if (self::$types == null) {
      self::$types  = array (
        self::WF_PUBLISH => self::WF_PUBLISH_STR,
        self::WF_NOTIFY => self::WF_NOTIFY_STR,
        self::WF_SUCCESS_MESSAGE => self::WF_SUCCESS_MESSAGE_STR,
        self::WF_ERROR_MESSAGE    => self::WF_ERROR_MESSAGE_STR,
        self::WF_FORM_ANALYTICS   => self::WF_FORM_ANALYTICS_STR,
        self::WF_FIELD_ANALYTICS  => self::WF_FIELD_ANALYTICS_STR,
        self::WF_NEXUS_STRATEGY => self::WF_NEXUS_STRATEGY_STR,
        self::WF_REDIRECT       => self::WF_REDIRECT_STR,
        self::WF_FILE_DOWNLOAD  => self::WF_FILE_DOWNLOAD_STR
      );
    }

    return self::$types;
  }

  /**
   * Test if actionType is a supported wonder form action type
   * @param $actionType the action type to test
   * @return true if form action type is known
   */
  public static function isValid($actionType) {
    return array_key_exists($actionType, self::getArray());
  }

  /**
   * Constructor
   * @param string $id
   * @param string $name
   */
  public function __construct($id, $name)
  {
    $this->id = $id;
    $this->name = $name;
  }

  /**
   * Get action type identifier
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
   * Implements jsonSerialize
   */
  public function jsonSerialize() {
    return [
      'id' => $this->id,
      'name' => $this->name
    ];
  }
}

