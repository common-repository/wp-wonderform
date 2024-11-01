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

/**
 * @author Wonderform <contact@wonderform.net>
 */
class WFUser
{
  // Define constants
  const WF_SITE_URL           = 'site_url';
  const WF_STATIC_URL         = 'static_url';
  const WF_ADMIN_POST_URL     = 'admin_post_url';
  const WF_PATH_INFO          = 'path_info';
  const WF_SITE_NAME          = 'site_name';
  const WF_SITE_DESC          = 'site_desc';
  const WF_ADMIN_EMAIL        = 'admin_email';
  const WF_UPLOAD_BASEDIR     = 'upload_basedir';

  const WF_DEFAULT_MESSAGE      = 'default_message';
  const WF_ENTRY_ID             = 'entry_id';
  const WF_ENTRY_CREATED_TMS    = 'entry_created_tms';
  const WF_FORM_TITLE           = 'form_title';
  const WF_REQUEST_TYPE         = 'request_type';
  const WF_IS_INTERNAL_REQUEST  = 'is_internal_request';
  const WF_POST_TYPE            = 'post_type';
  const WF_PAGEBUILDER_NAME     = 'pagebuilder_name';
  const WF_PAGEBUILDER_TEMPLATE = 'pagebuilder_template';

  const WF_USER_ID            = 'user_id';
  const WF_USER_LOGIN         = 'user_login';
  const WF_USER_EMAIL         = 'user_email';
  const WF_USER_FIRSTNAME     = 'user_firstname';
  const WF_USER_LASTNAME      = 'user_lastname';
  const WF_DISPLAY_NAME       = 'display_name';
  const WF_USER_ROLE          = 'user_role';
  const WF_USER_LOGGED_IN     = 'user_logged_in';

  const WF_ADMIN_ROLE_ID       = 1;
  const WF_SUBSCRIBER_ROLE_ID  = 2;
  const WF_VISITOR_ROLE_ID     = 3;

  const ACCESS_DENIED_ERR =
    'Access Denied. You do not have permission to access this page.';
}
