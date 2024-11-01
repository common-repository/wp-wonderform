<?php

/*
* This file is part of the WonderForm package.
*
* (c) Wonderform <contact@wonderform.net>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
 */

namespace WF\Lib\Custom;

require_once __DIR__.'/../core/WFEnv.php';
require_once __DIR__.'/../post/WFPostService.php';
require_once __DIR__.'/../post/WFormPostAction.php';
require_once __DIR__.'/WFCustomManager.php';

require_once(__DIR__.'/../core/WFCoreService.php');

use WF\Lib\Core\WFCoreService;
use WF\Lib\Core\WFDbManager;
use WF\Lib\Core\WFModule;
use WF\Lib\Core\WFormConfigManager;
use WF\Lib\Core\WFEnv;
use WF\Lib\Core\WFUser;
use WF\Lib\Core\WFormConfig;
use WF\Lib\Core\WFormAction;
use WF\Lib\Core\WFormActionType;
use WF\Lib\Core\WFDataTypes;

/**
 * @author Wonderform <contact@wonderform.net>
 */
class WFCustomService
{
  /**
   * @var WFCustomService The single instance of the class
   */
  private static $_sInstance = null;

  /**
   * Main WFCustomService Instance
   *
   * Ensures only one instance of WFCustomService is loaded or can be 
   * loaded.
   *
   * @static
   * @return WFCustomService - Main instance
   */
  public static function getInstance() {
    if (is_null(self::$_sInstance)) {
      self::$_sInstance = new self();
    }
    return self::$_sInstance;
  }

  /**
   * Update module database schemas.
   */
  public function updateSchema()
  {
    WFCustomManager::getInstance()->updateSchema();
  }
}
/* EOF */
