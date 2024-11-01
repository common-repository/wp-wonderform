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

class WFStr
{
  /**
   * Slugify text
   * @param string $text the text to slugify
   */
	static public function slugify($text)
	{
		if (!empty($text))
		{
      // replace non letter or digits by -
      $text = preg_replace('#[^\\pL\d]+#u', '-', $text);
      
      // trim
      $text = trim($text, '-');
      
      // transliterate
      if (function_exists('iconv'))
      {
        $text = iconv('utf-8', 'us-ascii//TRANSLIT', $text);
      }
      
      // lowercase
      $text = strtolower($text);
      
      // remove unwanted characters
      $text = preg_replace('#[^-\w]+#', '', $text);
    }
		
		return $text;
	}
}
