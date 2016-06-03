angular
    .module('fanCo')
    .directive('forecastDirective', ['d3Service', 'forecast', function(d3service, forecast) {
      return {
        link: function(scope, element, attrs) {
          d3Service.d3().then(function(d3) {
            scope.dataset = forecast.forecastData;

          var data = scope.dataset;

          data.forEach(function(d) { d.timestamp = new Date(d.timestamp * 86400); });

          var chart = d3.select('.line').append('svg'),
              width = 900,
              height = 500,
              margins = {
                top: 20,
                right: 20,
                bottom: 20,
                left: 50
              },
              xScale = d3.time.scale().range([margins.left, width - margins.right]),
              yScale = d3.scale.linear().range([height - margins.top, margins.bottom]),
              xAxis = d3.svg
                        .axis()
                        .scale(xScale)
                        .ticks(8)
                        .tickSize(1)
                        .tickFormat(d3.time.format('%d/%m'))
                        .orient('bottom'),

              yAxis = d3.svg
                        .axis()
                        .scale(yScale)
                        .ticks(10)
                        .tickSize(1)
                        .orient('left');

              


          })
        }
      }
    }])