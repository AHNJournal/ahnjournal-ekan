<?php

namespace Drupal\ekan_core\Plugin\Field\FieldFormatter;

use Drupal\Core\Field\FieldItemListInterface;
use Drupal\file\Plugin\Field\FieldFormatter\DescriptionAwareFileFormatterBase;

/**
 * Plugin implementation of the 'file info table' formatter.
 *
 * @FieldFormatter(
 *   id = "file_info_table",
 *   label = @Translation("Resource table of files"),
 *   field_types = {
 *     "file"
 *   }
 * )
 */
class ResourceFileInfoFormatter extends DescriptionAwareFileFormatterBase {

  /**
   * {@inheritdoc}
   */
  public function viewElements(FieldItemListInterface $items, $langcode) {
    $elements = [];

    /** @var \Drupal\file\Plugin\Field\FieldType\FileItem $item */
    foreach ($items as $delta => $item) {
      /** @var \Drupal\file\FileInterface $file */
      $file = $item->entity;
      $rows = [
        ['mimetype', $file->getMimeType()],
        ['filesize', format_size($file->getSize())],
        [
          'timestamp',
          \Drupal::service('date.formatter')->format($file->getCreatedTime(), 'file_date'),
        ],
      ];

      $elements[$delta] = [
        '#theme' => 'table__file_formatter_table',
        '#header' => [t('Field'), t('Value')],
        '#rows' => $rows,
      ];
    }

    return $elements;
  }

}
