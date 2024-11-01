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
class WFStep  implements \JsonSerializable
{
  /**
   * @var integer
   */
  public $id;

  /**
   * @var array
   */
  public $order;

  /**
   * @var string
   */
  public $type;

  /**
   * Constructor
   * @param array $attrs
   */
  public function __construct(array $attrs)
  {
    $vars = get_object_vars($this);
    foreach ($vars as $name => $oldValue) {
      if (isset($attrs[$name])) {
        $this->$name = $attrs[$name];
      }
    }
  }

  /**
   * Implements jsonSerialize
   */
  public function jsonSerialize() {
    return [
      'id' => $this->id,
      'order' => $this->order,
      'type' => $this->type
    ];
  }
}

