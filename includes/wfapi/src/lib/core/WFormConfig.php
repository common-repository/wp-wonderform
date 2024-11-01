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
* @Table(name="wf_formconfig",
* uniqueConstraints={
* @UniqueConstraint(name="wf_name_uniq",columns={"name"})
* })
*
*/
class WFormConfig  implements \JsonSerializable
{
  /**
   * @var integer
   * @Id
   * @Column(type="integer", nullable=false)
   * @GeneratedValue(strategy="AUTO")
   */
  private $id;

  /**
   * @ManyToOne(targetEntity="WFormConfig")
   * @JoinColumn(
   * name="parent_id",
   * nullable=true,
   * referencedColumnName="id",
   * onDelete="CASCADE")
   */
  private $parent;

  /**
   * @var string
   * @Column(type="string", length=64, unique=true, nullable=false)
   */
  private $name;

  /**
   * @var string
   * @Column(type="text", nullable=true)
   */
  private $attributes;

  /**
   * @ManyToOne(targetEntity="WFProductType")
   * @JoinColumn(
   * name="wf_producttype_id",
   * referencedColumnName="id",
   * nullable=false,
   * onDelete="CASCADE")
   */
  private $productType;

  /**
   * @var string
   * @Column(type="string", length=64, nullable=false)
   */
  private $title;

  /**
   * @var string
   * @Column(type="string", length=255, nullable=true)
   */
  private $description;

  /**
   * @var string
   * @Column(type="string", name="single_content_tpl", length=100, nullable=true, options={"default" = "single_content.twig"})
   */
  private $singleContentTpl;

  /**
   * @var string
   * @Column(type="string", name="archive_content_tpl", length=100, nullable=true, options={"default" = "archive_content.twig"})
   */
  private $archiveContentTpl;

  /**
   * @var string
   * @Column(type="string", name="entries_table", length=64, nullable=true)
   */
  private $entriesTable;

  /**
   * @var integer
   * @Column(type="integer", name="entries_count")
   */
  private $entriesCount;

  /**
   * @var \Doctrine\Common\Collections\Collection
   * @OneToMany(targetEntity="WFieldConfig", mappedBy="formConfig")
   */
  private $fields;

  /**
   * @ManyToOne(targetEntity="WFModule")
   * @JoinColumn(
   * name="wf_module_id",
   * referencedColumnName="id",
   * onDelete="CASCADE")
   */
  private $module;

  /**
   * @var string
   * @Column(type="string", name="content_title", length=255, nullable=true, options={"default"="{{entry.title}}"})
   */
  private $contentTitle;

  /**
   * @var string
   * @Column(type="string", name="content_slug", length=255, nullable=true, options={"default"="{{entry.name}}"})
   */
  private $contentSlug;

  /**
   * @var string
   * @Column(type="string", name="content_excerpt", length=400, nullable=true, options={"default"="{{entry.short_description}}"})
   */
  private $contentExcerpt;

  /**
   * @var string
   * @Column(type="text", name="content_body", nullable=true)
   */
  private $contentBody;

  /**
   * @var \Doctrine\Common\Collections\Collection
   * @OneToMany(targetEntity="WFormAction", mappedBy="formConfig")
   */
  private $formActions;

  /**
   * @var \Doctrine\Common\Collections\Collection
   * @OneToMany(targetEntity="WFormStep", mappedBy="formConfig")
   */
  private $formSteps;

  /**
   * @var boolean
   * @Column(type="boolean", name="front_publish_enabled", options={"default" = "0"})
   */
  private $frontPublishEnabled;

  /**
   * @var boolean
   * @Column(type="boolean", name="authentication_required")
   */
  private $authenticationRequired;

  /**
   * @var boolean
   * @Column(type="boolean")
   */
  private $published;

  /**
   * @var boolean
   * @Column(type="boolean", name="create_table", options={"default" = "1"})
   */
  private $createTable;

  /**
   * @var boolean
   * @Column(type="boolean", name="create_entries", options={"default" = "1"})
   */
  private $createEntries;

  /**
   * @var boolean
   * @Column(type="boolean", name="delete_entries", options={"default" = "1"})
   */
  private $deleteEntries;

  /**
   * @var boolean
   * @Column(type="boolean", name="search_entries", options={"default" = "1"})
   */
  private $searchEntries;

  /**
   * @var boolean
   * @Column(type="boolean", name="public_search_enabled", options={"default" = "0"})
   */
  private $publicSearchEnabled;

  /**
   * @var boolean
   * @Column(type="boolean", name="is_addon", options={"default" = "0"})
   */
  private $isAddon;

  /**
   * @var \DateTime
   * @Column(type="datetime", name="created_tms", nullable=false)
   */
  private $createdTms;

  /**
   * @var \DateTime
   * @Column(type="datetime", name="modified_tms", nullable=false)
   */
  private $modifiedTms;

  /**
   * @ManyToOne(targetEntity="WFOption")
   * @JoinColumn(
   * name="wf_optiongroup_id",
   * referencedColumnName="id",
   * onDelete="SET NULL")
   */
  private $optionGroup;

  /**
   * @ManyToOne(targetEntity="WFOption")
   * @JoinColumn(
   * name="wf_categorygroup_id",
   * referencedColumnName="id",
   * nullable=true,
   * onDelete="SET NULL")
   */
  private $categoryGroup;

  /**
   * Constructor
   * @param string $name
   * @param WFModule $module
   */
  public function __construct(
    $name, WFModule $module)
  {
    $this->name = $name;
    $this->module = $module;
    $this->fields = new ArrayCollection();
    $this->formActions = new ArrayCollection();
    $this->formSteps = new ArrayCollection();
    $this->frontPublishEnabled = False;
    $this->authenticationRequired = False;
    $this->entriesTable         = $name; // by default entriesTable = name
    $this->entriesCount         = 0;
    $this->published            = False;
    $this->createTable          = True;
    $this->createEntries        = True;
    $this->deleteEntries        = True;
    $this->searchEntries        = True;
    $this->publicSearchEnabled  = False;
    $this->isAddon              = False;

    $this->updateTimestamps();
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
   * @return WFormConfig
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
   * Set parent
   *
   * @param WFormConfig $parent
   * @return WFormConfig
   */
  public function setParent(WFormConfig $parent = null)
  {
    $this->parent = $parent;

    return $this;
  }

  /**
   * Get parent
   *
   * @return \WFormConfig
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
   * Set attributes
   *
   * @param string $attributes
   * @return WFormConfig
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
   * Set title
   *
   * @param string $title
   * @return WFormConfig
   */
  public function setTitle($title)
  {
    $this->title = $title;

    return $this;
  }

  /**
   * Get description
   *
   * @return string 
   */
  public function getDescription()
  {
    return $this->description;
  }

  /**
   * Set description
   *
   * @param string $description
   * @return WFormConfig
   */
  public function setDescription($description)
  {
    $this->description = $description;

    return $this;
  }

  /**
   * Get singleContentTpl
   *
   * @return string 
   */
  public function getSingleContentTpl()
  {
    return $this->singleContentTpl;
  }

  /**
   * Set singleContentTpl
   *
   * @param string $singleContentTpl
   * @return WFormConfig
   */
  public function setSingleContentTpl($singleContentTpl)
  {
    $this->singleContentTpl = $singleContentTpl;

    return $this;
  }

  /**
   * Get archiveContentTpl
   *
   * @return string 
   */
  public function getArchiveContentTpl()
  {
    return $this->archiveContentTpl;
  }

  /**
   * Set archiveContentTpl
   *
   * @param string $archiveContentTpl
   * @return WFormConfig
   */
  public function setArchiveContentTpl($archiveContentTpl)
  {
    $this->archiveContentTpl = $archiveContentTpl;

    return $this;
  }

  /**
   * Get entriesTable
   *
   * @return string 
   */
  public function getEntriesTable()
  {
    return $this->entriesTable;
  }

  /**
   * Set entriesTable
   *
   * @param string $entriesTable
   * @return WFormConfig
   */
  public function setEntriesTable($entriesTable)
  {
    $this->entriesTable = $entriesTable;
    return $this;
  }

  /**
   * Get entriesCount
   *
   * @return integer
   */
  public function getEntriesCount()
  {
    return $this->entriesCount;
  }

  /**
   * Set entriesCount
   *
   * @param integer $entriesCount
   * @return WFormConfig
   */
  public function setEntriesCount($entriesCount)
  {
    $this->entriesCount = $entriesCount;

    return $this;
  }

  /**
   * Get title
   *
   * @return string 
   */
  public function getTitle()
  {
    return $this->title;
  }

  /**
   * Add fields
   *
   * @param WFieldConfig $fields
   * @return WFormConfig
   */
  public function addField(WFieldConfig $fields)
  {
    $this->fields[] = $fields;

    return $this;
  }

  /**
   * Remove fields
   *
   * @param WFieldConfig $fields
   */
  public function removeField(WFieldConfig $fields)
  {
    $this->fields->removeElement($fields);
  }

  /**
   * Get fields
   *
   * @return \Doctrine\Common\Collections\Collection 
   */
  public function getFields()
  {
    return $this->fields;
  }

  /**
   * Get fields as array
   *
   * @return array
   */
  public function getFieldsAsArray()
  {
    if (!is_null($this->fields)) {
      return $this->fields->toArray();
    } else {
      return [];
    }
  }

  /**
   * Get module
   *
   * @return \WFModule
   */
  public function getModule()
  {
    return $this->module;
  }

  /**
   * Get module id
   *
   * @return integer
   */
  public function getModuleId()
  {
    return $this->module->getId();
  }

  /**
   * Get module name
   *
   * @return string
   */
  public function getModuleName()
  {
    if (!is_null($this->module)) {
      return $this->module->getName();
    } else {
      return '';
    }
  }

  /**
  * Set contentTitle
  *
  * @param string $contentTitle
  * @return WFormConfig
  */
  public function setContentTitle($contentTitle)
  {
    $this->contentTitle = $contentTitle;
    return $this;
  }

  /**
   * Get contentTitle
   *
   * @return string 
  */
  public function getContentTitle()
  {
    return $this->contentTitle;
  }

  /**
  * Set contentSlug
  *
  * @param string $contentSlug
  * @return WFormConfig
  */
  public function setContentSlug($contentSlug)
  {
    $this->contentSlug = $contentSlug;
    return $this;
  }

  /**
   * Get contentSlug
   *
   * @return string 
  */
  public function getContentSlug()
  {
    return $this->contentSlug;
  }

  /**
  * Set contentExcerpt
  *
  * @param string $contentExcerpt
  * @return WFormConfig
  */
  public function setContentExcerpt($contentExcerpt)
  {
    $this->contentExcerpt = $contentExcerpt;
    return $this;
  }

  /**
   * Get contentExcerpt
   *
   * @return string 
  */
  public function getContentExcerpt()
  {
    return $this->contentExcerpt;
  }

  /**
  * Set contentBody
  *
  * @param string $contentBody
  * @return WFormConfig
  */
  public function setContentBody($contentBody)
  {
    $this->contentBody = $contentBody;
    return $this;
  }

  /**
   * Get contentBody
   *
   * @return string 
  */
  public function getContentBody()
  {
    return $this->contentBody;
  }

  /**
   * Set dataProvider
   *
   * @param WFormConfig $dataProvider
   * @return WFormConfig
   */
  public function setDataProvider(WFormConfig $dataProvider)
  {
    $this->dataProvider = $dataProvider;

    return $this;
  }

  /**
   * Get dataProvider
   *
   * @return \WFormConfig 
   */
  public function getDataProvider()
  {
    return $this->dataProvider;
  }

  /**
   * Get dataProvider id
   *
   * @return inteher 
   */
  public function getDataProviderId()
  {
    if (!is_null($this->dataProvider)) {
      return $this->dataProvider->getId();
    } else {
      return 0;
    }
  }


  /**
   * Extract displayFields from this.attributes
   *
   * @return string 
  */
  public function extractDisplayFields()
  {
    $displayFields = array();
    $attrsStr = $this->getAttributes();
    if (!empty($attrsStr)) {
      $attrs = json_decode($attrsStr, true);
      $steps = $attrs['stepConfig']['steps'];
      foreach ($steps as $k => $v) {
        if (isset($v['order'])) {
          $order = $v['order'];
          for ($j = 0; $j < count($order); $j++) {
            $displayFields[] = $order[$j];
          }
        }
      }
    }
    return $displayFields;
  }

  /**
   * Get displayFields
   *
   * @return string 
  */
  public function getDisplayFieldsAsArray()
  {
    return $this->extractDisplayFields();
  }

  /**
   * Add formActions
   *
   * @param WFormAction $formActions
   * @return WFormConfig
   */
  public function addFormAction(WFormAction $formActions)
  {
    $this->formActions[] = $formActions;

    return $this;
  }

  /**
   * Remove formActions
   *
   * @param WFormAction $formActions
   */
  public function removeFormAction(WFormAction $formActions)
  {
    $this->formActions->removeElement($formActions);
  }

  /**
   * Get formActions
   *
   * @return \Doctrine\Common\Collections\Collection 
   */
  public function getFormActions()
  {
    return $this->formActions;
  }

  /**
   * Get formActions as array
   *
   * @return array
   */
  public function getFormActionsAsArray()
  {
    if (!is_null($this->formActions)) {
      return $this->formActions->toArray();
    } else {
      return [];
    }
  }

  /**
   * Add formSteps
   *
   * @param WFormStep $formSteps
   * @return WFormConfig
   */
  public function addFormStep(WFormStep $formSteps)
  {
    $this->formSteps[] = $formSteps;

    return $this;
  }

  /**
   * Remove formSteps
   *
   * @param WFormStep $formSteps
   */
  public function removeFormStep(WFormStep $formSteps)
  {
    $this->formSteps->removeElement($formSteps);
  }

  /**
   * Get formSteps
   *
   * @return \Doctrine\Common\Collections\Collection 
   */
  public function getFormSteps()
  {
    return $this->formSteps;
  }

  /**
   * Get formSteps as array
   *
   * @return array
   */
  public function getFormStepsAsArray()
  {
    if (!is_null($this->formSteps)) {
      return $this->formSteps->toArray();
    } else {
      return [];
    }
  }

  /**
   * Set frontPublishEnabled
   *
   * @param boolean $frontPublishEnabled
   * @return WFormConfig
   */
  public function setFrontPublishEnabled($frontPublishEnabled)
  {
    $this->frontPublishEnabled = $frontPublishEnabled;

    return $this;
  }

  /**
   * Get frontPublishEnabled
   *
   * @return boolean 
   */
  public function getFrontPublishEnabled()
  {
    return $this->frontPublishEnabled;
  }

  /**
   * Set authenticationRequired
   *
   * @param boolean $authenticationRequired
   * @return WFormConfig
   */
  public function setAuthenticationRequired($authenticationRequired)
  {
    $this->authenticationRequired = $authenticationRequired;

    return $this;
  }

  /**
   * Get authenticationRequired
   *
   * @return boolean 
   */
  public function getAuthenticationRequired()
  {
    return $this->authenticationRequired;
  }

  /**
   * Get custom
   *
   * @return boolean 
   */
  public function getCustom()
  {
    return $this->module->getName() == 'custom';
  }

  /**
   * Set published
   *
   * @param boolean $published
   * @return WFormConfig
   */
  public function setPublished($published)
  {
    $this->published = $published;

    return $this;
  }

  /**
   * Get published
   *
   * @return boolean 
   */
  public function getPublished()
  {
    return $this->published;
  }

  /**
   * Set createTable
   *
   * @param boolean $createTable
   * @return WFormConfig
   */
  public function setCreateTable($createTable)
  {
    $this->createTable = $createTable;

    return $this;
  }

  /**
   * Get createTable
   *
   * @return boolean 
   */
  public function getCreateTable()
  {
    return $this->createTable;
  }

  /**
   * Set createEntries
   *
   * @param boolean $createEntries
   * @return WFormConfig
   */
  public function setCreateEntries($createEntries)
  {
    $this->createEntries = $createEntries;

    return $this;
  }

  /**
   * Get createEntries
   *
   * @return boolean 
   */
  public function getCreateEntries()
  {
    return $this->createEntries;
  }

  /**
   * Set deleteEntries
   *
   * @param boolean $deleteEntries
   * @return WFormConfig
   */
  public function setDeleteEntries($deleteEntries)
  {
    $this->deleteEntries = $deleteEntries;

    return $this;
  }

  /**
   * Get deleteEntries
   *
   * @return boolean 
   */
  public function getDeleteEntries()
  {
    return $this->deleteEntries;
  }

  /**
   * Set searchEntries
   *
   * @param boolean $searchEntries
   * @return WFormConfig
   */
  public function setSearchEntries($searchEntries)
  {
    $this->searchEntries = $searchEntries;

    return $this;
  }

  /**
   * Get searchEntries
   *
   * @return boolean 
   */
  public function getSearchEntries()
  {
    return $this->searchEntries;
  }


  /**
   * Set publicSearchEnabled
   *
   * @param boolean $publicSearchEnabled
   * @return WFormConfig
   */
  public function setPublicSearchEnabled($publicSearchEnabled)
  {
    $this->publicSearchEnabled = $publicSearchEnabled;

    return $this;
  }

  /**
   * Get publicSearchEnabled
   *
   * @return boolean 
   */
  public function getPublicSearchEnabled()
  {
    return $this->publicSearchEnabled;
  }

  /**
   * Set isAddon
   *
   * @param boolean $isAddon
   * @return WFormConfig
   */
  public function setIsAddon($isAddon)
  {
    $this->isAddon = $isAddon;

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
   * Set createdTms
   *
   * @param \DateTime $createdTms
   * @return WFormConfig
   */
  public function setCreatedTms(\DateTime $createdTms)
  {
    $this->createdTms = $createdTms;

    return $this;
  }

  /**
   * Get createdTms
   *
   * @return \DateTime
   */
  public function getCreatedTms()
  {
    return $this->createdTms;
  }

  /**
   * Get createdTms as string
   *
   * @return string
   */
  public function getCreatedTmsAsStr()
  {
    if (!is_null($this->createdTms)) {
      return $this->createdTms->format(WFEnv::getDateTimeFormat());
    } else {
      return '';
    }
  }

  /**
   * Set modifiedTms
   *
   * @param \DateTime $modifiedTms
   * @return WFormConfig
   */
  public function setModifiedTms(\DateTime $modifiedTms)
  {
    $this->modifiedTms = $modifiedTms;

    return $this;
  }

  /**
   * Get modifiedTms
   *
   * @return \DateTime
   */
  public function getModifiedTms()
  {
    return $this->modifiedTms;
  }

  /**
   * Get modifiedTms as string
   *
   * @return string
   */
  public function getModifiedTmsAsStr()
  {
    if (!is_null($this->modifiedTms)) {
      return $this->modifiedTms->format(WFEnv::getDateTimeFormat());
    } else {
      return '';
    }
  }

  /**
   * Set productType
   *
   * @param WFProductType $productType
   * @return WFormConfig
   */
  public function setProductType($productType)
  {
    $this->productType = $productType;

    return $this;
  }

  /**
   * Get productType
   *
   * @return WFProductType
   */
  public function getProductType() {
    return $this->productType;
  }

  /**
   * Get productType id (this produttype id)
   *
   * @return integer
   */
  public function getProductTypeId() {
    return $this->productType->getId();
  }

  /**
   * Get productType name (this produttype name)
   *
   * @return string
   */
  public function getProductTypeName() {
    return $this->productType->getName();
  }

  /**
   * Get parent productType id or this producttype id
   *
   * @return integer
   */
  public function getTopProductTypeId() {
    $id = $this->productType->getId();
    if ($id < 100) {
      return $id;
    } else {
      return floor($id / 100);
    }
  }

  /**
  *
  * @ORM\PrePersist
  * @ORM\PreUpdate
  */
  public function updateTimestamps()
  {
    $this->setModifiedTms(new \DateTime('now'));

    if ($this->getCreatedTms() == null) {
      $this->setCreatedTms(new \DateTime('now'));
    }
  }

  /**
   * Get optionGroup as array
   *
   * @return integer
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
   * Set optionGroup
   *
   * @param WFOption $optionGroup
   * @return WFOption
   */
  public function setOptionGroup(WFOption $optionGroup = null)
  {
    $this->optionGroup = $optionGroup;

    return $this;
  }

  /**
   * Get categoryGroup as array
   *
   * @return integer
   */
  public function getCategoryGroupAsArray()
  {
    if (!is_null($this->categoryGroup)) {
      return $this->categoryGroup->jsonSerialize();
    } else {
      return [];
    }
  }

  /**
   * Get categoryGroup id
   *
   * @return integer
   */
  public function getCategoryGroupId()
  {
    if (!is_null($this->categoryGroup)) {
      return $this->categoryGroup->getId();
    } else {
      return 0;
    }
  }

  /**
   * Set categoryGroup
   *
   * @param WFOption $categoryGroup
   * @return WFOption
   */
  public function setCategoryGroup(WFOption $categoryGroup = null)
  {
    $this->categoryGroup = $categoryGroup;

    return $this;
  }

  /**
   * Implements jsonSerialize
   */
  public function jsonSerialize() {
    return [
      'wfc' => [
        'id'   => $this->id,
        'name' => $this->name,
        /*'entries_table' => $this->entriesTable,*/
        'description' => $this->description,
        'title' => $this->title,
        'wf_producttype_id' => $this->getProductTypeId(),
        'type' => $this->getProductTypeId(),
        'module_id' => $this->module->getId(),
        'module_name' => $this->module->getName(),
        'entries_count' => $this->entriesCount,
        'create_table' => $this->createTable,
        'create_entries' => $this->createEntries,
        'delete_entries' => $this->deleteEntries,
        'search_entries' => $this->searchEntries,
        'public_search_enabled' => $this->publicSearchEnabled,
        'is_addon' => $this->isAddon,
        'front_publish_enabled' => $this->frontPublishEnabled,
        'authentication_required' => $this->authenticationRequired,
        'custom' => $this->getCustom(),
        'published' => $this->published,
        'created_tms'=> $this->getCreatedTmsAsStr(),
        'modified_tms'=> $this->getModifiedTmsAsStr(),
        'attributes' => $this->getAttributes(),
        'actions' => $this->getFormActionsAsArray(),
        'display_fields' => $this->getDisplayFieldsAsArray(),
        'wf_optiongroup_id' => $this->getOptionGroupId(),
        'wf_optiongroup' => $this->getOptionGroupAsArray(),
        'wf_categorygroup_id' => $this->getCategoryGroupId(),
        'wf_categorygroup' => $this->getCategoryGroupAsArray(),
        'content_title' => $this->getContentTitle(),
        'content_slug' => $this->getContentSlug(),
        'content_excerpt' => $this->getContentExcerpt(),
        'content_body' => $this->getContentBody(),
        'archive_content_tpl' => $this->getArchiveContentTpl(),
        'single_content_tpl' => $this->getSingleContentTpl(),
        'fields' => $this->getFieldsAsArray()
      ]
    ];
  }
}

