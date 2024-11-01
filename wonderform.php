<?php
/*

                                            __               _______ 
             __      __                    /\ \             /\  ____\
            /\ \    /\ \    ___     ___    \_\ \    ___   __\_\ \___/ ___   _ __    ___ ___
            \ \ \  _\ \ \  / __`\ /` _ `\  /`_  \  /'__`\/\  _\\  __\/ __`\/\  __\/'_  '_  \
          _  \ \ \_\ \_\ \/\ \ \ \/\ \/\ \/\ \ \ \/\  __/\ \ \/ \ \ /\ \ \ \ \ \//\ \/\ \/\ \   _   
_ ______ /\_\ \ \________/\ \____/\ \_\ \_\ \___,_\ \____\\ \ \\ \_\\ \____/\ \ \\ \_\ \_\ \_\ /\_\ ______ _
 _ ______\/_/  \/_______/  \/___/  \/_/\/_/\/__,_ /\/____/ \/_/ \/_/ \/___/  \/_/ \/_/\/_/\/_/ \/_/_____ _

                                ............ www.wonderform.net ............ */
      



/**
 * @package Wonder_Form  
 * @version 1.3.4
 */

/**
 * Plugin Name: WP WonderForm - The Most Advanced WordPress Form Builder
 * Plugin URI: http://www.wonderform.net
 * Description: The easiest way to create Beautiful and Modern forms on WordPress. 
 * Author: WonderForm Team
 * Author URI: http://www.wonderform.net/
 * Version: 1.3.4
 * License: GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: wonderform
 * Domain Path: /languages
 *
 * WP WonderForm is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * any later version.
 *
 * WP WonderForm is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with WP WonderForm. If not, see <http://www.gnu.org/licenses/>.
 *
 */

if ( ! defined( 'ABSPATH' ) ) {
exit; // Exit if accessed directly
}


if ( ! class_exists( 'WP_WonderForm' ) ) :

/**
 * Main WP_WonderForm Class
 *
 * @class WP_WonderForm
 */
final class WP_WonderForm {
  /**
   * @var string
   */
  private $_version = '1.3.4';

  /**
   * @var The single instance of the class
   */
  private static $_sInstance = null;

  /**
   * @var WP_WFApp
   */
  private $_app;

  /**
   * WP_WonderForm Constructor.
   */
  private function __construct() {
    $this->includes();

    $this->_app =
      new WP_WFApp(
        WP_WFApp::WF_SIMPLE_NAME,
        WP_WFApp::WF_SIMPLE_SLUG,
        self::getPluginUrl(),
        $this->_version
      );

    $this->initHooks();
  }

  /**
   * Main WP_WonderForm Instance
   *
   * Ensures only one instance of WP_WonderForm is loaded or can be loaded.
   *
   * @static
   * @return WP_WonderForm - Main instance
   */
  public static function getInstance() {
    if (is_null(self::$_sInstance)) {
      self::$_sInstance = new self();
    }
    return self::$_sInstance;
  }

  /**
   * Get the application
   */
  public function getApp() {
    return $this->_app;
  }

  /**
   * @return $_version
   */
  public function getVersion() {
    return $this->_version;
  }

  /**
   * static method to get version
   */
  public static function getPluginVersion() {
    return self::getInstance()->_app->getPluginVersion();
  }

  /**
   * Get plugin url
   */
  public static function getPluginUrl() {
    return plugins_url(plugin_basename(dirname(__FILE__)));
  }

  /**
   * Get timezone
   */
  public static function getTimezone() {
    return  WP_WFApp::getTimezone();
  }

  /**
   * Get plugin static url
   */
  public static function getStaticUrl() {
    return self::getInstance()->_app->getStaticUrl();
  }


  /**
   * Get plugin Admin url
   */
  public static function getAjaxrUrl() {
    return WP_WFApp::getAjaxrUrl();
  }

  public static function getMediaUrl() {
    return WP_WFApp::getMediaUrl();
  }

  public static function getPlayerUrl() {
    return WP_WFApp::getPlayerUrl();
  }

  /**
   * Get Site Info
   */
  public static function getSiteURL() {
    return WP_WFApp::getSiteURL();
  }

  /**
   * Get admin post Url
   */
  public static function getAdminPostUrl() {
    return WP_WFApp::getAdminPostUrl();
  }


  public static function getSiteName() {
    return WP_WFApp::getSiteName();
  }

  public static function getSiteDescription() {
    return WP_WFApp::getSiteDescription();
  }

  public static function getAdminEmail() {
    return WP_WFApp::getAdminEmail();
  }


  /**
   * Get file path
   */
  public static function getPathIMG() {
    return self::getInstance()->_app->getPathIMG();
  }

  public static function getPathCSS() {
    return self::getInstance()->_app->getPathCSS();
  }

  public static function getPathJS() {
    return self::getInstance()->_app->getPathJS();
  }


  /**
   * Secure WonderForm API requests
   */
  public static function getNonceKey() {
    return WP_WFApp::getNonceKey();
  }

  public static function createToken( $nonceKey="" ) {
    return WP_WFApp::createToken($nonceKey);
  }
  
  public static function IsTokenValid( $token, $nonceKey="" ) {
    return WP_WFApp::IsTokenValid($token, $nonceKey);
  }


  /**
   * Include required core files used in admin and on the frontend.
   */
  public function includes() {
    include_once('WP_WFApp.php');
  }


  /**
   * Add new query vars.
   *
   * @param $vars
   * @return string[]
   */
  public function addQueryVars( $vars ) {
    $vars[] = $this->getApp()->getAppSlug();
    $vars[] = $this->getApp()->getQueryVar();
    return $vars;
  }

  /**
   * Rewrite rules
   */
  public function addRewriteRules() {
    global $wp_rewrite;

    $new_rules =
      array(
        '('.$this->getApp()->getAppSlug().')/(.*?)/?$' => 'index.php?'.$this->getApp()->getQueryVar().'='
        .$wp_rewrite->preg_index(1),

        '('.$this->getApp()->getAppSlug().')/?$' => 'index.php?'.$this->getApp()->getQueryVar().'='
        .$wp_rewrite->preg_index(1)
      );

    // Always add your rules to the top, to make sure your rules have priority
    $wp_rewrite->rules = $new_rules + $wp_rewrite->rules;
  }


  /**
   * logout user
   */
  public function logoutUser() {
    return $this->_app->logoutUser();
  }


  /**
   * Show upgrade links on admin page
   * @param $links
   */
  public function showUpgradelinks($links) {
    $links = array_merge(array('wfPluginCallout' => '<a href="http://www.wonderform.net/join/" target="_blank"><strong style="color: #11967A; display: inline;">Upgrade To Premium</strong></a>'), $links);
    return $links;
  }

  /**
   * Prettyfy Permalink
   */
  public function prettyPermalinks() {
    $this->_app->prettyPermalinks();
  }

  /**
   * install/upgrade wf database schemas.
   */
  public function install($isUpgrade = False) {
    try
    {
      // create core module schemas
      WF\Lib\Core\WFCoreService::getInstance()->updateSchema();
      // create common addons module schemas
      WF\Lib\Addons\WFAddonsService::getInstance()->updateSchema();
      // create post module schemas
      WF\Lib\Post\WFPostService::getInstance()->updateSchema();
      // create custom module schemas
      WF\Lib\Custom\WFCustomService::getInstance()->updateSchema();
      //save the table structure version number
      if (!$isUpgrade) {
        add_option('wonderform_version', $this->getVersion());
        add_option('wonderform_dir', plugin_dir_path(__FILE__));
      }
    }
    catch(Exception $err)
    {
      //TODO(lybaba) should exit when database install failed.
    }
  }

  /**
   * Get Admin Notice
   * add_action('admin_notices', array($this, 'plugin_activation'));
   * @return html
   */
  public static function plugin_activation() {
    $html = '<div class="notice notice-success is-dismissible">';
    $html .= '<p>WonderForm is ready! <br>';
    $html .= '</div>';
    echo $html;
  }

  /**
   * upgrade wf database schemas
   */
  public function upgrade() {
    $installed_ver = get_option('wonderform_version');
    if ($installed_ver != $this->getVersion()) {
      $this->install(True);
      update_option('wonderform_version', $this->getVersion());
    }
  }

  /**
   * Flush rewrite rules
   */
  public function flushRewriteRules()
  {
    $this->_app->flushRewriteRules();
  }


  /**
   * Handle wonderform API requests
   */
  public function handleRequest() {
    global $wp;
    if ( ! empty( $_GET[$this->getApp()->getQueryVar()] ) ) {
      $wp->query_vars[$this->getApp()->getQueryVar()] = $_GET[$this->getApp()->getQueryVar()];
    }
    // REST API request
    if (!empty($wp->query_vars[$this->getApp()->getQueryVar()])) {
      WF\Lib\Core\WFEnv::setTimezone(WP_WFApp::getTimezone());
      $this->getApp()->getServer()->handleRequest();
      exit;
    }
  }

  /**
   * Wordpress User
   */
  public static function getCurrentUser() {
    return WP_WFApp::getCurrentUser();
  }

  public static function getCurrentUserID() {
    return WP_WFApp::getCurrentUserID();
  }
  
  public static function getCurrentUserRole() {
    return WP_WFApp::getCurrentUserRole();
  }

  public static function userLoggedIn() {
    return WP_WFApp::userLoggedIn();
  }
  
  public static function userCanManage() {
    return WP_WFApp::userCanManage();
  }

  public static function getUploadBaseDir() {
    return WP_WFApp::getUploadBaseDir();
  }

  /**
   * Hook into actions and filters
   */
  private function initHooks() {
    register_activation_hook( __FILE__, array( $this, 'prettyPermalinks' ) );
    register_activation_hook( __FILE__, array($this, 'install'));
    add_action('plugins_loaded', array($this, 'upgrade'));
    
    add_action('init', array($this, 'registerWFPostType'));
    add_action( 'init', array($this, 'flushRewriteRules'), 0);
    add_action('generate_rewrite_rules', array($this, 'addRewriteRules'), 0);

    add_action('init', array($this, 'registerAllStyle'), 0); 
    add_action('init', array($this, 'registerAllScript'), 0); 

    add_filter( 'template_include', array($this, 'handleTemplateInclude'), 1);
    // Add hook for front-end
    //add_action('wp_footer', array($this, 'renderAppScript'), 0); 

    add_filter('query_vars', array($this, 'addQueryVars'), 0);

    // handle requests
    add_action( 'parse_request', array($this, 'handleRequest' ), 0 );

    if( ! class_exists( 'WP_WonderFormAdvanced' ) ) {
      if(is_admin()){
        add_filter('plugin_action_links_'. plugin_basename(__FILE__), array($this, 'showUpgradelinks'));
      }

      // add admin pages 
      add_action( 'admin_menu', array($this, 'addAdminMenuPage'), 0);
      // Add hook for front-end
      add_action('wp_footer', array($this, 'renderAppScript'), 0); 
      // add shortcode functions
      add_shortcode('wonderform', array($this, 'renderForm'));
    }
    $this->maybeFrameAdminPage();
  }

  /**
   * Create Admin Pages
   */
  public function addAdminMenuPage() {
    // add_menu_page($page_title, $menu_title, $capability, $menu_slug, $function, $icon_url, $position);
    add_menu_page( 
      'WonderForm',
      'WonderForm',                               
      WP_WFApp::getUserCapabilities(),                          
      'wf-editor',                                
      'WP_WonderForm::generateAdminPageWFAdmin',      
      'dashicons-forms',                       
      5                                           
    );
    // add_submenu_page($parent_slug, $page_title, $menu_title, $capability, $menu_slug, $function);
    add_submenu_page(
        null,                                    
        'WonderForm Player',                     
        'WonderForm Player',                     
        WP_WFApp::getUserCapabilities(),                         
        'wf-player',                              
        'WP_WonderForm::generateAdminPagePlayer'  
    ); 
  }

  /**
   * Register wonderform post type
   */
  public function registerWFPostType() {
    register_post_type(WP_WFApp::WF_POST_TYPE, array(
      'labels' => array(
        'name' => _x('WFPages', 'post type general name'),
        'singular_name' => _x('WFPage', 'post type singular name'),
        'add_new' => _x('Add New', WP_WFApp::WF_POST_TYPE),
        'add_new_item' => __('Add New WFPage'),
        'edit_item' => __('Edit WFPage'),
        'new_item' => __('New WFPage'),
        'view_item' => __('View WFPage'),
        'search_items' => __('Search WFPages'),
        'not_found' =>  __('No WFPages found'),
        'not_found_in_trash' => __('No WFPages found in Trash'),
        'parent_item_colon' => '',
        'menu_name' => 'WFPages'
      ),
      'public' => true,
      'publicly_queryable' => true,
      'show_ui' => false, // FIXME should set value to false in prod env
      'show_in_menu' => false, // FIXME should set value to false prod env
      'query_var' => false,
      'rewrite' => array('slug'=> WP_WFApp::WF_POST_TYPE_SLUG),
      'capability_type' => 'post',
      'has_archive' => true,
      'hierarchical' => false,
      'supports' => array('title','editor','author','thumbnail','excerpt')
    ));
  }

  public static function generateAdminPageWFAdmin() {
    include('includes/public/wf-admin.php') ;
  }

  public static function generateAdminPagePlayer() {
    include('includes/public/wf-player.php') ;
  }

  /**
   * Check is frame admin page
   */
  public static function getFrameAdminPage() {
    $url = 'http://' . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'] ;
    $frame = strpos($url,'wf-player') !== false || strpos($url,'wf-media') !== false ;
    return $frame;
  }

  public static function isFrameAdminPage() {
    return (bool) self::getFrameAdminPage();
  }

  public function maybeFrameAdminPage() {
    if ( ! self::isFrameAdminPage() )
      return;
    define( 'IFRAME_REQUEST', true );
  }


  /**
   * Register all css files
   */
  public function registerAllStyle () {
    $this->_app->registerAllStyle();
  }

  /**
   * Register all js files
   */
  public function registerAllScript () {
    $this->_app->registerAllScript();
  }

  /**
   * Register and Enqueue locale.js
   */
  public static function localizeMomentJS () {
    self::getInstance()->_app->localizeMomentJS();
  }

  /**
   * Enqueue Google Fonts
   */
  public static function includeGoogleFonts() {
    WP_WFApp::includeGoogleFonts();
  }

 /**
   * @param $id form config identifier
   * @return html or a string message
   */
  public static function getFormConfigAsHtml($id) {
    return WP_WFApp::getFormConfigAsHtml($id);
  }

  /**
   * Create globalJS for player app
   */
  public static function renderAppScript($get = false, $app = "player") {
    if ( $get === true ) {
      return self::getInstance()->_app->renderAppScript($get, $app);
    } else {
      self::getInstance()->_app->renderAppScript($get, $app);
    }
  }

  /**
   * Build and render a wonderform form
   * @param array $atts
   */
  public function renderForm( $atts ) {
    return $this->_app->renderForm($atts);
  }

  public function getSingleWFStoreTemplate() {
    // checks if the file exists in the theme first,
    if ($themeFile = locate_template(array('single-wfstore.php'))) {
      return $themeFile;
    } else {
      $templatePath = plugin_dir_path(__FILE__) .
        'templates/single-wfstore.php';
      return $templatePath;
    }
  }

  /**
   * Handle template include
   * @param string $templatePath 
   */
  public function handleTemplateInclude($templatePath) {
    $post_type =  get_query_var('post_type');
    if ($post_type == WP_WFApp::WF_POST_TYPE) {
      if (is_single()) {
        // checks if the file exists in the theme first,
        // otherwise serve the file from the plugin
        if ($themeFile = locate_template(array('single-wfstore.php'))) {
          $templatePath = $themeFile;
        } else {
          $templatePath = plugin_dir_path(__FILE__) .
            'templates/single-wfstore.php';
        }
      } elseif ( is_archive() ) {
        // checks if the file exists in the theme first,
        // otherwise serve the file from the plugin
        if ($themeFile = locate_template(array('archive-wfstore.php'))) {
          $templatePath = $themeFile;
        } else {
          $templatePath = plugin_dir_path(__FILE__) .
            'templates/archive-wfstore.php';
        }
      }
    }

    return $templatePath;
  }
}

endif;

/**
 * Returns the main instance of WF to prevent the need to use globals.
 *
 * @return WP_WonderForm
 */
function wp_wf_instance() {
  return WP_WonderForm::getInstance();
}

// Global for backwards compatibility.
$GLOBALS['wp_wonderform'] = wp_wf_instance();

$GLOBALS['cms_table_prefix'] = $GLOBALS['table_prefix']; 

$GLOBALS['wftimezone'] = get_option('timezone_string');

/* EOF */
