<?php
include_once(WP_PLUGIN_DIR.'/wp-wonderform/includes/WP_WFServer.php');

use WF\Lib\Core\WFProductType;
use WF\Lib\Core\WFEnv;
use WF\Lib\Core\WFCoreService;

get_header();

if (isset($GLOBALS[WP_WFServer::WF_RESPONSE])) {
  $res = $GLOBALS[WP_WFServer::WF_RESPONSE];
  echo $res;
}

?>

<?php get_sidebar(); ?>
<?php get_footer(); ?>
