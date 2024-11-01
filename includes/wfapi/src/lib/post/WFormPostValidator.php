<?php
/*
* This file is part of the WonderForm package.
*
* (c) Wonderform <contact@wonderform.net>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
 */
namespace WF\Lib\Post;
require_once __DIR__.'/../core/WFEnv.php';
require_once __DIR__.'/WFormPostManager.php';
require_once __DIR__.'/WFErrorMessage.php';
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use WF\Lib\Core\WFDbManager;
use WF\Lib\Core\WFModule;
use WF\Lib\Core\WFEnv;
use WF\Lib\Core\WFUser;
use WF\Lib\Core\WFormConfig;
use WF\Lib\Core\WFieldConfig;
use WF\Lib\Core\WFormAction;
use WF\Lib\Core\WFormActionType;
use WF\Lib\Core\WFDataTypes;
use WF\Lib\Core\WFCoreService;
use WF\Lib\Post\WFPostService;
use WF\Lib\Addons\WFAddonsService;

/**
 * Base class to valid a wonder form post.
 *
 * @author Wonderform <contact@wonderform.net>
 */
class WFormPostValidator
{
  /**
   * @var array $data hold data that will be stored in database
   */
  public $data;

  /**
   * @var array $optionEntryData hold extra data that will be stored in option entry table
   * in option entry table
   */
  public $optionEntryData;

  /**
   * @var array $extraData hold extra data that will be stored in database
   * in option entry table
   */
  public $extraData;

  /**
   * @var array $messages hold errors messages
   */
  public $messages;

  /**
   * @var array $entry hold current entry in case of update
   */
  public $entry;

  /**
   * @var array $entry hold attributes data
   */
  public $attributes;

  /**
   * @var $response hold response
   */
  public $response;


  /**
   * Constructor
   * @param WFModule $module
   */
  public function __construct()
  {
    $this->entry      = null;
    $this->messages   = array();
    $this->data       = array();
    $this->optionEntryData  = array();
    $this->extraData  = array();
    $this->response   = null;
    $this->attributes   = null;
  }

  /**
   * Get attributes as array
   * @return array
   */
  public function getAttributesAsArray() {
    $attributesStr = $this->attributes;
    if (!empty($attributesStr)) {
      $attributesStr= stripslashes($attributesStr);
      $attributes = json_decode($attributesStr, true);
      if (json_last_error() == JSON_ERROR_NONE) {
        return $attributes;
      }
    }

    return array();
  }

  /**
   * Set attributes from array
   * @param $arr the new array to set
   */
  public function setAttributesFromArray(array $arr) {
    if (!empty($arr)) {
      $str = json_encode($arr);
      $this->attributes = stripslashes($str);
    } else {
      $this->attributes = null;
    }
  }

  /**
   * Clean data - remove inserted data from extraData and attributes
   * to avoid duplicated data
   */
  public function clean(array $savedData) {
    $attributesArr = $this->getAttributesAsArray();

    foreach ($savedData as $k => $v) {
      if (!empty($this->extraData)) {
        unset($this->extraData[$k]);
      }
      if (!empty($attributesArr)) {
        unset($attributesArr[$k]);
      }
    }

    $this->setAttributesFromArray($attributesArr);
  }

  /**
   * Validate Post Data
   * @param Request $request
   * @param WFormConfig $wfc
   * @param boolean $checkBackendFilled
   * @param array $backendData
   * @return true when validation succeeded
   */
  public function validate(
    Request $request,
    WFormConfig &$wfc,
    $checkBackendFilled = true,
    array &$backendData = array())
  {
    // get entry id
    $entry_id = intval($request->request->get('entry_id', '0'));

    // set attributes
    $this->attributes = $request->request->get('attributes', null);

    // check if entry exists
    if ($entry_id != 0) {
      if ($wfc->getIsAddon()) {
        $this->entry =
          WFAddonsService::getInstance()->findById($wfc, $entry_id);
      } else {
        $this->entry =
          WFDbManager::getInstance()->findById(
            $wfc->getId(), $wfc->getEntriesTable(), $entry_id, $wfc->getModuleId());
      }

      $exists = count($this->entry);
      if (!$exists) {
        $this->response = new WFErrorMessage('Not Found', 404);
        $this->messages['entry_not_found'] = 'Entry Not Found';
        return false;
      }
    }

    $valid = null;

    // get form fields values
    foreach ($wfc->getFieldsAsArray() as $fld) {
      if ($fld->getCreateColumn()) {
        if (is_null($valid)) {
          $valid = true;
        }
        if ($fld->isForeignField()) { // foreign fields
          $rv = $request->request->get($fld->getName(), 0);
          if (empty($rv) && isset($backendData[$fld->getName()])) {
            $rv = $backendData[$fld->getName()];
          }

          if (!empty($rv)) {
            $this->data[$fld->getName()] = intval($rv);
            $valExists =
              WFDbManager::getInstance()->checkIfValueExists(
                $fld->getRefFormConfig()->getEntriesTable(),
                'id',
                $rv);
            if ($valExists) {
              if (
                $entry_id == 0
                && $fld->getUniq()) {
                if (
                  WFDbManager::getInstance()->checkIfValueExists(
                    $wfc->getEntriesTable(), $fld->getName(), $rv)) {
                  $msg = [
                    'type' => 'association_uniq',
                    'name' => $fld->getName(),
                    'value' => $rv,
                    'msg' => "An entry with ". $fld->getName(). "='". $rv. "' already exists"];
                  $this->messages[$fld->getName()] = $msg;
                  $valid = false;
                }
              }
            } else {
              $msg = [
                'type' => 'association_invalid',
                'name' => $fld->getName(),
                'value' => $rv,
                'msg' => "Invalid ". $fld->getName(). "='". $rv. "'"];
              $this->messages[$fld->getName()] = $msg;
              $valid = false;
            }
          } else if ($fld->getRequired()) {
            if ($entry_id == 0 &&
              (!$fld->getBackendFilled() || $checkBackendFilled)) {
              $msg = [
                'type' => 'association_required',
                'name' => $fld->getName(),
                'value' => null,
                'msg' => $fld->getLabel(). ' is required'];
              $this->messages[$fld->getName()] = $msg;
              $valid = false;
            }
          }
        } else { // normal fields
          $rv = $request->request->get($fld->getName(), null);

          // special case handle boolean fields
          if ($fld->getType() == WFDataTypes::WF_BOOLEAN) {
            if (!is_null($rv)) {
              if (!empty($rv)) {
                if ($rv == 'true') {
                  $rv = 1;
                } else if ($rv == 'false') {
                  $rv = 0;
                } else {
                  $rv  = intval($rv);
                }
              } else {
                $rv = 0;
              }
            }
          }

          if (empty($rv) && isset($backendData[$fld->getName()])) {
            $rv = $backendData[$fld->getName()];
          }

          // check required fields
          if (is_null($rv)) {
            if ($fld->getRequired() && is_null($this->entry)) {
              if (!$fld->getBackendFilled() || $checkBackendFilled) {
                $msg = [
                  'type' => 'field_required',
                  'name' => $fld->getName(),
                  'value' => null,
                  'msg' => $fld->getLabel(). ' is required'];
                $this->messages[$fld->getName()] = $msg;
                $valid = false;
              }
            }
          } else if ($rv == '') {
            if ($fld->getRequired()) {
              if (!$fld->getBackendFilled() || $checkBackendFilled) {
                $msg = [
                  'type' => 'field_required',
                  'name' => $fld->getName(),
                  'value' => '',
                  'msg' => $fld->getLabel(). ' is required'];
                $this->messages[$fld->getName()] = $msg;
                $valid = false;
              }
            } else {
              $this->data[$fld->getName()] = $rv;
            }
          } else if ($entry_id == 0 || $fld->getEditable()) {
            $this->data[$fld->getName()] = $rv;
            if ($fld->getUniq()) {
              if ($entry_id == 0 || is_null($this->entry) || $this->entry[$fld->getName()] != $rv) {
                if (
                  WFDbManager::getInstance()->checkIfValueExists(
                    $wfc->getEntriesTable(), $fld->getName(), $rv)) {
                  $msg = [
                    'type' => 'field_uniq',
                    'name' => $fld->getName(),
                    'value' => $rv,
                    'msg' => "An entry with ". $fld->getName(). "='". $rv. "' already exists"];
                  $this->messages[$fld->getName()] = $msg;
                  $valid = false;
                }
              }
            }
          }
        }
      } else { // get extra Data
        if (is_null($valid)) {
          $valid = true;
        }
        // get field value
        $rv = $request->request->get($fld->getName(), null);
        // trim field value
        if (!is_null($rv)) {
          $rv = trim($rv);
        }

        if (is_null($rv) || $rv == '') {
          if ($fld->getRequired() && $entry_id == 0) {
            if (!$fld->getBackendFilled() || $checkBackendFilled) {
              $msg = [
                'type' => 'field_required',
                'name' => $fld->getName(),
                'value' => '',
                'msg' => $fld->getName(). ' is required'];
              $this->messages[$fld->getName()] = $msg;
              $valid = false;
            }
          }
        } else {
          $this->extraData[$fld->getName()] = $rv;
        }
      }
      // fill optionEntryData
      if (isset($this->data[$fld->getName()])) {
        $this->optionEntryData[$fld->getName()] =  $this->data[$fld->getName()];
        // properly set select field value.
        // the original value is json array value.
        if ($fld->isSelectField()) {
          $options = json_decode(stripslashes($this->data[$fld->getName()]), true);
          if (!is_null($options)) {
            $values = array_values($options);
            $imploded = implode(',', $values);
            $this->data[$fld->getName()] =  $imploded;
          }
        }
      }
    }

    if ($wfc->getName() == 'field-config') {
      // check field-config constraints
      if (isset($this->data['wf_formconfig_id']) && isset($this->data['name'])) {
        if ($entry_id == 0 || is_null($this->entry) || $this->entry['name'] != $this->data['name']) {
          if (
            WFDbManager::getInstance()->checkIfFieldNameExists(
              $this->data['wf_formconfig_id'], $this->data['name'])) {
            $msg = [
              'type' => 'field_uniq',
              'name' => $wfc->getName(),
              'value' => $this->data['name'],
              'msg' => "An entry with name='". $this->data['name']. "' already exists"];
            $this->messages[$fld->getName()] = $msg;
            $valid = false;
          }
        }
      }
    }

    // check if $valid is null
    if (is_null($valid)) {
      $this->messages['invalid_request'] = 'Invalid Request';
      $valid = false;
    }

    return $valid;
  }
}
/* EOF */
