<?php

namespace Drupal\ekan_harvest\Plugin\migrate\source;

/**
 * Source plugin for retrieving data via URLs. Contains support for previewing.
 */
interface HarvestSourceUrlInterface {

  /**
   * Get a list of migration rows used for previewing harvests.
   *
   * @return \Drupal\migrate\Row[]
   *   The list of migrate row objects.
   */
  public function previewRows();

}
