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

require_once __DIR__.'/../core/WFHttpRequestHandler.php';
require_once __DIR__.'/WFormConfigController.php';

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\RequestContext;
use Symfony\Component\Routing\Matcher\UrlMatcher;
use Symfony\Component\HttpKernel\Controller\ControllerResolver;
use Symfony\Component\Routing\Route;
use Symfony\Component\Routing\RouteCollection;

use WF\Lib\Core\WFHttpRequestHandler;
use WF\Lib\Core\WFUser;

/**
 * Handle wonder form config.
 * This is the main entry of the core module
 *
 * @author Wonderform <contact@wonderform.net>
 */
class WFormConfigHandler {
  const CTRL_CLASS = 'WF\Lib\Wfc\WFormConfigController';

  /**
   * @param RouteCollection
   */
  private static $_sRoutes = null;

  /**
   * Constructor
   */
  private function __construct()
  {
  }

  /**
   * Handle the http request
   * @param Request $request
   */
  public static function handleRequest(Request $request) {
    $user_role =
      $request->attributes->get(
        WFUser::WF_USER_ROLE, WFUser::WF_VISITOR_ROLE_ID);

    // wf admin role is required to access
    // this module
    if ($user_role == WFUser::WF_ADMIN_ROLE_ID) {
      $context = new RequestContext();
      $matcher = new UrlMatcher(self::getRoutes(), $context);
      $resolver = new ControllerResolver();

      $handler = new WFHttpRequestHandler($matcher, $resolver);
      $response = $handler->handle($request);
    } else {
      $response = new JsonResponse(
        [ 'err_msg' => WFUser::ACCESS_DENIED_ERR ], 403);
    }

    return $response;
  }

  /**
   * Get _sRoutes
   * @return RouteCollection
   */
  private static function getRoutes() {
    if (is_null(self::$_sRoutes)) {
      self::$_sRoutes = new RouteCollection();

      self::$_sRoutes->add(
        'wf_wfc_all_forms',
        new Route(
          '/{siteName}/wfc/form',
          array('_controller' => self::CTRL_CLASS. '::findAllFormsAction',),
          array(),
          array(),
          '',
          array(),
          array('GET')
        )
      );

      self::$_sRoutes->add(
        'wf_wfc_test_sendmail',
        new Route(
          '/{siteName}/wfc/test-sendmail',
          array('_controller' => self::CTRL_CLASS. '::testSendMail',),
          array(),
          array(),
          '',
          array(),
          array('GET')
        )
      );

      /*self::$_sRoutes->add(
        'wf_wfc_single_by_id',
        new Route(
          '/{siteName}/wfc/form/id/{id}',
          array('_controller' => self::CTRL_CLASS. '::findByIdAction',),
          array('parameter' => '\d+'),
          array(),
          '',
          array(),
          array('GET')
        )
      );*/

      self::$_sRoutes->add(
        'wf_wfc_single_by_id',
        new Route(
          '/{siteName}/wfc/id/{id}',
          array('_controller' => self::CTRL_CLASS. '::findByIdAction',),
          array('parameter' => '\d+'),
          array(),
          '',
          array(),
          array('GET')
        )
      );

      /*self::$_sRoutes->add(
        'wf_wfc_single_by_name',
        new Route(
          '/{siteName}/wfc/{formName}',
          array('_controller' => self::CTRL_CLASS. '::findByNameAction',),
          array(),
          array(),
          '',
          array(),
          array('GET')
        )
      );*/

      self::$_sRoutes->add(
        'wf_wfc_single_by_name',
        new Route(
          '/{siteName}/wfc/name/{formName}',
          array('_controller' => self::CTRL_CLASS. '::findByNameAction',),
          array(),
          array(),
          '',
          array(),
          array('GET')
        )
      );

      self::$_sRoutes->add(
        'wf_wfc_form_categorygroup_search',
        new Route(
          '/{siteName}/wfc/{formName}/category-group',
          array('_controller' => self::CTRL_CLASS. '::jsonCategoryGroupAction',),
          array(),
          array(),
          '',
          array(),
          array('GET')
        )
      );

      self::$_sRoutes->add(
        'wf_wfc_form_categorygroup_leafs',
        new Route(
          '/{siteName}/wfc/{formName}/category-group/leafs',
          array('_controller' => self::CTRL_CLASS. '::categoryGroupLeafsAction',),
          array(),
          array(),
          '',
          array(),
          array('GET')
        )
      );

      self::$_sRoutes->add(
        'wf_wfc_single_by_id_bis',
        new Route(
          '/{siteName}/wfc/{formName}/view/id/{id}',
          array('_controller' => self::CTRL_CLASS. '::findByIdBisAction',),
          array(),
          array(),
          '',
          array(),
          array('GET')
        )
      );

      self::$_sRoutes->add(
        'wf_wfc_new',
        new Route(
          '/{siteName}/wfc/{formName}/new',
          array('_controller' => self::CTRL_CLASS. '::jsonNewAction',),
          array(),
          array(),
          '',
          array(),
          array('POST')
        )
      );

      /*self::$_sRoutes->add(
        'wf_wfc_delete',
        new Route(
          '/{siteName}/wfc/{formName}/delete/id/{id}',
          array('_controller' => self::CTRL_CLASS. '::deleteAction',),
          array('parameter' => '\d+'),
          array(),
          '',
          array(),
          array('POST')
        )
      );*/

      self::$_sRoutes->add(
        'wf_wfc_delete',
        new Route(
          '/{siteName}/wfc/{formName}/delete/{id}',
          array('_controller' => self::CTRL_CLASS. '::jsonDeleteAction',),
          array('parameter' => '\d+'),
          array(),
          '',
          array(),
          array('POST')
        )
      );

      self::$_sRoutes->add(
        'wf_wfc_search',
        new Route(
          '/{siteName}/wfc/{formName}/search',
          array('_controller' => self::CTRL_CLASS. '::jsonSearchAction',),
          array(),
          array(),
          '',
          array(),
          array('GET')
        )
      );

      self::$_sRoutes->add(
        'wf_wfc_all_entries',
        new Route(
          '/{siteName}/wfc/{formName}',
          array('_controller' => self::CTRL_CLASS. '::findAllAction',),
          array(),
          array(),
          '',
          array(),
          array('GET')
        )
      );

      self::$_sRoutes->add(
        'wf_player_find_opt_entries',
        new Route(
          '/{siteName}/wfc/{formName}/opt/form-entry/{formEntryId}',
          array('_controller' => self::CTRL_CLASS. '::findOptionEntriesAction',),
          array(),
          array(),
          '',
          array(),
          array('GET')
        )
      );

      self::$_sRoutes->add(
        'wf_player_find_opt_entries_count',
        new Route(
          '/{siteName}/wfc/{formName}/opt/count',
          array('_controller' => self::CTRL_CLASS. '::optionEntriesCountAction',),
          array(),
          array(),
          '',
          array(),
          array('GET')
        )
      );

      self::$_sRoutes->add(
        'wf_wfc_publish',
        new Route(
          '/{siteName}/wfc/{formName}/publish',
          array('_controller' => self::CTRL_CLASS. '::publishAction',),
          array(),
          array(),
          '',
          array(),
          array('POST', 'GET')
        )
      );

      self::$_sRoutes->add(
        'wf_wfc_unpublish',
        new Route(
          '/{siteName}/wfc/{formName}/unpublish',
          array('_controller' => self::CTRL_CLASS. '::unpublishAction',),
          array(),
          array(),
          '',
          array(),
          array('POST', 'GET')
        )
      );
    }
    return self::$_sRoutes;
  }
}
/* EOF */
