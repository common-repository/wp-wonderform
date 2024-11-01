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
require_once __DIR__.'/WFormPostValidator.php';
require_once __DIR__.'/WFErrorMessage.php';
require_once __DIR__.'/../addons/WFAddonsService.php';
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
use WF\Lib\Core\WFProductType;
use WF\Lib\Core\WFStr;
use WF\Lib\Core\WFCoreService;
use WF\Lib\Post\WFPostService;
use WF\Lib\Addons\WFAddonsService;
use WF\Lib\Addons\Catalog\WFCatalogManager;

/**
 * Helper to manipulate a wonder form post.
 *
 * @author Wonderform <contact@wonderform.net>
 */
class WFormPostAction
{
  /**
   * Convert an array to utf8 enconding
   * @param array $array
   */
  private static function utf8Convert($array)
  {
    array_walk_recursive(
      $array,
      function(&$item, $key) {
        if(!mb_detect_encoding($item, 'utf-8', true)) {
          $item = utf8_encode($item);
        }
      });     
    return $array;
  }

 /**
  * Make array response
  * @param Request $request
  * @param WFormConfig $wfc
  * @param array $data
  * @return array
  */
  public static function makeTemplateData(
    Request $request,
    WFormConfig &$wfc,
    $data) {
    if ($data instanceof WFErrorMessage) {
      return $data;
    } else if (is_array($data)) {
      $form = json_decode(json_encode($wfc), true);
      $displayFields = $wfc->extractDisplayFields();
      
      // map fields by name for twig
      $fields = array();
      foreach ($form['wfc']['fields'] as $fld) {
        $fields[$fld['name']] = $fld;
        $fldName = $fld['name'];
        $fldNexusName = $fld['nexus_name'];
        $fldType = $fld['type'];
        if (isset($data['entry_options'])
          && isset($data['entry_options'][$data['id']][$fldName])) {
          if (isset($data['entry_options'][$data['id']][$fldName]['value'])) {
            $data[$fldName] = $data['entry_options'][$data['id']][$fldName]['value'];
            $data[$fldNexusName] = $data['entry_options'][$data['id']][$fldName]['value'];
          } else {
            $data[$fldName] =
                implode(',', $data['entry_options'][$data['id']][$fldName]['opt_short']);
            $data[$fldNexusName] = $data['entry_options'][$data['id']][$fldName]['opt_long'];
          }
        }
      }
      $form['wfc']['fields'] = $fields;
      $form['wfc']['display_fields'] = $displayFields;

      if (isset($data['count'])) {
        $isArchive = true;
      } else {
        $isArchive = false;
      }

      $settings = array();
      $settings[WFUser::WF_SITE_URL] =
        $request->attributes->get(WFUser::WF_SITE_URL, "");
      $settings[WFUser::WF_ADMIN_POST_URL] =
        $request->attributes->get(WFUser::WF_ADMIN_POST_URL, "");
      $settings[WFUser::WF_PATH_INFO] =
        $request->attributes->get(WFUser::WF_PATH_INFO, "");

      $productTypeName = $wfc->getProductTypeName();
      $addonName = WFProductType::getTopProductTypeName($productTypeName);

      $res = [
        'wfc' => $form['wfc'],
        'settings' => $settings,
        'is_archive' => $isArchive
      ];

      if (!empty($data)) {
        $res = array_merge($res, $data);
      }

      return $res;
    } else {
      return [];
    }
  }

 /**
  * Make array response
  * @param Request $request
  * @param WFormConfig $wfc
  * @param array $data
  * @return array
  */
  public static function makeArrayResponse(
    Request $request,
    WFormConfig &$wfc,
    $data) {
    if ($data instanceof WFErrorMessage) {
      return $data;
    } else if (is_array($data)) {
      $form = json_decode(json_encode($wfc), true);
      // map fields by name for twig
      $fields = array();
      foreach ($form['wfc']['fields'] as $fld) {
        $fields[$fld['name']] = $fld;
      }
      $form['wfc']['fields'] = $fields;

      if (isset($data['count'])) {
        $isArchive = true;
      } else {
        $isArchive = false;
      }

      $settings = array();
      $settings[WFUser::WF_SITE_URL] =
        $request->attributes->get(WFUser::WF_SITE_URL, "");
      $settings[WFUser::WF_ADMIN_POST_URL] =
        $request->attributes->get(WFUser::WF_ADMIN_POST_URL, "");
      $settings[WFUser::WF_PATH_INFO] =
        $request->attributes->get(WFUser::WF_PATH_INFO, "");

      $productTypeName = $wfc->getProductTypeName();
      $addonName = WFProductType::getTopProductTypeName($productTypeName);

      $dataProvider = [
        'wfc' => $form['wfc'],
        'settings' => $settings,
        'is_archive' => $isArchive
      ];

      $res = [
        'dataprovider'=> $dataProvider
      ];

      if (!empty($data)) {
        $res['resultset'] = $data;
      }

      return $res;
    } else {
      return [];
    }
  }

 /**
  * Make json response
  * @param $res
  * @return JsonResponse
  */
  public static function makeJsonResponse($res) {
    if ($res instanceof WFErrorMessage) {
      return $res->toJsonResponse();
    } else if (is_array($res)) {
      if (function_exists('mb_detect_encoding')) {
        $resEncoded = self::utf8Convert($res);
        return new JsonResponse($resEncoded);
      } else {
        return new JsonResponse($res);
      }
    } else {
      $res = new WFErrorMessage('Invalid Request', 403);
      return $res->toJsonResponse();
    }
  }

 /**
  * Make basic html response
  * @param Request $request
  * @param WFormConfig $wfc
  * @param $res
  * @param $templateFile
  * @return Response
  */
  public static function makeResponse(
    Request $request,
    WFormConfig &$wfc,
    $res,
    $templateFile) {
    if ($res instanceof WFErrorMessage) {
      return $res->toResponse();
    } else if (is_array($res)) {
      $data = self::makeArrayResponse($request, $wfc, $res);

      //print_r($data);
      $content =
        WFEnv::twig()->render($templateFile, $data);
      return new Response($content);
    } else {
      $res = new WFErrorMessage('Invalid Request', 403);
      return $res->toResponse();
    }
  }

 /**
  * Check form
  * @param Request $request
  * @param WFormConfig $wfc
  * @return null when succeeded else return a JsonResponse
  */
  public static function jsonCheckRequest(Request $request, $wfc) {
    $res = self::checkRequest($request, $wfc);
    if ($res instanceof WFErrorMessage) {
      return $res->toJsonResponse();
    } else {
      return null;
    }
  }

 /**
  * Check form
  * @param Request $request
  * @param WFormConfig $wfc
  * @return null when succeeded else return a WFErrorMessage
  */
  public static function checkRequest(Request $request, $wfc) {
    if (is_null($wfc)) {
      return new WFErrorMessage('FormConfig Not Found', 404);
    } else if (!$wfc->getPublished()) {
      return new WFErrorMessage('FormConfig Not Published', 403);
    } else {
      return null;
    }
  }

 /**
  * Check form
  * @param WFormConfig $wfc
  * @return null when succeeded else return a WFErrorMessage
  */
  public static function checkFormConfig($wfc) {
    if (is_null($wfc)) {
      return new WFErrorMessage('FormConfig Not Found', 404);
    } else if (!$wfc->getPublished()) {
      return new WFErrorMessage('FormConfig Not Published', 403);
    } else {
      return null;
    }
  }

 /**
  * New - action - that returns a basic Response
  * @param Request $request
  * @param WFormConfig $wfc
  * @param array $backendData
  * @return JsonResponse
  */
  public static function htmlNewAction(
    Request $request,
    WFormConfig &$wfc,
    array &$backendData = array()) 
  {
    $res = array();

    if ($request->getMethod('post') == 'POST') {
      $res = self::doNewAction($request, $wfc, $backendData);
    }

    $templateFile = $wfc->getSingleContentTpl();
    if (empty($templateFile)) {
      $templateFile = 'single_content.twig';
    }

    return self::makeResponse($request, $wfc, $res, $templateFile);
  }

 /**
  * New - action - that returns a JsonResponse
  * @param Request $request
  * @param WFormConfig $wfc
  * @param array $backendData
  * @return JsonResponse
  */
  public static function jsonNewAction(
    Request $request,
    WFormConfig &$wfc,
    array &$backendData = array()) 
  {
    $res = self::doNewAction($request, $wfc, $backendData);
    return self::makeJsonResponse($res);
  }

 /**
  * New - action - that returns a array response
  * @param Request $request
  * @param WFormConfig $wfc
  * @param array $backendData
  * @return array
  */
  public static function newAction(
    Request $request,
    WFormConfig &$wfc,
    array &$backendData = array())
  {
    $res = self::doNewAction($request, $wfc, $backendData);
    return self::makeArrayResponse($request, $wfc, $res);
  }

 /**
  * Do New - action
  * @param Request $request
  * @param WFormConfig $wfc
  * @param array $backendData
  * @return array | WFErrorMessage
  */
  public static function doNewAction(
    Request $request, WFormConfig &$wfc, array &$backendData = array())
  {
    $params_array = json_decode($request->getContent(), true);
    $responses_array = array();
    // Check if the request method is POST
    if ($request->getMethod('post') == 'POST') {
      if (json_last_error() !== JSON_ERROR_NONE || is_null($params_array)) {
        // not json request
        if (($wfc->getCreateTable() && $wfc->getCreateEntries())
          || $wfc->getIsAddon()) {
          // add auto filled fields in request
          foreach ($backendData as $k => $v) {
            $request->request->set($k, $v);
          }
          $response = self::addOrUpdateAction($request, $wfc);
          if ($response instanceof WFErrorMessage) {
            return $response;
          }
          $responses_array[] = $response;
          if (isset($response['entry_id'])) {
            $backendData['lastinsert_id'] = $response['entry_id'];
          }
        }
      } else { // json request
        $nbUpdates = 0;
        if (($wfc->getCreateTable() && $wfc->getCreateEntries())
          || $wfc->getIsAddon()) {
          $fieldFormConfig = null;
          foreach ($params_array as $k => $v) {
            foreach ($v as $k1 => $v1) {
              $v2 = array_merge($v1, $backendData);
              $request->request->replace($v2);
              $response = self::addOrUpdateAction($request, $wfc, $backendData);
              if ($response instanceof WFErrorMessage) {
                return $response;
              }
              $responses_array[] = $response;
              if (isset($response['entry_id'])) {
                $backendData['lastinsert_id'] = $response['entry_id'];
              }
              $nbUpdates++;
            }
          }
        }

        // force one update to generate errors
        // when no update is performed.
        if ($nbUpdates == 0) {
          $responses_array[] = self::addOrUpdateAction($request, $wfc, $backendData);
        }
      }

      if (!empty($responses_array)) {
        return $responses_array;
      }
    }

    // when reach here ==> then the request is invalid
    return new WFErrorMessage('Invalid Request', 403);
  }


 /**
  * Add or Update - action
  * @param Request $request
  * @param WFormConfig $wfc
  * @param array $backendData
  * @return array|WFErrorMessage
  */
  public static function addOrUpdateAction(
    Request $request,
    WFormConfig &$wfc,
    array &$backendData = array())
  {
    $entry    = null;
    try
    {     
      // get entry id
      $entry_id = intval($request->request->get('entry_id', '0'));

      // validate post data
      $nbFields = count($wfc->getFieldsAsArray());

      $validator = new WFormPostValidator();
      $valid =
        $nbFields == 0
        || $validator->validate($request, $wfc, true, $backendData);

      if (!is_null($validator->response)) {
        return $validator->response;
      }


      // check producttype unique by parent_id
      if ($wfc->getName() == 'form-config') {
        if (isset($validator->data['wf_producttype_id'])) {
          $productTypeId = intval($validator->data['wf_producttype_id']);
          if ($productTypeId == WFProductType::WF_CUSTOM_ID
              || $productTypeId == WFProductType::WF_CUSTOM_CUSTOM_ID) {
            $validator->data['create_table'] = 1;
            $validator->data['create_entries'] = 1;
          }
        }
      }

      if ($valid) {
        if ($entry_id != 0) {
          if ($wfc->getName() == 'form-config') {
            $now = new \DateTime('now');
            $validator->data['modified_tms'] = $now->format(WFEnv::getDateTimeFormat());
            if (isset($validator->data['wf_producttype_id'])) {
              $productTypeId = intval($validator->data['wf_producttype_id']);
              if ($productTypeId == WFProductType::WF_CUSTOM_ID
                  || $productTypeId == WFProductType::WF_CUSTOM_CUSTOM_ID) {
                $validator->data['front_publish_enabled'] = 1;
              }
            }
          }
          // update entry
          $entry =
            WFAddonsService::getInstance()->addOrUpdate(
              $request,
              $wfc,
              $validator,
              $entry_id
            );
          // check if error occured
          if ($entry instanceof WFErrorMessage) {
            return $entry;
          }
          if (!empty($entry)) {
            self::onAddOrUpdateSuccess(
              $request,
              $wfc,
              $entry,
              $validator->extraData,
              $validator->attributes);
          }
        } else {
          if ($wfc->getName() == 'form-config') {
            $module = WFDbManager::getInstance()->findModuleByName('custom');
            if (is_null($module)) {
              return new WFErrorMessage('You should install module custom', 403);
            } else {
              $validator->data['wf_module_id'] = $module->getId();
              $now = new \DateTime('now');
              $validator->data['created_tms'] = $now->format(WFEnv::getDateTimeFormat());
              $validator->data['modified_tms'] = $now->format(WFEnv::getDateTimeFormat());
            }
          } else if ($wfc->getName() == 'field-config') {
            // check if fieldtype is a fieldspec type
            // if so then set field name to fieldtype
            if (WFDataTypes::isFieldSpecType($validator->data['type'])) {
              $validator->data['name'] = $validator->data['type'];
            }
            if (!isset($validator->data['len'])) {
              $validator->data['len'] = 255;
            }
            if (!isset($validator->data['editable'])) {
              $validator->data['editable'] = 1;
            }
            // check if field creation is allowed on the given form config
            $formId = $validator->data['wf_formconfig_id'];
            $fieldFormConfig =
              WFCoreService::getInstance()
              ->getFormConfigMgr()->findById($formId);
            if ($fieldFormConfig->getProductTypeId() != WFProductType::WF_CUSTOM_ID
                 && $fieldFormConfig->getProductTypeId() != WFProductType::WF_CUSTOM_CUSTOM_ID) {
              $validator->data['create_column'] = 0;
            } else {
              $validator->data['create_column'] = 1;
            }
          }
          // insert new entry
          if ($wfc->getIsAddon()) {
            $entry =
              WFAddonsService::getInstance()->addOrUpdate(
                $request,
                $wfc,
                $validator,
                $entry_id);
            if ($entry instanceof WFErrorMessage) {
              return $entry;
            }
          } else {
            // set treeId of option
            if ($wfc->getName() == 'option' || $wfc->getName() == 'option-group') {
              $parentId = 0;
              if (isset($validator->data['parent_id'])) {
                $parentId = $validator->data['parent_id'];
              } else if (isset($validator->data['wf_optiongroup_id'])) {
                $parentId = $validator->data['wf_optiongroup_id'];
              }

              if ($parentId != 0) {
                // set tree id
                $treeId = 
                  WFCoreService::getInstance()
                  ->getOptionMgr()->getTreeId($parentId);
                if ($treeId != 0) {
                  $validator->data['tree_id'] = $treeId;
                }
              }
            }

            // insert new entry
            if (isset($validator->data['wf_producttype_id'])) {
              $productTypeId = $validator->data['wf_producttype_id'];
            } else {
              $productTypeId = $wfc->getProductTypeId();
            }
            if ($wfc->getName() == 'form-config') {
              // add addon form config
              $entry =
                WFAddonsService::getInstance()->addFormConfig(
                  $request, $wfc, $validator->data, $validator->messages);
            } else {
              $entry =
                WFAddonsService::getInstance()->addOrUpdate(
                  $request,
                  $wfc,
                  $validator,
                  $entry_id);
            }

            // update option name
            if ($wfc->getName() == 'option' || $wfc->getName() == 'option-group') {
              if (isset($entry['id']) && isset($entry['label'])) {
                WFCoreService::getInstance()
                  ->getOptionMgr()->updateName($entry['id'], $entry['label']);
              }
            }
          }
          if (!empty($entry)) {
            self::onAddOrUpdateSuccess(
              $request,
              $wfc,
              $entry,
              $validator->extraData,
              $validator->attributes);
          }
        }
      }
      // prepare response
      $response = array();
      if (!empty($entry)) {
        if (isset($entry['entry_options'])) {
          $entryOptions = $entry['entry_options'];
          WFDbManager::mergeEntryOptions($entry, $entryOptions);
          // unset entry_options should not return to front client
          unset($entry['entry_options']);
        }

        $response = array_merge($response, $entry);
        if (isset($entry['id'])) {
          $response['entry_id'] = $entry['id']; 
        }

        // add options count
        $response['opt_count'] =
          WFCoreService::getInstance()->getOptionEntryMgr()
          ->countEntries($wfc->getId());

        $response['succeeded'] = true;
      } else {
        $response['succeeded'] = false;
        $response = array_merge($response, $validator->data);
      }
      $response['messages']   = $validator->messages;
      $response['wf_formconfig_name']  = $wfc->getName();
      $response['_id'] = intval($request->request->get('_id', '0'));
      return $response;
    }
    catch(Exception $err)
    {
      return new WFErrorMessage('Internal Server Error', 500);
    }
  }

 /**
  * Called each time on add/update action succeeded
  * @param Request $request
  * @param WFormConfig $wfc
  * @param array $entry a given entry
  * @param array $extraData hold extra data
  * @param array $attributes hold attributes data
  */
  private static function onAddOrUpdateSuccess(
    Request $request,
    WFormConfig &$wfc,
    array &$entry,
    array $extraData,
    $attributes)
  {
    if ($wfc->getCreateTable() && $wfc->getCreateEntries()) {
      // update entries count of form
      $entry_id = intval($request->request->get('entry_id', '0'));
      if ($entry_id == 0) { // new insert ==> update entries count
        $count = 
          WFDbManager::getInstance()->getEntriesCount(
            $wfc->getEntriesTable(),
            $wfc->getModule()->getId(),
            $wfc->getId(),
            $wfc->getName());
        $count++;
        //echo 'entries_count='.$wfc->getEntriesCount(). ' count='.$count;
        $wfc->setEntriesCount($count);
        WFDbManager::getInstance()->save($wfc);
      }

      // notify addons service
      if (($wfc->getName() == 'form-config' )|| $wfc->getIsAddon()) {
        WFAddonsService::getInstance()->
          onAddOrUpdateSuccess($request, $wfc, $entry, $extraData);
      }

      // notify actionsMgr
      WFAddonsService::getInstance()->
        getActionsMgr()->onAddOrUpdateSuccess($request, $wfc, $entry, $extraData);

      // update options_count and subgroups_count
      if ($wfc->getName() == "option" || $wfc->getName() == "option-group") {
        // update options_count of a given option group
        $optionGroupId = $entry['wf_optiongroup_id'];
        $optionsCount =
          WFDbManager::getInstance()->getOptionsCount($optionGroupId);
        WFDbManager::getInstance()->update(
          0,
          'wf_option',
          $optionGroupId,
          ['options_count' => $optionsCount],
          $wfc->getModuleId()
        );
        // update subgroups_count of a given option
        $optionId = $entry['parent_id'];
        $suboptionsCount =
          WFDbManager::getInstance()->getSubOptionsCount($optionId);
        WFDbManager::getInstance()->update(
          0,
          'wf_option',
          $optionId,
          ['subgroups_count' => $suboptionsCount],
          $wfc->getModuleId()
        );
      }
      // update form timestamps fields
      if ($wfc->getName() == 'field-config') {
        $now = new \DateTime('now');
        $data = array();
        $data['modified_tms'] = $now->format(WFEnv::getDateTimeFormat());
        WFDbManager::getInstance()->update(
          0,
          'wf_formconfig',
          $entry['wf_formconfig_id'],
          $data,
          $wfc->getModuleId());
      }
    }
  }

 /**
  * Delete - action - that returns a JsonResponse
  * @param Request $request
  * @param WFormConfig $wfc
  * @param integer $id
  * @return JsonResponse
  */
  public static function jsonDeleteAction(Request $request, WFormConfig &$wfc, $id)
  {
    $res = self::doDeleteAction($request, $wfc, $id);
    return self::makeJsonResponse($res);
  }

 /**
  * Delete - action
  * @param Request $request
  * @param WFormConfig $wfc
  * @param integer $id
  * @return array
  */
  public static function deleteAction(Request $request, WFormConfig &$wfc, $id)
  {
    $res = self::doDeleteAction($request, $wfc, $id);
    return self::makeArrayResponse($request, $wfc, $res);
  }

 /**
  * Do Delete - action
  * @param Request $request
  * @param WFormConfig $wfc
  * @param integer $id
  * @return array|WFErrorMessage
  */
  public static function doDeleteAction(Request $request, WFormConfig &$wfc, $id)
  {
    if ($wfc->getDeleteEntries()) {
      try {
        $params_array = json_decode($request->getContent(), true);
        $messages = array();
        $deleted_entries = array();
        if (json_last_error() !== JSON_ERROR_NONE || is_null($params_array)) {
          $oldentry =
            WFAddonsService::getInstance()->del(
              $request, $wfc, $id);
          if (empty($oldentry)) {
            $msg = [
              'type' => 'entry_not_found',
              'id' => $id,
              'msg' => 'Not Found'];
            $messages[] = $msg;
          } else {
            $deleted_entries[] = $id;
            self::onDelSuccess($request, $wfc, $oldentry);
          }
        } else {
          foreach ($params_array as $k => $v) {
            foreach ($v as $k1 => $v1) {
              if (isset($v1['entry_id'])) {
                $id = $v1['entry_id'];
                $oldentry =
                  WFAddonsService::getInstance()->del(
                    $request, $wfc, $id);
                if (empty($oldentry)) {
                  $msg = [
                    'type' => 'entry_not_found',
                    'id' => $id,
                    'msg' => 'Not Found'];
                  $messages[] = $msg;
                } else {
                  $deleted_entries[] = $id;
                  self::onDelSuccess($request, $wfc, $oldentry);
                }
              }
            }
          }
        }
        // prepare response
        $response = array();
        $response['deleted_entries'] = $deleted_entries;
        $response['messages'] = $messages;
        return $response;
      }
      catch(Exception $err)
      {
        return new WFErrorMessage('Internal Server Error', 500);
      }
    } else {
      // entry deletion is disabled.
      return new WFErrorMessage('Invalid Action', 403);
    }
  }
 /**
  * Called each time on delete action succeeded
  * @param Request $request
  * @param WFormConfig $wfc
  * @param $entry a given entry
  */
  private static function onDelSuccess(Request $request, WFormConfig &$wfc, $entry)
  {
    // update entries count of form
    $count = 
      WFDbManager::getInstance()->getEntriesCount(
        $wfc->getEntriesTable(),
        $wfc->getModule()->getId(),
        $wfc->getId(),
        $wfc->getName());
    if ($count != $wfc->getEntriesCount()) {
      //echo 'entries_count='.$wfc->getEntriesCount(). ' count='.$count;
      $wfc->setEntriesCount($count);
      WFDbManager::getInstance()->save($wfc);
    }

    $id = WFDbManager::getInstance()->getPostId($wfc->getId(), $entry['id']);
    $now = new \DateTime('now');
    if ($wfc->getModule()->getId() == WFModule::WF_CUSTOM_MODULE_ID
      && $id != 0) {
        WFDbManager::getInstance()->del('form-post', 'wf_formpost', $id);
    }
    // update options_count and subgroups_count
    if ($wfc->getName() == "option" || $wfc->getName() == "option-group") {
      // update options_count of a given option group
      $optionGroupId = $entry['wf_optiongroup_id'];
      $optionsCount =
        WFDbManager::getInstance()->getOptionsCount($optionGroupId);
      WFDbManager::getInstance()->update(
        0,
        'wf_option',
        $optionGroupId,
        ['options_count' => $optionsCount],
        $wfc->getModuleId()
      );
      // update subgroups_count of a given option
      $optionId = $entry['parent_id'];
      $suboptionsCount =
        WFDbManager::getInstance()->getSubOptionsCount($optionId);
      WFDbManager::getInstance()->update(
        0,
        'wf_option',
        $optionId,
        ['subgroups_count' => $suboptionsCount],
        $wfc->getModuleId()
      );
    }
    if ($wfc->getName() == 'field-config') {
      $now = new \DateTime('now');
      $data = array();
      $data['modified_tms'] = $now->format(WFEnv::getDateTimeFormat());
      WFDbManager::getInstance()->update(
        0, 'wf_formconfig', $entry['wf_formconfig_id'], $data, $wfc->getModuleId());
    } else if ($wfc->getName() == 'form-config') {
        WFDbManager::getInstance()->delPostsByFormConfigId($entry['id']);
    }
  }

 /**
  * Search - action - That returns a JsonResponse
  * @param $request Request
  * @param WFormConfig $wfc
  * @return JsonResponse
  */
  public static function jsonSearchAction(Request $request, WFormConfig &$wfc)
  {
    $res = self::doSearchAction($request, $wfc);
    return self::makeJsonResponse($res);
  }

 /**
  * Search - action
  * @param $request Request
  * @param WFormConfig $wfc
  * @return array
  */
  public static function htmlSearchAction(Request $request, WFormConfig &$wfc)
  {
    $res = array();

    $res = self::doSearchAction($request, $wfc);

    $templateFile = $wfc->getSearchTemplate();
    if (empty($templateFile)) {
      $templateFile = 'search.twig';
    }

    return self::makeResponse($request, $wfc, $res, $templateFile);
  }

 /**
  * Search - action
  * @param $request Request
  * @param WFormConfig $wfc
  * @return array
  */
  public static function searchAction(Request $request, WFormConfig &$wfc)
  {
    $res = self::doSearchAction($request, $wfc);
    return self::makeArrayResponse($request, $wfc, $res);
  }

 /**
  * Do Search - action
  * @param $request Request
  * @param WFormConfig $wfc
  * @return array|WFErrorMessage
  */
  public static function doSearchAction(Request $request, WFormConfig &$wfc)
  {
    if ($wfc->getSearchEntries()) {
      try
      {     
        $queryVars = null;
        // check search by searchable fields
        $columns = array();
        foreach ($wfc->getFieldsAsArray() as $fld) {
          if ($fld->getCreateColumn()) {
            $columns[$fld->getName()] = $fld->getName();
            if ($fld->getSearchable()) {
              $qv = $request->query->get($fld->getName(), null);
              if (!is_null($qv)) {
                if (is_null($queryVars)) {
                  $queryVars = array();
                }
                if ($fld->getType() == "integer" ||
                  $fld->getType() == "boolean") {
                  $queryVars[$fld->getName()] = array(intval($qv), '=');
                } else {
                  $queryVars[$fld->getName()] = array($qv, 'LIKE');
                }
              }
            }
          }
        }
        $orderBy = $request->query->get('wf_orderby', '');
        // orderBy should be a valid column.
        if (!empty($orderBy) && !isset($columns[$orderBy])) {
          $orderBy = '';
        }
        $orderByDirection =
          strtoupper($request->query->get('wf_orderby_direction', 'ASC'));
        if ($orderByDirection != 'ASC' && $orderByDirection != 'DESC') {
          $orderByDirection = 'ASC';
        }
        $start = intval($request->query->get('wf_start', '0'));
        $limit = intval($request->query->get('wf_limit', '50'));
        $categoryId = intval($request->query->get('wf_category_id', '0'));

        if ($limit > 500 || $limit < 0) {
          $limit = 50;
        }

        $res = array();
        if ($wfc->getIsAddon()) {
          $res['count'] =
            WFAddonsService::getInstance()->search(
              $request,
              $wfc,
              True,
              $start,
              $limit,
              $orderBy,
              $orderByDirection,
              $queryVars,
              $categoryId
            );
        } else {
          $res['count'] =
            WFDbManager::getInstance()->search(
              $wfc->getEntriesTable(),
              $wfc->getModule()->getId(),
              $wfc->getId(),
              $wfc->getName(),
              True,
              $start,
              $limit,
              $orderBy,
              $orderByDirection,
              $queryVars,
              $categoryId
            );
        }

        if ($wfc->getIsAddon()) {
          $res['rows'] =
            WFAddonsService::getInstance()->search(
              $request,
              $wfc,
              False,
              $start,
              $limit,
              $orderBy,
              $orderByDirection,
              $queryVars,
              $categoryId
            );
        } else {
          $res['rows'] =
            WFDbManager::getInstance()->search(
              $wfc->getEntriesTable(),
              $wfc->getModule()->getId(),
              $wfc->getId(),
              $wfc->getName(),
              False,
              $start,
              $limit,
              $orderBy,
              $orderByDirection,
              $queryVars,
              $categoryId
            );
        }

        return $res;
      }
      catch(Exception $err)
      {
        return new WFErrorMessage('Internal Server Error', 500);
      }
    } else {
      // entry search is disabled.
      return new WFErrorMessage('Invalid Action => Form cannot have entries', 200);
    }
  }

  /**
   * Find post table entry by its identifier - action
   * @param WFormConfig $wfc
   * @param integer $id identifier of the table entry
   * @return JsonResponse
   */
  public static function jsonfindByIdAction(WFormConfig &$wfc, $id)
  {
    $res = self::doFindByIdAction($wfc, $id);
    return self::makeJsonResponse($res);
  }

  /**
   * Find post table entry by its identifier - action
   * @param $request Request
   * @param WFormConfig $wfc
   * @param integer $id identifier of the table entry
   * @return array
   */
  public static function findByIdAction(
    Request $request,
    WFormConfig &$wfc,
    $id)
  {
    $res = self::doFindByIdAction($wfc, $id);
    return self::makeArrayResponse($request, $wfc, $res);
  }

  /**
   * Do Find post table entry by its identifier - action
   * @param WFormConfig $wfc
   * @param integer $id identifier of the table entry
   * @return array|WFErrorMessage
   */
  public static function doFindByIdAction(WFormConfig &$wfc, $id)
  {
    if ($wfc->getSearchEntries()) {
      try
      {     
        if ($wfc->getIsAddon()) {
          $entry =
            WFAddonsService::getInstance()->findById($wfc, $id);
        } else {
          $entry =
            WFDbManager::getInstance()->findById(
              $wfc->getId(), $wfc->getEntriesTable(), $id, $wfc->getModuleId());
        }
        if (empty($entry)) {
          return new WFErrorMessage('Not Found', 404);
        } else {
          WFDbManager::getInstance()->findEntryOptions($entry);
          return $entry;
        }
      }
      catch(Exception $err)
      {
        return new WFErrorMessage('Internal Server Error', 500);
      }
    } else {
      // entry search is disabled.
      return new WFErrorMessage('Invalid Action => Form cannot have entries', 200);
    }
  }

  /**
   * Find all post table entries - action
   * @param $request Request
   * @param WFormConfig $wfc
   * @return array
   */
  public static function jsonFindAllAction(Request $request, WFormConfig &$wfc)
  {
    $res = self::doFindAllAction($request, $wfc);
    return self::makeJsonResponse($res);
  }

  /**
   * Find all post table entries - action
   * @param $request Request
   * @param WFormConfig $wfc
   * @return array
   */
  public static function findAllAction(Request $request, WFormConfig &$wfc)
  {
    $res = self::doFindAllAction($request, $wfc);
    return self::makeArrayResponse($request, $wfc, $res);
  }

  /**
   * Find all post table entries - action
   * @param $request Request
   * @param WFormConfig $wfc
   * @return array|WFErrorMessage
   */
  public static function doFindAllAction(Request $request, WFormConfig &$wfc)
  {
    if ($wfc->getSearchEntries()) {
      try
      {     
        return self::doSearchAction($request, $wfc); 
      }
      catch(Exception $err)
      {
        return new WFErrorMessage('Internal Server Error', 500);
      }
    } else {
      // entry search is disabled.
      return new WFErrorMessage('Invalid Action', 500);
    }
  }

  /**
   * Find all post table entries - action
   * @param $request Request
   * @param integer $moduleId the module identifier
   * @return array
   */
  public static function jsonFindAllFormsAction(Request $request, $moduleId)
  {
    $res = self::doFindAllFormsAction($request, $moduleId);
    return self::makeJsonResponse($res);
  }

  /**
   * Find all post table entries - action
   * @param $request Request
   * @param integer $moduleId the module identifier
   * @return array|WFErrorMessage
   */
  public static function doFindAllFormsAction(Request $request, $moduleId)
  {
    try
    {     
      $queryVars = null;
      $orderBy = null;
      $searchableFields = array();
      $orderByDirection =
        strtoupper($request->query->get('wf_orderby_direction', 'ASC'));
      if ($orderByDirection != 'ASC' && $orderByDirection != 'DESC') {
        $orderByDirection = 'ASC';
      }
      $start = intval($request->query->get('wf_start', '0'));
      $limit = intval($request->query->get('wf_limit', '50'));
      if ($limit > 400 || $limit < 0) {
        $limit = 25;
      }
      $res['count'] =
        WFDbManager::getInstance()->search(
          'wf_formconfig',
          $moduleId,
          0,
          'form-config',
          True,
          $start,
          $limit,
          $orderBy,
          $orderByDirection,
          $queryVars);
      $res['rows'] =
        WFDbManager::getInstance()->search(
          'wf_formconfig',
          $moduleId,
          0,
          'form-config',
          False,
          $start,
          $limit,
          $orderBy,
          $orderByDirection,
          $queryVars);
      return $res;
    }
    catch(Exception $err)
    {
      return new WFErrorMessage('Internal Server Error', 500);
    }
  }
}
/* EOF */
