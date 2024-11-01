<?php

/*
* This file is part of the WonderForm package.
*
* (c) Wonderform <contact@wonderform.net>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

namespace WF\Lib\Front;


/**
 * @author Wonderform <contact@wonderform.net>
 */
class WFTheme  implements \JsonSerializable
{
  public $container_bg;
  public $container_border_radius;
  public $container_padding;
  public $container_width;
  public $cover_bg_blur;
  public $cover_bg_filter;
  public $cover_bg_opacity;
  public $cover_color;
  public $cover_image;
  public $cover_overlay;
  public $cover_texture;
  public $cover_video_mp4;
  public $cover_video_ogv;
  public $cover_video_poster;
  public $cover_video_webm;
  public $custom_classes;
  public $field_color;
  public $field_font_size;
  public $field_inline;
  public $field_legend_color;
  public $field_legend_font_size;
  public $field_legend_padding;
  public $field_no_label;
  public $field_padding;
  public $hasTheme;
  public $hasThemeOption;
  public $next_bg;
  public $next_border_radius;
  public $next_color;
  public $next_font_size;
  public $next_label;
  public $next_padding;
  public $prev_bg;
  public $prev_border_radius;
  public $prev_color;
  public $prev_font_size;
  public $prev_label;
  public $prev_padding;
  public $progressbar_color;
  public $submit_bg;
  public $submit_border_radius;
  public $submit_color;
  public $submit_font_size;
  public $submit_label;
  public $submit_padding;
  public $timeline_color;
  public $timeline_label;
  public $timeline_limit;
  public $timeline_small;
  public $timeline_visible;
  public $use_cover_video;
  public $use_progressbar;
  public $use_timeline;
  public $use_vertical_align;
  public $vertical_align_height;
  public $vertical_align_padding;
  public $wf_label_color;
  public $wf_label_font_size;
  public $wf_label_padding;
  public $wf_legend_color;
  public $wf_legend_font_size;
  public $wf_legend_padding;
  public $wf_option_label_color;
  public $wf_option_legend_color;

  /**
   * Constructor
   * @param array $attrs
   */
  public function __construct(array $attrs)
  {
    $vars = get_object_vars($this);
    foreach ($vars as $name => $oldValue) {
      if (isset($attrs[$name])) {
        $this->$name = $attrs[$name];
      }
    }
  }

  /**
   * Implements jsonSerialize
   */
  public function jsonSerialize() {
    return [
      'container_bg' => $this->container_bg,
      'container_border_radius' => $this->container_border_radius,
      'container_padding' => $this->container_padding,
      'container_width' => $this->container_width,
      'cover_bg_blur' => $this->cover_bg_blur,
      'cover_bg_filter' => $this->cover_bg_filter,
      'cover_bg_opacity' => $this->cover_bg_opacity,
      'cover_color' => $this->cover_color,
      'cover_image' => $this->cover_image,
      'cover_overlay' => $this->cover_overlay,
      'cover_texture' => $this->cover_texture,
      'cover_video_mp4' => $this->cover_video_mp4,
      'cover_video_ogv' => $this->cover_video_ogv,
      'cover_video_poster' => $this->cover_video_poster,
      'cover_video_webm' => $this->cover_video_webm,
      'custom_classes' => $this->custom_classes,
      'field_color' => $this->field_color,
      'field_font_size' => $this->field_font_size,
      'field_inline' => $this->field_inline,
      'field_legend_color' => $this->field_legend_color,
      'field_legend_font_size' => $this->field_legend_font_size,
      'field_legend_padding' => $this->field_legend_padding,
      'field_no_label' => $this->field_no_label,
      'field_padding' => $this->field_padding,
      'hasTheme' => $this->hasTheme,
      'hasThemeOption' => $this->hasThemeOption,
      'next_bg' => $this->next_bg,
      'next_border_radius' => $this->next_border_radius,
      'next_color' => $this->next_color,
      'next_font_size' => $this->next_font_size,
      'next_label' => $this->next_label,
      'next_padding' => $this->next_padding,
      'prev_bg' => $this->prev_bg,
      'prev_border_radius' => $this->prev_border_radius,
      'prev_color' => $this->prev_color,
      'prev_font_size' => $this->prev_font_size,
      'prev_label' => $this->prev_label,
      'prev_padding' => $this->prev_padding,
      'progressbar_color' => $this->progressbar_color,
      'submit_bg' => $this->submit_bg,
      'submit_border_radius' => $this->submit_border_radius,
      'submit_color' => $this->submit_color,
      'submit_font_size' => $this->submit_font_size,
      'submit_label' => $this->submit_label,
      'submit_padding' => $this->submit_padding,
      'timeline_color' => $this->timeline_color,
      'timeline_label' => $this->timeline_label,
      'timeline_limit' => $this->timeline_limit,
      'timeline_small' => $this->timeline_small,
      'timeline_visible' => $this->timeline_visible,
      'use_cover_video' => $this->use_cover_video,
      'use_progressbar' => $this->use_progressbar,
      'use_timeline' => $this->use_timeline,
      'use_vertical_align' => $this->use_vertical_align,
      'vertical_align_height' => $this->vertical_align_height,
      'vertical_align_padding' => $this->vertical_align_padding,
      'wf_label_color' => $this->wf_label_color,
      'wf_label_font_size' => $this->wf_label_font_size,
      'wf_label_padding' => $this->wf_label_padding,
      'wf_legend_color' => $this->wf_legend_color,
      'wf_legend_font_size' => $this->wf_legend_font_size,
      'wf_legend_padding' => $this->wf_legend_padding,
      'wf_option_label_color' => $this->wf_option_label_color,
      'wf_option_legend_color' => $this->wf_option_legend_color
    ];
  }
}

