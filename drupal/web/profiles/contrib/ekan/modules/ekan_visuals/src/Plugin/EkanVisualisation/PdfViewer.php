<?php

namespace Drupal\ekan_visuals\Plugin\EkanVisualisation;

use Drupal\Core\Form\FormStateInterface;
use Drupal\ekan_core\Entity\EkanResourceEntity;
use Drupal\file\Entity\File;

/**
 * A Pdf viewer visualisation.
 *
 * @EkanVisualisation(
 *   id = "pdf_viewer",
 *   label = @Translation("PDF Viewer"),
 *   formats = {
 *   "pdf"
 *   }
 * )
 */
class PdfViewer extends EkanVisualisationBase {

  /**
   * {@inheritdoc}
   */
  public static function defaultSettings() {
    return [
      'width' => '100%',
      'height' => '600px',
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function settingsForm(array $form, FormStateInterface $form_state) {
    $elements = parent::settingsForm($form, $form_state);

    $elements['width'] = [
      '#type' => 'textfield',
      '#title' => t('Width'),
      '#default_value' => '100%',
      '#description' => t("Width of the viewer. Ex: 250px or 100%"),
    ];

    $elements['height'] = [
      '#type' => 'textfield',
      '#title' => t('Height'),
      '#default_value' => '600px',
      '#description' => t("Height of the viewer. Ex: 250px or 100%"),
    ];
    $elements['#attached']['library'][] = 'ekan_visuals/detect_pdf';

    return $elements;
  }

  /**
   * {@inheritdoc}
   */
  public function visualise(EkanResourceEntity $resource, array $settings = []) {
    $elements = NULL;
    if (!$resource->get('resource_format')->entity) {
      return NULL;
    }
    if (!$resource->get('visualisation')->value) {
      return NULL;
    }
    /** @var \Drupal\taxonomy\TermInterface $format */
    $format = $resource->get('resource_format')->entity;
    /** @var \Drupal\file\Entity\File $file */
    $file = $resource->get('upload')->entity;
    if ($format->getName() == 'pdf' && $file instanceof File) {
      if ($file->getMimeType() == 'application/pdf') {
        $file_url = file_create_url($file->getFileUri());
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
            'width' => $settings['width'],
            'height' => $settings['height'] ? $settings['height'] : '100%',
            'src' => $iframe_src,
            'data-src' => $file_url,
          ],
        ];
        $elements[] = $html;
      }
      else {
        $elements[] = [
          '#theme' => 'file_link',
          '#file' => $file,
        ];
      }
    }

    $elements['#attached']['library'][] = 'ekan/pdfjs';

    return $elements;
  }

}
