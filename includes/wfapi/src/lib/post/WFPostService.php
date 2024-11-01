<?php

/*
* This file is part of the WonderForm package.
*
* (c) Wonderform <contact@wonderform.net>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
 */

namespace WF\Lib\Post;

require_once __DIR__.'/WFormPost.php';
require_once __DIR__.'/WFormPostManager.php';

require_once(__DIR__.'/../core/WFCoreService.php');

use WF\Lib\Core\WFCoreService;
use WF\Lib\Core\WFDbManager;
use WF\Lib\Core\WFModule;
use WF\Lib\Core\WFormConfigManager;
use WF\Lib\Core\WFEnv;
use WF\Lib\Core\WFUser;
use WF\Lib\Core\WFormConfig;
use WF\Lib\Core\WFieldConfig;
use WF\Lib\Core\WFormAction;
use WF\Lib\Core\WFormActionType;
use WF\Lib\Core\WFDataTypes;

/**
 * @author Wonderform <contact@wonderform.net>
 */
class WFPostService
{
  /**
   * @var WFPostService The single instance of the class
   */
  private static $_sInstance = null;

  /**
   * @var WFormPostManager
   */
  private $_formPostMgr;

  /**
   * Main WFPostService Instance
   *
   * Ensures only one instance of WFPostService is loaded or can be 
   * loaded.
   *
   * @static
   * @return WFPostService - Main instance
   */
  public static function getInstance() {
    if (is_null(self::$_sInstance)) {
      self::$_sInstance = new self();
    }
    return self::$_sInstance;
  }

  /**
   * Constructor
   */
  private function __construct()
  {
    $this->_formPostMgr = new WFormPostManager();
  }

  /**
   * Get form post manager
   * @return WFormPostManager
   */
  public function getFormPostMgr() {
    return $this->_formPostMgr;
  }

  /**
   * Update module database schemas.
   */
  public function updateSchema()
  {
    $this->getFormPostMgr()->updateSchema();
  }

  /**
   * Drop this module database schema
   */
  public function dropSchema()
  {
    WFDbManager::getInstance()->delFormsByModuleId(
      WFModule::WF_CUSTOM_MODULE_ID);
    WFDbManager::getInstance()->delFormsByModuleId(
      WFModule::WF_POST_MODULE_ID);
    $this->getFormPostMgr()->dropSchema();
  }
}
/* EOF */
