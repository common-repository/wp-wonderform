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

require_once(__DIR__.'/WFOption.php');
require_once(__DIR__.'/WFieldConfig.php');

use Doctrine\Common\Collections\ArrayCollection;

/**
 * @Entity
 * @Table(name = "wf_optionentry",
 * indexes={@Index(name="opt_wf_formentry_id_idx", columns={"entry_id"})},
 * uniqueConstraints={
 * @UniqueConstraint(name="wf_opt_entry_uniq",
 * columns={"entry_id", "wf_fieldconfig_id", "wf_option_id"})})
 *
 * @author Wonderform <contact@wonderform.net>
 */
class WFOptionEntry  implements \JsonSerializable
{
  /**
   * @var integer
   * @Id
   * @Column(type="integer", nullable=false)
   * @GeneratedValue(strategy="AUTO")
   */
  private $id;

  /**
   * @var integer
   * @Column(type="integer", name="entry_id", nullable=false)
   */
  private $entryId;

  /**
   * @ManyToOne(targetEntity="WF\Lib\Core\WFormConfig")
   * @JoinColumn(
   * name="wf_formconfig_id",
   * referencedColumnName="id",
   * nullable=false,
   * onDelete="CASCADE")
   */
  private $formConfig;

  /**
   * @ManyToOne(targetEntity="WFieldConfig")
   * @JoinColumn(
   * name="wf_fieldconfig_id",
   * referencedColumnName="id",
   * nullable=false,
   * onDelete="CASCADE")
   */
  private $fieldConfig;

  /**
   * @ManyToOne(targetEntity="WFOption")
   * @JoinColumn(
   * name="wf_option_id",
   * referencedColumnName="id",
   * nullable=true,
   * onDelete="CASCADE")
   */
  private $fieldOption;

  /**
   * @var string
   * @Column(type="text", nullable=true)
   */
  private $value;

  /**
   * Constructor
   * @param $fieldConfig WFieldConfig
   * @param $option WFOption
   * @param $entryId integer
   * @param $value string
   *
   */
  public function __construct(
    WFieldConfig  $fieldConfig, $entryId, WFOption $option = null, $value = "")
  {
    $this->fieldConfig = $fieldConfig;
    $this->formConfig = $this->fieldConfig->getFormConfig();
    $this->fieldOption = $option;
    $this->entryId = $entryId;
    $this->value = $value;
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
   * Set fieldConfig
   *
   * @param WFieldConfig $fieldConfig
   * @return WFOptionEntry
   */
  public function setFieldConfig(WFieldConfig $fieldConfig)
  {
    $this->fieldConfig = $fieldConfig;
    $this->formConfig = $this->fieldConfig->getFormConfig();

    return $this;
  }

  /**
   * Get fieldConfig
   *
   * @return WFieldConfig
   */
  public function getFieldConfig()
  {
    return $this->fieldConfig;
  }

  /**
   * Get formConfig
   *
   * @return WFormConfig
   */
  public function getFormConfig()
  {
    return $this->formConfig;
  }

  /**
   * Set fieldOption
   *
   * @param WFOption $fieldOption
   * @return WFOptionEntry
   */
  public function setFieldOption(WFOption $fieldOption)
  {
    $this->fieldOption = $fieldOption;

    return $this;
  }

  /**
   * Get fieldOption
   *
   * @return WFOption
   */
  public function getFieldOption()
  {
    return $this->fieldOption;
  }

  /**
  * Set value
  *
  * @param string $value
  * @return WFOptionEntry
  */
  public function setValue($value)
  {
    $this->value = $value;
    return $this;
  }

  /**
   * Get value
   *
   * @return string 
  */
  public function getValue()
  {
    return $this->value;
  }

  /**
   * Implements jsonSerialize
   */
  public function jsonSerialize() {
    return [
      'id'   => $this->id,
      'entry_id'   => $this->entryId,
      'wf_fieldconfig_id' => $this->fieldConfig->getId(),
      'wf_option_id' => $this->fieldOption->getId(),
      'value'  => $this->value,
    ];
  }
}

