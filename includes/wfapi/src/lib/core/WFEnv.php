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

require_once __DIR__.'/WFSettingParams.php';

use Symfony\Component\Validator\Validation;
use Symfony\Bridge\Twig\Form\TwigRendererEngine;
use Symfony\Component\Form\Forms;
use Symfony\Component\Form\Extension\Validator\ValidatorExtension;
use Symfony\Component\Form\Extension\Csrf\CsrfExtension;
use Symfony\Component\Security\Csrf\CsrfTokenManager;
use Symfony\Component\Translation\Translator;
use Symfony\Component\Translation\Loader\XliffFileLoader;
use Symfony\Bridge\Twig\Extension\TranslationExtension;
use Symfony\Bridge\Twig\Extension\FormExtension;
use Symfony\Bridge\Twig\Form\TwigRenderer;

/**
 * Initialize WonderForm environment
 *
 * @author Wonderform <contact@wonderform.net>
 */
class WFEnv {
  const WF_REQUEST_JSON = 'json';
  const WF_REQUEST_HTML = 'html';
  const WF_REQUEST_DEFAULT = 'default';

  // the timezone default 'Europe/London' but is overrided
  // by setTimezone
  private static $_sTimezone = 'Europe/London';
  private static $_sDateFormat = 'Y-m-d';
  private static $_sTimeFormat = 'H:i:s';
  private static $_sDateTimeFormat = 'Y-m-d H:i:s';
  private static $_sAppViewsDir = '';
  private static $_sUserViewsDir = '';

  public static function getDefaultFormTheme() {
    return 'form_div_layout.html.twig';
  }

  public static function getVendorDir() {
    global $vendor_dir;
    return $vendor_dir;
  }

  public static function getVendorFormDir() {
    return self::getVendorDir(). '/symfony/form';
  }

  public static function getVendorValidatorDir() {
    return self::getVendorDir(). '/symfony/validator';
  }

  public static function getVendorTwigBridgeDir() {
    return self::getVendorDir(). '/symfony/twig-bridge';
  }

  public static function getDefaultViewsDir() {
    return __DIR__ . '/../../templates';
  }

  /**
   * Set timezone
   * @param val the value to set
   */
  public static function setTimezone($val) {
    self::$_sTimezone = $val;
  }

  /**
   * Get timezone
   */
  public static function getTimezone() {
    return self::$_sTimezone;
  }

  /**
   * Set date format
   * @param val the value to set
   */
  public static function setDateFormat($val) {
    self::$_sDateFormat = $val;
  }

  /**
   * Get date format
   */
  public static function getDateFormat() {
    return self::$_sDateFormat;
  }

  /**
   * Set time format
   * @param val the value to set
   */
  public static function setTimeFormat($val) {
    self::$_sTimeFormat = $val;
  }

  /**
   * Get time format
   */
  public static function getTimeFormat() {
    return self::$_sTimeFormat;
  }

  /**
   * Set date time format
   * @param val the value to set
   */
  public static function setDateTimeFormat($val) {
    self::$_sDateTimeFormat = $val;
  }

  /**
   * Get date time format
   */
  public static function getDateTimeFormat() {
    return self::$_sDateTimeFormat;
  }

  /**
   * Set application views directory
   * @param val the value to set
   */
  public static function setAppViewsDir($val) {
    self::$_sAppViewsDir = $val;
  }

  /**
   * Get application views directory
   */
  public static function getAppViewsDir() {
    return self::$_sAppViewsDir;
  }

  /**
   * Set user views directory
   * @param val the value to set
   */
  public static function setUserViewsDir($val) {
    self::$_sUserViewsDir = $val;
  }

  /**
   * Get user views directory
   */
  public static function getUserViewsDir() {
    return self::$_sUserViewsDir;
  }
  /**
   * Get twig environment
   */
  public static function twig() {
    static $twig;

    if (!$twig) {
      $viewsDir = array();
      $viewsDir[] = self::getDefaultViewsDir();
      $viewsDir[] = self::getVendorTwigBridgeDir() . '/Resources/views/Form';
      if (!empty(self::$_sAppViewsDir)) {
        $viewsDir[] = self::$_sAppViewsDir;
      }
      if (!empty(self::$_sUserViewsDir)) {
        $viewsDir[] = self::$_sUserViewsDir;
      }

      $loader =
        new \Twig_Loader_Filesystem($viewsDir);
      $twig = new \Twig_Environment($loader, array('debug' => false));
      $twig->addExtension(new \Twig_Extension_StringLoader());
      // TODO(lybaba) remove debug after dev
      $twig->addExtension(new \Twig_Extension_Debug());
    }
    return $twig;
  }

  /**
   * Get form factory
   */
  /*public static function formFactory() {
    static $formFactory;

    if (!$formFactory) {
      // Set up the CSRF Token Manager
      $csrfTokenManager = new CsrfTokenManager();

      // Set up the Validator component
      $validator = Validation::createValidator();

      // Set up the Translation component
      $translator = new Translator('en');
      $translator->addLoader(
        'xlf',
        new XliffFileLoader());
      $translator->addResource(
        'xlf',
        self::getVendorFormDir() . '/Resources/translations/validators.en.xlf', 'en', 'validators');
      $translator->addResource(
        'xlf',
        self::getVendorValidatorDir() . '/Resources/translations/validators.en.xlf', 'en', 'validators');

      $formEngine = new TwigRendererEngine(array(self::getDefaultFormTheme()));
      $formEngine->setEnvironment(self::twig());

      self::twig()->addExtension(new TranslationExtension($translator));
      self::twig()->addExtension(
        new FormExtension(new TwigRenderer($formEngine, $csrfTokenManager)));

      // Set up the Form component
      $formFactory = Forms::createFormFactoryBuilder()
          ->addExtension(new CsrfExtension($csrfTokenManager))
          ->addExtension(new ValidatorExtension($validator))
          ->getFormFactory();
    }

    return $formFactory;
  }*/

  /**
   * Get mailer
   */
  public static function mailer() {
    static $mailer;

    if (!$mailer) {
      $mailerHost = WFSettingParams::getMailerHost();
      $mailerPort = WFSettingParams::getMailerPort(); 
      $mailerSecurity = WFSettingParams::getMailerSecurity(); 
      $mailerUsername = WFSettingParams::getMailerUsername();
      $mailerPassword = WFSettingParams::getMailerPassword();
      
      if (!empty($mailerHost) 
        && !empty($mailerPort)
        && !empty($mailerSecurity) 
        && !empty($mailerUsername)
        && !empty($mailerPassword)) {
        //Create the Smtp Transport.
        $transport =
          \Swift_SmtpTransport::newInstance(
            $mailerHost,
            $mailerPort,
            $mailerSecurity);
        $transport->setUsername($mailerUsername)
          ->setPassword($mailerPassword);
        //Create the Mailer
        $mailer = \Swift_Mailer::newInstance($transport);

      } else {
        //Create the php mail Transport.
        $transport = \Swift_MailTransport::newInstance();
        //Create the Mailer
        $mailer = \Swift_Mailer::newInstance($transport);
      }
    }

    return $mailer;
  }
}
/* EOF */
