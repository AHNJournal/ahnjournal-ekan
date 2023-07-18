(function ($, Drupal) {
  Drupal.behaviors.ekan_detect_pdf = {
    attach: function (context, settings) {
      $(context).find('input[type="file"]').once('ekan_detect_pdf').on('change.autoFileUpload', function(event) {
        mimeType = $(event.target.files)[0].type;
        if (mimeType == 'application/pdf') {
          // For uploaded pdf file, tick PDF option by default.
          $('#vis-input-pdf_viewer').prop('checked', true);
          // Also remove style "display=none" added with form #states.
          $('#edit-visualisation-visual-type-pdf-viewer-details').removeAttr('style');
        }
      });
    }
  };
})(jQuery, Drupal);