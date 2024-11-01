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

use Doctrine\Common\Collections\ArrayCollection;

/**
 * WFCategoryEntry
 *
 * @Entity
 * @Table(name="wf_categoryentry",
 * uniqueConstraints={
 * @UniqueConstraint(columns={"entry_id", "category_id", "wf_formconfig_id"})},
 * indexes={
 * @Index(columns={"category_id"}),
 * @Index(columns={"wf_formconfig_id"}),
 * @Index(columns={"entry_id"})})
 */
class WFCategoryEntry
{
  /**
   * @var integer
   *
   * @Column(name="id", type="integer", nullable=false)
   * @Id
   * @GeneratedValue(strategy="AUTO")
   */
  private $id;

  /**
   * @var \WF\Lib\Core\WFOption
   *
   * @ManyToOne(targetEntity="WF\Lib\Core\WFOption")
   * @JoinColumns({
   *   @JoinColumn(
   *   name="category_id",
   *   referencedColumnName="id",
   *   nullable=false,
   *   onDelete="CASCADE")
   * })
   */
  private $category;

  /**
   * @var integer
   * @Column(type="integer", name="entry_id", nullable=false)
   */
  private $entryId;

  /**
   * @ManyToOne(targetEntity="WF\Lib\Core\WFormConfig")
   * @JoinColumn(
   * name="wf_formconfig_id",
   * referencedColumnName="id",
   * nullable=false,
   * onDelete="CASCADE")
   */
  private $formConfig;
}

