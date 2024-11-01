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
class WFStepConfig  implements \JsonSerializable
{
  /**
   * @var string
   */
  public $current;

  /**
   * @var array
   */
  public $order;

  /**
   * @var array
   */
  public $steps;

  /**
   * Constructor
   * @param array $attrs
   */
  public function __construct(array $attrs)
  {
    if (isset($attrs['current'])) {
      $this->current = $attrs['current'];
    }

    if (isset($attrs['order'])) {
      $this->order = $attrs['order'];
    } else {
      $this->order = array();
    }

    $this->steps = array();
    if (isset($attrs['steps'])) {
      foreach ($attrs['steps'] as $k => $v) {
        $step = new WFStep($v);
        $this->steps[$step->id] = $step;
      }
    }
  }

  /**
   * Merge this stepConfig with a given stepConfig
   * @param WFStepConfig $rhs the stepConfig to merge with
   */
  public function merge(WFStepConfig $rhs) {
    // merge order
    $order =
      array_merge($this->order, $rhs->order);
    $order = array_unique($order);
    $this->order = array_values($order);

    // merge steps
    foreach ($rhs->steps as $k => $step) {
      if (!isset($this->steps[$k])) {
        if (!empty($step->order)) {
          $this->steps[$k] = $step;
        } else {
          // unset removed or empty step
          foreach ($this->order as $k1 => $v1) {
            if ($k == $v1) {
              unset($this->order[$k1]);
              break;
            }
          }
        }
      }
    }
  }


  /**
   * serialize steps
   */
  public function getStepsAsJson() {
    $a = array();
    foreach ($this->steps as $k => $v) {
      $a[$k] = $v->jsonSerialize();
    }

    return $a;
  }

  /**
   * Implements jsonSerialize
   */
  public function jsonSerialize() {
    return [
      'current' => $this->current,
      'order' => $this->order,
      'steps' => $this->getStepsAsJson()
    ];
  }
}

