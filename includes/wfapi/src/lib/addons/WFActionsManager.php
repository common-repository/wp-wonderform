<?php

/*
* This file is part of the WonderForm package.
*
* (c) Wonderform <contact@wonderform.net>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
 */

namespace WF\Lib\Addons;

require_once __DIR__.'/../core/WFEnv.php';
require_once __DIR__.'/../core/WFCoreService.php';
require_once(__DIR__.'/../front/WFormConfigAttrs.php');
require_once __DIR__.'/WFAbstractActionsManager.php';

use Symfony\Component\HttpFoundation\Request;

use WF\Lib\Core\WFCoreService;
use WF\Lib\Core\WFDbManager;
use WF\Lib\Core\WFModule;
use WF\Lib\Core\WFEnv;
use WF\Lib\Core\WFUser;
use WF\Lib\Core\WFormConfig;
use WF\Lib\Core\WFormAction;
use WF\Lib\Core\WFormActionType;
use WF\Lib\Core\WFDataTypes;
use WF\Lib\Core\WFProductType;
use WF\Lib\Core\WFieldConfig;
use WF\Lib\Post\WFormPostValidator;
use WF\Lib\Front\WFormConfigAttrs;


/**
 * @author Wonderform <contact@wonderform.net>
 */
class WFActionsManager extends WFAbstractActionsManager
{
  const EMPTY_MAIL_TO = '{"":""}';

  /**
   * Constructor
   */
  public function __construct()
  {
    parent::__construct();
  }

 /**
  * Add/update entry
  * @param Request $request
  * @param WFormConfig $wfc
  * @param WFormPostValidator $validator
  * @param integer $entryId the entry identifier in case of update
  * @return array the entry added or updated
  */
  public function addOrUpdate(
    Request $request,
    WFormConfig &$wfc,
    WFormPostValidator &$validator,
    $entryId) {
      $productTypeId = $wfc->getTopProductTypeId();
      $mgr = $this->getManager($productTypeId);
      if ($mgr) {
        return $mgr->addOrUpdate(
          $request, $wfc, $validator, $entryId);
      } else {
        if ($wfc->getName() == 'form-config') {
          return $this->addOrUpdateFormConfig(
            $request, $wfc, $validator, $entryId);
        } else {
          return WFDbManager::getInstance()->addOrUpdate(
            $wfc->getId(),
            $wfc->getEntriesTable(),
            $validator->data,
            $entryId,
            $wfc->getModuleId());
        }
      }
    }

 /**
  * Add/update entry
  * @param Request $request
  * @param WFormConfig $wfc
  * @param WFormPostValidator $validator
  * @param integer $entryId the entry identifier in case of update
  * @return array the entry added or updated
  */
  private function addOrUpdateFormConfig(
    Request $request,
    WFormConfig &$wfc,
    WFormPostValidator &$validator,
    $entryId) {
      // TODO(lybaba) FIXME update of grid strategy not works
      /*if ($entryId && isset($validator->data['attributes'])) {
        $newAttrs = $validator->data['attributes'];

        $oldentry = $this->findById($wfc, $entryId);
        if (isset($oldentry['attributes'])) {
          $oldAttrs = $oldentry['attributes'];
          //$formName = $oldentry['name'];

          if (!empty($oldAttrs)) {
            $newAttrsArr = json_decode($newAttrs, true);
            $oldAttrsArr = json_decode($oldAttrs, true);

            $newFormAttrs = new WFormConfigAttrs($newAttrsArr);
            $oldFormAttrs = new WFormConfigAttrs($oldAttrsArr);

            $newFormAttrs->merge($oldFormAttrs);
            // set the merged attributes
            //var_dump($newFormAttrs->jsonSerialize());
            $validator->data['attributes'] =
              json_encode($newFormAttrs->jsonSerialize());
          }
        }
      }*/

      return WFDbManager::getInstance()->addOrUpdate(
        $wfc->getId(),
        $wfc->getEntriesTable(),
        $validator->data,
        $entryId,
        $wfc->getModuleId());
    }

  private function formConfigAttrsMerge(
    array $newAttrsArr, array $oldAttrsArr) {
    $mergedAttrsArr = array();
    foreach ($newAttrsArr as $k => $v) {
      if (is_array($v) && isset($oldAttrsArr[$k])) {
        $a = array_merge($v, $oldAttrsArr[$k]);

        if ($k === 'displayFields') {
          $mergedAttrsArr[$k] = array_unique($a);
        } else {
          $mergedAttrsArr[$k] = $a;
        }

        foreach ($v as $k1 => $v2) {
          if (is_array($v2)) {
            if (isset($oldAttrsArr[$k][$k1])) {
              $mergedAttrsArr[$k][$k1] =
                $this->formConfigAttrsMerge(
                  $newAttrsArr[$k][$k1],
                  $oldAttrsArr[$k][$k1]);
            }
          }
        }
      } else {
        $mergedAttrsArr[$k] = $v;
      }
    }

    return $mergedAttrsArr;
  }

 /**
  * Delete entry - action
  * @param Request $request
  * @param WFormConfig $wfc
  * @param integer $id the identifier of the entry to delete
  * @return array|WFErrorMessage
  */
  public function del(Request $request, WFormConfig &$wfc, $id) {
    $productTypeId = $wfc->getTopProductTypeId();
    $mgr = $this->getManager($productTypeId);
    if ($mgr) {
      return $mgr->del($request, $wfc, $id);
    } else {
      if ($wfc->getName() == 'form-config') {
        $oldentry = WFDbManager::getInstance()->findById(
          $wfc->getId(), $wfc->getEntriesTable(), $id, $wfc->getModuleId());
        if (isset($oldentry['parent_id']) && $oldentry['parent_id']) {
          // cannot delete a sub form
          // should delete the parent that will delete the childs
          $oldentry = array();
        } else {
          $oldentry =
            WFDbManager::getInstance()->del(
              $wfc->getId(), $wfc->getEntriesTable(), $id);
        }
      } else {
        $oldentry =
          WFDbManager::getInstance()->del(
            $wfc->getId(), $wfc->getEntriesTable(), $id);
      }
      return $oldentry;
    }
  }

  /**
   * Search entries
   * When $countRows = True ==> return number of rows found
   * @param $request Request
   * @param WFormConfig $wfc
   * @param boolean $countRows
   * @param integer $start
   * @param integer $limit
   * @param string $orderBy
   * @param string $orderByDirection
   * @param array $queryVars
   * @param integer $categoryId
   * @return array of entries or number of rows depending on flag $countRows
   */
  public function search(
    Request $request,
    WFormConfig &$wfc,
    $countRows,
    $start, 
    $limit, 
    $orderBy,
    $orderByDirection,
    &$queryVars,
    $categoryId) {
      $productTypeId = $wfc->getTopProductTypeId();
      $mgr = $this->getManager($productTypeId);
      if ($mgr) {
        return $mgr->search(
          $request,
          $wfc,
          $countRows,
          $start,
          $limit,
          $orderBy,
          $orderByDirection,
          $queryVars,
          $categoryId
        );
      } else {
        return WFDbManager::getInstance()->search(
          $wfc->getEntriesTable(),
          $wfc->getModule()->getId(),
          $wfc->getId(),
          $wfc->getName(),
          $countRows,
          $start,
          $limit,
          $orderBy,
          $orderByDirection,
          $queryVars,
          $categoryId
        );
      }
    }

  /**
   * Find entry by its identifier - action
   * @param WFormConfig $wfc
   * @param integer $id identifier of the table entry
   * @return array|WFErrorMessage
   */
  public function findById(WFormConfig &$wfc, $id) {
    $productTypeId = $wfc->getTopProductTypeId();

    $mgr = $this->getManager($productTypeId);
    if ($mgr) {
      return $mgr->findById($wfc, $id);
    } else {
      return
        WFDbManager::getInstance()->findById(
            $wfc->getId(), $wfc->getEntriesTable(), $id, $wfc->getModuleId());
    }
  }

 /**
  * Called each time on add/update action succeeded
  * @param Request $request
  * @param WFormConfig $wfc
  * @param array $entry a given entry
  * @param array $extraData hold extra data
  */
  public function onAddOrUpdateSuccess(
    Request $request, WFormConfig &$wfc, array $entry, array $extraData) {
    // nothing to execute by default. can be overrided to execute more actions.
    }

  /**
   * Execute form action
   * @param Request $request
   * @param WFormConfig $wfc
   * @param WFormAction $action
   * @param $attrs
   * @param $entry
   */
  public function executeAction(
    Request $request, WFormConfig &$wfc, WFormAction $action, $entry) {
    switch($action->getFormActionType()->getId()) {
      case WFormActionType::WF_NOTIFY:
        $this->executeNotifyAction($request, $wfc, $action, $entry);
        break;
      default:
        break;
    }
  }

 /**
  * Make array response
  * @param Request $request
  * @param WFormConfig $wfc
  * @param array $data
  * @return array
  */
  public static function makeTemplateData(
    Request $request,
    WFormConfig &$wfc,
    $data) {
    if ($data instanceof WFErrorMessage) {
      return $data;
    } else if (is_array($data)) {
      $form = json_decode(json_encode($wfc), true);
      $displayFields = $wfc->extractDisplayFields();
      
      // map fields by name for twig
      $fields = array();
      foreach ($form['wfc']['fields'] as $fld) {
        $fields[$fld['name']] = $fld;
        $fldName = $fld['name'];
        $fldNexusName = $fld['nexus_name'];
        $fldType = $fld['type'];
        if (isset($data['entry_options'])
          && isset($data['entry_options'][$data['id']][$fldName])) {
          if (isset($data['entry_options'][$data['id']][$fldName]['value'])) {
            $data[$fldName] = $data['entry_options'][$data['id']][$fldName]['value'];
            $data[$fldNexusName] = $data['entry_options'][$data['id']][$fldName]['value'];
          } else {
            $data[$fldName] =
                implode(',', $data['entry_options'][$data['id']][$fldName]['opt_short']);
            $data[$fldNexusName] = $data['entry_options'][$data['id']][$fldName]['opt_long'];
          }
        }
      }
      $form['wfc']['fields'] = $fields;
      $form['wfc']['display_fields'] = $displayFields;

      if (isset($data['count'])) {
        $isArchive = true;
      } else {
        $isArchive = false;
      }

      $settings = array();
      $settings[WFUser::WF_SITE_URL] =
        $request->attributes->get(WFUser::WF_SITE_URL, "");
      $settings[WFUser::WF_ADMIN_POST_URL] =
        $request->attributes->get(WFUser::WF_ADMIN_POST_URL, "");
      $settings[WFUser::WF_PATH_INFO] =
        $request->attributes->get(WFUser::WF_PATH_INFO, "");

      $productTypeName = $wfc->getProductTypeName();
      $addonName = WFProductType::getTopProductTypeName($productTypeName);

      $res = [
        'wfc' => $form['wfc'],
        'settings' => $settings,
        'is_archive' => $isArchive
      ];

      if (!empty($data)) {
        $res = array_merge($res, $data);
      }

      return $res;
    } else {
      return [];
    }
  }

  /**
   * Execute form notify action
   * @param Request $request
   * @param WFormConfig $wfc
   * @param WFormAction $action
   * @param $attrs
   * @param $entry
   * @param $mailBodyTemplate
   */
  public function executeNotifyAction(
    Request $request,
    WFormConfig &$wfc,
    WFormAction $action,
    $entry,
    $mailBodyTemplate = null) {
    try {
      // get attributes params
      $attrs = array();
      $attrs[WFUser::WF_SITE_URL] =
        $request->attributes->get(WFUser::WF_SITE_URL, "");
      $attrs[WFUser::WF_STATIC_URL] =
        $request->attributes->get(WFUser::WF_STATIC_URL, "");
      $attrs[WFUser::WF_SITE_NAME] =
        $request->attributes->get(WFUser::WF_SITE_NAME, "");
      $attrs[WFUser::WF_SITE_DESC] =
        $request->attributes->get(WFUser::WF_SITE_DESC, "");
      $attrs[WFUser::WF_ADMIN_EMAIL] =
        $request->attributes->get(WFUser::WF_ADMIN_EMAIL, "");
      $attrs[WFUser::WF_FORM_TITLE] = $wfc->getName();
      //$attrs[WFUser::WF_ENTRY_CREATED_TMS] = $createdTms;
      if (array_key_exists('id', $entry)) {
        $attrs[WFUser::WF_ENTRY_ID] = $entry['id'];
      }

      // load mail template
      $mailT = WFEnv::twig()->loadTemplate('mail.twig');
      // load default_message template
      $defaultMsgT = WFEnv::twig()->loadTemplate('default_message.twig');
      // load nexus_message template
      $nexusMsgT = WFEnv::twig()->loadTemplate('nexus_message.twig');

      // create template data
      $data = self::makeTemplateData($request, $wfc, $entry);
      $data = array_merge($data, $attrs);

      // render default_message
      $defaultMsg = $defaultMsgT->render($data);
      $data['default_message'] = $defaultMsg;

      // render nexus_message
      //$nexusMsg = $nexusMsgT->render($data);
      $nexusMsg = '';
      $data['nexus_message'] = $nexusMsg;

      //Create the message
      $message = \Swift_Message::newInstance();
      if(!is_null($action->getMailSubject())) {
        $subjectT = WFEnv::twig()->createTemplate($action->getMailSubject());
        if (!empty($subjectT)) {
          $subject = $subjectT->render($data);
          $message->setSubject($subject);
        } else {
          $message->setSubject($action->getMailSubject());
        }
      }

      if(!is_null($action->getMailFrom())) {
        $fromT = WFEnv::twig()->createTemplate($action->getMailFrom());
        if (!empty($fromT)) {
          $from = $fromT->render($data);
          $fromArray = json_decode($from, true);
          if (json_last_error() !== JSON_ERROR_NONE) {
            $message->setFrom($from);
          } else {
            foreach ($fromArray as $email => $label) {
              $message->setFrom($email, $label);
            }
          }
        } else {
          $message->setFrom($action->getMailFrom());
        }
      } else {
        return ['err_msg' => 'mail_from is required'];
      }

      if(!is_null($action->getMailTo())) {
        $toT = WFEnv::twig()->createTemplate($action->getMailTo());
        if (!empty($toT)) {
          $to = $toT->render($data);
          $toArray = json_decode($to, true);
          if (json_last_error() !== JSON_ERROR_NONE) {
            $message->setTo($to);
          } else if ($to != self::EMPTY_MAIL_TO) {
            $message->setTo($toArray);
          }
        } else {
          $message->setTo($action->getMailTo());
        }
      } else {
        return ['err_msg' => 'mail_to is required'];
      }

      if(!is_null($action->getMailCc())) {
        $ccT = WFEnv::twig()->createTemplate($action->getMailCc());
        if (!empty($ccT)) {
          $cc = $ccT->render($data);
          $ccArray = json_decode($cc, true);
          if (json_last_error() !== JSON_ERROR_NONE) {
            $message->setCc($cc);
          } else if ($cc != self::EMPTY_MAIL_TO) {
            $message->setCc($ccArray);
          }
        } else {
          $message->setCc($action->getMailCc());
        }
      }

      if(!is_null($action->getMailBcc())) {
        $bccT = WFEnv::twig()->createTemplate($action->getMailBcc());
        if (!empty($bccT)) {
          $bcc = $bccT->render($data);
          $bccArray = json_decode($bcc, true);
          if (json_last_error() !== JSON_ERROR_NONE) {
            $message->setBcc($bcc);
          } else if ($bcc != self::EMPTY_MAIL_TO) {
            $message->setBcc($bccArray);
          }
        } else {
          $message->setBcc($action->getMailBcc());
        }
      }

      if(!is_null($action->getMailBody()) || $mailBodyTemplate) {
        if ($mailBodyTemplate) {
          $bodyT = WFEnv::twig()->loadTemplate($mailBodyTemplate);
        } else {
          $bodyT = WFEnv::twig()->createTemplate($action->getMailBody());
        }
        $body = $bodyT->render($data);
        $data['mail_body'] = $body;
        $mail = $mailT->render($data);  
        $message->setBody($mail);
      } else {
        return ['err_msg' => 'mail_body is required'];
      }

      if(!is_null($action->getMailAttachments())) {
        $attachT = WFEnv::twig()->createTemplate($action->getMailAttachments());
        $attach = json_decode($attachT->render($data), true);
        if(!is_null($attach)) {
          foreach ($attach as $v ) {
            $count = count($v);
            if ($count > 1) {
              $url = $v[0];
              $fileName = $v[1];
              $message->attach( \Swift_Attachment::fromPath($url)->setFilename($fileName));
            } elseif ($count == 1) {
              $url = $v[0];
              $message->attach( \Swift_Attachment::fromPath($url));
            }
          }
        }
      }

      $from = $message->getFrom();
      $to = $message->getTo();
      $body =  $message->getBody();
      if (!empty($from)
        && !empty($to)
        && !empty($body)) {
        $message->setContentType("text/html");
        //Send the message
        $result = WFEnv::mailer()->send($message);
        if (!$result) {
          return ['err_msg' => 'Email failed to send'];
        }
      }
    }
    catch(Exception $err)
    {
      //print_r($err);
      return ['err_msg' => 'Internal Server Error'];
    }
  }
}
/* EOF */
