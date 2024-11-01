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

require_once __DIR__.'/WFDataTypes.php';

/**
 * @Entity
 * @Table(name="wf_option",
 * indexes={@Index(columns={"name", "label"})})
 * Field option is used to provide a list of choices available for a field that 
 * the client can use to set the field value. 
 *
 * @author Wonderform <contact@wonderform.net>
 */
class WFOption implements \JsonSerializable
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
   * @Column(type="string", length=100, unique=true, nullable=false)
   */
  private $name;

  /**
   * @var string
   * @Column(type="string", nullable=false)
   */
  private $label;

  /**
   * @var string
   * @Column(type="text", nullable=true)
   */
  private $value;

  /**
  /**
   * @ManyToOne(targetEntity="WFOption")
   * @JoinColumn(
   * name="wf_optiongroup_id",
   * nullable=true,
   * referencedColumnName="id",
   * onDelete="CASCADE")
   */
  private $optionGroup;

  /**
   * @var integer
   * @Column(type="integer", name="options_count")
   */
  private $optionsCount;

  /**
   * @ManyToOne(targetEntity="WFOption")
   * @JoinColumn(
   * name="parent_id",
   * nullable=true,
   * referencedColumnName="id",
   * onDelete="CASCADE")
   */
  private $parent;

  /**
   * @var integer
   * @Column(type="integer", name="subgroups_count")
   */
  private $subGroupsCount;

  /**
   * @var string
   * @Column(type="text", nullable=true)
   */
  private $attributes;

  /**
   * @var boolean
   * @Column(type="boolean", name="is_private")
   */
  private $isPrivate;

  /**
   * @ManyToOne(targetEntity="WFOption")
   * @JoinColumn(
   * name="tree_id",
   * nullable=true,
   * referencedColumnName="id",
   * onDelete="CASCADE")
   */
  private $tree;

  /**
   * Constructor
   * @param string name the option name
   * @param boolean $isPrivate
   */
  public function __construct($name, $label, $isPrivate = false)
  {
    $this->name               = $name;
    $this->label              = $label;
    $this->subGroupsCount     = 0;
    $this->optionsCount       = 0;
    $this->isPrivate          = $isPrivate;
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
   * Set name
   *
   * @param string $name
   * @return WFOptio
   */
  public function setName($name)
  {
    $this->name = $name;

    return $this;
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
   * Set label
   *
   * @param string $label
   * @return WFOptio
   */
  public function setLabel($label)
  {
    $this->label = $label;

    return $this;
  }

  /**
   * Get label
   *
   * @return string 
   */
  public function getLabel()
  {
    return $this->label;
  }

  /**
  * Set value
  *
  * @param string $value
  * @return WFOption
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
   * Set optionGroup
   *
   * @param WFOption $optionGroup
   * @return WFOptio
   */
  public function setOptionGroup(WFOption $optionGroup = null)
  {
    $this->optionGroup = $optionGroup;

    return $this;
  }

  /**
   * Get optionGroup
   *
   * @return \WFOption 
   */
  public function getOptionGroup()
  {
    return $this->optionGroup;
  }

  /**
   * Set parent
   *
   * @param WFOption $parent
   * @return WFOptio
   */
  public function setParent(WFOption $parent = null)
  {
    $this->parent = $parent;

    return $this;
  }

  /**
   * Get parent
   *
   * @return \WFOption
   */
  public function getParent()
  {
    return $this->parent;
  }

  /**
   * Get parent Id
   *
   * @return \WFOption
   */
  public function getParentId()
  {
    if (!is_null($this->parent)) {  
      return $this->parent->getId();
    } else {
      return 0;
    }
  }

  /**
   * Set tree
   *
   * @param WFOption $tree
   * @return WFOptio
   */
  public function setTree(WFOption $tree = null)
  {
    $this->tree = $tree;

    return $this;
  }

  /**
   * Get tree
   *
   * @return \WFOption
   */
  public function getTree()
  {
    return $this->tree;
  }

  /**
   * Get tree identifier
   *
   * @return integer
   */
  public function getTreeId()
  {
    if (!is_null($this->tree)) {
      return $this->tree->getId();
    } else {
      return 0;
    }
  }

  /**
   * Get subGroupsCount
   *
   * @return integer
   */
  public function getSubGroupsCount()
  {
    return $this->subGroupsCount;
  }

  /**
   * Set subGroupsCount
   *
   * @param integer $subGroupsCount
   * @return WFormConfig
   */
  public function setSubGroupsCount($subGroupsCount)
  {
    $this->subGroupsCount = $subGroupsCount;

    return $this;
  }

  /**
   * Get optionsCount
   *
   * @return integer
   */
  public function getOptionsCount()
  {
    return $this->optionsCount;
  }

  /**
   * Set optionsCount
   *
   * @param integer $optionsCount
   * @return WFOption
   */
  public function setOptionsCount($optionsCount)
  {
    $this->optionsCount = $optionsCount;

    return $this;
  }


  /**
  * Set attributes
  *
  * @param string $attributes
  * @return WFOption
  */
  public function setAttributes($attributes)
  {
    $this->attributes = $attributes;
    return $this;
  }

  /**
   * Get attributes
   *
   * @return string 
  */
  public function getAttributes()
  {
    return $this->attributes;
  }

  /**
   * Set isPrivate
   *
   * @param boolean $isPrivate
   * @return WFOption
   */
  public function setIsPrivate($isPrivate)
  {
    $this->isPrivate = $isPrivate;

    return $this;
  }

  /**
   * Get isPrivate
   *
   * @return boolean 
   */
  public function getIsPrivate()
  {
    return $this->isPrivate;
  }

  /**
   * Implements jsonSerialize
   */
  public function jsonSerialize() {
    return [
      'id'   => $this->id,
      'label' => $this->label,
      'name' => $this->name,
      'is_private' => $this->isPrivate,
      'value' => $this->value,
      'options_count' => $this->optionsCount,
      'subgroups_count' => $this->subGroupsCount,
      'attributes' => $this->getAttributes(),
      'parent_id' => $this->getParentId()
    ];
  }
}
