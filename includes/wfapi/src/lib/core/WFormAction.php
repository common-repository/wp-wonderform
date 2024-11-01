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
 * @Table(name="wf_formaction")
 *
 * @author Wonderform <contact@wonderform.net>
 */
class WFormAction  implements \JsonSerializable
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
   * @Column(type="string", length=32, nullable=true)
   */
  private $title = '';

  /**
   * @ManyToOne(targetEntity="WFormConfig", inversedBy="formActions")
   * @JoinColumn(
   * name="wf_formconfig_id",
   * nullable=true,
   * referencedColumnName="id",
   * onDelete="CASCADE")
   */
  private $formConfig;

  /**
   * @ManyToOne(targetEntity="WFormActionType")
   * @JoinColumn(
   * name="wf_formactiontype_id",
   * nullable=false,
   * referencedColumnName="id",
   * onDelete="CASCADE")
   */
  private $formActionType;

  /**
   * @var string
   * @Column(type="string", length=255, nullable=true)
   */
  private $url = '';

  /**
   * @var string
   * @Column(type="string", name="return_url", length=255, nullable=true)
   */
  private $returnUrl = '';

  /**
   * @var string
   * @Column(type="string", name="mail_to", length=255, nullable=true)
   */
  private $mailTo = '';

  /**
   * @var string
   * @Column(type="string", name="mail_from", length=255, nullable=true)
   */
  private $mailFrom = ''; 

  /**
   * @var string
   * @Column(type="text", name="mail_cc", nullable=true)
   */
  private $mailCc = '';

  /**
   * @var string
   * @Column(type="text", name="mail_bcc", nullable=true)
   */
  private $mailBcc = '';

  /**
   * @var string
   * @Column(type="string", name="mail_subject", length=255, nullable=true)
   */
  private $mailSubject = '';

  /**
   * @var string
   * @Column(type="text", name="mail_body", nullable=true)
   */
  private $mailBody = '';

  /**
   * @var string
   * @Column(type="text", name="mail_attachments", nullable=true)
   */
  private $mailAttachments = '';

  /**
   * @var string
   *  @Column(type="text", name="attributes", nullable=true)
   */
  private $attributes ='';

  /**
   * @var string
   * @Column(type="string", name="template_name", length=64, nullable=true)
   */
  private $templateName = '';


  /**
   * Constructor
   * @param WFormActionType $actionType
   */
  public function __construct()
  {
    $this->formConfig = null;
    $this->formActionType = null;
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
   * @param WFormActionType $formConfig
   * @return WFormAction
   */
  public function setFormConfig($formConfig)
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
   * Get formActionType
   *
   * @return WFormActionType
   */
  public function getFormActionType()
  {
    return $this->formActionType;
  }

  /**
   * Set formActionType
   *
   * @param WFormActionType $formActionType
   * @return WFormAction
   */
  public function setFormActionType($formActionType)
  {
    $this->formActionType = $formActionType;
    return $this;
  }

  /**
   * Set url
   *
   * @param string $url
   * @return WFormAction
   */
  public function setUrl($url)
  {
    $this->url = $url;

    return $this;
  }

  /**
   * Get url
   *
   * @return string 
   */
  public function getUrl()
  {
    return $this->url;
  }


  /**
   * Set title
   *
   * @param string $title
   * @return WFormAction
   */
  public function setTitle($title)
  {
    $this->title = $title;

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
   * Get returnUrl
   *
   * @return string 
   */
  public function getReturnUrl()
  {
    return $this->returnUrl;
  }

  /**
   * Set returnUrl
   *
   * @param string $returnUrl
   * @return WFormAction
   */
  public function setReturnUrl($returnUrl)
  {
    $this->returnUrl = $returnUrl;

    return $this;
  }

  /**
   * Set mailSubject
   *
   * @param string $mailSubject
   * @return WFormAction
   */
  public function setMailSubject($mailSubject)
  {
    $this->mailSubject = $mailSubject;

    return $this;
  }

  /**
   * Get mailSubject
   *
   * @return string 
   */
  public function getMailSubject()
  {
    return $this->mailSubject;
  }

  /**
   * Set mailFrom
   *
   * @param string $mailFrom
   * @return WFormAction
   */
  public function setMailFrom($mailFrom)
  {
    $this->mailFrom = $mailFrom;

    return $this;
  }

  /**
   * Get mailFrom
   *
   * @return string 
   */
  public function getMailFrom()
  {
    return $this->mailFrom;
  }

  /**
   * Set mailTo
   *
   * @param string $mailTo
   * @return WFormAction
   */
  public function setMailTo($mailTo)
  {
    $this->mailTo = $mailTo;

    return $this;
  }

  /**
   * Get mailTo
   *
   * @return string 
   */
  public function getMailTo()
  {
    return $this->mailTo;
  }

  /**
   * Get mailCc
   *
   * @return string 
   */
  public function getMailCc()
  {
    return $this->mailCc;
  }

  /**
   * Get mailBcc
   *
   * @return string 
   */
  public function getMailBcc()
  {
    return $this->mailBcc;
  }

  /**
   * Get mailBody
   *
   * @return string 
   */
  public function getMailBody()
  {
    return $this->mailBody;
  }

  /**
   * Get mailAttachments
   *
   * @return string 
   */
  public function getMailAttachments ()
  {
    return $this->mailAttachments;
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
  * Set templateName
  *
  * @param string $templateName
  * @return WFormConfig
  */
  public function setTemplateName($templateName)
  {
    $this->templateName = $templateName;
    return $this;
  }

  /**
   * Get templateName
   *
   * @return string 
  */
  public function getTemplateName()
  {
    return $this->templateName;
  }

  /**
   * Implements jsonSerialize
   */
  public function jsonSerialize() {
    return [
      'id'   => $this->id,
      'title'  => $this->title,
      'mail_to'  => $this->mailTo,
      'mail_from'  => $this->mailFrom,
      'mail_cc'  => $this->mailCc,
      'mail_bcc'  => $this->mailBcc,
      'mail_subject'  => $this->mailSubject,
      'mail_body'  => $this->mailBody,
      'mail_attachments'  => $this->mailAttachments,
      'url'  => $this->url,
      'return_url'  => $this->returnUrl,
      'attributes' => $this->attributes,
      'wf_formactiontype_id' => $this->formActionType->getId(),
      'wf_formconfig_id' => $this->formConfig->getId()
    ];
  }
}

