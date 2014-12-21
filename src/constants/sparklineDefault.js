'use strict';

angular.module('frapontillo.highcharts.constants')

  /**
   * @ngdoc object
   * @name frapontillo.highcharts.constants.constant:SPARKLINE_DEFAULT
   *
   * @description
   * Default configuration for a sparkline type of chart.
   *
   * @return {object} SPARKLINE_DEFAULT Sparkline configuration defaults.
   */
  .constant('SPARKLINE_DEFAULT', {
    name: 'sparkline',
    options: {
      chart: {
        backgroundColor: null,
        borderWidth: 0,
        type: 'areaspline',
        margin: [0, 0, 0, 0],
        width: 105,
        height: 70,
        style: {
          overflow: 'visible'
        },
        skipClone: true
      },
      title: {
        text: ''
      },
      credits: {
        enabled: false
      },
      xAxis: {
        labels: {
          enabled: false
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickPositions: []
      },
      yAxis: {
        endOnTick: false,
        startOnTick: false,
        labels: {
          enabled: false
        },
        title: {
          text: null
        },
        tickPositions: [0]
      },
      legend: {
        enabled: false
      },
      tooltip: {
        backgroundColor: null,
        borderWidth: 0,
        shadow: false,
        useHTML: true,
        hideDelay: 0,
        shared: true,
        padding: 0,
        headerFormat: '',
        pointFormat: '<b>{point.y}</b>',
        positioner: function (w, h, point) {
          return { x: point.plotX - w / 2, y: point.plotY - h};
        }
      },
      plotOptions: {
        series: {
          
          animation: true,
          lineWidth: 0,
          shadow: true,
          states: {
            hover: {
              lineWidth: 0
            }
          },
          marker: {
            radius: 0,
            states: {
              hover: {
                radius: 0
              }
            }
          },
          fillOpacity: 1
        },
        column: {
          negativeColor: '#5A568F',
          borderColor: 'black'
        }
      }
    }
  });

angular.module('frapontillo.highcharts.constants')
  .config(function ($chartDefaultsProvider, SPARKLINE_DEFAULT) {
    $chartDefaultsProvider.addDefault(SPARKLINE_DEFAULT.name, SPARKLINE_DEFAULT.options);
  });