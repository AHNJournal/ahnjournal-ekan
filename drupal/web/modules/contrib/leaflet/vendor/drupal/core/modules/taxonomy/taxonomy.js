/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.behaviors.termDrag = {
    attach(context, settings) {
      const backStep = settings.taxonomy.backStep;
      const forwardStep = settings.taxonomy.forwardStep;
      const tableDrag = Drupal.tableDrag.taxonomy;
      const $table = $('#taxonomy');
      const rows = $table.find('tr').length;

      tableDrag.row.prototype.onSwap = function (swappedRow) {
        $table.find('tr.taxonomy-term-preview').removeClass('taxonomy-term-preview');
        $table.find('tr.taxonomy-term-divider-top').removeClass('taxonomy-term-divider-top');
        $table.find('tr.taxonomy-term-divider-bottom').removeClass('taxonomy-term-divider-bottom');
        const tableBody = $table[0].tBodies[0];

        if (backStep) {
          for (let n = 0; n < backStep; n++) {
            $(tableBody.rows[n]).addClass('taxonomy-term-preview');
          }

          $(tableBody.rows[backStep - 1]).addClass('taxonomy-term-divider-top');
          $(tableBody.rows[backStep]).addClass('taxonomy-term-divider-bottom');
        }

        if (forwardStep) {
          for (let k = rows - forwardStep - 1; k < rows - 1; k++) {
            $(tableBody.rows[k]).addClass('taxonomy-term-preview');
          }

          $(tableBody.rows[rows - forwardStep - 2]).addClass('taxonomy-term-divider-top');
          $(tableBody.rows[rows - forwardStep - 1]).addClass('taxonomy-term-divider-bottom');
        }
      };
    }

  };
})(jQuery, Drupal);