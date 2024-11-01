<?php 
wp_register_style( 
  'wf-frame', 
  WP_WonderForm::getPathCSS() . '/wf-frame.css', 
  '', 
  WP_WonderForm::getPluginVersion(), 
  'all' 
); 
wp_enqueue_style( 'wf-frame' );
$formId;
$entryId = null ;
$step = "0" ;
$start = true ;
if ( isset( $_GET[ 'wf-form' ] ) 
  && ! empty( $_GET['wf-form'] ) ) {
    $formId = $_GET[ 'wf-form' ] ;
  if( isset( $_GET[ 'wf-entry' ] ) 
    && ! empty( $_GET['wf-entry'] ) ) {
    $entryId= $_GET[ 'wf-entry' ] ;
  }
  if( isset( $_GET[ 'wf-step' ] ) 
    && ! empty( $_GET['wf-step'] ) ) {
    $step= $_GET[ 'wf-step' ] ;
  }
  if( isset( $_GET[ 'wf-start' ] ) 
    && ! empty( $_GET['wf-start'] ) ) {
    $start= $_GET[ 'wf-start' ] ;
  }
} else {
  exit( 'Error : wf-form not defined... ' ) ;
}

$shortcode = '[wonderform' ;
$shortcode .= ' id=' . $formId ;
$shortcode .= $start ? ' start=' . $start : "" ;
$shortcode .= $step ? ' step=' . $step : "" ;
$shortcode .= $entryId ? ' entry=' . $entryId : "" ;
$shortcode .= ' ]' ;

echo do_shortcode( $shortcode ) ;

?>