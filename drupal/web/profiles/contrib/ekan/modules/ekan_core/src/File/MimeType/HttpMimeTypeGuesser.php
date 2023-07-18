<?php

namespace Drupal\ekan_core\File\MimeType;

use Drupal\Component\Utility\UrlHelper;
use Drupal\Core\File\FileSystemInterface;
use GuzzleHttp\ClientInterface;
use GuzzleHttp\Exception\ClientException;
use GuzzleHttp\Exception\ServerException;
use Symfony\Component\Mime\MimeTypeGuesserInterface;

/**
 * Makes possible to guess the MIME type of a remote file.
 */
class HttpMimeTypeGuesser implements MimeTypeGuesserInterface {

  /**
   * The HTTP client.
   *
   * @var \GuzzleHttp\ClientInterface
   */
  protected $httpClient;

  /**
   * The file system.
   *
   * @var \Drupal\Core\File\FileSystemInterface
   */
  protected $fileSystem;

  /**
   * The extension guesser.
   *
   * @var \Symfony\Component\HttpFoundation\File\MimeType\MimeTypeGuesserInterface
   */
  protected $extensionGuesser;

  /**
   * Sets the HTTP client.
   *
   * @param \GuzzleHttp\ClientInterface $httpClient
   *   An HTTP client.
   */
  public function setHttpClient(ClientInterface $httpClient) {
    $this->httpClient = $httpClient;
  }

  /**
   * Returns the HTTP client.
   *
   * @return \GuzzleHttp\ClientInterface
   *   Returns the client interface.
   */
  public function getHttpClient() {
    if (!isset($this->httpClient)) {
      $this->httpClient = \Drupal::httpClient();
    }
    return $this->httpClient;
  }

  /**
   * Perform a HEAD/GET request looking for a specific header.
   *
   * If the header was found in the HEAD request, then the HEAD response is
   * returned. Otherwise the GET request response is returned (without checking
   * if the header was found).
   *
   * @param string $uri
   *   The uri string.
   * @param string $header
   *   Case-insensitive header field name.
   * @param array $options
   *   Other options.
   *
   * @return \Psr\Http\Message\ResponseInterface
   *   The HTTP response object.
   *
   * @throws \GuzzleHttp\Exception\GuzzleException
   */
  public function requestTryHeadLookingForHeader($uri, $header, array $options = []) {
    try {
      $response = $this->getHttpClient()->request('HEAD', $uri, $options);
      if ($response->hasHeader($header)) {
        return $response;
      }
    }
    catch (ClientException $exception) {
      // Do nothing, try a GET request instead.
    }
    catch (ServerException $exception) {
      // Do nothing, try a GET request instead.
    }

    return $this->getHttpClient()->request('GET', $uri, $options);
  }

  /**
   * Constructs a new HttpMimeTypeGuesser.
   *
   * @param \Drupal\Core\File\FileSystemInterface $file_system
   *   The file system.
   * @param \Symfony\Component\HttpFoundation\File\MimeType\MimeTypeGuesserInterface $extension_guesser
   *   The extension guesser.
   */
  public function __construct(FileSystemInterface $file_system, MimeTypeGuesserInterface $extension_guesser) {
    $this->fileSystem = $file_system;
    $this->extensionGuesser = $extension_guesser;
  }

  /**
   * {@inheritdoc}
   */
  public function guessMimeType(string $path): ?string {
    // Ignore non-external URLs.
    if (!UrlHelper::isExternal($path)) {
      return NULL;
    }

    // Attempt to parse out the mime type if the URL contains a filename.
    if ($filename = $this->parseFileNameFromUrl($path)) {
      $mimetype = $this->extensionGuesser->guessMimeType($filename);
      if ($mimetype != 'application/octet-stream') {
        // Only return the guessed mime type if it found a valid match
        // instead of returning the default mime type.
        return $mimetype;
      }
    }

    try {
      $response = $this->requestTryHeadLookingForHeader($path, 'Content-Type');
      if ($response->hasHeader('Content-Type')) {
        return $response->getHeaderLine('Content-Type');
      }
    }
    catch (\Exception $exception) {
      watchdog_exception('ekan_core', $exception);
    }

    return NULL;
  }

  /**
   * Parse a file name from a URI.
   *
   * This also requires the filename to have an extension.
   *
   * @param string $uri
   *   The URI.
   *
   * @return string|false
   *   The filename if it could be parsed from the URI, or FALSE otherwise.
   */
  public function parseFileNameFromUrl($uri) {
    // Extract the path part from the URL, ignoring query strings or fragments.
    if ($path = parse_url($uri, PHP_URL_PATH)) {
      $filename = $this->fileSystem->basename($path);
      // Filename must contain a period in order to find a valid extension.
      // If the filename does not contain an extension, then guess() will
      // always return the default 'application/octet-stream' value.
      if (strpos($filename, '.') > 0) {
        return $filename;
      }
    }

    return FALSE;
  }

  /**
   * {@inheritdoc}
   */
  public function isGuesserSupported(): bool {
    return TRUE;
  }

}
