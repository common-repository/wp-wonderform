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

require_once(__DIR__.'/../core/WFDbManager.php');
require_once(__DIR__.'/../core/WFormConfig.php');

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityRepository;

use WF\Lib\Core\WFDbManager;
use WF\Lib\Core\WFModule;
use WF\Lib\Core\WFormConfig;

/**
 * Provides basic utility to manipulate a wonder form post.
 *
 * @author Wonderform <contact@wonderform.net>
 */
class WFormPostManager extends EntityRepository
{
  /**
   * Define module version
   */
  const MODULE_VERSION = '1.0.0';

  /**
   * Define module name
   */
  const MODULE_NAME = WFModule::WF_POST_MODULE_NAME;

  /**
   * Define module name
   */
  const MODULE_ID = WFModule::WF_POST_MODULE_ID;

  /**
   * holds wf core model classes
   * @var array
   */
  private $modelClasses;

  /**
   * holds wf core model tables
   * @var array
   */
  private $modelTables;

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
   * Constructor
   */
  public function __construct()
  {
    global $wfem;
    parent::__construct(
      $wfem,
      $wfem->getClassMetadata('WF\Lib\Post\WFormPost'));

    // set core model classes
    $this->modelClasses  = array(
      $this->_em->getClassMetadata('WF\Lib\Post\WFormPost')
    );

    // set core model tables
    $this->modelTables  = array();
    $this->modelTables['wf_formpost']                   = "wf_formpost";
  }

  /**
   * Get wf model classes
   * @return an array
   */
  public function getModelClasses() {
    return $this->modelClasses;
  }

  /**
   * Get wf model tables
   * @return an array
   */
  public function getModelTables() {
    return $this->modelTables;
  }

  /**
   * Find a form post by its identifier
   * @param $id integer identifier of the form post
   * @return WFormPost or null if not found
   */
  public function findById($id)
  {
    try
    {     
      $entry = $this->find($id);
      return $entry;
    }
    catch(Exception $err)
    {
      return null;
    }
  }

  /**
   * Update this module database schema and
   * load module fixtures
   *
   * @return array The sequence of SQL statements.
   */
  public function updateSchema()
  {
    try
    {
      $module = new WFModule(self::MODULE_NAME);
      $module->setVersion(self::MODULE_VERSION);

      $sql = WFDbManager::getInstance()->updateSchema(
        $this->getModelClasses(),
        $this->getModelTables(),
        $module);

      return $sql;
    }
    catch(Exception $err)
    {
      return null;
    }
  }

  /**
   * Drop this module database schema
   *
   * @return array The sequence of SQL statements.
   */
  public function dropSchema()
  {
    try
    {
      $sql =
        WFDbManager::getInstance()->dropSchema(
          $this->getModelClasses(),
          $this->getModelTables());

      return $sql;
    }
    catch(Exception $err)
    {
      return null;
    }
  }
}
/* EOF */
