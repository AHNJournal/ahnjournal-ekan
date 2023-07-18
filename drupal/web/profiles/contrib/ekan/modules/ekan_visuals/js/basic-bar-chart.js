(function($, Drupal, drupalSettings) {
  Drupal.behaviors.bar_chart = {
    chart: {},
    attach: function (context, settings) {
      // Based on prepared DOM, initialize echarts instance.
      $.each(settings.bar_chart, function(key, item) {
        var BarChart = echarts.init($('.' + item.id).first()[0]);
        var xaxis_value = item.x_axis_values;
        var xaxis_label = item.x_axis_label;
        var yaxis_value = item.y_axis_values;
        var yaxis_label = item.y_axis_label;
        var option;
        option = {
          color: ['#014587'],
          grid: {
            bottom: 150,
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
            }
          },
          xAxis: [
            {
              type: 'category',
              data: xaxis_value,
              axisTick: {
                alignWithLabel: true
              },
              axisLabel: {
                interval: 0,
                rotate: 20,
                fontSize: '10',
              },
              name: xaxis_label,
              nameLocation: 'middle',
              nameGap: 90
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: yaxis_label,
              axisLine: {show: true},
              axisLabel: {
                show: true,
              },
            }
          ],
          series: [
            {
              name: 'value',
              type: 'bar',
              data: yaxis_value
            }
          ]
        };

        // Use configuration item and data specified to show chart.
        BarChart.setOption(option);
        this.chart = BarChart;
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
