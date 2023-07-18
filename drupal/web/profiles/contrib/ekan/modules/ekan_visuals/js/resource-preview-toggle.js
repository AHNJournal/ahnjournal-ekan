(function($, Drupal, drupalSettings) {
  Drupal.behaviors.preview_toggle = {
    id: {},
    attach: function (context, settings) {
      // Based on prepared DOM, initialize echarts instance.
      $.each(settings.resource_view.resource_ids, function(key, id) {
        var button = $('.preview-btn-view-vis-resource-' + id);
        // We have to load the visualisation on page first for charts and maps
        // js to work. Once loaded we can trigger the toggle action on preview
        // button to hide the visualisation by default.

        // lets trigger "click" event on page load to hide visualisation.
        $("document").ready(function() {
          setTimeout(function() {
            $('.preview-btn-view-vis-resource-' + id).trigger('click');
          },5);
        });
        var toggleResourcePreview = function () {
          var element = $('.view-vis-resource-' + id);
          element.slideToggle('slow');
        };

        button.on('click', toggleResourcePreview);
        button.on('load', toggleResourcePreview);
        button.on('ready', toggleResourcePreview);
      });
    }
  };

})(jQuery, Drupal, drupalSettings);
