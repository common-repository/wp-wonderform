<?php
/*
* This file is part of the WonderForm package.
*
* (c) Wonderform <contact@wonderform.net>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

if ( ! defined( 'ABSPATH' ) ) {
exit; // Exit if accessed directly
}

require_once __DIR__.'/bootstrap.php';
require_once __DIR__.'/includes/WP_WFServer.php';

use Symfony\Component\Routing\Route;
use Symfony\Component\Routing\RouteCollection;

if ( ! class_exists( 'WP_WFApp' ) ) :

/**
 * WP_WFApp Class
 *
 * @class WP_WFApp
 */
class WP_WFApp {
  const WF_SIMPLE_NAME    = 'WonderForm';
  const WF_SIMPLE_SLUG    = 'wfs';
  const WF_ADVANCED_NAME  = 'WonderForm Advanced';
  const WF_ADVANCED_SLUG  = 'wf';
  const WF_API_NAME       = 'WonderForm API';
  const WF_API_SLUG       = 'wfapi';
  const WF_STORE_NAME     = 'WonderForm Store';
  const WF_STORE_SLUG     = 'wfpage';

  const WF_POST_TYPE      = 'wf-post';
  const WF_POST_TYPE_SLUG = 'wfpage';

  /**
   * @var WP_WFServer
   */
  private $server;

  /**
   * @var $appName
   */
  private $appName;

  /**
   * @var $appSlug
   */
  private $appSlug;

  /**
   * @var $pluginUrl
   */
  private $pluginUrl;

  /**
   * @var $pluginVersion
   */
  private $pluginVersion;

  /**
   * @var RouteCollection $routes
   */
  private $routes;

  /**
   * WP_WFApp Constructor.
   */
  public function __construct(
    $appName,
    $appSlug,
    $pluginUrl,
    $pluginVersion) {
      $this->server = new WP_WFServer($this);
      $this->appName = $appName;
      $this->appSlug = $appSlug;
      $this->pluginUrl = $pluginUrl;
      $this->pluginVersion = $pluginVersion;
      $this->routes = new RouteCollection();
    }

  /**
   * Add new Route
   * @param $routeId
   * @param Route $route the route to add
   */
  public function addRoute($routeId, Route $route) {
    $this->add($routeId, $route);
  }

  /**
   * Add route collection
   * @param RouteCollection $routes
   */
  public function addRouteCollection(RouteCollection $routes) {
    $this->routes->addCollection($routes);
  }

  /**
   * Get routes
   * @return $routes
   */
  public function getRoutes() {
    return $this->routes;
  }

  /**
   * @return $pluginVersion
   */
  public function getPluginVersion() {
    return $this->pluginVersion;
  }
  
/*
  public static function getSupportsGzip() {
    return strpos($_SERVER['HTTP_ACCEPT_ENCODING'], 'gzip') !== false;
  }
*/

  /**
   * @return $this->server
   */
  public function getServer() {
    return $this->server;
  }

  /**
   * Get plugin url
   * @return $this->pluginUrl
   */
  public function getPluginUrl() {
    return $this->pluginUrl;
  }

  /**
   * @return $this->appName
   */
  public function getAppName() {
    return $this->appName;
  }

  /**
   * Get the wf query variable
   */
  public function getQueryVar() {
    return $this->appSlug.'q';
  }

  /**
   * Get the wf query page
   */
  public function getQueryPage() {
    return $this->appSlug.'name';
  }


  /**
   * @return $this->appSlug
   */
  public function getAppSlug() {
    return $this->appSlug;
  }

  /**
   * Get the css bundle hash
   */
  public static function getCssHash() {
    static $cssHash;
    if (!$cssHash) {
      $content =
        file_get_contents(__DIR__.'/includes/public/assets/js/wf-css.json');
      $data = json_decode($content, true);
      $cssHash = $data['wf-css'];
    }

    return $cssHash;
  }

  /**
   * Get the admin bundle hash
   */
  public static function getAdminHash() {
    static $adminHash;
    if (!$adminHash) {
      $content =
        file_get_contents(__DIR__.'/includes/public/assets/js/wf-admin.json');
      $data = json_decode($content, true);
      $adminHash = $data['wf-admin'];
    }

    return $adminHash;
  }

  /**
   * Get the player bundle hash
   */
  public function getPlayerHash() {
    static $playerHash;
    if (!$playerHash) {
      $content =
        file_get_contents(__DIR__.'/includes/public/assets/js/wf-player.json');
      $data = json_decode($content, true);
      $playerHash = $data['wf-player'];
    }

    return $playerHash;
  }

  /**
   * Get timezone
   */
  public static function getTimezone() {
    return  get_option('timezone_string');
  }

  /**
   * Get plugin static url
   */
  public function getStaticUrl() {
    return $this->getPluginUrl() . "/includes/public/assets" ;
  }

  /**
   * Get plugin Admin url
   */
  public static function getAjaxrUrl() {
    return admin_url( 'admin-ajax.php' );
  }

  public static function getMediaUrl() {
    return admin_url( 'admin.php?page=wf-media' );
  }

  public static function getPlayerUrl() {
    return admin_url( 'admin.php?page=wf-player' );
  }

  /**
   * Get Site Info
   */
  public static function getSiteURL() {
    return get_bloginfo( 'url' );
  }

  /**
   * Get admin post Url
   */
  public static function getAdminPostUrl() {
    $url = esc_url( admin_url('admin-post.php') );
    return $url;
  }


  public static function getSiteName() {
    return get_bloginfo( 'name' );
  }

  public static function getSiteDescription() {
    return get_bloginfo( 'description' );
  }

  public static function getAdminEmail() {
    return get_bloginfo( 'admin_email' );
  }


  /**
   * Get file path
   */
  public function getPathIMG() {
    return $this->getStaticUrl() . "/img" ;
  }

  public function getPathCSS() {
    return $this->getStaticUrl() . "/css" ;
  }

  public function getPathJS() {
    return $this->getStaticUrl() . "/js" ;
  }


  /**
   * Secure WonderForm API requests
   */
  public static function getNonceKey() {
    return "WonderForm-nonce-key" ;
  }

  public static function createToken( $nonceKey="" ) {
    $key = $nonceKey!=="" ?: self::getNonceKey() ;
    return wp_create_nonce( $key ) ;
  }
  
  public static function IsTokenValid( $token, $nonceKey="" ) {
    if( is_null( $token ) ) return false ;
    $key = $nonceKey!=="" ?: self::getNonceKey() ;
    return wp_verify_nonce( $nonce, $key ) ;
  }

  /**
   * logout user
   */
  public function logoutUser() {
    return $this->server->handleLogout();
  }


  /**
   * Prettyfy Permalink
   */
  public function prettyPermalinks() {
    if( ! get_option( 'permalink_structure' ) ) {
      update_option( 'permalink_structure', '/%postname%/' );
      apply_filters ( 'mod_rewrite_rules', '/%postname%/' );
      //self::flushRewriteRules();
    }
  }

  /**
   * Flush rewrite rules
   */
  public function flushRewriteRules()
  {
    global $wp_rewrite;

    $wp_rewrite->flush_rules();
  }


  /**
   * Wordpress User
   */
  public static function getCurrentUser() {
    return wp_get_current_user() ;
  }

  public static function getCurrentUserID() {
    $current_user = wp_get_current_user();
    $id = $current_user->ID;
    return isset($id) ? $id : false ;
  }
  
  public static function getCurrentUserRole() {
    global $wp_roles;
    $current_user = wp_get_current_user();
    $roles = $current_user->roles;
    $role = array_shift($roles);
    return isset($wp_roles->role_names[$role]) 
    ? array( $role, translate_user_role($wp_roles->role_names[$role] )) 
    : false;
  }

  public static function userLoggedIn() {
    return is_user_logged_in() ;
  }
  
  public static function getUserCapabilities() {
    if ( defined('WF_USER_CAPABILITIES') ) {
      return WF_USER_CAPABILITIES;
    } else {
      return 'publish_posts';
    }
  }

  public static function userCanManage() {
    // ref -> https://codex.wordpress.org/Roles_and_Capabilities
    return current_user_can(WP_WFApp::getUserCapabilities()) ;
  }

  public static function getUploadBaseDir() {
    $upload_dir = wp_upload_dir();
    return  $upload_dir['basedir'];
  }

  /**
   * Register all css files
   */
  public function registerAllStyle () {
    $hash = $this->getCssHash();
    $path = $this->getPathCSS();
    $version = $this->getPluginVersion();
    wp_register_style( 'wf-icons',  $path . '/wf-icons.css', '', $version, 'all' );
    wp_register_style( 'wf-vendor', $path . '/wf-vendor.'. $hash . '.min.css', '', $version, 'all' );
    wp_register_style( 'wf-admin',  $path . '/wf-admin.'. $hash . '.min.css', '', $version, 'all' ); 
    wp_register_style( 'wf-form',   $path . '/wf-form.' . $hash . '.min.css', '', $version, 'all' );
    wp_register_style( 'wf-date', $path . '/wf-date.css', '', $hash, 'all' );
  }

  /**
   * Register all js files
   */
  public function registerAllScript () {
    $path = $this->getPathJS();
    $version = $this->getPluginVersion();
    wp_register_script( 'react', $path . '/vendor/react.min.js', array(), $version, true );
    wp_register_script( 'react-dom', $path . '/vendor/react-dom.min.js', array('react'), $version, true );
    wp_register_script( 'ajv', $path . '/vendor/ajv.min.js', array(), $version, true );
    wp_register_script( 'chartist', $path . '/vendor/chartist.min.js', array(), $version, true );
    wp_register_script( 'moment', $path . '/vendor/moment.min.js', array(), $version, true );
    wp_register_script( 
      'wf-admin-vendor', 
      $path . '/app-min/admin/wf-admin.vendor.' . self::getAdminHash() .'.js' , 
      array('react-dom', 'ajv', 'moment'), 
      $version, true 
    );
    wp_register_script( 
      'wf-admin', 
      $path . '/app-min/admin/wf-admin.' . self::getAdminHash() .'.js' , 
      array('wf-admin-vendor'), 
      $version, true 
    );
    wp_register_script( 
      'wf-player-vendor', 
      $path . '/app-min/player/wf-player.vendor.' . self::getPlayerHash() . '.js', 
      array('react-dom', 'ajv', 'moment'), 
      $version, 
      true 
    );
    wp_register_script( 
      'wf-player', 
      $path . '/app-min/player/wf-player.' . self::getPlayerHash() . '.js', 
      array('wf-player-vendor'), 
      $version, 
      true 
    );
  }

  /**
   * Register and Enqueue locale.js
   */
  public function localizeMomentJS () {
    $locale = get_locale();
    $momentLocale = null;
    if (!preg_match('/en/',$locale)) {
      $momentLocale = substr($locale, 0, 2);
      if ($momentLocale) {
        wp_register_script( 'moment-locale', 
          $this->getPathJS() . '/vendor/moment/locale/' . $momentLocale . ".js"
          , array('moment'), 
          $this->getPluginVersion(), 
          true
        );
        wp_enqueue_script( 'moment-locale' ); 
      }
    }
  }

  /**
   * Enqueue Google Fonts
   */
  public static function includeGoogleFonts() {
    wp_register_style(
      'wf-google', 
      'http://fonts.googleapis.com/css?family=Open+Sans:300italic,600italic,700,300,400,600', 
      array(), 
      null, 
      'all'
    );
    wp_enqueue_style('wf-google');
  }

 /**
   * @param $id form config identifier
   * @return html or a string message
   */
  public static function getFormConfigAsHtml($id) {
    $wfc =
      WF\Lib\Core\WFCoreService::getInstance()
      ->getFormConfigMgr()->findById($id);
    $res = WF\Lib\Post\WFormPostAction::checkFormConfig($wfc);
    if (is_null($res) || (is_admin() && !is_null($wfc))) {

      $json = json_encode($wfc);

      $html = "\n<script type='text/javascript'>\n" ;

      $html .= "/* <![CDATA[ */\n" ;

      $html .= "var wfc_"  . $id . " = "  . $json . ";\n" ;

      $html .= "/* ]]> */\n" ;

      $html .= "</script>\n" ;

      return $html;

    } else {
      
      $html = "\n<script type='text/javascript'>\n" ;

      $html .= "/* <![CDATA[ */\n" ;

      $html .= "var wfc_"  . $id . " = {wfc: {} };\n" ; // return empty form to make player happy

      $html .= "/* ]]> */\n" ;

      $html .= "</script>\n" ;

      if ($res->getErrCode() == 404) {
        $html .= "FormConfig not found.";
      } else {
        $html .= "FormConfig is under maintenance. Please contact the administrator.";
      }

      return $html;
    }
  }

  /**
   * Create globalJS for player app
   */
  public function renderAppScript($get = false, $app = "player") {
    $params = null;
    $locale = get_locale();
    $momentLocale = null;
    if (!preg_match('/en/',$locale)) {
      $momentLocale = substr($locale, 0, 2);
    }

    if ($app === "player") {
      $params = array(  
        'APP'           => $app,
        'APP_NAME'      => $this->getAppName(),
        'SLUG'          => $this->getAppSlug(),
        'LOCALE'        => $locale,
        'MOMENT_LOCAL'  => $momentLocale,
        'EDIT'          => is_admin() ? 1 : 0,
        'ASSETS'        => $this->getStaticUrl(),
        'VERSION'       => $this->getPluginVersion(),
        'PUBLIC_URL'    => $this->getPathJS() . '/' . $app . '/',
        'BASE_URL'      => get_site_url(),
        'DEMO'          => defined('WF_DEMO'),
      );
    } 
    elseif ($app === "admin") {
      $params = array(  
        'APP'           => $app,
        'APP_NAME'      => $this->getAppName(),
        'SLUG'          => $this->getAppSlug(),
        'MEDIA'         => 'wordpress',
        'LOCALE'        => $locale,
        'MOMENT_LOCAL'  => $momentLocale,
        'EDIT'          => is_admin() ? 1 : 0,
        'ASSETS'        => $this->getStaticUrl(),
        'VERSION'       => $this->getPluginVersion(),
        'PUBLIC_URL'    => $this->getPathJS() . '/' . $app . '/',
        'BASE_URL'      => get_site_url(),
        'PLAYER'        => WP_WFApp::getPlayerUrl(),
        'VERSION'       => WP_WFApp::getPluginVersion(),
        'USER'          => array(
          'ID'          => WP_WFApp::getCurrentUserID(),
          'ROLE'        => WP_WFApp::getCurrentUserRole(),
        ),
        'INFO'          => array(
          'cms'         => 'WordPress ' . get_bloginfo('version'),
          'php'         => phpversion(),
        ),
        'DEMO'          => defined('WF_DEMO'),
      );
    } 
    if (is_array($params)) {

      $json = json_encode($params);

      $script = "\n<script type='text/javascript'>\n" ;

      $script .= "/* <![CDATA[ */\n" ;

      $script .= "var __WF__ = " . $json . ";\n" ; 

      $script .= "/* ]]> */\n" ;

      $script .= "</script>\n" ;

      if ( $get === true ) {
        return $script;
      } else {
        echo $script;
      }
    }
  }

  /**
   * Build and render a wonderform form
   * @param array $atts
   */
  public function renderForm( $atts ) {
    extract(shortcode_atts(array(
      'id' => null,
      'entry' => null,
      'start' => true,
      'step' => "0"
    ), $atts));
    // --------------------- //
    wp_enqueue_style( 'wf-icons' );
    wp_enqueue_style( 'wf-date' );
    wp_enqueue_style( 'wf-vendor' );
    wp_enqueue_style( 'wf-form' );
    wp_enqueue_script( 'react' ); 
    wp_enqueue_script( 'react-dom' ); 
    wp_enqueue_script( 'ajv' ); 
    wp_enqueue_script( 'chartist' ); 
    wp_enqueue_script( 'moment' ); 
    $this->localizeMomentJS();
    wp_enqueue_script( 'wf-player-vendor' );
    wp_enqueue_script( 'wf-player' ); 
    self::includeGoogleFonts();
    // --------------------- //

    // PLAYER OUTPUT ------------ //

    $classes = 'wonderform wf-player wf-' . $id ;

    $html = '<div ' ;

    $html .= 'id="wf-' . $id . '"' ;

    $html .= 'class="' . $classes . '" ' ;

    $html .= 'data-start="' . $start . '" ' ;

    $html .= ! is_null( $step ) ? 'data-step="' . $step . '" ' : '' ;

    $html .= ! is_null( $entry ) ? 'data-entry="' . $entry . '" ' : '' ;

    $html .= '></div>' ;

    $html .= self::getFormConfigAsHtml($id) ;

    if ( is_admin() ) {
      $html .= $this->renderAppScript(true) ; 
    } 

    return $html ;
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

  public static function getDefaultSingleTemplate() {
      return plugin_dir_path(__FILE__) .
        'templates/single-wfstore.php';
  }

  public static function getDefaultArchiveTemplate() {
      return plugin_dir_path(__FILE__) .
        'templates/archive-wfstore.php';
  }
}

endif;

/* EOF */
