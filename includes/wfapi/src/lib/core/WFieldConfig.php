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
 * @Table(name="wf_fieldconfig",
 * indexes={@Index(name="wf_setp_num_idx", columns={"step_num"})},
 * uniqueConstraints={@UniqueConstraint(name="wf_field_name_uniq", columns={"wf_formconfig_id", "name"})})
 *
 * @author Wonderform <contact@wonderform.net>
 */
class WFieldConfig implements \JsonSerializable
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
   * @Column(type="string", length=32, nullable=false)
   */
  private $name;

  /**
   * @var string
   * @Column(type="string", length=32, nullable=false)
   */
  private $type;

  /**
   * @var string
   * @Column(type="string", nullable=false)
   */
  private $label;

  /**
   * @var string
   * @Column(type="text", nullable=true)
   */
  private $legend;

  /**
   * @var string
   * @Column(type="text", nullable=true)
   */
  private $attributes;

  /**
   * @var string
   * @Column(type="text", nullable=true)
   */
  private $nexus;

  /**
   * @var string
   * @Column(type="string", length=1000, nullable=true)
   */
  private $description;

  /**
   * @var string
   * @Column(type="string", name="default_value", length=255, nullable=true)
   */
  private $defaultValue;

  /**
   * @var string
   * @Column(type="text", name="validation_schema", nullable=true)
   */
  private $validationSchema;

  /**
   * @var boolean
   * @Column(type="boolean")
   */
  private $required;

  /**
   * @var boolean
   * @Column(type="boolean")
   */
  private $uniq;

  /**
   * @var boolean
   * @Column(type="boolean")
   */
  private $searchable;

  /**
   * @var boolean
   * @Column(type="boolean")
   */
  private $editable;

  /**
   * @var boolean
   * @Column(type="boolean")
   */
  private $indexable;

  /**
   * @var integer
   * @Column(type="integer", nullable=true)
   */
  private $len;

  /**
   * @var string
   * @Column(type="string", name="input_type", length=32, nullable=true)
   */
  private $inputType;

  /**
   * @var integer
   * @Column(type="integer", length=2, options={"default" = "2"})
   */
  private $_precision;

  /**
   * @ManyToOne(targetEntity="WFormConfig", inversedBy="fields")
   * @JoinColumn(
   * name="wf_formconfig_id",
   * referencedColumnName="id",
   * onDelete="CASCADE")
   */
  private $formConfig;

  /**
   * @ManyToOne(targetEntity="WFOption")
   * @JoinColumn(
   * name="wf_optiongroup_id",
   * referencedColumnName="id",
   * onDelete="SET NULL")
   */
  private $optionGroup;

  /**
   * @ManyToOne(targetEntity="WFormConfig")
   * @JoinColumn(
   * name="wf_ref_formconfig_id",
   * referencedColumnName="id",
   * onDelete="SET NULL")
   */
  private $refFormConfig;

  /**
   * @var boolean
   * @Column(type="boolean")
   */
  private $visible;

  /**
   * @var boolean
   * @Column(type="boolean", name="create_column", options={"default" = "1"})
   */
  private $createColumn;

  /**
   * @var boolean
   * @Column(type="boolean", name="backend_filled", options={"default" = "0"})
   */
  private $backendFilled;

  /**
   * @var boolean
   * @Column(type="boolean", name="is_addon", options={"default" = "0"})
   */
  private $isAddon;

  /**
   * @var boolean
   * @Column(type="boolean", name="is_category", options={"default" = "0"})
   */
  private $isCategory;

  /**
   * @ManyToOne(targetEntity="WFieldConfig")
   * @JoinColumn(
   * name="parent_id",
   * nullable=true,
   * referencedColumnName="id",
   * onDelete="SET NULL")
   */
  private $parent;

  /**
   * @var integer
   *
   * @Column(name="step_num", type="integer", nullable=true, options={"default" = "1"})
   */
  private $stepNum;


  /**
   * Constructor
   * @param array attrs
   */
  public function __construct($attrs = null)
  {
    if (is_null($attrs)) {
      $this->name = null;
      $this->type = 'string';
      $this->label = 'NO_LABEL';
      $this->legend = '';
      $this->required = False;
      $this->uniq = False;
      $this->searchable = False;
      $this->editable = True;
      $this->indexable = False;
      $this->backendFilled = False;
      $this->isAddon = False;
      $this->isCategory = False;
      $this->visible = True;
      $this->createColumn  = True;
      $this->len = 255;
      $this->stepNum = 1;
      $this->_precision = 0;
    } else {
      $this->set($attrs);
    }
  }

  /**
   * set new properties
   * @param array attrs
   */
  public function set($attrs = null)
  {
    if (!is_null($attrs)) {
      if (is_array($attrs) && array_key_exists('name', $attrs)) {
        $this->name = $attrs['name'];
      } else {
        $this->name = null;
      }
      if (is_array($attrs) && array_key_exists('type', $attrs)) {
        $this->type = $attrs['type'];
      } else {
        $this->type = 'string';
      }
      if (is_array($attrs) && array_key_exists('label', $attrs)) {
        $this->label  = $attrs['label'];
      } else {
        $this->label  = 'NO_LABEL';
      }
      if (is_array($attrs) && array_key_exists('legend', $attrs)) {
        $this->legend  = $attrs['legend'];
      } else {
        $this->legend  = '';
      }
      if (is_array($attrs) && array_key_exists('required', $attrs)) {
        $this->required  =
          intval($attrs['required']) == 1 ? True : False;
      } else {
        $this->required  = False;
      }
      if (is_array($attrs) && array_key_exists('uniq', $attrs)) {
        $this->uniq  =
          intval($attrs['uniq']) == 1 ? True : False;
      } else {
        $this->uniq  = False;
      }
      if (is_array($attrs) && array_key_exists('searchable', $attrs)) {
        $this->searchable  =
          intval($attrs['searchable']) == 1 ? True : False;
      } else {
        $this->searchable  = False;
      }
      if (is_array($attrs) && array_key_exists('editable', $attrs)) {
        $this->editable  =
          intval($attrs['editable']) == 1 ? True : False;
      } else {
        $this->editable  = True;
      }
      if (is_array($attrs) && array_key_exists('indexable', $attrs)) {
        $this->indexable  =
          intval($attrs['indexable']) == 1 ? True : False;
      } else {
        $this->indexable = False;
      }
      if (is_array($attrs) && array_key_exists('backend_filled', $attrs)) {
        $this->backendFilled  =
          intval($attrs['backend_filled']) == 1 ? True : False;
      } else {
        $this->backendFilled = False;
      }
      if (is_array($attrs) && array_key_exists('is_category', $attrs)) {
        $this->isCategory  =
          intval($attrs['is_category']) == 1 ? True : False;
      } else {
        $this->isCategory = False;
      }
      if (is_array($attrs) && array_key_exists('len', $attrs)) {
        $this->len  = $attrs['len'];
      } else {
        $this->len  = 255;
      }
      if (is_array($attrs) && array_key_exists('step_num', $attrs)) {
        $this->stepNum  = $attrs['step_num'];
      } else {
        $this->stepNum  = 1;
      }
      if (is_array($attrs) && array_key_exists('visible', $attrs)) {
        $this->visible  =
          intval($attrs['visible']) == 1 ? True : False;
      } else {
        $this->visible  = True;
      }
      if (is_array($attrs) && array_key_exists('create_column', $attrs)) {
        $this->createColumn  =
          intval($attrs['create_column']) == 1 ? True : False;
      } else {
        $this->createColumn  = True;
      }
      if (is_array($attrs) && array_key_exists('precision', $attrs)) {
        $this->_precision  = $attrs['precision'];
      }
      if (is_array($attrs) && array_key_exists('description', $attrs)) {
        $this->description  = $attrs['description'];
      }
      if (is_array($attrs) && array_key_exists('default_value', $attrs)) {
        if ($this->type == WFDataTypes::WF_BOOLEAN
          || $this->type == WFDataTypes::WF_NUMBER) {
          $this->defaultValue  = intval($attrs['default_value']);
        } else {
          $this->defaultValue  = $attrs['default_value'];
        }
      }
      if (is_array($attrs) && array_key_exists('validation_schema', $attrs)) {
        $this->validationSchema  = $attrs['validation_schema'];
      }
      if (is_array($attrs) && array_key_exists('input_type', $attrs)) {
        $this->inputType = $attrs['input_type'];
      }
    }
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
   * @return WFieldConfig
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
   * Get nexus name
   *
   * @return string 
   */
  public function getNexusName()
  {
    return $this->name.'_nexus';
  }

  /**
   * Get name as twig template
   *
   * @return string 
   */
  public function getNameAsTemplate()
  {
    return '{{ '.$this->name. ' }}';
  }

  /**
   * Get nexus name as twig template
   *
   * @return string 
   */
  public function getNexusNameAsTemplate()
  {
    return '{{ '.$this->getNexusName(). ' }}';
  }

  /**
   * Set type
   *
   * @param string $type
   * @return WFieldConfig
   */
  public function setType($type)
  {
    $this->type = $type;
    return $this;
  }

  /**
   * Get type
   *
   * @return string 
   */
  public function getType()
  {
      return $this->type;
  }

  /**
   * Set inputType
   *
   * @param string $inputType
   * @return WFieldConfig
   */
  public function setInputType($inputType)
  {
    $this->inputType = $inputType;
    return $this;
  }

  /**
   * Get inputType
   *
   * @return string 
   */
  public function getInputType()
  {
      return $this->inputType;
  }

  /**
   * Set label
   *
   * @param string $label
   * @return WFieldConfig
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
   * Set legend
   *
   * @param string $legend
   * @return WFieldConfig
   */
  public function setLegend($legend)
  {
    $this->legend = $legend;

    return $this;
  }

  /**
   * Get legend
   *
   * @return string 
   */
  public function getLegend()
  {
    return $this->legend;
  }

  /**
   * Set attributes
   *
   * @param string $attributes
   * @return WFieldConfig
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
   * Set nexus
   *
   * @param string $nexus
   * @return WFieldConfig
   */
  public function setNexus($nexus)
  {
    $this->nexus = $nexus;

    return $this;
  }

  /**
   * Get nexus
   *
   * @return string 
   */
  public function getNexus()
  {
    return $this->nexus;
  }

  /**
   * Set required
   *
   * @param boolean $required
   * @return WFieldConfig
   */
  public function setRequired($required)
  {
    $this->required = $required;

    return $this;
  }

  /**
   * Get required
   *
   * @return boolean 
   */
  public function getRequired()
  {
    return $this->required;
  }

  /**
   * Set uniq
   *
   * @param boolean $uniq
   * @return WFieldConfig
   */
  public function setUniq($uniq)
  {
    $this->uniq = $uniq;

    return $this;
  }

  /**
   * Get uniq
   *
   * @return boolean 
   */
  public function getUniq()
  {
    return $this->uniq;
  }

  /**
   * Set searchable
   *
   * @param boolean $searchable
   * @return WFieldConfig
   */
  public function setSearchable($searchable)
  {
    $this->searchable= $searchable;

    return $this;
  }

  /**
   * Get searchable
   *
   * @return boolean 
   */
  public function getSearchable()
  {
    return $this->searchable;
  }

  /**
   * Set editable
   *
   * @param boolean $editable
   * @return WFieldConfig
   */
  public function setEditable($editable)
  {
    $this->editable= $editable;

    return $this;
  }

  /**
   * Get editable
   *
   * @return boolean 
   */
  public function getEditable()
  {
    return $this->editable;
  }

  /**
   * Set indexable
   *
   * @param boolean $indexable
   * @return WFieldConfig
   */
  public function setIndexable($indexable)
  {
    $this->indexable= $indexable;

    return $this;
  }

  /**
   * Get indexable
   *
   * @return boolean 
   */
  public function getIndexable()
  {
    return $this->indexable;
  }

  /**
   * Set backendFilled
   *
   * @param boolean $backendFilled
   * @return WFieldConfig
   */
  public function setBackendFilled($backendFilled)
  {
    $this->backendFilled= $backendFilled;

    return $this;
  }

  /**
   * Get backendFilled
   *
   * @return boolean 
   */
  public function getBackendFilled()
  {
    return $this->backendFilled;
  }

  /**
   * Set isAddon
   *
   * @param boolean $isAddon
   * @return WFieldConfig
   */
  public function setIsAddon($isAddon)
  {
    $this->isAddon= $isAddon;

    return $this;
  }

  /**
   * Get isAddon
   *
   * @return boolean 
   */
  public function getIsAddon()
  {
    return $this->isAddon;
  }

  /**
   * Set isCategory
   *
   * @param boolean $isCategory
   * @return WFieldConfig
   */
  public function setIsCategory($isCategory)
  {
    $this->isCategory= $isCategory;

    return $this;
  }

  /**
   * Get isCategory
   *
   * @return boolean 
   */
  public function getIsCategory()
  {
    return $this->isCategory;
  }


  /**
   * Set len
   *
   * @param integer $len
   * @return WFieldConfig
   */
  public function setLen($len)
  {
    $this->len = $len;

    return $this;
  }

  /**
   * Get len
   *
   * @return integer 
   */
  public function getLen()
  {
    return $this->len;
  }

  /**
   * Set stepNum
   *
   * @param integer $stepNum
   * @return WFieldConfig
   */
  public function setStepNum($stepNum)
  {
    $this->stepNum = $stepNum;

    return $this;
  }

  /**
   * Get stepNum
   *
   * @return integer 
   */
  public function getStepNum()
  {
    return $this->stepNum;
  }

  /**
   * Set _precision
   *
   * @param integer $_precision
   * @return WFieldConfig
   */
  public function setPrecision($_precision)
  {
    $this->_precision = $_precision;

    return $this;
  }

  /**
   * Get _precision
   *
   * @return integer 
   */
  public function getPrecision()
  {
    return $this->_precision;
  }


  /**
   * Set formConfig
   *
   * @param WFormConfig $formConfig
   * @return WFieldConfig
   */
  public function setFormConfig(WFormConfig $formConfig)
  {
    $this->formConfig = $formConfig;

    return $this;
  }

  /**
   * Get formConfig
   *
   * @return \WFormConfig 
   */
  public function getFormConfig()
  {
    return $this->formConfig;
  }

  /**
   * Set refFormConfig
   *
   * @param WFormConfig $refFormConfig
   * @return WFieldConfig
   */
  public function setRefFormConfig(WFormConfig $refFormConfig)
  {
    $this->refFormConfig = $refFormConfig;

    return $this;
  }

  /**
   * Get refFormConfig
   *
   * @return \WFormConfig 
   */
  public function getRefFormConfig()
  {
    return $this->refFormConfig;
  }

  /**
   * Get refFormConfig name
   *
   * @return string
   */
  public function getRefFormConfigName()
  {
    if ($this->isForeignField()) {
      return $this->refFormConfig->getName();
    } else {
      return "";
    }
  }

  /**
   * check if field is a foreign field
   * (has reference to a given form config).
   * @return true when field is a foreign field
   */
  public function isForeignField()
  {
    return !is_null($this->refFormConfig);
  }

  /**
   * Set length
   *
   * @param integer $length
   * @return WFieldConfig
   */
  public function setLength($length)
  {
    $this->length = $length;

    return $this;
  }

  /**
   * Get length
   *
   * @return integer 
   */
  public function getLength()
  {
    return $this->length;
  }

  /**
   * Get defaultValue
   *
   * @return integer 
   */
  public function getDefaultValue()
  {
    return $this->defaultValue;
  }

  /**
   * Set visible
   *
   * @param boolean $visible
   * @return WFieldConfig
   */
  public function setVisible($visible)
  {
    $this->visible= $visible;

    return $this;
  }

  /**
   * Get visible
   *
   * @return boolean 
   */
  public function getVisible()
  {
    return $this->visible;
  }

  /**
   * Set createColumn
   *
   * @param boolean $createColumn
   * @return WFieldConfig
   */
  public function setCreateColumn($createColumn)
  {
    $this->createColumn = $createColumn;

    return $this;
  }

  /**
   * Get createColumn
   *
   * @return boolean 
   */
  public function getCreateColumn()
  {
    return $this->createColumn;
  }

  /**
   * Set parent
   *
   * @param WFieldConfig $parent
   * @return WFieldConfig
   */
  public function setParent(WFieldConfig $parent = null)
  {
    $this->parent = $parent;

    return $this;
  }

  /**
   * Get parent
   *
   * @return \WFieldConfig
   */
  public function getParent()
  {
    return $this->parent;
  }

  /**
   * Get parent Id
   *
   * @return integer
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
   * Get corresponding pĥp type
   * @return string
   */
  public function getPhpType() {
    switch ($this->type) {
      case WFDataTypes::WF_NUMBER:
      case WFDataTypes::WF_INTEGER:
      case WFDataTypes::WF_PROD_CATEGORY:
      case WFDataTypes::WF_EVNT_TYPE:
      case WFDataTypes::WF_CART_PROD_QTY:
      case WFDataTypes::WF_CART_PROD_ID:
      case WFDataTypes::WF_EVNT_CATEGORY:
        return 'integer';

      case WFDataTypes::WF_DATE:
      case WFDataTypes::WF_TIME:
      case WFDataTypes::WF_DATETIME:
      case WFDataTypes::WF_EVNT_START_TMS:
      case WFDataTypes::WF_EVNT_END_TMS:
        return '\DateTime';

      case WFDataTypes::WF_BOOLEAN:
        return 'boolean';

      case WFDataTypes::WF_BINARY:
        return 'resource';

      case WFDataTypes::WF_OBJECT:
        return 'resource';

      case WFDataTypes::WF_ARRAY:
        return 'array';

      default:
        return 'string';
    }
  }

  /**
   * Get corresponding database type
   * @return string
   */
  public function getDbType() {
    switch ($this->type) {
      case WFDataTypes::WF_NUMBER:
      case WFDataTypes::WF_INTEGER:
      case WFDataTypes::WF_PROD_CATEGORY:
      case WFDataTypes::WF_EVNT_TYPE:
      case WFDataTypes::WF_CART_PROD_QTY:
      case WFDataTypes::WF_CART_PROD_ID:
      case WFDataTypes::WF_EVNT_CATEGORY:
        return 'integer';

      case WFDataTypes::WF_TIME:
        return 'time';

      case WFDataTypes::WF_DATE:
      case WFDataTypes::WF_DATETIME:
      case WFDataTypes::WF_EVNT_START_TMS:
      case WFDataTypes::WF_EVNT_END_TMS:
        return 'datetime';

      case WFDataTypes::WF_BOOLEAN:
        return 'boolean';

      case WFDataTypes::WF_BINARY:
      case WFDataTypes::WF_OBJECT:
        return 'blob';

      case WFDataTypes::WF_ARRAY:
        return 'json_array';

      case WFDataTypes::WF_JSON:
        return 'text';

      case WFDataTypes::WF_HIDDEN:
        return 'hidden';

      case WFDataTypes::WF_DECIMAL:
      case WFDataTypes::WF_PROD_PRICE:
      case WFDataTypes::WF_PROD_DISCOUNTED_PRICE:
      case WFDataTypes::WF_PROD_BOOK_PRICE:
      case WFDataTypes::WF_PROD_RENTAL_PRICE:
      case WFDataTypes::WF_ORDR_TOTAL_AMOUNT:
      case WFDataTypes::WF_CART_PROD_PRICE:
        return 'decimal';

      case WFDataTypes::WF_STRING:
      case WFDataTypes::WF_PASSWORD:
      case WFDataTypes::WF_IP_ADDRESS:
      case WFDataTypes::WF_MAC_ADDRESS:
      case WFDataTypes::WF_EMAIL:
      case WFDataTypes::WF_FILE:
      case WFDataTypes::WF_IMAGE:
      case WFDataTypes::WF_URL:
      case WFDataTypes::WF_REGEXP:
      case WFDataTypes::WF_ANY:
      case WFDataTypes::WF_PROD_TITLE:
      case WFDataTypes::WF_EVNT_LOCATION:
      case WFDataTypes::WF_EVNT_TITLE:
      case WFDataTypes::WF_USR_LOGIN:
      case WFDataTypes::WF_USR_LOGIN_METHOD:
      case WFDataTypes::WF_USR_LOGIN_CONFIRM:
      case WFDataTypes::WF_USR_PASSWORD:
      case WFDataTypes::WF_USR_PASSWORD_CONFIRM:
      case WFDataTypes::WF_USR_EMAIL:
      case WFDataTypes::WF_USR_EMAIL_CONFIRM:
        return 'string';

      default:
        return 'text';
    }
  }

  /**
   * Check if field is a select field
   * @return true if field is a select field
   */
  public function isSelectField() {
    return ($this->getType() == WFDataTypes::WF_SELECT_SINGLE
      || $this->getType() == WFDataTypes::WF_SELECT_MULTIPLE);
  }

  /**
   * Get optionGroup as array
   *
   * @return array
   */
  public function getOptionGroupAsArray()
  {
    if (!is_null($this->optionGroup)) {
      return $this->optionGroup->jsonSerialize();
    } else {
      return [];
    }
  }

  /**
   * Get optionGroup id
   *
   * @return integer
   */
  public function getOptionGroupId()
  {
    if (!is_null($this->optionGroup)) {
      return $this->optionGroup->getId();
    } else {
      return 0;
    }
  }

  /**
   * Implements jsonSerialize
   */
  public function jsonSerialize() {
    return [
      'id'   => $this->id,
      'wf_formconfig_id' => $this->getFormConfig()->getId(),
      'name' => $this->name,
      'nexus_name' => $this->getNexusName(),
      'name_template' => $this->getNameAsTemplate(),
      'nexus_template' => $this->getNexusNameAsTemplate(),
      'label' => $this->label,
      'type' => $this->type,
      'required' => $this->required,
      'visible' => $this->visible,
      'backend_filled' => $this->backendFilled,
      'attributes' => $this->attributes,
      'nexus' => $this->nexus,
      'create_column' => $this->createColumn,
      'legend' => $this->legend,
      'searchable' => $this->searchable,
      'editable' => $this->editable,
      'indexable' => $this->indexable,
      'is_addon' => $this->isAddon,
      'is_category' => $this->isCategory,
      'uniq' => ($this->uniq) ? 'true' : 'false',
      'is_foreign_field' => $this->isForeignField(),
      'wf_ref_formconfig_name' => $this->getRefFormConfigName(),
      'len' => $this->len,
      'input_type' => $this->inputType,
      'validation_schema' => $this->validationSchema,
      'wf_optiongroup_id' => $this->getOptionGroupId(),
      'wf_optiongroup' => $this->getOptionGroupAsArray(),
      'wf_producttype_id' => $this->getFormConfig()->getProductTypeId(),
      'parent_id' => $this->getParentId(),
      'step_num' => $this->getStepNum()
    ];
  }
}
