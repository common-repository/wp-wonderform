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
 * @Table(name="wf_producttype")
 *
 * @author Wonderform <contact@wonderform.net>
 */
class WFProductType
{
  // Define main producttypes constants
  const WF_CORE_ID                  = 1;
  const WF_CUSTOM_ID                = 2;
  const WF_QUIZ_ID                  = 3;
  const WF_CATALOG_ID               = 4;
  const WF_SHOP_ID                  = 5;
  const WF_SIGNUP_ID                = 6;
  const WF_PAGEBUILDER_ID           = 7;
  const WF_CONTACT_ID               = 8;
  const WF_SESSION_ID               = 9;
  const WF_CALENDAR_ID              = 10;
  const WF_CONTENT_ID               = 11;

  const WF_MAX_ADDON_ID             = 99;

  const WF_CORE_STR                 = 'core';
  const WF_CUSTOM_STR               = 'custom';
  const WF_QUIZ_STR                 = 'quiz';
  const WF_CATALOG_STR              = 'catalog';
  const WF_SHOP_STR                 = 'shop';
  const WF_SIGNUP_STR               = 'signup';
  const WF_PAGEBUILDER_STR          = 'pagebuilder';
  const WF_CONTACT_STR              = 'contact';
  const WF_SESSION_STR              = 'session';
  const WF_CALENDAR_STR             = 'calendar';
  const WF_CONTENT_STR              = 'content';

  // Define sub producttypes constants
  // define core subtypes ids range 100 - 199
  const WF_CORE_MODULE_ID                = 100;
  const WF_CORE_PRODUCT_TYPE_ID          = 101;
  const WF_CORE_FIELD_SPEC_ID           = 102;
  const WF_CORE_OPTION_ID                = 103;
  const WF_CORE_OPTION_GROUP_ID          = 104;
  const WF_CORE_FORM_CONFIG_ID           = 105;
  const WF_CORE_FIELD_CONFIG_ID          = 106;
  const WF_CORE_ACTION_TYPE_ID           = 107;
  const WF_CORE_ACTION_ID                = 108;
  const WF_CORE_LICENSE_ID               = 112;
  const WF_CORE_SETTING_ID               = 113;
  const WF_CORE_EVENT_TYPE_ID            = 114;
  const WF_CORE_CATEGORY_ENTRY_ID        = 115;
  const WF_CORE_FORM_STEP_ID             = 116;
  // define custom forms ids range 200 - 299
  const WF_CUSTOM_CUSTOM_ID             = 200;
  // define quiz subtypes ids range 300 - 399
  const WF_QUIZ_QUIZZ_ID        = 300;
  // define catalog forms ids range 400 - 499
  const WF_CATALOG_PRODUCT_ID       = 400;
  // define shop subtypes ids range 500 - 599
  const WF_SHOP_ORDER_ID           = 500;
  const WF_SHOP_ORDER_ITEMS_ID     = 501;
  const WF_SHOP_PAYMENT_ID         = 502;
  const WF_SHOP_CART_ID            = 503;
  // define signup subtypes ids range 600 - 699
  const WF_SIGNUP_PROFILE_ID          = 600;
  const WF_SIGNUP_FORGOT_PASSWORD_ID  = 601;
  const WF_SIGNUP_CHANGE_PASSWORD_ID  = 602;
  const WF_SIGNUP_LOGIN_ID            = 603;
  // define pagebuilder subtypes ids range 700 - 799
  const WF_PAGEBUILDER_SIMPLE_PAGE_ID   = 700;
  // define contact subtypes ids range 800 - 899
  const WF_CONTACT_SIMPLE_ID        = 800;
  const WF_CONTACT_ADVANCED_ID      = 801;
  // define session subtypes ids range 900 - 999
  const WF_SESSION_LOGIN_ID             = 900;
  // define calendar subtypes ids range 1000 - 1099
  const WF_CALENDAR_EVENT_ID              = 1000;
  const WF_CALENDAR_EVENT_ATTENDEES_ID    = 1001;
  const WF_CALENDAR_EVENT_REMINDERS_ID    = 1002;
  const WF_CALENDAR_EVENT_RECURRENCE_ID   = 1003;
  // define content subtypes ids range 1100 - 1199
  const WF_CONTENT_ITEM_ID              = 1100;

  // define producttypes names
  const WF_CORE_MODULE_STR                 =  'core-module';
  const WF_CORE_PRODUCT_TYPE_STR           =  'core-product-type';
  const WF_CORE_FIELD_SPEC_STR             =  'core-field-spec';
  const WF_CORE_OPTION_STR                 =  'core-option';
  const WF_CORE_OPTION_GROUP_STR           =  'core-option-group';
  const WF_CORE_FORM_CONFIG_STR            =  'core-form-config';
  const WF_CORE_FIELD_CONFIG_STR           =  'core-field-config';
  const WF_CORE_ACTION_TYPE_STR            =  'core-action-type';
  const WF_CORE_ACTION_STR                 =  'core-action';
  const WF_CORE_LICENSE_STR                =  'core-license';
  const WF_CORE_SETTING_STR                =  'core-setting';
  const WF_CORE_EVENT_TYPE_STR             =  'core-event-type';
  const WF_CORE_CATEGORY_ENTRY_STR         =  'core-category-entry';
  const WF_CORE_FORM_STEP_STR              =  'core-form-step';
  const WF_CUSTOM_CUSTOM_STR               =  'custom-custom';
  const WF_CONTACT_SIMPLE_STR              =  'contact-simple';
  const WF_CONTACT_ADVANCED_STR            =  'contact-advanced';
  const WF_CATALOG_PRODUCT_STR             =  'catalog-product';
  const WF_SHOP_ORDER_STR                  =  'shop-order';
  const WF_SHOP_ORDER_ITEMS_STR            =  'shop-items';
  const WF_SHOP_PAYMENT_STR                =  'shop-payment';
  const WF_SHOP_CART_STR                   =  'shop-cart';
  const WF_SIGNUP_PROFILE_STR              =  'signup-profile';
  const WF_SIGNUP_FORGOT_PASSWORD_STR      =  'signup-forgot-password';
  const WF_SIGNUP_CHANGE_PASSWORD_STR      =  'signup-change-password';
  const WF_SIGNUP_LOGIN_STR                =  'signup-login';
  const WF_PAGEBUILDER_SIMPLE_PAGE_STR     =  'pagebuilder-simple-page';
  const WF_QUIZ_QUIZZ_STR                  =  'quiz-quizz';
  const WF_SESSION_LOGIN_STR               =  'session-login';
  const WF_CALENDAR_EVENT_STR              =  'calendar-event';
  const WF_CALENDAR_EVENT_ATTENDEES_STR    =  'calendar-event-attendees';
  const WF_CALENDAR_EVENT_REMINDERS_STR    =  'calendar-event-reminders';
  const WF_CALENDAR_EVENT_RECURRENCE_STR   =  'calendar-event-recurrence';
  const WF_CONTENT_ITEM_STR                =  'content-item';

  /**
   * @var integer
   * @Id
   * @Column(type="integer")
   */
  private $id;

  /**
   * @var string
   * @Column(type="string", length=32, unique=true, nullable=false)
   */
  private $name;

  /**
   * @ManyToOne(targetEntity="WFProductType")
   * @JoinColumn(
   * name="parent_id",
   * referencedColumnName="id",
   * onDelete="SET NULL")
   */
  private $parent;

  /**
   * @var array $types holds main producttypes
   */
  private static $types = null;

  /**
   * @var array $subtypes holds sub producttypes
   */
  private static $subtypes = null;

  /**
   * Get main producttypes identifiers
   */
  public static function getArray() {
    if (self::$types == null) {
      self::$types  = array (
       self::WF_CORE_STR          =>  self::WF_CORE_ID,
       self::WF_CUSTOM_STR        =>  self::WF_CUSTOM_ID,
       self::WF_QUIZ_STR          =>  self::WF_QUIZ_ID,
       self::WF_CATALOG_STR       =>  self::WF_CATALOG_ID,
       self::WF_SHOP_STR          =>  self::WF_SHOP_ID,    
       self::WF_SIGNUP_STR        =>  self::WF_SIGNUP_ID,
       self::WF_PAGEBUILDER_STR   =>  self::WF_PAGEBUILDER_ID,
       self::WF_CONTENT_STR       =>  self::WF_CONTENT_ID,
       self::WF_CONTACT_STR       =>  self::WF_CONTACT_ID,
       self::WF_SESSION_STR       =>  self::WF_SESSION_ID,  
       self::WF_CALENDAR_STR      =>  self::WF_CALENDAR_ID
      );
    }

    return self::$types;
  }

  /**
   * Get sub producttypes identifiers
   */
  public static function getSubArray() {
    if (self::$subtypes == null) {
      self::$subtypes  = array (
       self::WF_CORE_MODULE_STR            =>  self::WF_CORE_MODULE_ID,
       self::WF_CORE_PRODUCT_TYPE_STR      =>  self::WF_CORE_PRODUCT_TYPE_ID,
       self::WF_CORE_FIELD_SPEC_STR       =>  self::WF_CORE_FIELD_SPEC_ID,        
       self::WF_CORE_OPTION_STR            =>  self::WF_CORE_OPTION_ID,       
       self::WF_CORE_OPTION_GROUP_STR      =>  self::WF_CORE_OPTION_GROUP_ID,
       self::WF_CORE_FORM_CONFIG_STR       =>  self::WF_CORE_FORM_CONFIG_ID,      
       self::WF_CORE_FIELD_CONFIG_STR      =>  self::WF_CORE_FIELD_CONFIG_ID,         
       self::WF_CORE_ACTION_TYPE_STR       =>  self::WF_CORE_ACTION_TYPE_ID,      
       self::WF_CORE_ACTION_STR            =>  self::WF_CORE_ACTION_ID,       
       self::WF_CORE_LICENSE_STR           =>  self::WF_CORE_LICENSE_ID,           
       self::WF_CORE_SETTING_STR           =>  self::WF_CORE_SETTING_ID,           
       self::WF_CORE_EVENT_TYPE_STR        =>  self::WF_CORE_EVENT_TYPE_ID,  
       self::WF_CORE_CATEGORY_ENTRY_STR    =>  self::WF_CORE_CATEGORY_ENTRY_ID,  
       self::WF_CORE_FORM_STEP_STR         =>  self::WF_CORE_FORM_STEP_ID,  
       self::WF_CUSTOM_CUSTOM_STR          =>  self::WF_CUSTOM_CUSTOM_ID,           
       self::WF_CONTACT_SIMPLE_STR         =>  self::WF_CONTACT_SIMPLE_ID,          
       self::WF_CONTACT_ADVANCED_STR       =>  self::WF_CONTACT_ADVANCED_ID,
       self::WF_QUIZ_QUIZZ_STR             =>  self::WF_QUIZ_QUIZZ_ID,            
       self::WF_SESSION_LOGIN_STR          =>  self::WF_SESSION_LOGIN_ID,      
       self::WF_SIGNUP_PROFILE_STR          =>  self::WF_SIGNUP_PROFILE_ID,
       self::WF_SIGNUP_FORGOT_PASSWORD_STR  =>  self::WF_SIGNUP_FORGOT_PASSWORD_ID,
       self::WF_SIGNUP_CHANGE_PASSWORD_STR  =>  self::WF_SIGNUP_CHANGE_PASSWORD_ID,
       self::WF_SIGNUP_LOGIN_STR            =>  self::WF_SIGNUP_LOGIN_ID,

       self::WF_PAGEBUILDER_SIMPLE_PAGE_STR =>  self::WF_PAGEBUILDER_SIMPLE_PAGE_ID, 
       self::WF_CONTENT_ITEM_STR           =>  self::WF_CONTENT_ITEM_ID,
       self::WF_CATALOG_PRODUCT_STR        =>  self::WF_CATALOG_PRODUCT_ID,         
       self::WF_SHOP_ORDER_STR             =>  self::WF_SHOP_ORDER_ID,        
       self::WF_SHOP_ORDER_ITEMS_STR       =>  self::WF_SHOP_ORDER_ITEMS_ID,
       self::WF_SHOP_PAYMENT_STR           =>  self::WF_SHOP_PAYMENT_ID,       
       self::WF_SHOP_CART_STR              =>  self::WF_SHOP_CART_ID,           
       self::WF_CALENDAR_EVENT_STR          =>  self::WF_CALENDAR_EVENT_ID,          
       self::WF_CALENDAR_EVENT_RECURRENCE_STR    =>  self::WF_CALENDAR_EVENT_RECURRENCE_ID,
       self::WF_CALENDAR_EVENT_ATTENDEES_STR    =>  self::WF_CALENDAR_EVENT_ATTENDEES_ID,
       self::WF_CALENDAR_EVENT_REMINDERS_STR   =>  self::WF_CALENDAR_EVENT_REMINDERS_ID
      );
    }

    return self::$subtypes;
  }

  /**
   * Get producttype id
   * @param string $name the producttype name
   */
  public static function getProductTypeId($name) {
    if (isset(self::getArray()[$name])) {
      return self::getArray()[$name];
    } else if (isset(self::getSubArray()[$name])) {
      return self::getSubArray()[$name];
    } else {
      return 0;
    }
  }

  /**
   * Get producttype id
   * @param integer $productTypeId the producttype id
   * @return integer
   */
  public static function getTopProductTypeId($productTypeId) {
    if ($productTypeId > self::WF_MAX_ADDON_ID) {
      return floor($productTypeId / 100);
    } else {
      return 0;
    }
  }

  /**
   * Get top product name
   * @param string $productTypeName the producttype name
   * @return string
   */
  public static function getTopProductTypeName($productTypeName) {
    if (!empty($productTypeName)) {
      $tab = explode('-', $productTypeName);
      return $tab[0];
    } else {
      return "";
    }
  }

  /**
   * Constructor
   * @param string $id
   * @param string $name
   */
  public function __construct($id, $name)
  {
    $this->id = $id;
    $this->name = $name;
  }

  /**
   * Get action type identifier
   *
   * @return string 
   */
  public function getId()
  {
    return $this->id;
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
   * Set name
   *
   * @param string $name
   * @return WFProductType
   */
  public function setName($name)
  {
    $this->name = $name;

    return $this;
  }

  /**
   * Set parent
   *
   * @param WFProductType $parent
   * @return WFProductType
   */
  public function setParent($parent)
  {
    $this->parent = $parent;

    return $this;
  }

  /**
   * Get wf_producttype_id
   *
   * @return WFProductType
   */
  public function getParent() {
    return $this->parent;
  }

  /**
   * Get parent id
   *
   * @return integer
   */
  public function getParentId() {
    if (!is_null($this->parent)) {
      return $this->parent->getId();
    } else {
      return 0;
    }
  }

  /**
   * Get parent name
   *
   * @return string
   */
  public function getParentName() {
    if (!is_null($this->parent)) {
      return $this->parent->getName();
    } else {
      return "";
    }
  }

  /**
   * Implements jsonSerialize
   */
  public function jsonSerialize() {
    return [
      'id' => $this->id,
      'name' => $this->name,
      'parent_id' => $this->getParentId()
    ];
  }
}

