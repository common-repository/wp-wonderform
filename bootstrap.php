<?php
// bootstrap.php
require_once __DIR__.'/includes/extern/vendor/autoload.php';
use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;
// Create a simple "default" Doctrine ORM configuration for Annotations
$config =
  Setup::createAnnotationMetadataConfiguration(
    array(
      __DIR__.'/wfapi/src/lib/core',
      __DIR__.'/wfapi/src/lib/wfc',
      __DIR__.'/wfapi/src/lib/post',
    ),
    true
    //__DIR__.'/cache/doctrine/proxies'
  );
// db connection settings
$conn = null;
if ( defined('WF_DB_NAME') 
  && defined('WF_DB_USER') 
  && defined('WF_DB_PASSWORD') 
  && defined('WF_DB_HOST') ) {
  $conn = array(
    'driver'    => 'pdo_mysql',
    'dbname'    => WF_DB_NAME,
    'user'      => WF_DB_USER,
    'password'  => WF_DB_PASSWORD,
    'host'      => WF_DB_HOST
  );
} else {
  $conn = array(
    'driver'    => 'pdo_mysql',
    'dbname'    => DB_NAME,
    'user'      => DB_USER,
    'password'  => DB_PASSWORD,
    'host'      => DB_HOST
  );
}
// obtaining the entity manager
$wfem = EntityManager::create($conn, $config);
// Global for backwards compatibility.
$GLOBALS['wfem'] = $wfem;
// session data
$wfsession = array();
$GLOBALS['wfsession'] = $wfsession;
$GLOBALS['vendor_dir'] = __DIR__.'/includes/extern/vendor';
