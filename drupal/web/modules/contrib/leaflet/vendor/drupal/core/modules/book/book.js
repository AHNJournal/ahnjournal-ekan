/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.behaviors.bookDetailsSummaries = {
    attach(context) {
      $(context).find('.book-outline-form').drupalSetSummary(context => {
        const $select = $(context).find('.book-title-select');
        const val = $select[0].value;

        if (val === '0') {
          return Drupal.t('Not in book');
        }

        if (val === 'new') {
          return Drupal.t('New book');
        }

        return Drupal.checkPlain($select.find(':selected')[0].textContent);
      });
    }

  };
})(jQuery, Drupal);