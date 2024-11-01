<?php

/*
* This file is part of the WonderForm package.
*
* (c) Wonderform <contact@wonderform.net>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
 */

if ( ! defined( 'ABSPATH' ) ) {
exit; // Exit if accessed directly
}

require_once __DIR__.'/wfapi/src/lib/core/WFUser.php';
require_once __DIR__.'/wfapi/src/lib/wfc/WFormConfigHandler.php';
require_once __DIR__.'/wfapi/src/lib/player/WFPlayerHandler.php';
require_once __DIR__.'/wfapi/src/lib/post/WFPostService.php';
require_once __DIR__.'/wfapi/src/lib/custom/WFCustomService.php';
require_once __DIR__.'/WP_WFHandler.php';
require_once __DIR__.'/../WP_WFApp.php';

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\RequestContext;
use Symfony\Component\Routing\Matcher\UrlMatcher;
use Symfony\Component\HttpKernel\Controller\ControllerResolver;

use WF\Lib\Core\WFUser;
use WF\Lib\Core\WFDbManager;
use WF\Lib\Core\WFModule;
use WF\Lib\Core\WFCoreService;
use WF\Lib\Core\WFEnv;
use WF\Lib\Core\WFProductType;
use WF\Lib\Core\WFSettingParams;
use WF\Lib\Addons\WFAddonsService;
use WF\Lib\Post\WFPostService;
use WF\Lib\Post\WFormPostAction;
use WF\Lib\Post\WFErrorMessage;
use WF\Lib\Addons\Catalog\WFCatalogManager;
use WF\Lib\Addons\Signup\WFSignupManager;
use WF\Lib\Addons\PageBuilder\WFPageBuilderManager;

/**
 * class WP_WFServer
 */
class WP_WFServer {
  const WF_RESPONSE = 'wf_res';
  /**
   * Constructor
   * @param $_app
   */
  public function __construct(WP_WFApp $app) {
    $this->_app = $app;
  }

  /**
   * Get the application context
   */
  public function getApp() {
    return $this->_app;
  }

  private function isJsonRequest(Request $request)
  {
    return WFEnv::WF_REQUEST_JSON === $request->getContentType();
  }

  private function transformJsonBody(Request $request)
  {
    $data = json_decode($request->getContent(), true);
    if (json_last_error() !== JSON_ERROR_NONE) {
        return false;
    }
    if ($data === null) {
        return true;
    }

    $request->attributes->set('is_json_request', TRUE);
    $request->request->replace($data);
    return true;
  }

  private function isRequestFromLocalhost() {
    if (substr($_SERVER['REMOTE_ADDR'], 0, 9) == 'localhost'
      || substr($_SERVER['REMOTE_ADDR'], 0, 9) == '127.0.0.1'
      || substr($_SERVER['REMOTE_ADDR'],0,3) == '10.'
      || substr($_SERVER['REMOTE_ADDR'],0,7) == '192.168') {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Create request
   * @return Request
   */
  private function createRequest() {
    // set timezone
    $timezone = WFEnv::getTimezone();
    if (empty($timezone)) {
      $timezone = 'Europe/London'; // set default value GMT + 0
    }
    date_default_timezone_set($timezone);

    // create the request
    $request = Request::createFromGlobals();
    $current_user = WP_WFApp::getCurrentUser() ;
    
    $request->attributes->set(WFUser::WF_SITE_URL,        WP_WFApp::getSiteURL() );
    $request->attributes->set(WFUser::WF_STATIC_URL,      $this->getApp()->getStaticUrl() );
    $request->attributes->set(WFUser::WF_SITE_NAME,       WP_WFApp::getSiteName() );
    $request->attributes->set(WFUser::WF_SITE_DESC,       WP_WFApp::getSiteDescription() );
    $request->attributes->set(WFUser::WF_ADMIN_EMAIL,     WP_WFApp::getAdminEmail() );
    $request->attributes->set(WFUser::WF_UPLOAD_BASEDIR,  WP_WFApp::getUploadBaseDir() );
    $request->attributes->set(WFUser::WF_ADMIN_POST_URL,  WP_WFApp::getAdminPostUrl() );
    if (isset($_SERVER['PATH_INFO'])) {
      $request->attributes->set(WFUser::WF_PATH_INFO,     $_SERVER['PATH_INFO']);
    }

    if (WP_WFApp::userLoggedIn()) {
      $request->attributes->set(WFUser::WF_USER_ID,         $current_user->ID);
      $request->attributes->set(WFUser::WF_USER_LOGIN,      $current_user->user_login);
      $request->attributes->set(WFUser::WF_USER_EMAIL,      $current_user->user_email);
      $request->attributes->set(WFUser::WF_USER_FIRSTNAME,  $current_user->user_firstname);
      $request->attributes->set(WFUser::WF_USER_LASTNAME,   $current_user->user_lastname);
      $request->attributes->set(WFUser::WF_DISPLAY_NAME,    $current_user->display_name);
      $request->attributes->set(WFUser::WF_USER_LOGGED_IN,  true);

      if (WP_WFApp::userCanManage()) {
        $request->attributes->set(WFUser::WF_USER_ROLE, WFUser::WF_ADMIN_ROLE_ID);
      } else {
        $request->attributes->set(WFUser::WF_USER_ROLE, WFUser::WF_SUBSCRIBER_ROLE_ID);   
      }
    } else {
      $request->attributes->set(WFUser::WF_USER_ID,         0);
      $request->attributes->set(WFUser::WF_USER_LOGIN,      '');
      $request->attributes->set(WFUser::WF_USER_EMAIL,      '');
      $request->attributes->set(WFUser::WF_USER_FIRSTNAME,  '');
      $request->attributes->set(WFUser::WF_USER_LASTNAME,   '');
      $request->attributes->set(WFUser::WF_DISPLAY_NAME,    '');
      $request->attributes->set(WFUser::WF_USER_LOGGED_IN,  false);

      $request->attributes->set(WFUser::WF_USER_ROLE, WFUser::WF_VISITOR_ROLE_ID);
    }

    if (WP_WFServer::isRequestFromLocalhost()) {
      $request->attributes->set(WFUser::WF_USER_LOGGED_IN,  true);
      $request->attributes->set(WFUser::WF_USER_ROLE, WFUser::WF_ADMIN_ROLE_ID);
    }

    return $request;
  }

  /**
   * Do Handle request
   * @param $pageName the store name
   * @param $storeTemplate the store template file
   * @param string $requestType (json|html|array) default 'json'
   */
  private function doHandleRequest(
    $requestType = WFEnv::WF_REQUEST_JSON,
    $pageName = null,
    $storeTemplate = null) {
    $request = $this->createRequest();

    $request->attributes->set(WFUser::WF_IS_INTERNAL_REQUEST, false);

    if (!is_null($pageName)) {
      $request->attributes->set(WFUser::WF_STORE_NAME, $pageName);
    }

    if (!is_null($storeTemplate)) {
      $request->attributes->set(WFUser::WF_STORE_TEMPLATE, $storeTemplate);
    }

    // handle the request
    $path = $request->getPathInfo();

    if (preg_match('#/'.$this->getApp()->getAppSlug().'/wfc/form-config/new#i', $path)) {
      $response =
        WP_WFHandler::handleRequest(
          $this->_app, $request, $requestType);
    } else if (preg_match('#/'.$this->getApp()->getAppSlug().'/wfc/form-config/delete/#i', $path)) {
      $response =
        WP_WFHandler::handleRequest(
          $this->_app, $request, $requestType);
    } else if (preg_match('#/'.$this->getApp()->getAppSlug().'/wfc/#i', $path)) {
      $response =
        WF\Lib\Wfc\WFormConfigHandler::handleRequest($request);
    } else if (preg_match('#/'.$this->getApp()->getAppSlug().'/player/#i', $path)) {
      $response =
        WF\Lib\Player\WFPlayerHandler::handleRequest($request);
    } else {
      $response =
        WP_WFHandler::handleRequest(
          $this->_app, $request, $requestType);
    }

    return $response;
  }

  /**
   * Handle request
   * @param $requestType
   */
  public function handleRequest($requestType = WFEnv::WF_REQUEST_JSON) {
    $response = $this->doHandleRequest();
    if ($requestType != WFEnv::WF_REQUEST_DEFAULT) {
      if ($response instanceof JsonResponse) {
        $response->send();
      } else if ($response instanceof Response) {
        $response->send();
      } else if ($response instanceof WFErrorMessage) {
        $response = WFormPostAction::makeJsonResponse($response);
        $response->send();
      } else {
        $GLOBALS[self::WF_RESPONSE] = $response; 
        load_template(WP_WFApp::getDefaultSingleTemplate()) ;
      }
    } else {
      return $response;
    }
  }

  /**
   * Handle store request
   * @param $pageName the store name
   * @param $storeTemplate the store template file
   * @param $wfPostType
   */
  public function handleStoreRequest(
    $pageName, $storeTemplate, $wfPostType = 'wf-post') {
    $post_object =
      get_page_by_path(
        $pageName,
        OBJECT,
        $wfPostType);

    global $post;
    $post = $post_object;
    setup_postdata($post);
    $response = $this->doHandleStoreRequest($pageName);

    if ($response instanceof JsonResponse) {
      $response->send();
      exit(1);
    } else if ($response instanceof Response) {
      $response->send();
      exit(1);
    } else if ($response instanceof WFErrorMessage) {
      $response = WFormPostAction::makeJsonResponse($response);
      $response->send();
      exit(1);
    } else {
      $GLOBALS[self::WF_RESPONSE] = $response; 
      load_template($storeTemplate);
    }
  }

  /**
   * Do Handle store request
   * @param $pageName the store name
   */
  public function doHandleStoreRequest($pageName) {
    global $post;

    if (!is_null($post)) {
      // Handle the request
      $response = $this->doHandleRequest(WFEnv::WF_REQUEST_DEFAULT);
      return $response;
    } else {
      $response = new JsonResponse(['err_msg' => 'Not Found'], 404);
      $response->send();
      exit(1);
    }
  }
}
/* EOF */
