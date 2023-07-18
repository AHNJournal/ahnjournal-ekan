<?php

namespace Drupal\ekan_core\Commands;

/**
 * Drush commands for building ekan data.json.
 */
class EkanCoreCommands {

  /**
   * Perform data.json data build.
   *
   * @command ekan:data_build
   *
   * @default $options []
   *
   * @option force
   *  Force the data to rebuild, regardless of cache status.
   *
   * @usage ekan:data_build
   *   Build data.json
   */
  public function dataBuild($options = ['force' => FALSE]) {
    /** @var \Drupal\ekan_core\Service\PodDataBuilderInterface $data_builder */
    $data_builder = \Drupal::service('ekan_core.pod_data_builder');
    if ($data_builder->isCacheStale() || $options['force']) {
      $filepath = $data_builder->warmCache();
      \Drupal::logger('ekan_core')->info("Generated $filepath");
    }
  }

}
