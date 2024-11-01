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

/**
 * Define data types supported by WonderForm engine
 *
 * @author Wonderform <contact@wonderform.net>
 */
class WFDataTypes {
  // a string (of arbitrary length)
  const WF_STRING               = 'string';
  // a number is a integer
  const WF_NUMBER               = 'number';
  // a integer
  const WF_INTEGER              = 'integer';
  // a date ==> this must be in ISO6801 format YYYY-MM-DD
  const WF_DATE                 = 'date';
  // a time without a date
  const WF_TIME                 = 'time';
  // a date-time ==> this must be in ISO 8601 format of YYYY-MM- DDThh:mm:ssZ in UTC
  const WF_DATETIME             = 'datetime';
  // a boolean value (1/0, true/false)
  const WF_BOOLEAN              = 'boolean';
  // base64 representation of binary data
  const WF_BINARY               = 'binary';
  // (alias json) an JSON-encoded object
  const WF_OBJECT               = 'object';
  // an array
  const WF_ARRAY                = 'array';
  // a valid ip address
  const WF_IP_ADDRESS           = 'ipaddress';
  // a valid mac address
  const WF_MAC_ADDRESS          = 'macaddress';
  // a valid email
  const WF_EMAIL                = 'email';
  // a valid url
  const WF_URL                  = 'url';
  // regexp
  const WF_REGEXP               = 'regexp';
  // text
  const WF_TEXT                 = 'text';
  // text
  const WF_JSON                 = 'json';
  // file
  const WF_FILE                 = 'file';
  // image
  const WF_IMAGE                = 'image';
  // hidden
  const WF_HIDDEN               = 'hidden';
  // file
  const WF_PASSWORD             = 'password';
  // file
  const WF_DECIMAL              = 'decimal';
  // select single
  const WF_SELECT_SINGLE        = 'select_single';
  // select multiple
  const WF_SELECT_MULTIPLE      = 'select_multiple';
  // value of field may be any type
  const WF_ANY                  = 'any';

  // define product data types
  const WF_PROD_TITLE                   = 'wfs_prod_title';
  const WF_PROD_CATEGORY                = 'wfs_prod_category';
  const WF_PROD_DESCRIPTION             = 'wfs_prod_description';
  const WF_PROD_PRICE                   = 'wfs_prod_price';
  const WF_PROD_DISCOUNTED_PRICE        = 'wfs_prod_discounted_price';
  const WF_PROD_BOOK_PRICE              = 'wfs_prod_book_price';
  const WF_PROD_RENTAL_PRICE            = 'wfs_prod_rental_price';

  // define event data types
  const WF_EVNT_TYPE                    = 'wfs_evnt_type';
  const WF_EVNT_TITLE                   = 'wfs_evnt_title';
  const WF_EVNT_CATEGORY                = 'wfs_evnt_category';
  const WF_EVNT_DESCRIPTION             = 'wfs_evnt_description';
  const WF_EVNT_LOCATION                = 'wfs_evnt_location';
  const WF_EVNT_START_TMS               = 'wfs_evnt_start_tms';
  const WF_EVNT_END_TMS                 = 'wfs_evnt_end_tms';

  // define order data types
  const WF_ORDR_TOTAL_AMOUNT            = 'wfs_ordr_total_amount';
  const WF_ORDR_COMMENTS                = 'wfs_ordr_comments';

  // define cart data types
  const WF_CART_PROD_ID              = 'wfs_cart_prod_id';
  const WF_CART_PROD_PRICE           = 'wfs_cart_prod_price';
  const WF_CART_PROD_OPTIONS         = 'wfs_cart_prod_options';
  const WF_CART_PROD_QTY             = 'wfs_cart_prod_qty';

  // define user data types
  const WF_USR_LOGIN                 = 'wfs_usr_login';
  const WF_USR_LOGIN_METHOD          = 'wfs_usr_login_method';
  const WF_USR_LOGIN_CONFIRM         = 'wfs_usr_login_confirm';
  const WF_USR_PASSWORD              = 'wfs_usr_password';
  const WF_USR_PASSWORD_CONFIRM      = 'wfs_usr_password_confirm';
  const WF_USR_EMAIL                 = 'wfs_usr_email';
  const WF_USR_EMAIL_CONFIRM         = 'wfs_usr_email_confirm';

  private static $types = null;

  /**
   * Get data types
   */
  public static function getArray() {
    if (self::$types == null) {
      self::$types  = array (
        self::WF_STRING,
        self::WF_NUMBER,
        self::WF_INTEGER,
        self::WF_DATE,
        self::WF_TIME,
        self::WF_DATETIME,
        self::WF_BOOLEAN,
        self::WF_BINARY,
        self::WF_OBJECT,
        self::WF_ARRAY,
        self::WF_IP_ADDRESS,
        self::WF_MAC_ADDRESS,
        self::WF_EMAIL,
        self::WF_URL,
        self::WF_REGEXP,
        self::WF_TEXT,
        self::WF_JSON,
        self::WF_FILE,
        self::WF_IMAGE,
        self::WF_HIDDEN,
        self::WF_PASSWORD,
        self::WF_DECIMAL,
        self::WF_SELECT_SINGLE,
        self::WF_SELECT_MULTIPLE,
        self::WF_ANY,
        self::WF_PROD_TITLE,
        self::WF_PROD_CATEGORY,
        self::WF_PROD_DESCRIPTION,
        self::WF_PROD_PRICE,
        self::WF_PROD_DISCOUNTED_PRICE,
        self::WF_PROD_BOOK_PRICE,
        self::WF_PROD_RENTAL_PRICE,
        self::WF_EVNT_TYPE,
        self::WF_EVNT_TITLE,
        self::WF_EVNT_CATEGORY,
        self::WF_EVNT_DESCRIPTION,
        self::WF_EVNT_LOCATION,
        self::WF_EVNT_START_TMS,
        self::WF_EVNT_END_TMS,
        self::WF_ORDR_TOTAL_AMOUNT,
        self::WF_ORDR_COMMENTS,
        self::WF_CART_PROD_ID,
        self::WF_CART_PROD_PRICE,
        self::WF_CART_PROD_OPTIONS,
        self::WF_CART_PROD_QTY,
        self::WF_USR_LOGIN,
        self::WF_USR_LOGIN_METHOD,
        self::WF_USR_LOGIN_CONFIRM,
        self::WF_USR_PASSWORD,
        self::WF_USR_PASSWORD_CONFIRM,
        self::WF_USR_EMAIL,
        self::WF_USR_EMAIL_CONFIRM
      );
    }

    return self::$types;
  }

  /**
   * Test if dataType is a supported wonder-form type
   * @param $dataType the data type to test
   * @return true if dataType is supported
   */
  public static function isValid($dataType) {
    return in_array(strtolower($dataType), self::getArray());
  }

  /**
   * Test if dataType is a fieldspec type
   * @param $dataType the data type to test
   * @return true if dataType is a fieldspec type
   */
  public static function isFieldSpecType($dataType) {
    return (substr($dataType, 0, 3) === 'wfs');
  }
}
/* EOF */
