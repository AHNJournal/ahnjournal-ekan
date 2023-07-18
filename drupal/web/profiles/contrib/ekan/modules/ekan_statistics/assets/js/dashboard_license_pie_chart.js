(function ($, Drupal, once) {
  Drupal.behaviors.dashboard_license = {
    attach: function (context, settings) {
      once('dashboard_license_pie_chart', document.getElementById('dashboard-license-chart-container'), context).forEach(function (element) {
        let dashboardLicense = echarts.init(document.getElementById('dashboard-license-chart-container'))
        dashboardLicense.setOption(buildDashboardLicenseChartOptions())
      });
    }
  };
})(jQuery, Drupal, once);

function buildDashboardLicenseChartOptions() {
  return {
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'shadow'
      },
      formatter: function (params) {
        return `<strong>${params.name}:</strong><br />${params.data.value} datasets`;
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
        data: drupalSettings.dashboard_license.data,
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
        }
      }
    ]
  };
}
