(function ($, Drupal) {
  Drupal.behaviors.ekan_detect_geojson = {
    attach: function (context, settings) {
      $(context).find('input[type="file"]').once('ekan_detect_geojson').on('change.autoFileUpload', function(event) {
        mimeType = $(event.target.files)[0].type;
        var fileExtension = ['geojson'];
        if ($.inArray($(this).val().split('.').pop().toLowerCase(), fileExtension) > -1) {
          $('#vis-input-geojson_map').prop('checked', true);
          // Also remove style "display=none" added with form #states.
          $('#edit-visualisation-visual-type-geojson-map-details').removeAttr('style');
        }
      });
    }
  };
})(jQuery, Drupal);