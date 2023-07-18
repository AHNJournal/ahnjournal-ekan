<?php

namespace Drupal\ekan_core\Entity\Form;

use Drupal\Component\Utility\Environment;
use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\StreamWrapper\StreamWrapperInterface;
use Drupal\ekan_core\Entity\EkanResourceEntity;
use Drupal\file\Plugin\Field\FieldType\FileItem;

/**
 * Class ResourceEntitySettingsForm to give settings to resource entities.
 *
 * @ingroup ekan_core
 */
class ResourceEntitySettingsForm extends ConfigFormBase {

  /**
   * Returns a unique string identifying the form.
   *
   * @return string
   *   The unique string identifying the form.
   */
  public function getFormId() {
    return 'resource_settings';
  }

  /**
   * Form submission handler.
   *
   * @param array $form
   *   An associative array containing the structure of the form.
   * @param \Drupal\Core\Form\FormStateInterface $form_state
   *   The current state of the form.
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $config = $this->config('ekan_core.resource_settings');
    $config->set('upload', $form_state->getValue('upload'));
    $config->save();
  }

  /**
   * Defines the settings form for resource entities.
   *
   * @param array $form
   *   An associative array containing the structure of the form.
   * @param \Drupal\Core\Form\FormStateInterface $form_state
   *   The current state of the form.
   *
   * @return array
   *   Form definition array.
   */
  public function buildForm(array $form, FormStateInterface $form_state) {

    $form = parent::buildForm($form, $form_state);

    $config = $this->config('ekan_core.resource_settings');
    $upload_settings = $config->get('upload');

    $scheme_options = \Drupal::service('stream_wrapper_manager')->getNames(StreamWrapperInterface::WRITE_VISIBLE);
    $has_data = FALSE;

    $form['upload'] = [
      '#tree' => TRUE,
      '#type' => 'fieldset',
      '#title' => "Upload Settings",
      'uri_scheme' => [
        '#type' => 'radios',
        '#title' => t('Upload destination'),
        '#options' => $scheme_options,
        '#default_value' => $upload_settings['uri_scheme'] ?: EkanResourceEntity::DEFAULT_UPLOAD_SETTINGS['uri_scheme'],
        '#description' => t('Select where the final files should be stored. Private file storage has significantly more overhead than public files, but allows restricted access to files within this field.'),
        '#disabled' => $has_data,
      ],
      'file_directory' => [
        '#type' => 'textfield',
        '#title' => t('File directory'),
        '#default_value' => $upload_settings['file_directory'] ?: EkanResourceEntity::DEFAULT_UPLOAD_SETTINGS['file_directory'],
        '#description' => t('Optional subdirectory within the upload destination where files will be stored. Do not include preceding or trailing slashes.'),
        '#element_validate' => [[FileItem::class, 'validateDirectory']],
        '#weight' => 3,
      ],
      'file_extensions' => [
        '#type' => 'textfield',
        '#title' => t('Allowed file extensions'),
        '#default_value' => $upload_settings['file_extensions'] ?: EkanResourceEntity::DEFAULT_UPLOAD_SETTINGS['file_extensions'],
        '#description' => t('Separate extensions with a space or comma and do not include the leading dot.'),
        '#element_validate' => [[FileItem::class, 'validateExtensions']],
        '#weight' => 1,
        '#maxlength' => 256,
        // By making this field required, we prevent a potential security issue
        // that would allow files of any type to be uploaded.
        '#required' => TRUE,
      ],
      'max_filesize' => [
        '#type' => 'textfield',
        '#title' => t('Maximum upload size'),
        '#default_value' => $upload_settings['max_filesize'] ?: EkanResourceEntity::DEFAULT_UPLOAD_SETTINGS['max_filesize'],
        '#description' => t('Enter a value like "512" (bytes), "80 KB" (kilobytes) or "50 MB" (megabytes) in order to restrict the allowed file size. If left empty the file sizes will be limited only by PHP\'s maximum post and file upload sizes (current limit <strong>%limit</strong>).', ['%limit' => format_size(Environment::getUploadMaxSize())]),
        '#size' => 10,
        '#element_validate' => [[FileItem::class, 'validateMaxFilesize']],
        '#weight' => 5,
      ],
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return ['ekan_core.resource_settings'];
  }

}
