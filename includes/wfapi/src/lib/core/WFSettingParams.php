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


require_once __DIR__.'/WFSettingManager.php';

/**
 * Holds Setting Params
 */
class WFSettingParams
{
  const WF_MAILER_HOST                        = 'wf_mailer_host';
  const WF_MAILER_PORT                        = 'wf_mailer_port';
  const WF_MAILER_SECURITY                    = 'wf_mailer_security';
  const WF_MAILER_USERNAME                    = 'wf_mailer_username';
  const WF_MAILER_PASSWORD                    = 'wf_mailer_password';
  const WF_MAILER_TEST_SENDMAIL_FROM          = 'wf_test_sendmail_from';
  const WF_MAILER_TEST_SENDMAIL_TO            = 'wf_test_sendmail_to';
  const WF_MAILER_TEST_SENDMAIL_SUBJECT       = 'wf_test_sendmail_subject';
  const WF_MAILER_TEST_SENDMAIL_BODY          = 'wf_test_sendmail_body';


  /*
   * Not used yet ==> commented 
  const WF_GOOGLE_API_KEY               = 'wf_google_api_key';
  const WF_GOOGLE_CALENDAR_ID           = 'wf_google_calendar_id';
  const WF_SYNC_WITH_GOOGLE_CALENDAR    = 'wf_sync_with_google_calendar';
  const WF_GOOGLE_CREDENTIALS_FILE      = 'wf_google_credentials_file';
  const WF_FACEBOOK_API_ID              = 'wf_facebook_api_id';
  const WF_FACEBOOK_CREDENTIALS_FILE    = 'wf_facebook_credentials_file';
  const WF_AMAZON_CREDENTIALS_FILE      = 'wf_amazon_credentials_file';
  const WF_PAYPAL_CREDENTIALS_FILE      = 'wf_paypal_credentials_file';
  */


  /**
   * Constructor - forbidden instance creation
   */
  private function __construct()
  {
  }

  /**
   * Get setting params values
   * @return array
   */
  public static function getParamsValues() {
    static $values;
    if ($values == null) {
      $values = array();
      $settingMgr = new WFSettingManager();
      $settingList = $settingMgr->findAll();
      foreach ($settingList as $setting) {
        $values[$setting['param_name']] = $setting['param_value'];
      }
    }

    return $values;
  }

  /**
   * Get setting params names
   * @return array
   */
  public static function getParamsNames() {
    static $params;
    if ($params == null) {
      $params  = array (
       self::WF_MAILER_HOST                 =>  'smtp.gmail.com',
       self::WF_MAILER_PORT                 =>  '465',
       self::WF_MAILER_SECURITY             =>  'ssl',
       self::WF_MAILER_USERNAME             =>  '',
       self::WF_MAILER_PASSWORD             =>  '',
       self::WF_MAILER_TEST_SENDMAIL_FROM         =>  '',
       self::WF_MAILER_TEST_SENDMAIL_TO           =>  '',
       self::WF_MAILER_TEST_SENDMAIL_SUBJECT      =>  '',
       self::WF_MAILER_TEST_SENDMAIL_BODY         =>  ''
       /*self::WF_GOOGLE_API_KEY            =>  '',
       self::WF_GOOGLE_CALENDAR_ID          =>  '',
       self::WF_SYNC_WITH_GOOGLE_CALENDAR   =>  '',
       self::WF_GOOGLE_CREDENTIALS_FILE     =>  '',
       self::WF_FACEBOOK_CREDENTIALS_FILE   =>  '',
       self::WF_AMAZON_CREDENTIALS_FILE     =>  '',
       self::WF_PAYPAL_CREDENTIALS_FILE     =>  ''*/
      );
    }

    return $params;
  }

  public static function getMailerHost() {
    return self::getParamsValues()[self::WF_MAILER_HOST];
  }

  public static function getMailerPort() {
    return self::getParamsValues()[self::WF_MAILER_PORT];
  }

  public static function getMailerSecurity() {
    return self::getParamsValues()[self::WF_MAILER_SECURITY];
  }

  public static function getMailerUsername() {
    return self::getParamsValues()[self::WF_MAILER_USERNAME];
  }

  public static function getMailerPassword() {
    return self::getParamsValues()[self::WF_MAILER_PASSWORD];
  }

  public static function getMailerTestSendMailFrom() {
    return self::getParamsValues()[self::WF_MAILER_TEST_SENDMAIL_FROM];
  }

  public static function getMailerTestSendMailTo() {
    return self::getParamsValues()[self::WF_MAILER_TEST_SENDMAIL_TO];
  }

  public static function getMailerTestSendMailSubject() {
    return self::getParamsValues()[self::WF_MAILER_TEST_SENDMAIL_SUBJECT];
  }

  public static function getMailerTestSendMailBody() {
    return self::getParamsValues()[self::WF_MAILER_TEST_SENDMAIL_BODY];
  }

  /*public static function getGoogleApiKey() {
    return self::getParamsValues()[self::WF_GOOGLE_API_KEY];
  }

  public static function getGoogleCalendarId() {
    return self::getParamsValues()[self::WF_GOOGLE_CALENDAR_ID];
  }

  public static function getSyncWithGoogleCalendar() {
    return self::getParamsValues()[self::WF_SYNC_WITH_GOOGLE_CALENDAR];
  }

  public static function getGoogleCredentialsFile() {
    return self::getParamsValues()[self::WF_GOOGLE_CREDENTIALS_FILE];
  }

  public static function getFacebookApiId() {
    return self::getParamsValues()[self::WF_FACEBOOK_API_ID];
  }

  public static function getFacebookCredentialsFile() {
    return self::getParamsValues()[self::WF_FACEBOOK_CREDENTIALS_FILE];
  }

  public static function getAmazonCredentialsFile() {
    return self::getParamsValues()[self::WF_AMAZON_CREDENTIALS_FILE];
  }

  public static function getPaypalCredentialsFile() {
    return self::getParamsValues()[self::WF_PAYPAL_CREDENTIALS_FILE];
  }*/
}

