<?php

/*
* This file is part of the WonderForm package.
*
* (c) Wonderform <contact@wonderform.net>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
 */

require_once __DIR__.'/wfapi/src/lib/core/WFEnv.php';
require_once __DIR__.'/wfapi/src/lib/post/WFPostService.php';
require_once __DIR__.'/wfapi/src/lib/post/WFormPostAction.php';
require_once __DIR__.'/wfapi/src/lib/wfc/WFormConfigController.php';

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Symfony\Component\HttpFoundation\StreamedResponse;

use WF\Lib\Core\WFDbManager;
use WF\Lib\Core\WFEnv;
use WF\Lib\Core\WFCoreService;
use WF\Lib\Post\WFPostService;
use WF\Lib\Post\WFormPostAction;
use WF\Lib\Post\WFErrorMessage;
use WF\Lib\Core\WFUser;
use WF\Lib\Core\WFProductType;
use WF\Lib\Core\WFModule;
use WF\Lib\Core\WFormConfig;
use WF\Lib\Custom\WFCustomManager;
use WF\Lib\Addons\WFAddonsService;
use WF\Lib\Wfc\WFormConfigController;

/**
 * Main entry point to manipulate a wonder form.
 *
 * @author Wonderform <contact@wonderform.net>
 */
class WP_WFController
{
  /**
   * Constructor
   * @param string $name
   * @param WFModule $module
   */
  public function __construct()
  {
  }

 /**
  * New FormConfig - action
  * @param Request $request
  * @param string $prefix
  * @return JsonResponse
  */
  public function newFormConfigAction(Request $request, $prefix)
  {
    $user_role =
      $request->attributes->get(
        WFUser::WF_USER_ROLE, WFUser::WF_VISITOR_ROLE_ID);

    // wf admin role is required to access
    // wfc module
    if ($user_role == WFUser::WF_ADMIN_ROLE_ID) {
      $request->attributes->set(WFUser::WF_REQUEST_TYPE, WFEnv::WF_REQUEST_JSON);
      $res = WFormConfigController::newAction($request, '', 'form-config');
      if (is_array($res) && isset($res['resultset'])) {
        $entries = $res['resultset'];
      } else {
        $entries = $res;
      }

      return WFormPostAction::makeJsonResponse($entries);
    } else {
      return new JsonResponse(
        [ 'err_msg' => WFUser::ACCESS_DENIED_ERR ], 403);
    }
  }

 /**
  * Delete form config - action
  * @param Request $request
  * @param string $prefix
  * @param integer $id
  * @return JsonResponse
  */
  public function deleteFormConfigAction(Request $request, $prefix, $id)
  {
    $user_role =
      $request->attributes->get(
        WFUser::WF_USER_ROLE, WFUser::WF_VISITOR_ROLE_ID);

    // wf admin role is required to access
    // wfc module
    if ($user_role == WFUser::WF_ADMIN_ROLE_ID) {
      $request->attributes->set(WFUser::WF_REQUEST_TYPE, WFEnv::WF_REQUEST_JSON);
      $wfc = WFCoreService::getInstance()
        ->getFormConfigMgr()->findOneById($id);
      $externalId = 0;
      $productTypeId = 0;
      if (!is_null($wfc)) {
        $externalId = $wfc->getExternalId();
        $productTypeId = $wfc->getProductTypeId();
      }

      // delete form config
      $res = WFormConfigController::deleteAction($request, '', 'form-config', $id);
      if (is_array($res) && isset($res['resultset'])) {
        $entries = $res['resultset'];
      } else {
        $entries = $res;
      }

      return WFormPostAction::makeJsonResponse($entries);
    } else {
      return new JsonResponse(
        [ 'err_msg' => WFUser::ACCESS_DENIED_ERR ], 403);
    }
  }

 /**
  * New - action
  * @param Request $request
  * @param string $prefix
  * @param string $formName
  * @return JsonResponse|Response|array
  */
  public function newAction(Request $request, $prefix, $formName)
  {
    $requestType =
      $request->attributes->get(WFUser::WF_REQUEST_TYPE, WFEnv::WF_REQUEST_JSON);

    $wfc = WFCoreService::getInstance()
      ->getFormConfigMgr()->findOneByName($formName);
    if (is_null($wfc)) {
      return new JsonResponse(['err_msg' => $formName.' not found'], 404);
    } else if (!$wfc->getFrontPublishEnabled()) {
      $user_role =
        $request->attributes->get(
          WFUser::WF_USER_ROLE, WFUser::WF_VISITOR_ROLE_ID);
      if ($user_role != WFUser::WF_ADMIN_ROLE_ID) {
        return new JsonResponse(['err_msg' => WFUser::ACCESS_DENIED_ERR], 403);
      }
    }

    if ($requestType == WFEnv::WF_REQUEST_JSON) {
      $res = $this->doNewAction($wfc, $request);
      return WFormPostAction::makeJsonResponse($res);
    } else if ($requestType == WFEnv::WF_REQUEST_HTML) {
      $templateFile = $wfc->getEditTemplate();
      if (empty($templateFile)) {
        $templateFile = 'edit.tpl';
      }

      if ($request->getMethod('post') == 'POST') {
        $res = $this->doNewAction($wfc, $request);
      } else {
        $res = WFormPostAction::checkRequest($request, $wfc);
        if (is_null($res)) {
          $res = array();
        }
      }

      return WFormPostAction::makeResponse($request, $wfc, $res, $templateFile);
    } else {
      $res = $this->doNewAction($wfc, $request);
      return WFormPostAction::makeArrayResponse($wfc, $res);
    }
  }

 /**
  * Do New - action
  * @param WFormConfig $wfc
  * @param Request $request
  * @return array|WFErrorMessage
  */
  public function doNewAction(WFormConfig &$wfc, Request $request)
  {
    $response = WFormPostAction::checkRequest($request, $wfc);
    $external_id = intval($request->request->get('external_id', '0'));
    $entry_id = intval($request->request->get('entry_id', '0'));

    if (is_null($response)) {
      $backendData = array();

      // upload files if request contains files
      $this->doUpload($wfc, $request, $backendData);
      // api - call
      $response = WFormPostAction::doNewAction($request, $wfc, $backendData);

      return $response;
    } else {
      return $response;
    }
  }

 /**
  * Do Upload - action
  * @param WFormConfig $wfc
  * @param Request $request
  * @param array $backendData hold backend data
  * @return JsonResponse
  */
  public function doUpload(WFormConfig &$wfc, Request $request, array &$backendData)
  {
    if ($request->getMethod('post') == 'POST') {
      if ( $_FILES ) { 
        // get attributes to add files urls.
        $attributesStr = $request->request->get('attributes', null);
        $attributes = array();
        if ($attributesStr) {
          $attributesStr= stripslashes($attributesStr);
          $attributes = json_decode($attributesStr, true);
        }


        foreach ($_FILES as $fieldname => $file) {
          // modify $_FILES to make wordpress happy
          $_FILES = array ($fieldname => $file); 
          foreach ($_FILES as $file => $array) {        
            // upload data
            $attachId = $this->handleUpload($file);
            // get and save url
            $url = wp_get_attachment_url($attachId);
            $backendData[$fieldname] = $url;
            if (isset($attributes[$fieldname])) {
              $attributes[$fieldname] = $url;
            }
          }
        }

        // re-assign attributes
        if (!empty($attributes)) {
          $request->request->set('attributes', json_encode($attributes));
        }
      }
    }
  }

 /**
  * Handle Upload
  * @param string $filename
  * @param integer $postId
  * @param bool setThumbnail
  */
  private function handleUpload(
    $filename, $postId = 0, $setThumbnail = false)
  {
    require_once(ABSPATH . "wp-admin" . '/includes/image.php');
    require_once(ABSPATH . "wp-admin" . '/includes/file.php');
    require_once(ABSPATH . "wp-admin" . '/includes/media.php');
       
    $attachId = media_handle_upload($filename, $postId);

    if ($setThumbnail) {
      set_post_thumbnail($postId, $attachId);
    }

    return $attachId;
  }

  /**
   * Find form config by module - action
   * @param WFormConfig $wfc
   * @param $request Request
   * @param string $prefix
   * @return JsonResponse
   */
  public function findAllFormsAction(Request $request, $prefix)
  {
    return WFormPostAction::jsonfindAllFormsAction(
      $request, WFCustomManager::MODULE_ID);
  }

 /**
  * Search - action
  * @param $request Request
  * @param string $prefix
  * @param string $formName
  * @return JsonResponse|Response|array
  */
  public function searchAction(Request $request, $prefix, $formName)
  {
    $requestType =
      $request->attributes->get(WFUser::WF_REQUEST_TYPE, WFEnv::WF_REQUEST_JSON);

    $wfc = WFCoreService::getInstance()
      ->getFormConfigMgr()->findOneByName($formName);

    if (is_null($wfc)) {
      return new JsonResponse(['err_msg' => $formName.' not found'], 404);
    } else if (!$wfc->getPublicSearchEnabled()) {
      $user_role =
        $request->attributes->get(
          WFUser::WF_USER_ROLE, WFUser::WF_VISITOR_ROLE_ID);
      if ($user_role != WFUser::WF_ADMIN_ROLE_ID) {
        return new JsonResponse(['err_msg' => WFUser::ACCESS_DENIED_ERR], 403);
      }
    }

    $res = $this->doSearchAction($wfc, $request, $prefix, $formName);

    if ($requestType == WFEnv::WF_REQUEST_JSON) {
      return WFormPostAction::makeJsonResponse($res);
    } else if ($requestType == WFEnv::WF_REQUEST_HTML) {
      $templateFile = $wfc->getSearchTemplate();
      if (empty($templateFile)) {
        $templateFile = 'search.tpl';
      }
      return WFormPostAction::makeResponse($request, $wfc, $res, $templateFile);
    } else {
      return WFormPostAction::makeArrayResponse($wfc, $res);
    }
  }

 /**
  * Do Search - action
  * @param WFormConfig $wfc
  * @param $request Request
  * @param string $prefix
  * @param string $formName
  * @return array|WFErrorMessage
  */
  public function doSearchAction(
    WFormConfig &$wfc, Request $request, $prefix, $formName)
  {
    $response = WFormPostAction::checkRequest($request, $wfc);
    if (is_null($response)) {
      return WFormPostAction::doSearchAction($request, $wfc);
    } else {
      return $response;
    }
  }

  /**
   * Find form entry by its identifier - action
   * @param Request $request
   * @param string $prefix
   * @param string $formName
   * @param integer $id identifier of the form entry
   * @return JsonResponse|Response|array
   */
  public function findByIdAction(Request $request, $prefix, $formName, $id)
  {
    $requestType =
      $request->attributes->get(WFUser::WF_REQUEST_TYPE, WFEnv::WF_REQUEST_JSON);
    $isInternalRequest =
      $request->attributes->get(WFUser::WF_IS_INTERNAL_REQUEST, false);

    $wfc = WFCoreService::getInstance()
      ->getFormConfigMgr()->findOneByName($formName);

    if (is_null($wfc)) {
      return new JsonResponse(['err_msg' => $formName.' not found'], 404);
    } else if (!$wfc->getPublicSearchEnabled()) {
      $user_role =
        $request->attributes->get(
          WFUser::WF_USER_ROLE, WFUser::WF_VISITOR_ROLE_ID);
      if ($user_role != WFUser::WF_ADMIN_ROLE_ID) {
        return new JsonResponse(['err_msg' => WFUser::ACCESS_DENIED_ERR], 403);
      }
    }

    $res = $this->doFindByIdAction(
      $wfc, $request, $prefix, $formName, $id);

    if ($requestType == WFEnv::WF_REQUEST_JSON) {
      return WFormPostAction::makeJsonResponse($res);
    } else if ($requestType == WFEnv::WF_REQUEST_HTML) {
      $templateFile = $wfc->getViewTemplate();
      if (empty($templateFile)) {
        $templateFile = 'view.tpl';
      }
      return WFormPostAction::makeResponse($request, $wfc, $res, $templateFile);
    } else {
      return WFormPostAction::makeArrayResponse($wfc, $res);
    }
  }

  /**
   * Do Find form entry by its identifier - action
   * @param WFormConfig $wfc
   * @param Request $request
   * @param string $prefix
   * @param string $formName
   * @param integer $id identifier of the form entry
   * @return array|WFErrorMessage
   */
  public function doFindByIdAction(
    WFormConfig &$wfc,  Request $request, $prefix, $formName, $id)
  {
    $response = WFormPostAction::checkRequest($request, $wfc);
    if (is_null($response)) {
      return WFormPostAction::doFindByIdAction($wfc, $id);
    } else {
      return $response;
    }
  }
}
/* EOF */
