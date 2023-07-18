<?php

namespace Drupal\ekan_core\Plugin\Field\FieldFormatter;

use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\FormatterBase;

/**
 * Field formatter to render the file metadata.
 *
 * @FieldFormatter(
 *  id = "file_metadata",
 *  label = @Translation("File metadata table"),
 *  description = @Translation("Table of metadata (size, mime etc)"),
 *  field_types = {"file"}
 * )
 */
class FileMetadata extends FormatterBase {

  /**
   * Renders the file metadata.
   *
   * @param \Drupal\Core\Field\FieldItemListInterface $items
   *   The collection of field items.
   * @param string $langcode
   *   The language code.
   *
   * @return array
   *   A renderable array.
   */
  public function viewElements(FieldItemListInterface $items, $langcode) {
    $elements = [
      '#prefix' => '<header><h2>' . t('Additional Information') . '</h2></header>',
    ];
    foreach ($items as $delta => $item) {
      $rows = [];

      $header = [
        t('Field'),
        t('Value'),
      ];

      $file_metadata = $item->entity;
      $rows[] = [t('mimetype'), $file_metadata->getMimeType()];
      $rows[] = [t('filesize'), format_size($file_metadata->getSize())];
      $rows[] = [
        t('timestamp'),
        \Drupal::service('date.formatter')->format($file_metadata->getCreatedTime(), 'small'),
      ];

      $elements[$delta] = [
        '#theme' => 'table',
        '#header' => $header,
        '#rows' => $rows,
        '#empty' => $this->t('Metadata not available'),
      ];

    }

    return $elements;
  }

}
