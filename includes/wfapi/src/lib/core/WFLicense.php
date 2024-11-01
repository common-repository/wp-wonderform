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
 * @Table(name = "wf_license")
 *
 * @author Wonderform <contact@wonderform.net>
 */
class WFLicense implements \JsonSerializable
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
   * @Column(type="string", name="license_key", length=255, nullable=false)
   */
  private $licenseKey;

  /**
   * @var string
   * @Column(type="text", nullable=false)
   */
  private $data;

  /**
   * @ManyToOne(targetEntity="WFProductType")
   * @JoinColumn(
   * name="wf_producttype_id",
   * nullable=false,
   * unique=true,
   * referencedColumnName="id",
   * onDelete="CASCADE")
   */
  private $productType;

  /**
   * Constructor
   * @param string $licenseKey the license key
   * @param string $data the license data
   * @param WFProductType $pt the product type
   */
  public function __construct($licenseKey, $data, WFProductType $pt)
  {
    $this->licenseKey     = $licenseKey;
    $this->data           = $data;
    $this->productType     = $pt;
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
   * @param string $licenseKey
   * @return WFLicense
   */
  public function setLicenseKey($licenseKey)
  {
    $this->licenseKey = $licenseKey;

    return $this;
  }

  /**
   * Get licenseKey
   *
   * @return string 
   */
  public function getLicenseKey()
  {
    return $this->licenseKey;
  }

  /**
   * Set data
   *
   * @param string $data
   * @return WFLicense
   */
  public function setData($data)
  {
    $this->data = $data;

    return $this;
  }

  /**
   * Get data
   *
   * @return string 
   */
  public function getData()
  {
    return $this->data;
  }

  /**
   * Set productType
   *
   * @param WFProductType $productType
   * @return WFProductType
   */
  public function setProductType(WFProductType $productType = null)
  {
    $this->productType = $productType;

    return $this;
  }

  /**
   * Get productType
   *
   * @return \WFLicense
   */
  public function getProductType()
  {
    return $this->productType;
  }

  /**
   * Implements jsonSerialize
   */
  public function jsonSerialize() {
    return [
      'id'   => $this->id,
      'license_key' => $this->licenseKey,
      'data' => $this->data
    ];
  }
}
