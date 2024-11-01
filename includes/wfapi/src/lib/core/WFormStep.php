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
 * @Table(name="wf_formstep")
 *
 */
class WFormStep  implements \JsonSerializable
{
  /**
   * @var integer
   * @Id
   * @Column(type="integer", nullable=false)
   * @GeneratedValue(strategy="AUTO")
   */
  private $id;

  /**
   * @ManyToOne(targetEntity="WFormConfig", inversedBy="formSteps")
   * @JoinColumn(
   * name="wf_formconfig_id",
   * nullable=false,
   * referencedColumnName="id",
   * onDelete="CASCADE")
   */
  private $formConfig;

  /**
   * @var integer
   *
   * @Column(name="step_num", type="integer", nullable=true)
   */
  private $stepNum;


  /**
   * @var string
   * @Column(type="string", name="step_title", length=100, nullable=false)
   */
  private $stepTitle;

  /**
   * @var string
   * @Column(type="string", name="type", length=32, nullable=true)
   */
  private $stepType;

  /**
   * @var string
   * @Column(type="text", name="step_body", nullable=true)
   */
  private $stepBody;

  /**
   * @var string
   * @Column(type="text", name="order", nullable=true)
   */
  private $stepOrder;

  /**
   * @var string
   * @Column(type="string", name="step_action", length=32, nullable=true)
   */
  private $stepAction;


  /**
   * Constructor
   * @param WFormConfig $formConfig
   * @param string $stepNum
   * @param string $stepTitle
   */
  public function __construct(WFormConfig $formConfig, $stepNum, $stepTitle)
  {
    $this->formConfig = $formConfig;
    $this->stepNum = $stepNum;
    $this->stepTitle = $stepTitle;
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
   * Implements jsonSerialize
   */
  public function jsonSerialize() {
    return [
      'id'   => $this->id,
      'step_num'   => $this->stepNum,
      'step_title'   => $this->stepTitle,
      'type'   => $this->stepType,
      'step_body'   => $this->stepBody,
      'order'   => $this->stepOrder,
      'step_action'   => $this->stepAction,
      'wf_formconfig_id' => $this->formConfig->getId()
    ];
  }
}

