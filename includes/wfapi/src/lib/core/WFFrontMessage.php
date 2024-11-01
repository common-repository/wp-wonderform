<?php

/*
* This file is part of the WonderForm package.
*
* (c) Wonderform <contact@wonderform.net>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

namespace WF\Lib\Front;


/**
 * @author Wonderform <contact@wonderform.net>
 */
class WFFrontMessage  implements \JsonSerializable
{
  /**
   * @var integer
   */
  public $actionId;

  /**
   * @var string
   */
  public $btnLabel;

  /**
   * @var string
   */
  public $btnLabelGlobal;

  /**
   * @var string
   */
  public $btnLabelSingle;

  /**
   * @var integer
   */
  public $delay;

  /**
   * @var string
   */
  public $err404Message;

  /**
   * @var string
   */
  public $err404Title;

  /**
   * @var string
   */
  public $files;

  /**
   * @var boolean
   */
  public $globalResultIsPublic;

  /**
   * @var boolean
   */
  public $globalResultsMessage;

  /**
   * @var string
   */
  public $globalResultsTitle;

  /**
   * @var string
   */
  public $maintenanceMessage;

  /**
   * @var string
   */
  public $maintenanceTitle;

  /**
   * @var string
   */
  public $message;

  /**
   * @var boolean
   */
  public $singleResultIsPublic;

  /**
   * @var string
   */
  public $SuccessMessage;

  /**
   * @var string
   */
  public $SuccessTitle;

  /**
   * @var string
   */
  public $to;

  /**
   * @var boolean
   */
  public $useMailBcc;

  /**
   * @var boolean
   */
  public $useMailCc;

  /**
   * Constructor
   * @param $actionId
   */
  public function __construct($actionId)
  {
    $this->actionId                 = $actionId;
    $this->btnLabel                 = "";
    $this->btnLabelGlobal           = "";
    $this->btnLabelSingle           = "";
    $this->delay                    = "";
    $this->err404Message            = "";
    $this->err404Title              = "";
    $this->files                    = "";
    $this->globalResultIsPublic     = false;
    $this->globalResultsMessage     = "";
    $this->globalResultsTitle       = "";
    $this->maintenanceMessage       = "";
    $this->maintenanceTitle         = "";
    $this->message                  = "";
    $this->singleResultIsPublic     = false;
    $this->successMessage           = "";
    $this->successTitle             = "";
    $this->to                       = "";
    $this->useMailBcc               = false;
    $this->useMailCc                = false;
  }

  /**
   * Get message 100
   */
  public static function getMessage100() {
    static $msg100;
    if (!$msg100) {
      $msg100 = new WFFrontMessage(100);
    }
    return $msg100;
  }

  /**
   * Get message 200
   */
  public static function getMessage200() {
    static $msg200;
    if (!$msg200) {
      $msg200 = new WFFrontMessage(200);
      $msg200->successTitle = 'Success Message';
      $msg200->successMessage = 'Your responses were successfully submitted';
    }
    return $msg200;
  }

  /**
   * Get message 300
   */
  public static function getMessage300() {
    static $msg300;
    if (!$msg300) {
      $msg300 = new WFFrontMessage(300);
      $msg300->err404Message        = "Internal error occured. Pleaxe contact the admin to resolve the problem.";
      $msg300->err404Title          = "Internal Error";
      $msg300->maintenanceMessage   = "This form is undergoing maintenance. please try again later";
      $msg300->maintenance_title    = "Sorry";
    }
    return $msg300;
  }

  /**
   * Get message 800
   */
  public static function getMessage800() {
    static $msg800;
    if (!$msg800) {
      $msg800 = new WFFrontMessage(800);
    }
    return $msg800;
  }

  /**
   * Get message 801
   */
  public static function getMessage801() {
    static $msg801;
    if (!$msg801) {
      $msg801 = new WFFrontMessage(801);
      $msg801->btnLabelGlobal = 'Show the results';
    }
    return $msg801;
  }

  /**
   * Implements jsonSerialize
   */
  public function jsonSerialize() {
    return [
      'action_id' => $this->actionId,
      'btnLabel' => $this->btnLabel,
      'btnLabelGlobal' => $this->btnLabelGlobal,
      'btnLabelSingle' => $this->btnLabelSingle,
      'delay' => $this->delay,
      'err404_message' => $this->err404Message,
      'err404_title' => $this->err404Title,
      'files' => $this->files,
      'globalResultIsPublic' => $this->globalResultIsPublic,
      'globalResultsMessage' => $this->globalResultsMessage,
      'globalResultsTitle' => $this->globalResultsTitle,
      'maintenance_message' => $this->maintenanceMessage,
      'maintenance_title' => $this->maintenanceTitle,
      'message' => $this->message,
      'singleResultIsPublic' => $this->singleResultIsPublic,
      'success_message' => $this->successMessage,
      'success_title' => $this->successTitle,
      'to' => $this->to,
      'use_mail_bcc' => $this->useMailBcc,
      'use_mail_cc' => $this->useMailCc
    ];
  }
}

