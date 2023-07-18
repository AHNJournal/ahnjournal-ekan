<?php

namespace Drupal\ekan_migrate\Plugin\migrate\process;

use Drupal\filter\FilterProcessResult;
use Drupal\migrate\MigrateExecutableInterface;
use Drupal\migrate\ProcessPluginBase;
use Drupal\migrate\Row;

/**
 * Migrate process plugin which copies files, but does nothing for remote files.
 *
 * @MigrateProcessPlugin(
 *   id = "convert_linebreaks"
 * )
 */
class ConvertLineBreaks extends ProcessPluginBase {

  /**
   * {@inheritdoc}
   */
  public function transform($value, MigrateExecutableInterface $migrate_executable, Row $row, $destination_property) {
    $filter = new FilterProcessResult(_filter_autop($value));
    $text = $filter->getProcessedText();
    return $text;
  }

}
