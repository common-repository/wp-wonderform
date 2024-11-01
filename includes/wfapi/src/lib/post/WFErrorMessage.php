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

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * @author Wonderform <contact@wonderform.net>
 */
class WFErrorMessage
{
  /**
   * @var string hold error message
   */
  private $errMsg;

  /**
   * @var string hold error code
   */
  private $errCode;

  /**
   * @var array info hold extra informations
   */
  private $info;

  /**
   * Constructor
   * @param string $errMsg the error message
   * @param integer $errCode the error code
   * @param array $info
   */
  public function __construct($errMsg, $errCode, array $info = array())
  {
    $this->errMsg = $errMsg;
    $this->errCode = $errCode;
    $this->info = $info;
  }

  /**
   * Get the error message
   * @return $errMsg
   */
  public function getErrMsg() {
    return $this->errMsg;
  }

  /**
   * Get the error code
   * @return $errCode
   */
  public function getErrCode() {
    return $this->errCode;
  }

  /**
   * Convert error message to array
   * @return array
   */
  public function toArray() {
    return 
      [
        'wf_err' => [
          'err_msg' => $this->errMsg,
          'messages' => $this->info
        ]
      ];
  }

  /**
   * Convert error message to string
   * @return array
   */
  public function toString() {
    $str =  sprintf("%s", print_r($this->toArray(), true));
    return $str;
  }

  /**
   * Convert error message to ArrayResponse
   * @return JsonResponse
   */
  public function toArrayResponse() {
    return $this->toArray();
  }

  /**
   * Convert error message to JsonResponse
   * @return JsonResponse
   */
  public function toJsonResponse() {
    return new JsonResponse(
      $this->toArray(),
      $this->errCode);
  }

  /**
   * Convert error message to basic html Response
   * @return Response
   */
  public function toResponse() {
    return new Response($this->toString(), $this->errCode);
  }
}
/* EOF */
