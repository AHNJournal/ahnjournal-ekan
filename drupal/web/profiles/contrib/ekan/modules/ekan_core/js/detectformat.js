(function ($, Drupal) {
    Drupal.behaviors.ekanDetectFormat = {
        attach: function (context, settings) {
            $(context).find('input[type="file"]').once('ekan-detect-format').on('change.autoFileUpload', function(event) {
                mimeType = $(event.target.files)[0].type;
                var resourceFormats = drupalSettings.resourceFormats;

                // Map the mime type to a known format.
                for (i = 0; i < resourceFormats.length; i++) {
                   var name = [resourceFormats[i].name];
                    if (resourceFormats[i].mime == mimeType) {
                        $('input[data-drupal-selector="edit-resource-format-0-target-id"]').val(resourceFormats[i].name + " (" + resourceFormats[i].id + ")");
                    }
                     else if ($.inArray($(this).val().split('.').pop().toLowerCase(), name) > -1) {
                        $('input[data-drupal-selector="edit-resource-format-0-target-id"]').val(resourceFormats[i].name + " (" + resourceFormats[i].id + ")");
                    }
                }
            });
        }
    };
})(jQuery, Drupal);
