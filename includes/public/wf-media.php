<?php 

// CONFIG ------------------- //

$version = WP_WonderForm::getPluginVersion();
$pathCSS = WP_WonderForm::getPathCSS();

// REGISTER CSS ------------ //

wp_register_style( 'wf-frame', $pathCSS . '/wf-frame.css', '', $version, 'all' ); 

// ENQUEUE CSS & JS --------- //

wp_enqueue_style( 'wf-frame' );
wp_enqueue_media();

/* EOF */