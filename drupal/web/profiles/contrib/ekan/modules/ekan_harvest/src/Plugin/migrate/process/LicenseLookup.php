<?php

namespace Drupal\ekan_harvest\Plugin\migrate\process;

use Drupal\migrate\MigrateExecutableInterface;
use Drupal\migrate\ProcessPluginBase;
use Drupal\migrate\Row;

/**
 * Lookup License.
 *
 * @MigrateProcessPlugin(
 *   id = "license_lookup"
 * )
 *
 * To do custom value transformations use the following:
 *
 * @code
 * field_license:
 *   plugin: license_lookup
 *   source: license
 * @endcode
 */
class LicenseLookup extends ProcessPluginBase {

  /**
   * {@inheritdoc}
   */
  public function transform($value, MigrateExecutableInterface $migrate_executable, Row $row, $destination_property) {
    $licenses = \Drupal::service('ekan_core.license_handler');
    if (array_key_exists($value, $licenses->getLicenseOptions())) {
      return $value;
    }
    return $licenses->getLicenseFromUri($value);
  }

}
