<?php

/*
* This file is part of the WonderForm package.
*
* (c) Wonderform <contact@wonderform.net>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

namespace WF\Lib\Addons\Quiz;

require_once(__DIR__.'/../../core/WFDbManager.php');
require_once(__DIR__.'/../../core/WFCoreService.php');
require_once __DIR__.'/../../post/WFPostService.php';
require_once __DIR__.'/../WFAddonManager.php';

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
use WF\Lib\Addons\WFAddonManager;


/**
 * Provides basic utility to manipulate a sessop, form config.
 *
 * @author Wonderform <contact@wonderform.net>
 */
class WFQuizManager extends WFAddonManager
{
  // Define constants
  const WF_ADDON_NAME       = 'quiz';
  const WF_QUIZ_QUIZZ       = 'quiz-quizz';

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
   * Constructor
   */
  public function __construct()
  {
  }

  /**
   * @return json document file name
   * @param integer $productTypeId
   * @return string or null
   */
  public function getJsonDocumentFile($productTypeId) {
    $documentFile = null;

    switch ($productTypeId) {
      case  WFProductType::WF_QUIZ_QUIZZ_ID:
        $documentFile = __DIR__.'/../../../form/quiz/quizz.json';
        break;

      default:
        break;
    }

    return $documentFile;
  }

  /**
   * Load validator form configs
   */
  public function loadValidatorFormConfigs() {
    WFCoreService::getInstance()->loadFormConfigs(
      WFModule::WF_WFC_MODULE_NAME,
      __DIR__.'/../../../form/quiz/quizz.json',
      true,
      'quiz-quizz');
  }

  /**
   * Update this module database schema and
   *
   * @return array The sequence of SQL statements.
   */
  public function updateSchema()
  {
    try
    {
      WFCoreService::getInstance()->publish(self::WF_QUIZ_QUIZZ);
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
  }
}
/* EOF */
