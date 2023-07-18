<?php

namespace Drupal\ekan_core\Controller;

use Drupal\Component\Utility\UrlHelper;
use Drupal\Core\Access\AccessResult;
use Drupal\Core\Routing\TrustedRedirectResponse;
use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Session\AccountInterface;
use Drupal\ekan_core\Entity\EkanResourceEntity;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Drupal\file\Entity\File;
use Drupal\Core\Url;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Handles the sources of resource such as download file or api link.
 */
class ResourceSource extends ControllerBase {

  /**
   * Download file.
   *
   * @param \Drupal\ekan_core\Entity\EkanResourceEntity $resource
   *   The resource entity.
   *
   * @return \Symfony\Component\HttpFoundation\BinaryFileResponse|\Drupal\Core\Routing\TrustedRedirectResponse
   *   Downloads the file.
   *
   * @throws \Drupal\Core\TypedData\Exception\MissingDataException
   */
  public function downloadFile(EkanResourceEntity $resource) {
    $fid = $resource->get('upload')->target_id;
    if (!$fid) {
      $fid = $resource->get('link_remote_file')->target_id;
    }

    if ($fid) {
      $file = File::load($fid);
      $uri = $file->getFileUri();

      if (UrlHelper::isExternal($uri)) {
        // Most likely from link_remote_file.
        return new TrustedRedirectResponse($uri);
      }
      else {

        if (!is_file($uri)) {
          throw new NotFoundHttpException();
        }

        // Most likely from upload.
        $headers = [
          'Content-Type' => $file->getMimeType(),
          'Content-Description' => 'File Download',
          'Content-Disposition' => 'attachment; filename=' . $file->label(),
        ];

        return new BinaryFileResponse($uri, 200, $headers, TRUE);
      }
    }

    throw new NotFoundHttpException();
  }

  /**
   * The _custom_access callback for the special resource download route.
   *
   * @param \Drupal\Core\Session\AccountInterface $account
   *   The user we're checking the access for.
   * @param \Drupal\ekan_core\Entity\EkanResourceEntity $resource
   *   The resource the file is attached to.
   *
   * @return \Drupal\Core\Access\AccessResultInterface
   *   The access result.
   */
  public static function downloadFileAccess(AccountInterface $account, EkanResourceEntity $resource) {
    $fid = $resource->get('upload')->target_id;
    if (!$fid) {
      $fid = $resource->get('link_remote_file')->target_id;
    }

    if ($fid) {
      /** @var \Drupal\file\FileInterface $file */
      $file = File::load($fid);
      return $file->access('download', $account, TRUE);
    }

    return AccessResult::forbidden();
  }

  /**
   * External api/website link.
   *
   * @param \Drupal\ekan_core\Entity\EkanResourceEntity $resource
   *   The resource entity.
   *
   * @return \Drupal\Core\Routing\TrustedRedirectResponse
   *   Returns the redirect link.
   */
  public function apiLink(EkanResourceEntity $resource) {
    $api_link = $resource->get('link_api')->uri;
    $remote_link = $resource->get('link_remote_file')->target_id;
    if ($api_link) {
      return new TrustedRedirectResponse($api_link);
    }
    elseif ($remote_link) {
      $file = File::load($remote_link);
      if ($file->uri->value) {
        return new TrustedRedirectResponse($file->uri->value);
      }
    }

    throw new NotFoundHttpException();
  }

  /**
   * External api/website link.
   *
   * @param \Drupal\ekan_core\Entity\EkanResourceEntity $resource
   *   The resource entity.
   *
   * @return \Symfony\Component\HttpFoundation\RedirectResponse
   *   returns the response to linked dataset.
   */
  public function resourceDataset(EkanResourceEntity $resource) {
    $dataset = $resource->get('dataset_ref')->target_id;
    if ($dataset) {
      return new RedirectResponse(Url::fromRoute('entity.dataset.canonical', ['dataset' => $dataset])->toString());
    }

    throw new NotFoundHttpException();
  }

}
