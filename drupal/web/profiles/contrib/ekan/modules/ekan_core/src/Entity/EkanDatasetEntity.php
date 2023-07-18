<?php

namespace Drupal\ekan_core\Entity;

use Drupal\Component\Render\FormattableMarkup;
use Drupal\Core\Entity\EntityStorageInterface;
use Drupal\Core\Field\BaseFieldDefinition;
use Drupal\Core\Entity\EntityTypeInterface;
use Drupal\Core\Field\EntityReferenceFieldItemListInterface;
use Drupal\ekan_core\ComputedFields\EkanDatasetModifiedDate;
use Drupal\ekan_core\ComputedFields\EkanDatasetReleaseDate;
use Drupal\link\LinkItemInterface;
use Drupal\Core\Field\FieldStorageDefinitionInterface;

/**
 * Defines the Ekan Dataset entity.
 *
 * @ingroup ekan_core
 *
 * @ContentEntityType(
 *   id = "dataset",
 *   label = @Translation("Dataset"),
 *   handlers = {
 *     "view_builder" = "Drupal\Core\Entity\EntityViewBuilder",
 *     "views_data" = "Drupal\ekan_core\Entity\EkanEntityViewsData",
 *     "form" = {
 *      "default" = "Drupal\ekan_core\Entity\Form\EkanDatasetForm",
 *      "add" = "Drupal\ekan_core\Entity\Form\EkanDatasetForm",
 *      "edit" = "Drupal\ekan_core\Entity\Form\EkanDatasetForm",
 *      "delete" = "Drupal\ekan_core\Entity\Form\EkanEntityDeleteForm",
 *     },
 *     "access" = "\Drupal\ekan_core\Entity\Access\EkanDatasetAccessControlHandler",
 *     "query_access" = "\Drupal\entity\QueryAccess\QueryAccessHandler",
 *     "permission_provider" = "\Drupal\entity\EntityPermissionProvider",
 *   },
 *   base_table = "dataset",
 *   revision_table = "dataset_revision",
 *   translatable = FALSE,
 *   admin_permission = "administer dataset entities",
 *   entity_keys = {
 *     "id" = "id",
 *     "revision" = "vid",
 *     "uuid" = "uuid",
 *     "uid" = "uid",
 *     "label" = "title",
 *     "langcode" = "langcode",
 *     "published" = "status",
 *
 *   },
 *   revision_metadata_keys = {
 *     "revision_user" = "revision_user",
 *     "revision_created" = "revision_created",
 *     "revision_log_message" = "revision_log_message",
 *   },
 *  links = {
 *    "canonical" = "/dataset/{dataset}",
 *    "edit-form" = "/dataset/{dataset}/edit",
 *    "delete-form" = "/dataset/{dataset}/delete",
 *   },
 *   field_ui_base_route = "dataset.settings",
 * )
 */
class EkanDatasetEntity extends EkanEntityBase implements EkanEntityGroupSynchronisedInterface {

  use EkanEntityGroupSynchronised;

  /**
   * {@inheritDoc}
   */
  public function getGroups() {
    $items = $this->get('publisher');
    if ($items instanceof EntityReferenceFieldItemListInterface) {
      return $items->referencedEntities();
    }
    return [];
  }

  /**
   * {@inheritdoc}
   */
  public static function baseFieldDefinitions(EntityTypeInterface $entity_type) {
    /** @var \Drupal\Core\Field\BaseFieldDefinition[] $fields */
    $fields = parent::baseFieldDefinitions($entity_type);
    // Title.
    $fields['title'] = BaseFieldDefinition::create('string')
      ->setLabel(t('Title'))
      ->setRequired(TRUE)
      ->setSetting('max_length', 255)
      ->setDisplayOptions('view', [
        'label' => 'hidden',
        'type' => 'string',
        'weight' => -5,
      ])
      ->setDisplayOptions('form', [
        'type' => 'string_textfield',
        'weight' => -5,
      ])
      ->setDisplayConfigurable('form', TRUE);

    // Body.
    $fields['body'] = BaseFieldDefinition::create('text_long')
      ->setLabel(t('Description'))
      ->setDescription(t('Description should include any acknowledgements (eg. Donors) and specify if this is an official dataset'))
      ->setTranslatable(FALSE)
      ->setRevisionable(FALSE)
      ->setDisplayOptions('view', [
        'label' => 'hidden',
        'type' => 'text_default',
        'weight' => 1,
      ])
      ->setDisplayOptions('form', [
        'type' => 'text_textfield',
        'weight' => 1,
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    // Groups.
    $fields['publisher'] = BaseFieldDefinition::create('entity_reference')
      ->setRevisionable(FALSE)
      ->setTranslatable(FALSE)
      ->setRequired(TRUE)
      ->setCardinality(FieldStorageDefinitionInterface::CARDINALITY_UNLIMITED)
      ->setLabel(t('Groups'))
      ->setDescription(t('Users of the selected group(s) will have access to manage the dataset'))
      ->setSetting('target_type', 'group')
      ->setSetting('handler', 'ekan_publisher_memberships')
      ->setDisplayOptions('view', [
        'label' => 'inline',
        'type' => 'default_formatter',
      ])
      ->setDisplayOptions('form', [
        'type' => 'options_buttons',
        'weight' => 5,
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    // Topic.
    $fields['topic'] = BaseFieldDefinition::create('entity_reference')
      ->setRevisionable(FALSE)
      ->setTranslatable(FALSE)
      ->setRequired(FALSE)
      ->setCardinality(FieldStorageDefinitionInterface::CARDINALITY_UNLIMITED)
      ->setLabel(t('Topics'))
      ->setSetting('target_type', 'taxonomy_term')
      ->setSetting('handler', 'default')
      ->setSetting('handler_settings', ['target_bundles' => ['topics']])
      ->setDisplayOptions('view', [
        'label' => 'inline',
        'type' => 'default_formatter',
      ])
      ->setDisplayOptions('form', [
        'type' => 'entity_reference_autocomplete',
        'weight' => 5,
        'settings' => [
          'match_operator' => 'CONTAINS',
          'size' => '60',
          'autocomplete_type' => 'tags',
          'placeholder' => '',
        ],
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    // Tags.
    $fields['tags'] = BaseFieldDefinition::create('entity_reference')
      ->setRevisionable(FALSE)
      ->setTranslatable(FALSE)
      ->setRequired(FALSE)
      ->setCardinality(FieldStorageDefinitionInterface::CARDINALITY_UNLIMITED)
      ->setLabel(t('Tags'))
      ->setDescription(t('eg. economy, mental health, government'))
      ->setSetting('target_type', 'taxonomy_term')
      ->setSetting('handler', 'default')
      ->setSetting('handler_settings', [
        'target_bundles' => ['tags'],
        'auto_create' => TRUE,
      ])
      ->setDisplayOptions('view', [
        'label' => 'inline',
        'type' => 'default_formatter',
      ])
      ->setDisplayOptions('form', [
        'type' => 'entity_reference_autocomplete',
        'weight' => 5,
        'settings' => [
          'match_operator' => 'CONTAINS',
          'size' => '60',
          'autocomplete_type' => 'tags',
          'placeholder' => '',
        ],
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    // License.
    $license_link = '<a href="https://opendefinition.org/licenses/">www.opendefinition.org</a>';
    $fields['license'] = BaseFieldDefinition::create('string')
      ->setLabel(t('License'))
      ->setDescription('License definitions and additional information can be found at ' . $license_link)
      ->setRequired(FALSE)
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    // Author.
    $fields['author'] = BaseFieldDefinition::create('string')
      ->setLabel(t('Author'))
      ->setDescription(t('This is the author of the dataset.'))
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    // Spatial.
    $spatial_link = new FormattableMarkup('<a href="https://www.w3.org/TR/vocab-dcat/#Property:dataset_spatial" target="_blank">spatial/geographical coverage</a>', []);
    $fields['spatial'] = BaseFieldDefinition::create('geofield')
      ->setLabel(t('Spatial'))
      ->setDescription(t('Spatial coverage of the dataset. Will be rendered as GeoJSON. See DCAT @link for more info.', ['@link' => $spatial_link]))
      ->setDisplayOptions('view', [
        'type' => 'geofield_latlon',
        'weight' => 6,
      ])
      ->setDisplayOptions('form', [
        'type' => 'leaflet_widget_default',
        'weight' => 6,
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    // Spatial / Geographical Coverage Location.
    $fields['spatial_geographical_cover'] = BaseFieldDefinition::create('string')
      ->setLabel(t('Spatial / Geographical Coverage Location'))
      ->setDescription(t("Spatial location of the dataset. Could be Address, City, State, part of the world or other description. See DCAT spatial/geographical coverage for more info."))
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    // Frequency.
    $link = '<a href="https://www.w3.org/TR/vocab-dcat/#Property:dataset_frequency">DCAT frequency</a>';
    $temporal_coverage_link = '<a href="https://www.w3.org/TR/vocab-dcat/#Property:dataset_temporal">temporal coverage</a>';

    $fields['frequency'] = BaseFieldDefinition::create('list_string')
      ->setLabel(t('Frequency'))
      ->setDescription(t("The frequency with which dataset is published. See %link for more info.", ['%link' => $link]))
      ->setSetting('allowed_values_function', self::class . '::iso8601GuidanceFrequencyMap')
      ->setDisplayOptions('form', [
        'type' => 'options_select',
        'weight' => 7,
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    // Temporal Coverage.
    $fields['temporal_coverage'] = BaseFieldDefinition::create('daterange')
      ->setLabel(t('Temporal Coverage'))
      ->setSetting('datetime_type', 'allday')
      ->setDescription(t("The temporal period that the dataset covers. See DCAT %temporal_coverage_link for more info.", ['%temporal_coverage_link' => $temporal_coverage_link]))
      ->setDisplayOptions('view', [
        'type' => 'daterange_default',
        'weight' => 8,
      ])
      ->setDisplayOptions('form', [
        'type' => 'daterange_default',
        'weight' => 8,
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    // Granularity.
    $fields['granularity'] = BaseFieldDefinition::create('string')
      ->setLabel(t('Granularity'))
      ->setDescription('This is usually geographical or temporal but can also be other dimension e.g. Person can be used to describe granularity of a dataset about average income. See <a href="https://project-open-data.github.io/schema/#expanded-fields">DCAT Granularity</a> for more info.')
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    // Data Dictionary Type.
    $fields['data_dictionary_type'] = BaseFieldDefinition::create('string')
      ->setLabel(t('Data Dictionary Type'))
      ->setDescription(t('This is used to identify the media type (IANA Media Type also known as MIME Type) of the URL used for the dataset’s describedBy field. This should be specified if describedBy is not an HTML webpage.'))
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    // Data Dictionary .
    $link = t('<a href="https://project-open-data.github.io/schema/#common-core-required-if-applicable-fields" target="_blank">data dictionary</a>');
    $fields['data_dictionary'] = BaseFieldDefinition::create('text_long')
      ->setLabel(t('Data Dictionary'))
      ->setDescription(t('Provides some sort of description that helps understanding the data. This can be a URL to such a resource. See Project Open Data @link for more info.', ['@link' => $link]))
      ->setTranslatable(FALSE)
      ->setRevisionable(FALSE)
      ->setDisplayOptions('view', [
        'label' => 'inline',
        'type' => 'text_default',
        'weight' => 9,
      ])
      ->setDisplayOptions('form', [
        'type' => 'text_textfield',
        'weight' => 9,
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    // Contact Name.
    $fields['contact_name'] = BaseFieldDefinition::create('string')
      ->setLabel(t('Contact Name'))
      ->setDescription('Contact person’s name for the asset. See <a href="https://project-open-data.github.io/schema/#common-core-required-fields">Project Open Data</a> for more info. Name should be formatted as Last, First.')
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    // Contact Email.
    $fields['contact_email'] = BaseFieldDefinition::create('email')
      ->setLabel(t('Contact email'))
      ->setDescription('Contact person’s email address. See <a href="https://project-open-data.github.io/schema/#common-core-required-fields">Project Open Data</a> for more info.')
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    // Public Access Level.
    $fields['public_access_level'] = BaseFieldDefinition::create('list_string')
      ->setLabel(t('Public Access Level'))
      ->setDescription('The degree to which this dataset <em>could</em> be made publicly-available, regardless of whether it has been made available. See <a href="https://project-open-data.github.io/schema/#common-core-required-fields">Project Open Data</a> for more info.')
      ->setSetting('allowed_values', [
        'public' => 'Public',
        'private' => 'Private',
        'restricted' => 'Restricted',
      ])
      ->setDisplayOptions('form', [
        'type' => 'options_select',
        'weight' => 11,
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    // Rights.
    $fields['rights'] = BaseFieldDefinition::create('text_long')
      ->setLabel(t('Rights'))
      ->setDisplayOptions('view', [
        'type' => 'text_default',
        'weight' => 12,
      ])
      ->setDisplayOptions('form', [
        'type' => 'text_textfield',
        'weight' => 12,
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    // Homepage URL.
    $fields['landing_page'] = BaseFieldDefinition::create('link')
      ->setLabel(t('Homepage URL'))
      ->setDescription('This field is not intended for an agency’s homepage (e.g. www.agency.gov), but rather if a dataset has a human-friendly hub or landing page that users can be directed to for all resources tied to the dataset.')
      ->setRevisionable(TRUE)
      ->setRequired(FALSE)
      ->setSettings([
        'link_type' => LinkItemInterface::LINK_EXTERNAL,
        'title' => DRUPAL_DISABLED,
      ])
      ->setDisplayOptions('view', [
        'label' => 'inline',
        'type' => 'link',
        'weight' => 2,
      ])
      ->setDisplayOptions('form', [
        'type' => 'link',
        'weight' => 2,
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    // Conforms To.
    $fields['conforms_to'] = BaseFieldDefinition::create('link')
      ->setLabel(t('Data Standard'))
      ->setDescription('This is used to identify a standardized specification the dataset conforms to. If this is a technical specification associated with a particular serialization of a distribution, this should be specified with "conformsTo" at the distribution level. It’s recommended that this be a URI that serves as a unique identifier for the standard. The URI may or may not also be a URL that provides documentation of the specification. See <a href="https://project-open-data.cio.gov/v1.1/schema/#dataset-conformsTo">Data Standard at Project Open Data</a>.')
      ->setRevisionable(TRUE)
      ->setRequired(FALSE)
      ->setSettings([
        'link_type' => LinkItemInterface::LINK_EXTERNAL,
        'title' => DRUPAL_DISABLED,
      ])
      ->setDisplayOptions('view', [
        'label' => 'inline',
        'type' => 'link_default',
        'weight' => 2,
      ])
      ->setDisplayOptions('form', [
        'type' => 'link_default',
        'weight' => 2,
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    // Language.
    $fields['language'] = BaseFieldDefinition::create('list_string')
      ->setLabel(t('Language'))
      ->setDescription('This should adhere to the RFC 5646 standard. This language subtag lookup provides a good tool for checking and verifying language codes. A language tag is comprised of either one or two parts, the language subtag (such as en for English, sp for Spanish, wo for Wolof) and the regional subtag (such as US for United States, GB for Great Britain, MX for Mexico), separated by a hyphen. Regional subtags should only be provided when needed to distinguish a language tag from another one (such as American vs. British English).')
      ->setSetting('allowed_values_function', self::class . '::languageList')
      ->setDisplayOptions('form', [
        'type' => 'options_select',
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    // Additional Info.
    $fields['additional_info'] = BaseFieldDefinition::create('key_value')
      ->setLabel(t('Additional Info'))
      ->setRevisionable(TRUE)
      ->setRequired(FALSE)
      ->setCardinality(FieldStorageDefinitionInterface::CARDINALITY_UNLIMITED)
      ->setDisplayOptions('view', [
        'label' => 'inline',
        'type' => 'key_value_textfield',
      ])
      ->setDisplayOptions('form', [
        'type' => 'key_value_textfield',
        'weight' => 2,
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    // Related Content.
    $fields['related_content'] = BaseFieldDefinition::create('link')
      ->setLabel(t('Related Content'))
      ->setRevisionable(TRUE)
      ->setRequired(FALSE)
      ->setCardinality(FieldStorageDefinitionInterface::CARDINALITY_UNLIMITED)
      ->setDescription('An internal link or link to an outside resource that provides additional context to the dataset.')
      ->setSettings([
        'link_type' => LinkItemInterface::LINK_GENERIC,
        'title' => DRUPAL_OPTIONAL,
      ])
      ->setDisplayOptions('view', [
        'label' => 'inline',
        'type' => 'link_default',
        'weight' => 2,
      ])
      ->setDisplayOptions('form', [
        'type' => 'link_default',
        'weight' => 2,
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    // Is Part Of.
    $fields['is_part_of'] = BaseFieldDefinition::create('string')
      ->setLabel(t('Is Part Of'))
      ->setDisplayOptions('view', [
        'type' => 'text_default',
        'weight' => 10,
      ])
      ->setDisplayOptions('form', [
        'type' => 'text_textfield',
        'weight' => 10,
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    // POD Theme.
    $fields['pod_theme'] = BaseFieldDefinition::create('string')
      ->setCardinality(FieldStorageDefinitionInterface::CARDINALITY_UNLIMITED)
      ->setLabel(t('POD theme'))
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    // Orphan.
    $fields['orphan'] = BaseFieldDefinition::create('boolean')
      ->setLabel(t('Orphan'))
      ->setDisplayOptions('form', [
        'type' => 'boolean_checkbox',
        'weight' => 7,
      ])
      ->setDefaultValue(FALSE)
      ->setInitialValue(FALSE)
      ->setRevisionable(FALSE)
      ->setTranslatable(FALSE)
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    // Computed field for release date.
    $fields['release_date'] = BaseFieldDefinition::create('timestamp')
      ->setComputed(TRUE)
      ->setClass(EkanDatasetReleaseDate::class)
      ->setTranslatable(FALSE)
      ->setLabel('Release Date')
      ->setDisplayConfigurable('form', FALSE)
      ->setDisplayConfigurable('view', TRUE);

    // Computed field for release date.
    $fields['modified_date'] = BaseFieldDefinition::create('timestamp')
      ->setComputed(TRUE)
      ->setClass(EkanDatasetModifiedDate::class)
      ->setTranslatable(FALSE)
      ->setLabel('Modified')
      ->setDisplayConfigurable('form', FALSE)
      ->setDisplayConfigurable('view', TRUE);

    return $fields;
  }

  /**
   * Allowed values function for the language list.
   */
  public static function languageList() {
    return [
      "af-NA" => "Afrikaans (Namibia)",
      "af-ZA" => "Afrikaans (South Africa)",
      "af" => "Afrikaans",
      "ak-GH" => "Akan (Ghana)",
      "ak" => "Akan",
      "sq-AL" => "Albanian (Albania)",
      "sq" => "Albanian",
      "am-ET" => "Amharic (Ethiopia)",
      "am" => "Amharic",
      "ar-DZ" => "Arabic (Algeria)",
      "ar-BH" => "Arabic (Bahrain)",
      "ar-EG" => "Arabic (Egypt)",
      "ar-IQ" => "Arabic (Iraq)",
      "ar-JO" => "Arabic (Jordan)",
      "ar-KW" => "Arabic (Kuwait)",
      "ar-LB" => "Arabic (Lebanon)",
      "ar-LY" => "Arabic (Libya)",
      "ar-MA" => "Arabic (Morocco)",
      "ar-OM" => "Arabic (Oman)",
      "ar-QA" => "Arabic (Qatar)",
      "ar-SA" => "Arabic (Saudi Arabia)",
      "ar-SD" => "Arabic (Sudan)",
      "ar-SY" => "Arabic (Syria)",
      "ar-TN" => "Arabic (Tunisia)",
      "ar-AE" => "Arabic (United Arab Emirates)",
      "ar-YE" => "Arabic (Yemen)",
      "ar" => "Arabic",
      "hy-AM" => "Armenian (Armenia)",
      "hy" => "Armenian",
      "as-IN" => "Assamese (India)",
      "as" => "Assamese",
      "asa-TZ" => "Asu (Tanzania)",
      "asa" => "Asu",
      "az-Cyrl" => "Azerbaijani (Cyrillic)",
      "az-Cyrl-AZ" => "Azerbaijani (Cyrillic - Azerbaijan)",
      "az-Latn" => "Azerbaijani (Latin)",
      "az-Latn-AZ" => "Azerbaijani (Latin - Azerbaijan)",
      "az" => "Azerbaijani",
      "bm-ML" => "Bambara (Mali)",
      "bm" => "Bambara",
      "eu-ES" => "Basque (Spain)",
      "eu" => "Basque",
      "be-BY" => "Belarusian (Belarus)",
      "be" => "Belarusian",
      "bem-ZM" => "Bemba (Zambia)",
      "bem" => "Bemba",
      "bez-TZ" => "Bena (Tanzania)",
      "bez" => "Bena",
      "bn-BD" => "Bengali (Bangladesh)",
      "bn-IN" => "Bengali (India)",
      "bn" => "Bengali",
      "bs-BA" => "Bosnian (Bosnia and Herzegovina)",
      "bs" => "Bosnian",
      "bg-BG" => "Bulgarian (Bulgaria)",
      "bg" => "Bulgarian",
      "my-MM" => "Burmese (Myanmar [Burma])",
      "my" => "Burmese",
      "ca-ES" => "Catalan (Spain)",
      "ca" => "Catalan",
      "tzm-Latn" => "Central Morocco Tamazight (Latin)",
      "tzm-Latn-MA" => "Central Morocco Tamazight (Latin - Morocco)",
      "tzm" => "Central Morocco Tamazight",
      "chr-US" => "Cherokee (United States)",
      "chr" => "Cherokee",
      "cgg-UG" => "Chiga (Uganda)",
      "cgg" => "Chiga",
      "zh-Hans" => "Chinese (Simplified Han)",
      "zh-Hans-CN" => "Chinese (Simplified Han - China)",
      "zh-Hans-HK" => "Chinese (Simplified Han - Hong Kong SAR China)",
      "zh-Hans-MO" => "Chinese (Simplified Han - Macau SAR China)",
      "zh-Hans-SG" => "Chinese (Simplified Han - Singapore)",
      "zh-Hant" => "Chinese (Traditional Han)",
      "zh-Hant-HK" => "Chinese (Traditional Han - Hong Kong SAR China)",
      "zh-Hant-MO" => "Chinese (Traditional Han - Macau SAR China)",
      "zh-Hant-TW" => "Chinese (Traditional Han - Taiwan)",
      "zh" => "Chinese",
      "kw-GB" => "Cornish (United Kingdom)",
      "kw" => "Cornish",
      "hr-HR" => "Croatian (Croatia)",
      "hr" => "Croatian",
      "cs-CZ" => "Czech (Czech Republic)",
      "cs" => "Czech",
      "da-DK" => "Danish (Denmark)",
      "da" => "Danish",
      "nl-BE" => "Dutch (Belgium)",
      "nl-NL" => "Dutch (Netherlands)",
      "nl" => "Dutch",
      "ebu-KE" => "Embu (Kenya)",
      "ebu" => "Embu",
      "en-AS" => "English (American Samoa)",
      "en-AU" => "English (Australia)",
      "en-BE" => "English (Belgium)",
      "en-BZ" => "English (Belize)",
      "en-BW" => "English (Botswana)",
      "en-CA" => "English (Canada)",
      "en-GU" => "English (Guam)",
      "en-HK" => "English (Hong Kong SAR China)",
      "en-IN" => "English (India)",
      "en-IE" => "English (Ireland)",
      "en-JM" => "English (Jamaica)",
      "en-MT" => "English (Malta)",
      "en-MH" => "English (Marshall Islands)",
      "en-MU" => "English (Mauritius)",
      "en-NA" => "English (Namibia)",
      "en-NZ" => "English (New Zealand)",
      "en-MP" => "English (Northern Mariana Islands)",
      "en-PK" => "English (Pakistan)",
      "en-PH" => "English (Philippines)",
      "en-SG" => "English (Singapore)",
      "en-ZA" => "English (South Africa)",
      "en-TT" => "English (Trinidad and Tobago)",
      "en-UM" => "English (U.S. Minor Outlying Islands)",
      "en-VI" => "English (U.S. Virgin Islands)",
      "en-GB" => "English (United Kingdom)",
      "en-US" => "English (United States)",
      "en-ZW" => "English (Zimbabwe)",
      "en" => "English",
      "eo" => "Esperanto",
      "et-EE" => "Estonian (Estonia)",
      "et" => "Estonian",
      "ee-GH" => "Ewe (Ghana)",
      "ee-TG" => "Ewe (Togo)",
      "ee" => "Ewe",
      "fo-FO" => "Faroese (Faroe Islands)",
      "fo" => "Faroese",
      "fil-PH" => "Filipino (Philippines)",
      "fil" => "Filipino",
      "fi-FI" => "Finnish (Finland)",
      "fi" => "Finnish",
      "fr-BE" => "French (Belgium)",
      "fr-BJ" => "French (Benin)",
      "fr-BF" => "French (Burkina Faso)",
      "fr-BI" => "French (Burundi)",
      "fr-CM" => "French (Cameroon)",
      "fr-CA" => "French (Canada)",
      "fr-CF" => "French (Central African Republic)",
      "fr-TD" => "French (Chad)",
      "fr-KM" => "French (Comoros)",
      "fr-CG" => "French (Congo - Brazzaville)",
      "fr-CD" => "French (Congo - Kinshasa)",
      "fr-CI" => "French (Côte d’Ivoire)",
      "fr-DJ" => "French (Djibouti)",
      "fr-GQ" => "French (Equatorial Guinea)",
      "fr-FR" => "French (France)",
      "fr-GA" => "French (Gabon)",
      "fr-GP" => "French (Guadeloupe)",
      "fr-GN" => "French (Guinea)",
      "fr-LU" => "French (Luxembourg)",
      "fr-MG" => "French (Madagascar)",
      "fr-ML" => "French (Mali)",
      "fr-MQ" => "French (Martinique)",
      "fr-MC" => "French (Monaco)",
      "fr-NE" => "French (Niger)",
      "fr-RW" => "French (Rwanda)",
      "fr-RE" => "French (Réunion)",
      "fr-BL" => "French (Saint Barthélemy)",
      "fr-MF" => "French (Saint Martin)",
      "fr-SN" => "French (Senegal)",
      "fr-CH" => "French (Switzerland)",
      "fr-TG" => "French (Togo)",
      "fr" => "French",
      "ff-SN" => "Fulah (Senegal)",
      "ff" => "Fulah",
      "gl-ES" => "Galician (Spain)",
      "gl" => "Galician",
      "lg-UG" => "Ganda (Uganda)",
      "lg" => "Ganda",
      "ka-GE" => "Georgian (Georgia)",
      "ka" => "Georgian",
      "de-AT" => "German (Austria)",
      "de-BE" => "German (Belgium)",
      "de-DE" => "German (Germany)",
      "de-LI" => "German (Liechtenstein)",
      "de-LU" => "German (Luxembourg)",
      "de-CH" => "German (Switzerland)",
      "de" => "German",
      "el-CY" => "Greek (Cyprus)",
      "el-GR" => "Greek (Greece)",
      "el" => "Greek",
      "gu-IN" => "Gujarati (India)",
      "gu" => "Gujarati",
      "guz-KE" => "Gusii (Kenya)",
      "guz" => "Gusii",
      "ha-Latn" => "Hausa (Latin)",
      "ha-Latn-GH" => "Hausa (Latin - Ghana)",
      "ha-Latn-NE" => "Hausa (Latin - Niger)",
      "ha-Latn-NG" => "Hausa (Latin - Nigeria)",
      "ha" => "Hausa",
      "haw-US" => "Hawaiian (United States)",
      "haw" => "Hawaiian",
      "he-IL" => "Hebrew (Israel)",
      "he" => "Hebrew",
      "hi-IN" => "Hindi (India)",
      "hi" => "Hindi",
      "hu-HU" => "Hungarian (Hungary)",
      "hu" => "Hungarian",
      "is-IS" => "Icelandic (Iceland)",
      "is" => "Icelandic",
      "ig-NG" => "Igbo (Nigeria)",
      "ig" => "Igbo",
      "id-ID" => "Indonesian (Indonesia)",
      "id" => "Indonesian",
      "ga-IE" => "Irish (Ireland)",
      "ga" => "Irish",
      "it-IT" => "Italian (Italy)",
      "it-CH" => "Italian (Switzerland)",
      "it" => "Italian",
      "ja-JP" => "Japanese (Japan)",
      "ja" => "Japanese",
      "kea-CV" => "Kabuverdianu (Cape Verde)",
      "kea" => "Kabuverdianu",
      "kab-DZ" => "Kabyle (Algeria)",
      "kab" => "Kabyle",
      "kl-GL" => "Kalaallisut (Greenland)",
      "kl" => "Kalaallisut",
      "kln-KE" => "Kalenjin (Kenya)",
      "kln" => "Kalenjin",
      "kam-KE" => "Kamba (Kenya)",
      "kam" => "Kamba",
      "kn-IN" => "Kannada (India)",
      "kn" => "Kannada",
      "kk-Cyrl" => "Kazakh (Cyrillic)",
      "kk-Cyrl-KZ" => "Kazakh (Cyrillic - Kazakhstan)",
      "kk" => "Kazakh",
      "km-KH" => "Khmer (Cambodia)",
      "km" => "Khmer",
      "ki-KE" => "Kikuyu (Kenya)",
      "ki" => "Kikuyu",
      "rw-RW" => "Kinyarwanda (Rwanda)",
      "rw" => "Kinyarwanda",
      "kok-IN" => "Konkani (India)",
      "kok" => "Konkani",
      "ko-KR" => "Korean (South Korea)",
      "ko" => "Korean",
      "khq-ML" => "Koyra Chiini (Mali)",
      "khq" => "Koyra Chiini",
      "ses-ML" => "Koyraboro Senni (Mali)",
      "ses" => "Koyraboro Senni",
      "lag-TZ" => "Langi (Tanzania)",
      "lag" => "Langi",
      "lv-LV" => "Latvian (Latvia)",
      "lv" => "Latvian",
      "lt-LT" => "Lithuanian (Lithuania)",
      "lt" => "Lithuanian",
      "luo-KE" => "Luo (Kenya)",
      "luo" => "Luo",
      "luy-KE" => "Luyia (Kenya)",
      "luy" => "Luyia",
      "mk-MK" => "Macedonian (Macedonia)",
      "mk" => "Macedonian",
      "jmc-TZ" => "Machame (Tanzania)",
      "jmc" => "Machame",
      "kde-TZ" => "Makonde (Tanzania)",
      "kde" => "Makonde",
      "mg-MG" => "Malagasy (Madagascar)",
      "mg" => "Malagasy",
      "ms-BN" => "Malay (Brunei)",
      "ms-MY" => "Malay (Malaysia)",
      "ms" => "Malay",
      "ml-IN" => "Malayalam (India)",
      "ml" => "Malayalam",
      "mt-MT" => "Maltese (Malta)",
      "mt" => "Maltese",
      "gv-GB" => "Manx (United Kingdom)",
      "gv" => "Manx",
      "mr-IN" => "Marathi (India)",
      "mr" => "Marathi",
      "mas-KE" => "Masai (Kenya)",
      "mas-TZ" => "Masai (Tanzania)",
      "mas" => "Masai",
      "mer-KE" => "Meru (Kenya)",
      "mer" => "Meru",
      "mfe-MU" => "Morisyen (Mauritius)",
      "mfe" => "Morisyen",
      "naq-NA" => "Nama (Namibia)",
      "naq" => "Nama",
      "ne-IN" => "Nepali (India)",
      "ne-NP" => "Nepali (Nepal)",
      "ne" => "Nepali",
      "nd-ZW" => "North Ndebele (Zimbabwe)",
      "nd" => "North Ndebele",
      "nb-NO" => "Norwegian Bokmål (Norway)",
      "nb" => "Norwegian Bokmål",
      "nn-NO" => "Norwegian Nynorsk (Norway)",
      "nn" => "Norwegian Nynorsk",
      "nyn-UG" => "Nyankole (Uganda)",
      "nyn" => "Nyankole",
      "or-IN" => "Oriya (India)",
      "or" => "Oriya",
      "om-ET" => "Oromo (Ethiopia)",
      "om-KE" => "Oromo (Kenya)",
      "om" => "Oromo",
      "ps-AF" => "Pashto (Afghanistan)",
      "ps" => "Pashto",
      "fa-AF" => "Persian (Afghanistan)",
      "fa-IR" => "Persian (Iran)",
      "fa" => "Persian",
      "pl-PL" => "Polish (Poland)",
      "pl" => "Polish",
      "pt-BR" => "Portuguese (Brazil)",
      "pt-GW" => "Portuguese (Guinea-Bissau)",
      "pt-MZ" => "Portuguese (Mozambique)",
      "pt-PT" => "Portuguese (Portugal)",
      "pt" => "Portuguese",
      "pa-Arab" => "Punjabi (Arabic)",
      "pa-Arab-PK" => "Punjabi (Arabic - Pakistan)",
      "pa-Guru" => "Punjabi (Gurmukhi)",
      "pa-Guru-IN" => "Punjabi (Gurmukhi - India)",
      "pa" => "Punjabi",
      "ro-MD" => "Romanian (Moldova)",
      "ro-RO" => "Romanian (Romania)",
      "ro" => "Romanian",
      "rm-CH" => "Romansh (Switzerland)",
      "rm" => "Romansh",
      "rof-TZ" => "Rombo (Tanzania)",
      "rof" => "Rombo",
      "ru-MD" => "Russian (Moldova)",
      "ru-RU" => "Russian (Russia)",
      "ru-UA" => "Russian (Ukraine)",
      "ru" => "Russian",
      "rwk-TZ" => "Rwa (Tanzania)",
      "rwk" => "Rwa",
      "saq-KE" => "Samburu (Kenya)",
      "saq" => "Samburu",
      "sg-CF" => "Sango (Central African Republic)",
      "sg" => "Sango",
      "seh-MZ" => "Sena (Mozambique)",
      "seh" => "Sena",
      "sr-Cyrl" => "Serbian (Cyrillic)",
      "sr-Cyrl-BA" => "Serbian (Cyrillic - Bosnia and Herzegovina)",
      "sr-Cyrl-ME" => "Serbian (Cyrillic - Montenegro)",
      "sr-Cyrl-RS" => "Serbian (Cyrillic - Serbia)",
      "sr-Latn" => "Serbian (Latin)",
      "sr-Latn-BA" => "Serbian (Latin - Bosnia and Herzegovina)",
      "sr-Latn-ME" => "Serbian (Latin - Montenegro)",
      "sr-Latn-RS" => "Serbian (Latin - Serbia)",
      "sr" => "Serbian",
      "sn-ZW" => "Shona (Zimbabwe)",
      "sn" => "Shona",
      "ii-CN" => "Sichuan Yi (China)",
      "ii" => "Sichuan Yi",
      "si-LK" => "Sinhala (Sri Lanka)",
      "si" => "Sinhala",
      "sk-SK" => "Slovak (Slovakia)",
      "sk" => "Slovak",
      "sl-SI" => "Slovenian (Slovenia)",
      "sl" => "Slovenian",
      "xog-UG" => "Soga (Uganda)",
      "xog" => "Soga",
      "so-DJ" => "Somali (Djibouti)",
      "so-ET" => "Somali (Ethiopia)",
      "so-KE" => "Somali (Kenya)",
      "so-SO" => "Somali (Somalia)",
      "so" => "Somali",
      "es-AR" => "Spanish (Argentina)",
      "es-BO" => "Spanish (Bolivia)",
      "es-CL" => "Spanish (Chile)",
      "es-CO" => "Spanish (Colombia)",
      "es-CR" => "Spanish (Costa Rica)",
      "es-DO" => "Spanish (Dominican Republic)",
      "es-EC" => "Spanish (Ecuador)",
      "es-SV" => "Spanish (El Salvador)",
      "es-GQ" => "Spanish (Equatorial Guinea)",
      "es-GT" => "Spanish (Guatemala)",
      "es-HN" => "Spanish (Honduras)",
      "es-419" => "Spanish (Latin America)",
      "es-MX" => "Spanish (Mexico)",
      "es-NI" => "Spanish (Nicaragua)",
      "es-PA" => "Spanish (Panama)",
      "es-PY" => "Spanish (Paraguay)",
      "es-PE" => "Spanish (Peru)",
      "es-PR" => "Spanish (Puerto Rico)",
      "es-ES" => "Spanish (Spain)",
      "es-US" => "Spanish (United States)",
      "es-UY" => "Spanish (Uruguay)",
      "es-VE" => "Spanish (Venezuela)",
      "es" => "Spanish",
      "sw-KE" => "Swahili (Kenya)",
      "sw-TZ" => "Swahili (Tanzania)",
      "sw" => "Swahili",
      "sv-FI" => "Swedish (Finland)",
      "sv-SE" => "Swedish (Sweden)",
      "sv" => "Swedish",
      "gsw-CH" => "Swiss German (Switzerland)",
      "gsw" => "Swiss German",
      "shi-Latn" => "Tachelhit (Latin)",
      "shi-Latn-MA" => "Tachelhit (Latin - Morocco)",
      "shi-Tfng" => "Tachelhit (Tifinagh)",
      "shi-Tfng-MA" => "Tachelhit (Tifinagh - Morocco)",
      "shi" => "Tachelhit",
      "dav-KE" => "Taita (Kenya)",
      "dav" => "Taita",
      "ta-IN" => "Tamil (India)",
      "ta-LK" => "Tamil (Sri Lanka)",
      "ta" => "Tamil",
      "te-IN" => "Telugu (India)",
      "te" => "Telugu",
      "teo-KE" => "Teso (Kenya)",
      "teo-UG" => "Teso (Uganda)",
      "teo" => "Teso",
      "th-TH" => "Thai (Thailand)",
      "th" => "Thai",
      "bo-CN" => "Tibetan (China)",
      "bo-IN" => "Tibetan (India)",
      "bo" => "Tibetan",
      "ti-ER" => "Tigrinya (Eritrea)",
      "ti-ET" => "Tigrinya (Ethiopia)",
      "ti" => "Tigrinya",
      "to-TO" => "Tonga (Tonga)",
      "to" => "Tonga",
      "tr-TR" => "Turkish (Turkey)",
      "tr" => "Turkish",
      "uk-UA" => "Ukrainian (Ukraine)",
      "uk" => "Ukrainian",
      "ur-IN" => "Urdu (India)",
      "ur-PK" => "Urdu (Pakistan)",
      "ur" => "Urdu",
      "uz-Arab" => "Uzbek (Arabic)",
      "uz-Arab-AF" => "Uzbek (Arabic - Afghanistan)",
      "uz-Cyrl" => "Uzbek (Cyrillic)",
      "uz-Cyrl-UZ" => "Uzbek (Cyrillic - Uzbekistan)",
      "uz-Latn" => "Uzbek (Latin)",
      "uz-Latn-UZ" => "Uzbek (Latin - Uzbekistan)",
      "uz" => "Uzbek",
      "vi-VN" => "Vietnamese (Vietnam)",
      "vi" => "Vietnamese",
      "vun-TZ" => "Vunjo (Tanzania)",
      "vun" => "Vunjo",
      "cy-GB" => "Welsh (United Kingdom)",
      "cy" => "Welsh",
      "yo-NG" => "Yoruba (Nigeria)",
      "yo" => "Yoruba",
      "zu-ZA" => "Zulu (South Africa)",
      "zu" => "Zulu",
    ];
  }

  /**
   * Allowed values for the frequency field.
   */
  public static function iso8601GuidanceFrequencyMap() {
    return [
      'R/PT1H' => t('Hourly'),
      'R/P1D' => t('Daily'),
      'R/P1W' => t('Weekly'),
      'R/P1M' => t('Monthly'),
      'R/P1Y' => t('Annually'),
      'R/PT1S' => t('Continuously'),
      'irregular' => t('Irregularly'),
      'R/P10Y' => t('Decennial'),
      'R/P4Y' => t('Quadrennial'),
      'R/P2M' => t('Bimonthly'),
      'R/P0.5M' => t('Semimonthly'),
      'R/P3.5D' => t('Semiweekly'),
      'R/P2W' => t('Biweekly'),
      'R/P0.5W' => t('Biweekly'),
      'R/P6M' => t('Semiannual'),
      'R/P2Y' => t('Biennial'),
      'R/P3Y' => t('Triennial'),
      'R/P0.33W' => t('Three times a week'),
      'R/P0.33M' => t('Three times a month'),
      'R/P4M' => t('Three times a year'),
      'R/P3M' => t('Quarterly'),
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function delete() {
    // Remove this dataset from resources so their group memberships are also
    // synchronised via postSave.
    $resource_storage = \Drupal::entityTypeManager()->getStorage('resource');
    /** @var EkanResourceEntity $resource */
    foreach ($resource_storage->loadByProperties(['dataset_ref' => $this->id()]) as $resource) {
      $updated_datasets = [];
      foreach ($resource->get('dataset_ref')->referencedEntities() as $dataset) {
        if ($dataset->id() != $this->id()) {
          $updated_datasets[] = $dataset;
        }
      }
      $resource->set('dataset_ref', $updated_datasets);
      $resource->save();
    }

    parent::delete();
  }

  /**
   * {@inheritdoc}
   */
  public function postSave(EntityStorageInterface $storage, $update = TRUE) {
    parent::postSave($storage, $update);

    // Ensure this dataset is in the appropriate group.
    $this->groupSynchronise();

    // All resources which reference this dataset also need to be in the
    // appropriate group.
    $resource_storage = \Drupal::entityTypeManager()->getStorage('resource');
    /** @var EkanResourceEntity $resource */
    foreach ($resource_storage->loadByProperties(['dataset_ref' => $this->id()]) as $resource) {
      $resource->groupSynchronise();
    }
  }

}
