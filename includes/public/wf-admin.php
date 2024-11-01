<?php
$app = "admin";
WP_WonderForm::renderAppScript(false, $app); 
wp_enqueue_style( 'wf-frame' );
wp_enqueue_style( 'wf-icons' );
wp_enqueue_style( 'wf-date' );
wp_enqueue_style( 'wf-vendor' );
wp_enqueue_style( 'wf-admin' );
wp_enqueue_style( 'wf-form' );
wp_enqueue_script( 'react' ); 
wp_enqueue_script( 'react-dom' );
wp_enqueue_script( 'chartist' ); 
wp_enqueue_script( 'wf-ajv' ); 
wp_enqueue_script( 'moment' ); 
WP_WonderForm::localizeMomentJS();
wp_enqueue_script( 'wf-admin-vendor' ); 
wp_enqueue_script( 'wf-admin' ); 
WP_WonderForm::includeGoogleFonts();
wp_enqueue_media();
?>
<div id="wf-admin" class="wonderform wf-admin"></div>
<style type="text/css">
body {
  background-color: #323f45;
  overflow-y: hidden;
}
.dev .dv {
  border: 1px solid red;
  min-height: 50px;
}
#wpbody-content {
  padding-bottom: 0 !important;
}
.update-nag,
#wpfooter {
	display: none !important;
}
</style>
<script type="text/javascript">
document.body.classList.add('folded');
document.getElementById('wpcontent').style.paddingLeft="0";
</script>