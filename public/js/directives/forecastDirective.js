angular
    .module('fanCo')
    .directive('forecastDirective', ['d3Service', 'forecast', function(d3service, forecast) {
      return {
        link: function(scope, element, attrs) {
          d3Service.d3().then(function(d3) {

            console.log(scope.dataset);
            console.log(forecast.forecastData);
            scope.dataset = forecast.forecastData;

          var data = scope.dataset;



          // data.forEach(function(d) { d.timestamp = new Date(d.timestamp * 86400); });

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

              chart.attr('width', width + margins.left + margins.right)
                   .attr('height', height + margins.top + margins.bottom);

              chart.append('svg:g')
                   .attr('class', 'x axis')
                   .attr('transform', 'translate(0,' + (height - margins.bottom) + ')')
                   .call(xAxis)
                   .attr('shape-rendering', 'crispEdges');

              chart.selectAll('.x text ')
                   .attr('transform', function(d) {
                        // console.log( this.getBBox());
                        return 'translate(' + this.getBBox().height + ',' + this.getBBox().height + ')rotate(-45)';
                      });

              chart.append('svg:g')
                   .attr('class', 'y axis')
                   .attr('transform', 'translate(' + (margins.left) + ',0)')
                   .call(yAxis)
                   .attr('shape-rendering', 'crispEdges');

              var lineGen = d3.svg.line()
                   .x(function(d) {
                      return xScale(new Date(d.timestamp * 86400));
                   })
                   .y(function(d) {
                    return yScale(Number(d.temperatureMax));
                   })
                   .interpolate('basis');

              chart.append('svg:path')
                   .attr('d', lineGen(data)) // TODO: Verify what to pass into it
                   .attr('stroke', 'green')
                   .attr('stroke-width', 1)
                   .attr('fill', 'none');

          });
        }
      }
    }]);