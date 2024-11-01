<?php

/*
* This file is part of the WonderForm package.
*
* (c) Wonderform <contact@wonderform.net>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

require_once __DIR__.'/wfapi/src/lib/core/WFHttpRequestHandler.php';
require_once __DIR__.'/wfapi/src/lib/core/WFUser.php';
require_once __DIR__.'/wfapi/src/lib/player/WFPlayerController.php';
require_once __DIR__.'/WP_WFController.php';
require_once __DIR__.'/../WP_WFApp.php';

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\RequestContext;
use Symfony\Component\Routing\Matcher\UrlMatcher;
use Symfony\Component\HttpKernel\Controller\ControllerResolver;
use Symfony\Component\Routing\Route;
use Symfony\Component\Routing\RouteCollection;
use Symfony\Component\HttpFoundation\Cookie;

use WF\Lib\Core\WFHttpRequestHandler;
use WF\Lib\Core\WFUser;

/**
 * Handle wordpress wonder form posts. 
 *
 * @author Wonderform <contact@wonderform.net>
 */
class WP_WFHandler {
  const DEFAULT_CTRL_CLASS = 'WP_WFController';
  const PLAYER_CTRL_CLASS = 'WF\Lib\Player\WFPlayerController';

  const ACCESS_DENIED_ERR =
    'Access Denied. You do not have permission to access this page.';

  /**
   * Constructor
   */
  private function __construct()
  {
  }

  /**
   * Handle the http request
   * @param WP_WFApp $app
   * @param Request $request
   * @param string $requestType (json|html|array) default 'json'
   * @return JsonResponse|Response|array
   */
  public static function handleRequest(
    WP_WFApp $app,
    Request $request,
    $requestType = 'json') {
    $request->attributes->set(WFUser::WF_REQUEST_TYPE,  $requestType);

    $context = new RequestContext();

    $routes = self::getDefaultRoutes();
    // append app routes
    $routes->addCollection($app->getRoutes());

    $matcher = new UrlMatcher($routes, $context);

    $resolver = new ControllerResolver();

    $handler = new WFHttpRequestHandler($matcher, $resolver);
    $response = $handler->handle($request);

    return $response;
  }

  /**
   * Get default routes
   * @return RouteCollection
   */
  private static function getDefaultRoutes() {
    static $defaultRoutes;

    if (!$defaultRoutes) {
      $defaultRoutes = new RouteCollection();

      $defaultRoutes->add(
        'wf_formconfig_new',
        new Route(
          '/{prefix}/wfc/form-config/new',
          array('_controller' => self::DEFAULT_CTRL_CLASS. '::newFormConfigAction',),
          array(),
          array(),
          '',
          array(),
          array('POST')
        )
      );

      $defaultRoutes->add(
        'wf_formconfig_delete',
        new Route(
          '/{prefix}/wfc/form-config/delete/{id}',
          array('_controller' => self::DEFAULT_CTRL_CLASS. '::deleteFormConfigAction',),
          array('parameter' => '\d+'),
          array(),
          '',
          array(),
          array('POST')
        )
      );

      $defaultRoutes->add(
        'wf_custom_all_forms',
        new Route(
          '/{prefix}/custom/form',
          array('_controller' => self::DEFAULT_CTRL_CLASS. '::findAllFormsAction',),
          array(),
          array(),
          '',
          array(),
          array('GET')
        )
      );

      $defaultRoutes->add(
        'wf_custom_new',
        new Route(
          '/{prefix}/custom/{formName}/new',
          array('_controller' => self::DEFAULT_CTRL_CLASS. '::newAction',),
          array(),
          array(),
          '',
          array(),
          array('POST', 'GET')
        )
      );

      $defaultRoutes->add(
        'wf_custom_search',
        new Route(
          '/{prefix}/custom/{formName}/search',
          array('_controller' => self::DEFAULT_CTRL_CLASS. '::searchAction',),
          array(),
          array(),
          '',
          array(),
          array('GET')
        )
      );

      $defaultRoutes->add(
        'wf_custom_single_by_id',
        new Route(
          '/{prefix}/{formName}/view/id/{id}',
          array('_controller' => self::DEFAULT_CTRL_CLASS. '::findByIdAction',),
          array(),
          array(),
          '',
          array(),
          array('GET')
        )
      );

      $defaultRoutes->add(
        'wf_player_single_form_by_id',
        new Route(
          '/{prefix}/form/id/{id}',
          array('_controller' => self::PLAYER_CTRL_CLASS. '::findFormByIdAction',),
          array('parameter' => '\d+'),
          array(),
          '',
          array(),
          array('GET')
        )
      );

      $defaultRoutes->add(
        'wf_player_single_form_by_name',
        new Route(
          '/{prefix}/custom/{formName}',
          array('_controller' => self::PLAYER_CTRL_CLASS. '::findFormByNameAction',),
          array(),
          array(),
          '',
          array(),
          array('GET')
        )
      );

      $defaultRoutes->add(
        'wf_player_stats_by_date',
        new Route(
          '/{prefix}/custom/{formName}/stats/date/{dateId}',
          array('_controller' => self::PLAYER_CTRL_CLASS. '::findFormStatsByDateAction',),
          array(),
          array(),
          '',
          array(),
          array('GET')
        )
      );

      $defaultRoutes->add(
        'wf_player_stats_by_year_groupby_month',
        new Route(
          '/{prefix}/custom/{formName}/stats/year/{year}',
          array('_controller' => self::PLAYER_CTRL_CLASS. '::findFormStatsByYearAction',),
          array(),
          array(),
          '',
          array(),
          array('GET')
        )
      );

      $defaultRoutes->add(
        'wf_player_stats_by_year_month_groupby_month',
        new Route(
          '/{prefix}/custom/{formName}/stats/year/{year}/month/{month}',
          array('_controller' => self::PLAYER_CTRL_CLASS. '::findFormStatsByYearMonthAction',),
          array(),
          array(),
          '',
          array(),
          array('GET')
        )
      );

      $defaultRoutes->add(
        'wf_player_stats_by_year_month_week',
        new Route(
          '/{prefix}/custom/{formName}/stats/year/{year}/week/{week}',
          array('_controller' => self::PLAYER_CTRL_CLASS. '::findFormStatsByYearWeekAction',),
          array(),
          array(),
          '',
          array(),
          array('GET')
        )
      );

      $defaultRoutes->add(
        'wf_player_stats_incr_view',
        new Route(
          '/{prefix}/custom/{formName}/stats/incr-view/{incr}',
          array('_controller' => self::PLAYER_CTRL_CLASS. '::incrViewCountAction',),
          array(),
          array(),
          '',
          array(),
          array('POST')
        )
      );

      $defaultRoutes->add(
        'wf_player_stats_incr_completed',
        new Route(
          '/{prefix}/custom/{formName}/stats/incr-completed/{incr}',
          array('_controller' => self::PLAYER_CTRL_CLASS. '::incrCompletedCountAction',),
          array(),
          array(),
          '',
          array(),
          array('POST')
        )
      );

      $defaultRoutes->add(
        'wf_player_stats_incr_uncompleted',
        new Route(
          '/{prefix}/custom/{formName}/stats/incr-uncompleted/{incr}',
          array('_controller' => self::PLAYER_CTRL_CLASS. '::incrUncompletedCountAction',),
          array(),
          array(),
          '',
          array(),
          array('POST')
        )
      );
    }

    return $defaultRoutes;
  }
}
/* EOF */
