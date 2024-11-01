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

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Matcher\UrlMatcher;
use Symfony\Component\Routing\Exception\ResourceNotFoundException;
use Symfony\Component\HttpKernel\Controller\ControllerResolver;
use Symfony\Component\Routing\Exception\MethodNotAllowedException;

/**
 * Handle user requests. This is the main entry for user requests handle.
 *
 * @author Wonderform <contact@wonderform.net>
 */
class WFHttpRequestHandler {
  protected $matcher;
  protected $resolver;

  public function __construct(UrlMatcher $matcher, ControllerResolver $resolver)
  {
    $this->matcher = $matcher;
    $this->resolver = $resolver;
  }

  public function handle(Request $request)
  {
    $this->matcher->getContext()->fromRequest($request);

    try {
      $request->attributes->add($this->matcher->match($request->getPathInfo()));

      $controller = $this->resolver->getController($request);
      $arguments = $this->resolver->getArguments($request, $controller);

      return call_user_func_array($controller, $arguments);
    } catch (ResourceNotFoundException $e) {
      $res = [
        'wf_err' => [
          'err_msg' => 'Not Found',
          'messages' => []
        ]
      ];
      return new JsonResponse($res, 404);
    } catch (MethodNotAllowedException $e) {
      $res = [
        'wf_err' => [
          'err_msg' => 'Method Not Allowed',
          'messages' => []
        ]
      ];
      return new JsonResponse($res, 500);
    } catch (\Swift_RfcComplianceException $e) {
      $res = [
        'wf_err' => [
          'err_msg' => $e->getMessage(),
          'messages' => ['Please check the mailer configuration...']
        ]
      ];

      return new JsonResponse($res);
    } catch (\Swift_TransportException $e) {
      $res = [
        'wf_err' => [
          'err_msg' => $e->getMessage(),
          'messages' => ['Please check the mailer configuration...']
        ]
      ];

      return new JsonResponse($res);
    } catch (\Exception $e) {
      //print_r($e);
      $res = [
        'wf_err' => [
          'err_msg' => $e->getMessage(),
          'messages' => ['A server error occurred. Please contact the administrator']
        ]
      ];

      return new JsonResponse($res, 500);
    }
  }
}
/* EOF */
