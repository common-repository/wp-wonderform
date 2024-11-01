<?php

/*
* This file is part of the WonderForm package.
*
* (c) Babaly Ly <lybaba@gmail.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
 */

namespace WF\Lib\Contact;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;

require_once __DIR__.'/WFContact.php';
require_once __DIR__.'/WFContactManager.php';

/**
 * Main entry point to manipulate a WonderForm Model.
 *
 * @author Babaly Ly <lybaba@gmail.com>
 */
class WFContactController
{
  /**
   * Get form config manager
   */
  public static function getManager() {
    return WFContactManager::getInstance();
  }

  /**
   * Find a contact by its identifier - action
   * @param $id integer identifier of the contact
   * @return JsonResponse
   */
  public function findByIdAction($id)
  {
    try
    {     
      $entry = self::getManager()->findById($id);
      return new JsonResponse($entry);
    }
    catch(Exception $err)
    {
      return new JsonResponse([ 'err_msg' => $err ]);
    }
  }

  /**
   * Update module core database schema
   * @return JsonResponse
   */
  public function updateSchemaAction()
  {
    try
    {
      return new JsonResponse(
        self::getManager()->updateSchema());
    }
    catch(Exception $err)
    {
      return new JsonResponse([ 'err_msg' => $err ]);
    }
  }
}
/* EOF */
