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
 * @Table(name="wf_addonentry")
 *
 */
class WFAddonEntry implements \JsonSerializable
{
  /**
   * @var integer
   * @Id
   * @Column(type="bigint", nullable=false)
   * @GeneratedValue(strategy="AUTO")
   */
  private $id;

  /**
   * Constructor
   */
  public function __construct()
  {
  }

  /**
   * Implements jsonSerialize
   */
  public function jsonSerialize() {
    return [
      'id' => $this->id
    ];
  }
}
/* EOF */
