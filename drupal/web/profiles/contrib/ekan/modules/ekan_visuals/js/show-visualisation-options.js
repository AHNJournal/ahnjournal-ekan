(function($, Drupal, drupalSettings) {
  Drupal.behaviors.show_visualisation_options = {
    attach: function (context, settings) {
      $(function () {
        showVisuals(); // call it on load.
      });
      var selector = document.querySelector('#edit-resource-format-0-target-id');
      selector.addEventListener('ready', showVisuals);
      selector.addEventListener('focus', showVisuals);
      selector.addEventListener('change', showVisuals);
      selector.addEventListener('keyup', showVisuals);
    }
  };
  function showVisuals() {
    var resourceFormats = drupalSettings.ekan_visuals.resource_formats;
    var pluginIds = drupalSettings.ekan_visuals.plugin_ids;
    var selectedFormat = $('#edit-resource-format-0-target-id').val().toString();
    selectedFormat = selectedFormat.replace(/[\s\(\d*\)]/g, "");
    selectedFormat = selectedFormat.replace(' ', '-');
    for (j = 0; j < pluginIds.length; j++) {
      var element = document.querySelector('#vis-input-' + pluginIds[j]);
      if (element){
        var classList = document.querySelector('#vis-input-' + pluginIds[j]).className.split(/\s+/);
        for (i = 0; i < resourceFormats.length; i++) {
          var str = resourceFormats[i].name;
          str = str.replace(/\W+(?!$)/g, '-').toLowerCase();
          str = str.replace(/\W$/, '').toLowerCase();
          var className = 'visualisation-' + str;
          if (selectedFormat == resourceFormats[i].name) {
            if (jQuery.inArray(className, classList) > -1) {
              $('.' + className).removeAttr('disabled');
            }
          }
          else {
            if (jQuery.inArray(className, classList) == -1) {
              $('.' + className).attr('disabled', 'true');
            }
          }
        }
      }
    }
  }
})(jQuery, Drupal, drupalSettings);
