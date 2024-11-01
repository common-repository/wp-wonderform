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
class WFCols  implements \JsonSerializable
{
  /**
   * @var integer
   */
  public $lg;

  /**
   * @var integer
   */
  public $md;

  /**
   * @var integer
   */
  public $sm;

  /**
   * @var integer
   */
  public $xs;

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
      'lg' => $this->lg,
      'md' => $this->md,
      'sm' => $this->sm,
      'xs' => $this->xs
    ];
  }
}

