(function ($, Drupal, once) {
  Drupal.behaviors.dashboard_resource = {
    attach: function (context, settings) {
      once('dashboard_resource_pie_chart', document.getElementById('dashboard-resource-chart-container'), context).forEach(function (element) {
        let dashboardResource = echarts.init(document.getElementById('dashboard-resource-chart-container'))
        dashboardResource.setOption(buildDashboardResourceChartOptions())
      });
    }
  };
})(jQuery, Drupal, once);

function buildDashboardResourceChartOptions() {
  return {
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'shadow'
      },
      formatter: function (params) {
        return `<strong>${params.name}:</strong><br />${params.data.value} resources`;
      }
    },
    legend: {
      orient: 'vertical',
      right: 'left',
      show: true,
    },
    series: [
      {
        type: 'pie',
        data: drupalSettings.dashboard_resource.data,
        label: {
          bleedMargin: 0,
          formatter: '{b} ({c})'
        },
        labelLine: {
          length: '3',
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          },
          label: {
            fontWeight: "bold"
          }
        },
      }
    ]
  };
}
