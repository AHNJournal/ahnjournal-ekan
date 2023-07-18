<?php

namespace Drupal\ekan_migrate\Plugin\migrate\process;

use Drupal\migrate\Plugin\migrate\process\FileCopy;
use Drupal\migrate\MigrateExecutableInterface;
use Drupal\migrate\Row;

/**
 * Migrate process plugin which copies files, but does nothing for remote files.
 *
 * @MigrateProcessPlugin(
 *   id = "file_copy_if_not_remote"
 * )
 */
class FileCopyIfNotRemote extends FileCopy {

  /**
   * {@inheritdoc}
   */
  public function transform($value, MigrateExecutableInterface $migrate_executable, Row $row, $destination_property) {

    [$source, $destination] = $value;
    if (substr($source, 0, 4) == 'http') {
      return $source;
    }

    return parent::transform($value, $migrate_executable, $row, $destination_property);
  }

}
