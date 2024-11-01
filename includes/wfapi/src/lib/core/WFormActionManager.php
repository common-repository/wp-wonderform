<?php

/*
* This file is part of the WonderForm package.
*
* (c) Wonderform <contact@wonderform.net>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

namespace WF\Lib\Core;

require_once(__DIR__.'/WFormAction.php');

use Doctrine\ORM\EntityRepository;

/**
 * Provides basic utility to manipulate a wonder form action.
 *
 * @author Wonderform <contact@wonderform.net>
 */
class WFormActionManager extends EntityRepository
{
  /**
   * Constructor
   */
  public function __construct()
  {
    global $wfem;
    parent::__construct(
      $wfem,
      $wfem->getClassMetadata('WF\Lib\Core\WFormAction'));
  }

  /**
   * Find a form action by its action type id
   * @param WFormConfig $formConfig
   * @param WFormActionType $formActionType
   * @return WFormAction or null if not found
   */
  public function findByActionType(WFormConfig &$formConfig, $formActionType)
  {
    try
    {     
      return $this->findOneBy(
        array(
          'formConfig' => $formConfig,
          'formActionType' => $formActionType)); 
    }
    catch(Exception $err)
    {
      return null;
    }
  }

  /**
   * Find form action type
   * @param id integer the form action type identifier
   * @return WFormActionType
   */
  public function findFormActionType($id) {
    try
    {
      $res = $this->_em->getRepository('WF\Lib\Core\WFormActionType')->find($id);
      return $res;
    }
    catch(Exception $err)
    {
      return null;
    }
  }
}
/* EOF */
