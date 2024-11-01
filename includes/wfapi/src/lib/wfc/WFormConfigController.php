<?php

/*
* This file is part of the WonderForm package.
*
* (c) Wonderform <contact@wonderform.net>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
 */

namespace WF\Lib\Wfc;

require_once __DIR__.'/../core/WFCoreService.php';
require_once __DIR__.'/../post/WFormPostAction.php';
require_once __DIR__.'/../addons/WFAddonsService.php';

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Symfony\Component\HttpFoundation\StreamedResponse;

use WF\Lib\Core\WFDbManager;
use WF\Lib\Core\WFUser;
use WF\Lib\Core\WFProductType;
use WF\Lib\Core\WFormConfigManager;
use WF\Lib\Core\WFormStats;
use WF\Lib\Core\WFEnv;
use WF\Lib\Core\WFSettingParams;
use WF\Lib\Core\WFormActionType;
use WF\Lib\Core\WFCoreService;
use WF\Lib\Post\WFPostService;
use WF\Lib\Post\WFormPostAction;
use WF\Lib\Post\WFErrorMessage;
use WF\Lib\Addons\WFAddonsService;

/**
 * Main entry point to manipulate a WonderForm Config.
 *
 * @author Wonderform <contact@wonderform.net>
 */
class WFormConfigController
{
  const INVALID_REQUEST_ERR = 'Invalid Request.';
  const CANNOT_FIND_WFC_ERR = 'Cannot find form config.';

  /**
   * Get core module service
   * @return WFCoreService
   */
  public static function getService() {
    return WFCoreService::getInstance();
  }

 /**
  * Publish form - action
  * @param Request $request
  * @param string $siteName
  * @param string $formName
  * @return JsonResponse
  */
  public function publishAction(Request $request, $siteName, $formName)
  {
    $wfc = WFCoreService::getInstance()
      ->getFormConfigMgr()->findOneByName($formName);
    if (!is_null($wfc) && $wfc->getCustom()) {
      $productTypeId = $wfc->getProductTypeId();
      if ($wfc->getIsAddon()
        || $productTypeId > WFProductType::WF_CUSTOM_CUSTOM_ID) {
        WFAddonsService::getInstance()->publish($wfc);
      } else {
        WFCoreService::getInstance()->doPublish($wfc);
      }
      return new JsonResponse(['published' => $wfc->getPublished()], 200);
    } else {
      return new JsonResponse(['err_msg' => 'FormConfig Not Found'], 404);
    }
  }

 /**
  * Unpublish form - action
  * @param Request $request
  * @param string $siteName
  * @param string $formName
  * @return JsonResponse
  */
  public function unpublishAction(Request $request, $siteName, $formName)
  {
    $wfc = WFCoreService::getInstance()
      ->getFormConfigMgr()->findOneByName($formName);
    if (!is_null($wfc) && $wfc->getCustom()) {
      $wfc->setPublished(false);
      WFDbManager::getInstance()->save($wfc);
      return new JsonResponse(['published' => $wfc->getPublished()], 200);
    } else {
      return new JsonResponse(['err_msg' => 'FormConfig Not Found'], 404);
    }
  }

 /**
  * New - action
  * @param Request $request
  * @param string $siteName
  * @param string $formName
  * @return Array
  */
  public static function newAction(Request $request, $siteName, $formName)
  {
    $wfc = WFCoreService::getInstance()
      ->getFormConfigMgr()->findOneByName($formName);
    $response = WFormPostAction::checkRequest($request, $wfc);
    if (is_null($response)) {
      return WFormPostAction::newAction($request, $wfc);
    } else {
      return $response;
    }
  }

 /**
  * New - action
  * @param Request $request
  * @param string $siteName
  * @param string $formName
  * @return JsonResponse
  */
  public static function jsonNewAction(Request $request, $siteName, $formName)
  {
    $wfc = WFCoreService::getInstance()
      ->getFormConfigMgr()->findOneByName($formName);
    $response = WFormPostAction::jsonCheckRequest($request, $wfc);
    if (is_null($response)) {
      return WFormPostAction::jsonNewAction($request, $wfc);
    } else {
      return $response;
    }
  }

  /**
   * Find form config entry by its identifier - action
   * @param Request $request
   * @param string $siteName
   * @param string $formName
   * @param integer $id identifier of the form entry
   * @return JsonResponse
   */
  public function findByIdBisAction(Request $request, $siteName, $formName, $id)
  {
    $wfc = WFCoreService::getInstance()
      ->getFormConfigMgr()->findOneByName($formName);
    $response = WFormPostAction::jsonCheckRequest($request, $wfc);
    if (is_null($response)) {
      return WFormPostAction::jsonFindByIdAction($wfc, $id);
    } else {
      return $response;
    }
  }

 /**
  * Delete - action
  * @param Request $request
  * @param string $siteName
  * @param string $formName
  * @param integer $id
  * @return JsonResponse
  */
  public static function jsonDeleteAction(Request $request, $siteName, $formName, $id)
  {
    $wfc = WFCoreService::getInstance()
      ->getFormConfigMgr()->findOneByName($formName);
    $response = WFormPostAction::jsonCheckRequest($request, $wfc);
    if (is_null($response)) {
      return WFormPostAction::jsonDeleteAction($request, $wfc, $id);
    } else {
      return $response;
    }
  }

 /**
  * Delete - action
  * @param Request $request
  * @param string $siteName
  * @param string $formName
  * @param integer $id
  * @return Array
  */
  public static function deleteAction(Request $request, $siteName, $formName, $id)
  {
    $wfc = WFCoreService::getInstance()
      ->getFormConfigMgr()->findOneByName($formName);
    $response = WFormPostAction::checkRequest($request, $wfc);
    if (is_null($response)) {
      return WFormPostAction::deleteAction($request, $wfc, $id);
    } else {
      return $response;
    }
  }

 /**
  * Search - action
  * @param $request Request
  * @param string $siteName
  * @param string $formName
  * @return Array
  */
  public function searchAction(Request $request, $siteName, $formName)
  {
    $wfc = WFCoreService::getInstance()
      ->getFormConfigMgr()->findOneByName($formName);
    $response = WFormPostAction::checkRequest($request, $wfc);
    if (is_null($response)) {
      return WFormPostAction::searchAction($request, $wfc);
    } else {
      return $response;
    }
  }

 /**
  * Search - action
  * @param $request Request
  * @param string $siteName
  * @param string $formName
  * @return JsonResponse
  */
  public function jsonSearchAction(Request $request, $siteName, $formName)
  {
    $wfc = WFCoreService::getInstance()
      ->getFormConfigMgr()->findOneByName($formName);
    $response = WFormPostAction::jsonCheckRequest($request, $wfc);
    if (is_null($response)) {
      return WFormPostAction::jsonSearchAction($request, $wfc);
    } else {
      return $response;
    }
  }

 /**
  * CategoryGroup - action
  * @param $request Request
  * @param string $siteName
  * @param string $formName
  * @return JsonResponse
  */
  public function jsonCategoryGroupAction(Request $request, $siteName, $formName)
  {
    $wfc = WFCoreService::getInstance()
      ->getFormConfigMgr()->findOneByName($formName);
    $response = WFormPostAction::jsonCheckRequest($request, $wfc);
    if (is_null($response)) {
      if ($wfc->getCategoryGroupId()) {
        $tree = WFCoreService::getInstance()
          ->getOptionMgr()->getOptionsByTreeId($wfc->getCategoryGroupId());
      } else {
        $tree = [];
      }

      return new JsonResponse(array('tree' => $tree));
    } else {
      return $response;
    }
  }

 /**
  * CategoryGroupLeafs - action
  * @param $request Request
  * @param string $siteName
  * @param string $formName
  * @return JsonResponse
  */
  public function categoryGroupLeafsAction(Request $request, $siteName, $formName)
  {
    $wfc = WFCoreService::getInstance()
      ->getFormConfigMgr()->findOneByName($formName);
    $response = WFormPostAction::jsonCheckRequest($request, $wfc);
    if (is_null($response)) {
      if ($wfc->getCategoryGroupId()) {
        $leafs = WFCoreService::getInstance()
          ->getOptionMgr()->getLeafsByTreeId($wfc->getCategoryGroupId());
      } else {
        $leafs = [];
      }

      return new JsonResponse(array('leafs' => $leafs));
    } else {
      return $response;
    }
  }

 /**
  * Find all entries - action
  * @param $request Request
  * @param string $siteName
  * @return JsonResponse
  */
  public function findAllAction(Request $request, $siteName, $formName)
  {
    $wfc = WFCoreService::getInstance()
      ->getFormConfigMgr()->findOneByName($formName);
    $response = WFormPostAction::jsonCheckRequest($request, $wfc);
    if (is_null($response)) {
      return WFormPostAction::jsonFindAllAction($request, $wfc);
    } else {
      return $response;
    }
  }

  /**
   * Find form config by its name - action
   * @param $request Request
  * @param string $siteName
   * @param $name string formName of the form config
   * @return JsonResponse
   */
  public function findByNameAction(Request $request, $siteName, $formName)
  {
    $wfc =
      WFCoreService::getInstance()
      ->getFormConfigMgr()->findOneByName($formName);
    return new JsonResponse($wfc);
  }


  /**
   * Find form config by module - action
   * @param $request Request
  * @param string $siteName
   * @return JsonResponse
   */
  public function findAllFormsAction(Request $request, $siteName)
  {
    return WFormPostAction::jsonFindAllFormsAction(
      $request, WFormConfigManager::MODULE_ID);
  }

  /**
   * Test sendmail - action
   * @param $request Request
   * @param string $siteName
   * @return JsonResponse
   */
  public function testSendMail(Request $request, $siteName)
  {
    try {
      //Create the message
      $message = \Swift_Message::newInstance();
      $message->setSubject(WFSettingParams::getMailerTestSendMailSubject());
      $message->setFrom(WFSettingParams::getMailerTestSendMailFrom());
      $message->setTo(WFSettingParams::getMailerTestSendMailTo());
      $message->setBody(WFSettingParams::getMailerTestSendMailBody());
      $message->setContentType("text/html");

      //Send the message
      $result = WFEnv::mailer()->send($message);
      if (!$result) {
        return new JsonResponse(['succeeded' => false, 'msg' => 'Email failed to send']);
      } else {
        return new JsonResponse(['succeeded' => true, 'msg' => 'Email sent successfully']);
      }
    } catch(Exception $err)
    {
      //print_r($err);
      return new JsonResponse(['succeeded' => false, 'msg' => 'Internal Server Error']);
    }
  }

  /**
   * Find form config by its identifier - action
   * @param $request Request
   * @param string $siteName
   * @param $id integer identifier of the form config
   * @return JsonResponse
   */
  public function findByIdAction(Request $request, $siteName, $id)
  {
    $wfc = self::getService()->getFormConfigMgr()->findById($id);
    return new JsonResponse($wfc);
  }

 /**
  * Find option entries - action
  * @param $request Request
  * @param string $siteName
  * @param string $formName
  * @param integer $formEntryId
  * @return JsonResponse
  */
  public function findOptionEntriesAction(
    Request $request, $siteName, $formName, $formEntryId)
  {
    $wfc = WFCoreService::getInstance()
      ->getFormConfigMgr()->findOneByName($formName);
    if (empty($wfc)) {
      $errMsg = new WFErrorMessage('Not Found', 404);
      return $errMsg->toJsonResponse();
    } else {
      $obj = WFCoreService::getInstance()->getOptionEntryMgr()
        ->findEntries($wfc->getId(), $formEntryId);

      return new JsonResponse($obj);
    }
  }

 /**
  * Option entries count - action
  * @param $request Request
  * @param string $siteName
  * @param string $formName
  * @return JsonResponse
  */
  public function optionEntriesCountAction(
    Request $request, $siteName, $formName)
  {
    $wfc = WFCoreService::getInstance()
      ->getFormConfigMgr()->findOneByName($formName);
    if (empty($wfc)) {
      $errMsg = new WFErrorMessage('Not Found', 404);
      return $errMsg->toJsonResponse();
    } else {
      $obj = WFCoreService::getInstance()->getOptionEntryMgr()
        ->countEntries($wfc->getId());

      return new JsonResponse($obj);
    }
  }
}
/* EOF */
