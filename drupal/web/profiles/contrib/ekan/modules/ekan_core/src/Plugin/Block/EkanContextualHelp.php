<?php

namespace Drupal\ekan_core\Plugin\Block;

use Drupal\Core\Access\AccessResult;
use Drupal\Core\Block\BlockBase;
use Drupal\Core\Session\AccountInterface;

/**
 * Provides a 'ekan_contextual_help' block.
 *
 * @Block(
 *  id = "ekan_contextual_help",
 *  admin_label = @Translation("Ekan Contextual Help"),
 * )
 */
class EkanContextualHelp extends BlockBase {

  /**
   * Given a drupal route name, return the text and title of help text.
   */
  private function getHelpText($route_name) {
    $route_text = [
      'ekan_core.dataset.step1' => [
        '#title' => $this->t('What are datasets?'),
        'text' => ['#markup' => $this->t('Datasets are simply used to group related pieces of data. These can then be found under a single url with a description and licensing information.')],
      ],
      'ekan_core.dataset.add_resource' => [
        '#title' => $this->t('What is data?'),
        'text' => ['#markup' => $this->t('Data can be any file or link to a file containing useful data.')],
      ],
    ];

    $route_text['ekan_core.dataset.additional_data'] = $route_text['ekan_core.dataset.step1'];
    $route_text['entity.dataset.edit_form'] = $route_text['ekan_core.dataset.step1'];

    if (isset($route_text[$route_name])) {
      return $route_text[$route_name];
    }

    return NULL;
  }

  /**
   * {@inheritDoc}
   */
  public function build() {
    $route_name = \Drupal::routeMatch()->getRouteName();
    return $this->getHelpText($route_name);
  }

  /**
   * {@inheritDoc}
   */
  public function blockAccess(AccountInterface $account) {
    $route_name = \Drupal::routeMatch()->getRouteName();
    if ($this->getHelpText($route_name)) {
      return AccessResult::allowed();
    }
    else {
      return AccessResult::forbidden();
    }
  }

  /**
   * {@inheritDoc}
   */
  public function getCacheContexts() {
    return ['route.name'];
  }

}
