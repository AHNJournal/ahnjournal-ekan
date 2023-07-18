<?php

namespace Drupal\ekan_core\Service;

/**
 * Service class for licenses.
 */
class EkanLicenseHandler {

  /**
   * Return the license array.
   */
  public function getLicenseOptions() {
    return [
      "cc-by" => [
        "label" => t("Creative Commons Attribution"),
        "uri" => "https://creativecommons.org/licenses/by/4.0/",
      ],
      "cc-by-sa" => [
        "label" => t("Creative Commons Attribution Share-Alike"),
        "uri" => "https://creativecommons.org/licenses/by-sa/4.0/",
      ],
      "cc-zero" => [
        "label" => t("Creative Commons CCZero"),
        "uri" => "https://creativecommons.org/publicdomain/zero/1.0/",
      ],
      "cc-nc"  => [
        "label" => t("Creative Commons Non-Commercial (2.5)"),
        "uri" => "https://creativecommons.org/licenses/by-nc/2.5/",
      ],
      "cc-by-nc-nd" => [
        "label" => t("Attribution NonCommercial NoDerivatives 4.0 International"),
        "uri" => "https://creativecommons.org/licenses/by-nc-nd/4.0/",
      ],
      "gfdl" => [
        "label" => t("GNU Free Documentation License"),
        "uri" => "https://www.gnu.org/licenses/fdl.html",
      ],
      "odc-by" => [
        "label" => t("Open Data Commons Attribution License"),
        "uri" => "https://opendatacommons.org/licenses/by/1.0/",
      ],
      "odc-odbl" => [
        "label" => t("Open Data Commons Open Database License (ODbL)"),
        "uri" => "https://opendatacommons.org/licenses/odbl/1.0/",
      ],
      "odc-pddl" => [
        "label" => t("Open Data Commons Public Domain Dedication and Licence (PDDL)"),
        "uri" => "http://opendefinition.org/licenses/odc-pddl/",
      ],
      "uk-ogl" => [
        "label" => t("UK Open Government Licence (OGL)"),
        "uri" => 'https://www.nationalarchives.gov.uk/doc/open-government-licence/version/2/',
      ],
      "other-at" => [
        "label" => t("Other (Attribution)"),
      ],
      "other-nc" => [
        "label" => t("Other (Non-Commercial)"),
      ],
      "other-closed" => [
        "label" => t("Other (Not Open)"),
      ],
      "other-open" => [
        "label" => t("Other (Open)"),
      ],
      "other-pd" => [
        "label" => t("Other (Public Domain)"),
      ],
      "notspecified" => [
        "label" => t("License Not Specified"),
      ],
    ];
  }

  /**
   * Return the license array.
   */
  public function getLicenseFromMachineName($machineName) {
    $licenses = $this->getLicenseOptions();
    return $licenses[$machineName]['uri'];
  }

  /**
   * Return the license array.
   */
  public function getLicenseFromUri($uri) {
    $licenses = $this->getLicenseOptions();
    foreach ($licenses as $key => $license) {
      if ($license['uri'] == $uri) {
        return $key;
      }
    }
    return NULL;
  }

}
