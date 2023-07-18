<?php

namespace Drupal\ekan_core\Plugin\Field\FieldFormatter;

use Drupal\Core\Field\FormatterBase;
use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Form\FormStateInterface;

/**
 * Field formatter to renders a pdf using the pdf.js plugin.
 *
 * @FieldFormatter(
 *  id = "pdf_responsive",
 *  label = @Translation("PDF: Responsive viewer of PDF.js"),
 *  description = @Translation("Use the default viewer like http://mozilla.github.io/pdf.js/web/viewer.html."),
 *  field_types = {"file"}
 * )
 */
class PdfResponsive extends FormatterBase {

  /**
   * {@inheritdoc}
   */
  public static function defaultSettings() {
    return [
      'width' => '100%',
      'height' => '',
    ] + parent::defaultSettings();
  }

  /**
   * {@inheritdoc}
   */
  public function settingsForm(array $form, FormStateInterface $form_state) {
    $elements = parent::settingsForm($form, $form_state);

    $elements['width'] = [
      '#type' => 'textfield',
      '#title' => 'Width',
      '#default_value' => $this->getSetting('width'),
      '#description' => t('Width of the viewer. Ex: 250px or 100%'),
    ];

    $elements['height'] = [
      '#type' => 'textfield',
      '#title' => 'Height',
      '#default_value' => $this->getSetting('height'),
      '#description' => t('Height of the viewer. Ex: 250px or 100%'),
    ];
    return $elements;
  }

  /**
   * {@inheritdoc}
   */
  public function settingsSummary() {
    $summary = [];

    $width = $this->getSetting('width');
    $height = $this->getSetting('height');

    $summary[] = t('Width: @width , Height: @height', [
      '@width' => $width,
      '@height' => $height,
    ]);

    return $summary;
  }

  /**
   * Renders a pdf using the pdf.js plugin.
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
    $elements = [];
    foreach ($items as $delta => $item) {
      if ($item->entity->getMimeType() == 'application/pdf') {
        $file_url = file_create_url($item->entity->getFileUri());
        $iframe_src = file_create_url('/libraries/pdf.js/web/viewer.html') . '?file=' . rawurlencode($file_url);
        $html = [
          '#prefix' => '<div class="responsive-pdf">',
          '#suffix' => '</div>',
          '#theme' => 'file_pdf',
          '#attributes' => [
            'class' => ['pdf'],
            'webkitallowfullscreen' => '',
            'mozallowfullscreen' => '',
            'allowfullscreen' => '',
            'frameborder' => 'no',
            'width' => $this->getSetting('width'),
            'height' => $this->getSetting('height'),
            'src' => $iframe_src,
            'data-src' => $file_url,
          ],
        ];
        $elements[$delta] = $html;
      }
      else {
        $elements[$delta] = [
          '#theme' => 'file_link',
          '#file' => $item->entity,
        ];
      }
    }

    $elements['#attached']['library'][] = 'ekan/pdfjs';

    return $elements;
  }

}
