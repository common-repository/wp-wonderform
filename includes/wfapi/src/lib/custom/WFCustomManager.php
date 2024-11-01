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

require_once(__DIR__.'/../core/WFDbManager.php');
require_once(__DIR__.'/../core/WFCoreService.php');

use Doctrine\ORM\EntityManager;
use Doctrine\DBAL\Schema\Schema;
use Doctrine\DBAL\Schema\Comparator;
use WF\Lib\Core\WFCoreService;
use WF\Lib\Core\WFDbManager;
use WF\Lib\Core\WFModule;
use WF\Lib\Core\WFDataTypes;

/**
 * Provides basic utility to manipulate a wonder form config.
 *
 * @author Wonderform <contact@wonderform.net>
 */
class WFCustomManager
{
  /**
   * Define module version
   */
  const MODULE_VERSION = '1.0.0';

  /**
   * Define module name
   */
  const MODULE_NAME = WFModule::WF_CUSTOM_MODULE_NAME;

  /**
   * Define module id
   */
  const MODULE_ID = WFModule::WF_CUSTOM_MODULE_ID;

  /**
   * @var WFCustomManager The single instance of the class
   */
  private static $_sInstance = null;

  /**
   * @var EntityManager
   */
  private $_em;

  /**
   * @var array
   */
  private $_tableNames;

  /**
   * Get current module version
   */
  public static function getModuleVersion() {
    return self::MODULE_VERSION;
  }

  /**
   * Get the module name
   */
  public static function getModuleName() {
    return self::MODULE_NAME;
  }

  /**
   * Main WFCustomManager Instance
   *
   * Ensures only one instance of WFCustomManager is loaded or can be loaded.
   *
   * @static
   * @return WFCustomManager - Main instance
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
    global $wfem;
    $this->_em = $wfem;
  }

  /**
   * Update this module database schema
   * @return array The sequence of SQL statements.
   */
  public function updateSchema()
  {
    try
    {
      $module = new WFModule(self::MODULE_NAME);
      $module->setVersion(self::MODULE_VERSION);

      $wf_classes = array();
      $wf_tables = array();

      WFDbManager::getInstance()->updateSchema(
          $wf_classes,
          $wf_tables,
          $module);
    }
    catch(Exception $err)
    {
      return null;
    }
  }
}
/* EOF */
