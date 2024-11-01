<?php

/*
* This file is part of the WonderForm package.
*
* (c) Wonderform <contact@wonderform.net>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

namespace WF\Lib\Player;

require_once __DIR__.'/../core/WFHttpRequestHandler.php';
require_once __DIR__.'/../core/WFUser.php';
require_once __DIR__.'/WFPlayerController.php';

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
 * Handle wonder form posts.
 * This is the main entry of the post module
 *
 * @author Wonderform <contact@wonderform.net>
 */
class WFPlayerHandler {
  const PLAYER_CTRL_CLASS = 'WF\Lib\Player\WFPlayerController';

  const ACCESS_DENIED_ERR =
    'Access Denied. You do not have permission to access this page.';

  /**
   * @param RouteCollection
   */
  private static $_sRoutes;

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
    $context = new RequestContext();
    $matcher = new UrlMatcher(self::getRoutes(), $context);
    $resolver = new ControllerResolver();

    $handler = new WFHttpRequestHandler($matcher, $resolver);
    $response = $handler->handle($request);

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
        'wf_player_single_form_by_id',
        new Route(
          '/{prefix}/player/id/{id}',
          array('_controller' => self::PLAYER_CTRL_CLASS. '::findFormByIdAction',),
          array('parameter' => '\d+'),
          array(),
          '',
          array(),
          array('GET')
        )
      );

      self::$_sRoutes->add(
        'wf_player_single_form_by_name',
        new Route(
          '/{prefix}/player/name/{formName}',
          array('_controller' => self::PLAYER_CTRL_CLASS. '::findFormByNameAction',),
          array(),
          array(),
          '',
          array(),
          array('GET')
        )
      );

      self::$_sRoutes->add(
        'wf_player_stats_by_date',
        new Route(
          '/{prefix}/player/{formName}/stats/date/{dateId}',
          array('_controller' => self::PLAYER_CTRL_CLASS. '::findFormStatsByDateAction',),
          array(),
          array(),
          '',
          array(),
          array('GET')
        )
      );

      self::$_sRoutes->add(
        'wf_player_stats_by_year_groupby_month',
        new Route(
          '/{prefix}/player/{formName}/stats/year/{year}',
          array('_controller' => self::PLAYER_CTRL_CLASS. '::findFormStatsByYearAction',),
          array(),
          array(),
          '',
          array(),
          array('GET')
        )
      );

      self::$_sRoutes->add(
        'wf_player_stats_by_year_month_groupby_month',
        new Route(
          '/{prefix}/player/{formName}/stats/year/{year}/month/{month}',
          array('_controller' => self::PLAYER_CTRL_CLASS. '::findFormStatsByYearMonthAction',),
          array(),
          array(),
          '',
          array(),
          array('GET')
        )
      );

      self::$_sRoutes->add(
        'wf_player_stats_by_year_month_week',
        new Route(
          '/{prefix}/player/{formName}/stats/year/{year}/week/{week}',
          array('_controller' => self::PLAYER_CTRL_CLASS. '::findFormStatsByYearWeekAction',),
          array(),
          array(),
          '',
          array(),
          array('GET')
        )
      );

      self::$_sRoutes->add(
        'wf_player_stats_incr_view',
        new Route(
          '/{prefix}/player/{formName}/stats/incr-view/{incr}',
          array('_controller' => self::PLAYER_CTRL_CLASS. '::incrViewCountAction',),
          array(),
          array(),
          '',
          array(),
          array('POST')
        )
      );

      self::$_sRoutes->add(
        'wf_player_stats_incr_completed',
        new Route(
          '/{prefix}/player/{formName}/stats/incr-completed/{incr}',
          array('_controller' => self::PLAYER_CTRL_CLASS. '::incrCompletedCountAction',),
          array(),
          array(),
          '',
          array(),
          array('POST')
        )
      );

      self::$_sRoutes->add(
        'wf_player_stats_incr_uncompleted',
        new Route(
          '/{prefix}/player/{formName}/stats/incr-uncompleted/{incr}',
          array('_controller' => self::PLAYER_CTRL_CLASS. '::incrUncompletedCountAction',),
          array(),
          array(),
          '',
          array(),
          array('POST')
        )
      );
    }

    return self::$_sRoutes;
  }
}
/* EOF */

