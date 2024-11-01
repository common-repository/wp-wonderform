<?php get_header(); ?>
<?php
$my_archives =
  wp_get_archives(
    array(
      'type'=>'alpha', 
      'show_post_count'=>true, 
      'limit'=>20, 
      'post_type'=>'wf-post', 
      'format'=>'html'
    ));
  
print_r($my_archives); 
echo '<br/>';
?>
<?php get_sidebar(); ?>
<?php get_footer(); ?>
