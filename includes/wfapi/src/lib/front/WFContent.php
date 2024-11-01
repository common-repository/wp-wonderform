<?php

/*
* This file is part of the WonderForm package.
*
* (c) Wonderform <contact@wonderform.net>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

namespace WF\Lib\Front;


/**
 * @author Wonderform <contact@wonderform.net>
 */
class WFContent  implements \JsonSerializable
{
  /**
   * @var boolean
   */
  public $isField;

  /**
   * @var boolean
   */
  public $isIgnored;

  /**
   * @var string
   */
  public $name;

  /**
   * @var WFCols
   */
  public $cols;

  /**
   * @var array
   */
  public $attributes;

  /**
   * Constructor
   * @param array $attrs
   */
  public function __construct(array $attrs)
  {
    if (isset($attrs['isField'])) {
      $this->isField = $attrs['isField'];
    }
    if (isset($attrs['isIgnored'])) {
      $this->isIgnored = $attrs['isIgnored'];
    }
    if (isset($attrs['name'])) {
      $this->name = $attrs['name'];
    }
    if (isset($attrs['cols']) && is_array($attrs['cols'])) {
      $this->cols = new WFCols($attrs['cols']);
    }
    if (isset($attrs['attributes']) && is_array($attrs['attributes'])) {
      $this->attributes = $attrs['attributes'];
    }
  }

  /**
   * Implements jsonSerialize
   */
  public function jsonSerialize() {
    return [
      'attributes' => $this->attributes,
      'cols' => $this->cols->jsonSerialize(),
      'isField' => $this->isField,
      'isIgnored' => $this->isIgnored,
      'name' => $this->name
    ];
  }
}

