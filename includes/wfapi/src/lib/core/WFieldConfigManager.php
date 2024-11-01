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

require_once(__DIR__.'/WFieldConfig.php');

use Doctrine\ORM\EntityRepository;

/**
 * Provides basic utility to manipulate a wonder form config field.
 *
 * @author Wonderform <contact@wonderform.net>
 */
class WFieldConfigManager extends EntityRepository
{
  /**
   * Constructor
   */
  public function __construct()
  {
    global $wfem;
    parent::__construct(
      $wfem,
      $wfem->getClassMetadata('WF\Lib\Core\WFieldConfig'));
  }

  /**
   * Find a field config by its name
   * @param WFormConfig $formConfig
   * @param string $name name of the field config
   * @return WFieldConfig or null if not found
   */
  public function findByName(WFormConfig $formConfig, $name)
  {
    try
    {     
      return $this->findOneBy(
        array(
          'formConfig' => $formConfig,
          'name' => $name)); 
    }
    catch(Exception $err)
    {
      return null;
    }
  }

  /**
   * Find a field config by its identifier
   * @param $id integer identifier of the field config
   * @return WFieldConfig or null if not found
   */
  public function findById($id)
  {
    try
    {     
      $entry = $this->find($id);
      return $entry;
    }
    catch(Exception $err)
    {
      return null;
    }
  }
}
/* EOF */
