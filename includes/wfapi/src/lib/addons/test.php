<?php
require_once __DIR__.'/../../bootstrap.php';
require_once __DIR__.'/WFAddonsService.php';

use WF\Lib\Addons\WFAddonsService;
use WF\Lib\Core\WFCoreService;
use WF\Lib\Core\WFormConfig;
use WF\Lib\Core\WFDbManager;

global $wftimezone;
date_default_timezone_set($wftimezone);

//WFAddonsService::getInstance()->addAllFormConfigs();
//WFCoreService::getInstance()->updateSchema();



/*$module =
  WFDbManager::getInstance()
  ->findModuleByName('custom');
$productType= WFDbManager::getInstance()->findProductTypeByName('catalog');
$formConfig = new WFormConfig('product123', $module);
$formConfig->setProductType($productType);
$formConfig->setTitle('Products');
$formConfig->setDescription('Pages Products');
$formConfig->setEntriesTable('product123');
WFDbManager::getInstance()->save($formConfig);

WFCoreService::getInstance()->loadFormConfigs(
  'custom',
  __DIR__.'/catalog/document.json',
  true,
  'product123');
 */

WFCoreService::getInstance()->publishFormConfigs(__DIR__.'/catalog/document.json','product123');
