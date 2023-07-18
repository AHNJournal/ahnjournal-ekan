(function($, Drupal, drupalSettings) {
  Drupal.behaviors.pie_chart = {
    chart: {},
    attach: function (context, settings) {
      // Based on prepared DOM, initialize echarts instance.
      $.each(settings.pie_chart, function(key, item) {
      var PieChart =echarts.init($('.' + item.id).first()[0]);

      var option;
      option = {

        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            type: 'pie',
            radius: '50%',
            data: item.data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };

      // Use configuration item and data specified to show chart.
      PieChart.setOption(option);
      this.chart = PieChart;
    });
    }
  };
})(jQuery, Drupal, drupalSettings);
