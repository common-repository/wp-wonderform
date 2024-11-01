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
class WFSettingConfig  implements \JsonSerializable
{
  /**
   * @var WFTheme
   */
  public $corporateTheme;

  /**
   * @var WFTheme
   */
  public $noStyleTheme;

  /**
   * @var WFTheme
   */
  public $wfTheme;

  /**
   * @var string
   */
  public $theme;

  /**
   * Constructor
   * @param array $attrs
   */
  public function __construct(array $attrs)
  {
    $settings = $attrs['settings'];
    if (isset($settings['WFCorporateTheme'])) {
      $this->corporateTheme = new WFTheme($settings['WFCorporateTheme']);
    } else {
      $this->corporateTheme = null;
    }

    if (isset($settings['WFNoStyleTheme'])) {
      $this->noStyleTheme = new WFTheme($settings['WFNoStyleTheme']);
    } else {
      $this->noStyleTheme = null;
    }

    if (isset($settings['WFTheme'])) {
      $this->wfTheme = new WFTheme($settings['WFTheme']);
    } else {
      $this->wfTheme = null;
    }

    if (isset($attrs['theme'])) {
      $this->theme = $attrs['theme'];
    }
  }

  /**
   * Merge this settingConfig with a given settingConfig
   * @param WFSettingConfig $rhs the settingConfig to merge with
   */
  public function merge(WFSettingConfig $rhs) {
    if (!$this->corporateTheme) {
      $this->corporateTheme = $rhs->corporateTheme;
    }

    if (!$this->noStyleTheme) {
      $this->noStyleTheme = $rhs->noStyleTheme;
    }

    if (!$this->wfTheme) {
      $this->wfTheme = $rhs->wfTheme;
    }
  }

  /**
   * Implements jsonSerialize
   */
  public function jsonSerialize() {
    $a = array();
    $a['settings'] = array();

    if ($this->corporateTheme) {
      $a['settings']['WFCorporateTheme'] = $this->corporateTheme->jsonSerialize();
    }

    if ($this->noStyleTheme) {
      $a['settings']['WFNoStyleTheme'] = $this->noStyleTheme->jsonSerialize();
    }

    if ($this->wfTheme) {
      $a['settings']['WFTheme'] = $this->wfTheme->jsonSerialize();
    }

    $a['theme'] = $this->theme;

    return $a;
  }
}

