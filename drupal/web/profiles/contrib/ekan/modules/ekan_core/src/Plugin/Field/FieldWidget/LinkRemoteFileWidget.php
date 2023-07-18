<?php

namespace Drupal\ekan_core\Plugin\Field\FieldWidget;

use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\StringTranslation\TranslatableMarkup;
use Drupal\file\Plugin\Validation\Constraint\FileValidationConstraint;
use Symfony\Component\Validator\ConstraintViolationInterface;
use Symfony\Component\Validator\ConstraintViolationListInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Field\FieldDefinitionInterface;
use Drupal\Core\Field\WidgetBase;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Drupal\Core\Session\AccountProxyInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Plugin implementation of the 'link_remote_file' widget.
 *
 * Similar to remote_stream_wrapper_widget.
 *
 * @FieldWidget(
 *   id = "link_remote_file",
 *   label = @Translation("Link Remote File"),
 *   field_types = {
 *     "file",
 *     "image"
 *   }
 * )
 */
class LinkRemoteFileWidget extends WidgetBase implements ContainerFactoryPluginInterface {

  /**
   * The entity type manager.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  private $entityTypeManager;

  /**
   * The current user.
   *
   * @var \Drupal\Core\Session\AccountProxyInterface
   */
  private $currentUser;

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $plugin_id,
      $plugin_definition,
      $configuration['field_definition'],
      $configuration['settings'],
      $configuration['third_party_settings'],
      $container->get('entity_type.manager'),
      $container->get('current_user')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function __construct($plugin_id, $plugin_definition, FieldDefinitionInterface $field_definition, array $settings, array $third_party_settings, EntityTypeManagerInterface $entityTypeManager, AccountProxyInterface $currentUser) {
    parent::__construct($plugin_id, $plugin_definition, $field_definition, $settings, $third_party_settings);
    $this->entityTypeManager = $entityTypeManager;
    $this->currentUser = $currentUser;
  }

  /**
   * {@inheritdoc}
   */
  public function formElement(FieldItemListInterface $items, $delta, array $element, array &$form, FormStateInterface $form_state) {
    $element['url'] = [
      '#type' => 'url',
      '#required' => $this->fieldDefinition->isRequired(),
    ];

    $cardinality = $this->fieldDefinition->getFieldStorageDefinition()->getCardinality();
    if ($cardinality == 1) {
      $element['url'] += [
        '#title' => $this->fieldDefinition->getLabel(),
        '#description' => $this->getFilteredDescription(),
      ];
    }

    $id = $items->get($delta)->target_id;
    if (!empty($id)) {
      /** @var \Drupal\file\Entity\File $file */
      $file = $this->entityTypeManager->getStorage('file')->load($id);
      if (!empty($file)) {
        $element['url']['#default_value'] = $file->uri->value;
      }
    }

    return $element;
  }

  /**
   * {@inheritdoc}
   */
  public function massageFormValues(array $values, array $form, FormStateInterface $form_state) {
    $fileStorage = $this->entityTypeManager->getStorage('file');

    $new_values = [];
    foreach ($values as $value) {
      if (empty($value['url'])) {
        continue;
      }

      /** @var \Drupal\file\FileInterface $file */
      $files = $fileStorage->loadByProperties(['uri' => $value['url']]);
      $file = reset($files);
      if (!$file) {
        $file = $fileStorage->create([
          'uri' => $value['url'],
          'uid' => $this->currentUser->id(),
        ]);
        $file->save();
      }
      $new_values[] = ['target_id' => $file->id()];
    }

    return $new_values;
  }

  /**
   * {@inheritdoc}
   */
  public function flagErrors(FieldItemListInterface $items, ConstraintViolationListInterface $violations, array $form, FormStateInterface $form_state) {

    foreach ($violations as $delta => $violation) {
      assert($violation instanceof ConstraintViolationInterface);
      $constraint = $violation->getConstraint();
      if ($constraint instanceof FileValidationConstraint) {
        $message = $violation->getMessage();
        if ($message instanceof TranslatableMarkup) {
          // Remove any violations for maximum upload size.
          if ($message->getUntranslatedString() === 'The file is %filesize exceeding the maximum file size of %maxsize.') {
            $violations->remove($delta);
          }
          // Remove violations about file extensions if configured.
          if ($message->getUntranslatedString() === 'Only files with the following extensions are allowed: %files-allowed.') {
            $violations->remove($delta);
          }
        }
      }
    }
    parent::flagErrors($items, $violations, $form, $form_state);
  }

}
