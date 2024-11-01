<?php

if (!defined('WP_UNINSTALL_PLUGIN')) {
  exit();
}
 
include_once('bootstrap.php');
include_once('includes/WP_WFServer.php');

/**
 * uninstall wf database schemas.
 */
function wf_uninstall() {
  try
  {
    // drop post module schemas
    WF\Lib\Post\WFPostService::getInstance()->dropSchema();
    // drop addons schemas
    WF\Lib\Addons\WFAddonsService::getInstance()->dropSchema();
    // drop core module schemas
    WF\Lib\Core\WFCoreService::getInstance()->dropSchema();
  }
  catch(Exception $err)
  {
    //TODO(lybaba) should exit when database uninstall failed.
  }
}

delete_option('wonderform_db_version');
wf_uninstall();
 
/* EOF */
