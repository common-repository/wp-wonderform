<?php

/*
* This file is part of the WonderForm package.
*
* (c) Wonderform <contact@wonderform.net>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

namespace WF\Lib\Post;

require_once(__DIR__.'/../core/WFormConfig.php');
require_once __DIR__.'/../core/WFDataTypes.php';
require_once __DIR__.'/../core/WFieldConfig.php';

use Doctrine\Common\Collections\ArrayCollection;

use WF\Lib\Core\WFormConfig;
use WF\Lib\Core\WFieldConfig;
use WF\Lib\Core\WFDataTypes;
use WF\Lib\Core\WFEnv;

/**
 * @Entity
 * @Table(name="wf_formpost",
 * indexes={@Index(name="post_wf_formentry_id_idx", columns={"wf_formentry_id"})},
 * uniqueConstraints={
 * @UniqueConstraint(name="wf_wf_formentry_id_uniq",
 * columns={"wf_formconfig_id", "wf_formentry_id"})},
 * )
 *
 * @author Wonderform <contact@wonderform.net>
 */
class WFormPost  implements \JsonSerializable
{
  /**
   * @var integer
   * @Id
   * @Column(type="integer", nullable=false)
   * @GeneratedValue(strategy="AUTO")
   */
  private $id;

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
   * @var integer
   * @Column(type="integer", name="wf_formentry_id", nullable=false)
   */
  private $formEntryId;

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
   * @var string
   * @Column(type="text", nullable=true)
   */
  private $attributes;

  /**
   * @var boolean
   *
   * @Column(name="featured", type="boolean", nullable=true,  options={"default" = "0"})
   */
  private $featured = '0';

  /**
   * @var boolean
   *
   * @Column(name="review", type="boolean", nullable=true)
   */
  private $review = '0';

  /**
   * @var boolean
   *
   * @Column(name="status", type="boolean", nullable=true)
   */
  private $status = '1';

  /**
   * @var integer
   *
   * @Column(name="one_star_count", type="integer", nullable=true)
   */
  private $oneStarCount = '0';

  /**
   * @var integer
   *
   * @Column(name="two_star_count", type="integer", nullable=true)
   */
  private $twoStarCount = '0';

  /**
   * @var integer
   *
   * @Column(name="three_star_count", type="integer", nullable=true)
   */
  private $threeStarCount = '0';

  /**
   * @var integer
   *
   * @Column(name="four_star_count", type="integer", nullable=true)
   */
  private $fourStarCount = '0';

  /**
   * @var integer
   *
   * @Column(name="five_star_count", type="integer", nullable=true)
   */
  private $fiveStarCount = '0';

  /**
   * Constructor
   */
  public function __construct()
  {
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
   * Set formConfig
   *
   * @param WFormConfig $formConfig
   * @return WFormPost
   */
  public function setFormConfig(WFormConfig $formConfig = null)
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
   * Set formEntryId
   *
   * @param integer $formEntryId
   * @return WFieldConfig
   */
  public function setFormEntryId($formEntryId)
  {
    $this->formEntryId = $formEntryId;

    return $this;
  }

  /**
   * Get formEntryId
   *
   * @return integer 
   */
  public function getFormEntryId()
  {
    return $this->formEntryId;
  }

  /**
   * Set createdTms
   *
   * @param \DateTime $createdTms
   * @return WFormPost
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
   * Set modifiedTms
   *
   * @param \DateTime $modifiedTms
   * @return WFormPost
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
   * Implements jsonSerialize
   */
  public function jsonSerialize() {
    return [
      'id'   => $this->id,
      'created_tms'=> $this->getCreatedTms()->format(WFEnv::getDateTimeFormat()),
      'modified_tms'=> $this->getModifiedTms()->format(WFEnv::getDateTimeFormat()),
      'wf_formentry_id' => $this->formEntryId,
      'attributes' => $this->attributes,
    ];
  }
}

