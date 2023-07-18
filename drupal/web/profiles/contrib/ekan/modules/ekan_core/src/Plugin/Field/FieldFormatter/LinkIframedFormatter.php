<?php

namespace Drupal\ekan_core\Plugin\Field\FieldFormatter;

use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Form\FormStateInterface;
use Drupal\link\Plugin\Field\FieldFormatter\LinkFormatter;

/**
 * Plugin implementation of the 'link_iframed' formatter.
 *
 * @FieldFormatter(
 *   id = "link_iframed",
 *   label = @Translation("Render link as src attribute in an iFrame after the rendered link"),
 *   field_types = {
 *     "link"
 *   }
 * )
 */
class LinkIframedFormatter extends LinkFormatter {

  /**
   * {@inheritdoc}
   */
  public static function defaultSettings() {
    return [
      'iframe_width' => '100%',
      'iframe_height' => '600',
      'hide_link' => FALSE,
    ] + parent::defaultSettings();
  }

  /**
   * {@inheritdoc}
   */
  public function settingsSummary() {
    $summary = parent::settingsSummary();
    $summary[] = t('iFrame Width: @width', ['@width' => $this->getSetting('iframe_width')]);
    $summary[] = t('iFrame Height: @height', ['@height' => $this->getSetting('iframe_height')]);
    $summary[] = t('Hide Link: @hide_link', ['@hide_link' => $this->getSetting('hide_link') ? 'Yes' : 'No']);
    return $summary;
  }

  /**
   * {@inheritdoc}
   */
  public function settingsForm(array $form, FormStateInterface $form_state) {
    $elements = parent::settingsForm($form, $form_state);

    $elements['iframe_width'] = [
      '#type' => 'textfield',
      '#title' => t('iFrame Width'),
      '#default_value' => $this->getSetting('iframe_width'),
    ];

    $elements['iframe_height'] = [
      '#type' => 'textfield',
      '#title' => t('iFrame Height'),
      '#default_value' => $this->getSetting('iframe_height'),
    ];

    $elements['hide_link'] = [
      '#type' => 'checkbox',
      '#title' => t('Hide Link'),
      '#default_value' => $this->getSetting('hide_link'),
    ];

    return $elements;
  }

  /**
   * {@inheritdoc}
   */
  public function viewElements(FieldItemListInterface $items, $langcode) {
    $element = parent::viewElements($items, $langcode);

    foreach ($items as $delta => $item) {

      $iframe = [
        '#type' => 'html_tag',
        '#tag' => 'iframe',
        '#value' => 'hello',
        '#attributes' => [
          'width' => $this->getSetting('iframe_width'),
          'height' => $this->getSetting('iframe_height'),
          'src' => $item->uri,
        ],
      ];

      if ($this->getSetting('hide_link')) {
        $element[$delta] = $iframe;
      }
      else {
        $element[$delta]['iframe'] = $iframe;
      }
    }

    return $element;
  }

}
