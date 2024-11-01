<?php

/*
* This file is part of the WonderForm package.
*
* (c) Wonderform <contact@wonderform.net>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

namespace WF\Lib\Addons;

require_once __DIR__.'/../core/WFCoreService.php';
require_once __DIR__.'/../post/WFPostService.php';

use Symfony\Component\HttpFoundation\Request;

use WF\Lib\Core\WFCoreService;
use WF\Lib\Core\WFDbManager;
use WF\Lib\Core\WFModule;
use WF\Lib\Core\WFOption;
use WF\Lib\Core\WFDataTypes;
use WF\Lib\Core\WFormConfig;
use WF\Lib\Core\WFProductType;
use WF\Lib\Core\WFStr;
use WF\Lib\Post\WFPostService;
use WF\Lib\Post\WFormPostAction;
use WF\Lib\Post\WFErrorMessage;
use WF\Lib\Post\WFormPostValidator;


/**
 * Base class of addon manager
 *
 * @author Wonderform <contact@wonderform.net>
 */
abstract class WFAddonManager
{
  /**
   * Constructor
   */
  public function __construct()
  {
  }

  /**
   * Get entity manager
   * @return $this->_em
   */
  public function getEntityManager() {
    global $wfem;
    return $wfem;
  }

  /**
   * @return json document file name
   * @param integer $productTypeId
   * @return string or null
   */
  abstract public function getJsonDocumentFile($productTypeId);

  /**
   * Load validator forms configs
   */
  public function loadValidatorFormConfigs() {
  }

 /**
  * Add new form config
  * @param Request $request
  * @param WFormConfig $wfc
  * @param array $data hold data that will be inserted in database
  * @param array $messages hold error messages
  * @return array the entry added or updated
  */
  public function addFormConfig(
    Request $request,
    WFormConfig &$wfc,
    array &$data,
    array &$messages)
  {
    return WFDbManager::getInstance()->insert(
      $wfc->getId(),
      $wfc->getEntriesTable(),
      $data,
      $wfc->getModuleId());
  }

 /**
  * Add/update entry
  * @param Request $request
  * @param WFormConfig $wfc
  * @param WFormPostValidator $validator
  * @param integer $entryId the entry identifier in case of update
  * @return array the entry added or updated
  */
  public function addOrUpdate(
    Request $request,
    WFormConfig &$wfc,
    WFormPostValidator &$validator,
    $entryId) {
    return WFDbManager::getInstance()->addOrUpdate(
      $wfc->getId(),
      $wfc->getEntriesTable(),
      $validator->data,
      $entryId,
      $wfc->getModuleId());
  }

 /**
  * Delete entry - action
  * @param Request $request
  * @param WFormConfig $wfc
  * @param integer $id the identifier of the entry to delete
  * @return array|WFErrorMessage
  */
  public function del(Request $request, WFormConfig &$wfc, $id) {
    $oldentry =
      WFDbManager::getInstance()->del(
        $wfc->getId(), $wfc->getEntriesTable(), $id);
    return $oldentry;
  }

  /**
   * Search entries
   * When $countRows = True ==> return number of rows found
   * @param $request Request
   * @param WFormConfig $wfc
   * @param boolean $countRows
   * @param integer $start
   * @param integer $limit
   * @param string $orderBy
   * @param string $orderByDirection
   * @param array $queryVars
   * @param integer $categoryId
   * @return array of entries or number of rows depending on flag $countRows
   */
  public function search(
    Request $request,
    WFormConfig &$wfc,
    $countRows,
    $start, 
    $limit, 
    $orderBy,
    $orderByDirection,
    &$queryVars,
    $categoryId) {
      return WFDbManager::getInstance()->search(
        $wfc->getEntriesTable(),
        $wfc->getModule()->getId(),
        $wfc->getId(),
        $wfc->getName(),
        $countRows,
        $start,
        $limit,
        $orderBy,
        $orderByDirection,
        $queryVars,
        $categoryId
      );
    }
  /**
   * Find entry by its identifier - action
   * @param WFormConfig $wfc
   * @param integer $id identifier of the table entry
   * @return array|WFErrorMessage
   */
  public function findById(WFormConfig &$wfc, $id) {
    return
      WFDbManager::getInstance()->findById(
          $wfc->getId(), $wfc->getEntriesTable(), $id, $wfc->getModuleId());
  }

  /**
   * Update this module database schema and
   *
   * @return array The sequence of SQL statements.
   */
  abstract public function updateSchema();

  /**
   * Drop this module database schema
   *
   * @return array The sequence of SQL statements.
   */
  abstract public function dropSchema();
}
/* EOF */
