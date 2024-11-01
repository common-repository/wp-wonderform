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


require_once(__DIR__.'/WFCols.php');
require_once(__DIR__.'/WFContent.php');
require_once(__DIR__.'/WFTheme.php');
require_once(__DIR__.'/WFSettingConfig.php');
require_once(__DIR__.'/WFStep.php');
require_once(__DIR__.'/WFStepConfig.php');

/**
 * @author Wonderform <contact@wonderform.net>
 */
class WFormConfigAttrs  implements \JsonSerializable
{
  /**
   * @var integer
   */
  public $canCreateEntry;

  /**
   * @var array
   */
  public $contentConfig;

  /**
   * @var array
   */
  public $displayFields;

  /**
   * @var WFSettingConfig
   */
  public $settingConfig;

  /**
   * @var WFStepConfig
   */
  public $stepConfig;

  /**
   * Constructor
   * @param array $attrs
   */
  public function __construct(array $attrs)
  {
    if (isset($attrs['canCreateEntry'])) {
      $this->canCreateEntry = $attrs['canCreateEntry'];
    } else {
      $this->canCreateEntry = false;
    }

    $this->contentConfig = array();
    if (isset($attrs['contentConfig'])) {
      foreach ($attrs['contentConfig'] as $k => $v) {
        $this->contentConfig[$k] = new WFContent($v);
      }
    }

    if (isset($attrs['displayFields'])) {
      $this->displayFields = $attrs['displayFields'];
    } else {
      $this->displayFields = array();
    }

    if (isset($attrs['settingConfig'])) {
      $this->settingConfig = new WFSettingConfig($attrs['settingConfig']);
    } else {
      $this->settingConfig = new WFSettingConfig(array());
    }

    if (isset($attrs['stepConfig'])) {
      $this->stepConfig = new WFStepConfig($attrs['stepConfig']);
    } else {
      $this->stepConfig = new WFStepConfig(array());
    }
  }

  /**
   * Merge this form config attrs with a given form config attrs
   * @param WFormConfigAttrs $rhs the formconfig attrs to merge with
   */
  public function merge(WFormConfigAttrs $rhs) {
    // merge display fields
    $displayFields =
      array_merge($this->displayFields, $rhs->displayFields);
    $this->displayFields = array_unique($displayFields);

    // merge contentConfig
    $contentConfig = array_merge($this->contentConfig, $rhs->contentConfig);
    $this->contentConfig = $contentConfig;

    // merge settingConfig
    $this->settingConfig->merge($rhs->settingConfig);

    // merge stepConfig
    $this->stepConfig->merge($rhs->stepConfig);
  }


  /**
   * serialize content config
   */
  public function getContentConfigAsJson() {
    $a = array();
    foreach ($this->contentConfig as $k => $v) {
      $a[$k] = $v->jsonSerialize();
    }

    return $a;
  }

  /**
   * Implements jsonSerialize
   */
  public function jsonSerialize() {
    return [
      'canCreateEntry' => $this->canCreateEntry,
      'contentConfig' => $this->getContentConfigAsJson(),
      'displayFields' => $this->displayFields,
      'settingConfig' => $this->settingConfig->jsonSerialize(),
      'stepConfig' => $this->stepConfig->jsonSerialize()
    ];
  }
}

