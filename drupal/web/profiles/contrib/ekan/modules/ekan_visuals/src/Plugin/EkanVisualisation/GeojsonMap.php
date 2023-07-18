<?php

namespace Drupal\ekan_visuals\Plugin\EkanVisualisation;

use Drupal\Core\Form\FormStateInterface;
use Drupal\Component\Utility\Html;
use Drupal\ekan_core\Entity\EkanResourceEntity;
use Drupal\file\FileInterface;
use Drupal\leaflet\LeafletSettingsElementsTrait;

/**
 * A Geo map visualisation based on uploaded file.
 *
 * @EkanVisualisation(
 *   id = "geojson_map",
 *   label = @Translation("Geojson Map"),
 *   formats = {
 *   "geojson"
 *   }
 * )
 */
class GeojsonMap extends EkanVisualisationBase {

  use LeafletSettingsElementsTrait;

  /**
   * {@inheritdoc}
   */
  public static function defaultSettings() {
    return [];
  }

  /**
   * {@inheritdoc}
   */
  public function settingsForm(array $form, FormStateInterface $form_state) {
    $elements = parent::settingsForm($form, $form_state);
    $elements[] = [
      '#type' => 'markup',
      '#markup' => t('The map will be rendered using the upload Geojson file.'),
    ];
    $elements['#attached']['library'][] = 'ekan_visuals/detect_geojson';
    return $elements;
  }

  /**
   * {@inheritdoc}
   */
  public function visualise(EkanResourceEntity $resource, array $settings = NULL) {
    $elements = NULL;
    if (!$resource->get('visualisation')->value) {
      return NULL;
    }
    /** @var \Drupal\taxonomy\TermInterface $format */
    $format = $resource->get('resource_format')->entity;
    if ($format->getName() == 'geojson') {
      /** @var \Drupal\file\Entity\File $file */
      $file = $resource->get('upload')->entity;
      $is_remote_file = FALSE;
      // If no uploaded file, try with remote file.
      if (!$file) {
        $file = $resource->get('link_remote_file')->entity;
        $is_remote_file = TRUE;
      }
      if ($file instanceof FileInterface && $this->applicableExtension($file, $is_remote_file)) {
        $height = '400px';

        // Add a specific map id.
        $id = Html::getUniqueId("leaflet_map_resource_{$resource->id()}");
        $elements = [
          '#type' => 'container',
          '#attributes' => [
            'class' => [$id],
            'id' => [$id],
            'style' => "height: $height;",
          ],
        ];
        $map = leaflet_map_get_info('OSM Mapnik');
        $map['id'] = $id;
        $map['geofield_cardinality'] = 1;
        $this->setAdditionalMapOptions($map, []);
        $features[] = [
          'type' => 'url',
          'url' => file_create_url($file->getFileUri()),
          'popup' => $resource->label(),
        ];
        $elements['map-' . $resource->id()] = $this->leafletRenderMap($map, $features, $height);
      }
    }

    return $elements;
  }

  /**
   * Load all Leaflet required client files and return markup for a map.
   *
   * @param array $map
   *   The map settings array.
   * @param array $features
   *   The features array.
   * @param string $height
   *   The height value string.
   *
   * @return array
   *   The leaflet_map render array.
   */
  public function leafletRenderMap(array $map, array $features = [], $height = '400px') {
    $map_id = $map['id'] ?? Html::getUniqueId('leaflet_map');
    $attached_libraries = [
      'ekan_visuals/geojson_visualisation',
      'ekan_visuals/leaflet.ajax',
      'leaflet/general',
    ];
    $settings[$map_id] = [
      'mapid' => $map_id,
      'map' => $map,
      // JS only works with arrays, make sure we have one with numeric keys.
      'features' => array_values($features),
    ];
    return [
      '#theme' => 'leaflet_map',
      '#map_id' => $map_id,
      '#height' => $height,
      '#map' => $map,
      '#attached' => [
        'library' => $attached_libraries,
        'drupalSettings' => [
          'geojsonleaflet' => $settings,
        ],
      ],
    ];
  }

  /**
   * Check if the file extension is geojson.
   */
  public function applicableExtension(FileInterface $file, $is_remote_file = FALSE) {
    if ($is_remote_file) {
      return TRUE;
    }
    $regex = '/\\.(' . preg_replace('/ +/', '|', preg_quote('geojson json')) . ')$/i';
    if (preg_match($regex, $file->getFilename())) {
      return TRUE;
    }
    return FALSE;
  }

}
