(function ($, Drupal, once) {
  Drupal.behaviors.dashboard_topics = {
    attach: function (context, settings) {
      once('dashboard_topics_bar_chart', document.getElementById('dashboard-topics-chart-container'), context).forEach(function (element) {
        let dashboardTopicsChart = echarts.init(document.getElementById('dashboard-topics-chart-container'))
        dashboardTopicsChart.setOption(buildTopicsChartOptions());
      });
    }
  };
})(jQuery, Drupal, once);

function buildTopicsChartOptions() {
  return {
    grid: {
      containLabel: true,
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
    },
    xAxis: {
      data: drupalSettings.dashboard_topics.topics,
      axisLabel: {
        rotate: 30,
      },
      axisTick: {
        alignWithLabel: true
      }
    },
    yAxis: [{
      type: 'value',
    }],
    series: [
      {
        type: 'bar',
        data: drupalSettings.dashboard_topics.data,
        name: 'Dataset',
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
}
