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

require_once __DIR__.'/../core/WFEnv.php';
require_once __DIR__.'/../post/WFPostService.php';
require_once __DIR__.'/../post/WFormPostAction.php';

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Filesystem\Exception\IOExceptionInterface;

use WF\Lib\Core\WFDbManager;
use WF\Lib\Core\WFEnv;
use WF\Lib\Core\WFModule;
use WF\Lib\Core\WFCoreService;
use WF\Lib\Core\WFormStats;
use WF\Lib\Core\WFOptionEntry;
use WF\Lib\Post\WFPostService;
use WF\Lib\Post\WFormPostAction;

/**
 * Main entry point to manipulate a custom wonder form.
 *
 * @author Wonderform <contact@wonderform.net>
 */
class WFPlayerController
{
  /**
   * Find form config by its identifier - action
   * @param $request Request
   * @param string $prefix
   * @param $id integer identifier of the form config
   * @return JsonResponse
   */
  public function findFormByIdAction(Request $request, $prefix, $id)
  {
    $wfc = WFCoreService::getInstance()
      ->getFormConfigMgr()->findById($id);
    if (empty($wfc)) {
      return new JsonResponse(['err_msg' => 'Not Found'], 404);
    } else {
      return new JsonResponse($wfc);
    }
  }

  /**
   * Find form config by its name - action
   * @param $request Request
  * @param string $prefix
   * @param $name string formName of the form config
   * @return JsonResponse
   */
  public function findFormByNameAction(Request $request, $prefix, $formName)
  {
    $wfc = WFCoreService::getInstance()
      ->getFormConfigMgr()->findOneByName(
        $formName, WFModule::WF_CUSTOM_MODULE_NAME);
    if (empty($wfc)) {
      return new JsonResponse(['err_msg' => 'Not Found'], 404);
    } else {
      return new JsonResponse($wfc);
    }
  }

 /**
  * Find form stats by date - action
  * @param $request Request
  * @param string $prefix
  * @param string $formName
  * @param integer $dateId
  * @return JsonResponse
  */
  public function findFormStatsByDateAction(
    Request $request, $prefix, $formName, $dateId)
  {
    $wfc = WFCoreService::getInstance()
      ->getFormConfigMgr()->findOneByName(
        $formName, WFModule::WF_CUSTOM_MODULE_NAME);
    $response = WFormPostAction::jsonCheckRequest($request, $wfc);
    if (is_null($response)) {
      $formStats = WFCoreService::getInstance()->getFormStatsMgr()
        ->findByDateId($wfc, $dateId);

      return new JsonResponse($formStats);
    } else {
      return $response;
    }
  }

 /**
  * Find form stats by year groupby month - action
  * @param $request Request
  * @param string $prefix
  * @param string $formName
  * @param integer $year
  * @return JsonResponse
  */
  public function findFormStatsByYearAction(
    Request $request, $prefix, $formName, $year)
  {
    $wfc = WFCoreService::getInstance()
      ->getFormConfigMgr()->findOneByName(
        $formName, WFModule::WF_CUSTOM_MODULE_NAME);
    $response = WFormPostAction::jsonCheckRequest($request, $wfc);
    if (is_null($response)) {
      $formStats = WFCoreService::getInstance()->getFormStatsMgr()
        ->findFormStatsByYear($wfc->getId(), $year);

      return new JsonResponse($formStats);
    } else {
      return $response;
    }
  }

 /**
  * Find form stats by year and month groupby week - action
  * @param $request Request
  * @param string $prefix
  * @param string $formName
  * @param integer $year
  * @param integer $month
  * @return JsonResponse
  */
  public function findFormStatsByYearMonthAction(
    Request $request, $prefix, $formName, $year, $month)
  {
    $wfc = WFCoreService::getInstance()
      ->getFormConfigMgr()->findOneByName(
        $formName, WFModule::WF_CUSTOM_MODULE_NAME);
    $response = WFormPostAction::jsonCheckRequest($request, $wfc);
    if (is_null($response)) {
      $formStats = WFCoreService::getInstance()->getFormStatsMgr()
        ->findFormStatsByYearMonth($wfc->getId(), $year, $month);

      return new JsonResponse($formStats);
    } else {
      return $response;
    }
  }

 /**
  * Find form stats by year and week - action
  * @param $request Request
  * @param string $prefix
  * @param string $formName
  * @param integer $year
  * @param integer $week
  * @return JsonResponse
  */
  public function findFormStatsByYearWeekAction(
    Request $request, $prefix, $formName, $year, $week)
  {
    $wfc = WFCoreService::getInstance()
      ->getFormConfigMgr()->findOneByName(
        $formName, WFModule::WF_CUSTOM_MODULE_NAME);
    $response = WFormPostAction::jsonCheckRequest($request, $wfc);
    if (is_null($response)) {
      $formStats = WFCoreService::getInstance()->getFormStatsMgr()
        ->findFormStatsByYearWeek($wfc->getId(), $year, $week);

      return new JsonResponse($formStats);
    } else {
      return $response;
    }
  }

 /**
  * Increment view count of form - action
  * @param $request Request
  * @param string $prefix
  * @param string $formName
  * @param integer $incr
  * @return JsonResponse
  */
  public function incrViewCountAction(
    Request $request, $prefix, $formName, $incr)
  {
    $wfc = WFCoreService::getInstance()
      ->getFormConfigMgr()->findOneByName(
        $formName, WFModule::WF_CUSTOM_MODULE_NAME);
    $response = WFormPostAction::jsonCheckRequest($request, $wfc);
    if (is_null($response)) {
      $dateId = WFormStats::makeDateId();

      $formStats = WFCoreService::getInstance()->getFormStatsMgr()
        ->findByDateId($wfc, $dateId);

      if (is_null($formStats)) {
        $formStats =
          WFCoreService::getInstance()->getFormStatsMgr()
          ->create($wfc);
      }

      $formStats->incrViewCount($incr);
      WFDbManager::getInstance()->save($formStats);

      return new JsonResponse($formStats);
    } else {
      return $response;
    }
  }

 /**
  * Increment completed count of form - action
  * @param $request Request
  * @param string $prefix
  * @param string $formName
  * @param integer $incr
  * @return JsonResponse
  */
  public function incrCompletedCountAction(
    Request $request, $prefix, $formName, $incr)
  {
    $wfc = WFCoreService::getInstance()
      ->getFormConfigMgr()->findOneByName(
        $formName, WFModule::WF_CUSTOM_MODULE_NAME);
    $response = WFormPostAction::jsonCheckRequest($request, $wfc);
    if (is_null($response)) {
      $dateId = WFormStats::makeDateId();

      $formStats = WFCoreService::getInstance()->getFormStatsMgr()
        ->findByDateId($wfc, $dateId);

      if (is_null($formStats)) {
        $formStats =
          WFCoreService::getInstance()->getFormStatsMgr()
          ->create($wfc);
      }

      $formStats->incrCompletedCount($incr);
      WFDbManager::getInstance()->save($formStats);

      return new JsonResponse($formStats);
    } else {
      return $response;
    }
  }

 /**
  * Increment uncompleted count of form - action
  * @param $request Request
  * @param string $prefix
  * @param string $formName
  * @param integer $incr
  * @return JsonResponse
  */
  public function incrUncompletedCountAction(
    Request $request, $prefix, $formName, $incr)
  {
    $wfc = WFCoreService::getInstance()
      ->getFormConfigMgr()->findOneByName(
        $formName, WFModule::WF_CUSTOM_MODULE_NAME);
    $response = WFormPostAction::jsonCheckRequest($request, $wfc);
    if (is_null($response)) {
      $dateId = WFormStats::makeDateId();

      $formStats = WFCoreService::getInstance()->getFormStatsMgr()
        ->findByDateId($wfc, $dateId);

      if (is_null($formStats)) {
        $formStats =
          WFCoreService::getInstance()->getFormStatsMgr()
          ->create($wfc);
      }

      $formStats->incrUncompletedCount($incr);
      WFDbManager::getInstance()->save($formStats);

      return new JsonResponse($formStats);
    } else {
      return $response;
    }
  }
}
/* EOF */
