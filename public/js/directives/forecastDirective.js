angular
    .module('fanCo')
    .directive('forecastDirective', ['d3Service', 'forecast', function(d3Service, forecast) {
      return {
        link: function(scope, element, attrs) {
          // Invoking our d3Service:
          d3Service.d3().then(function(d3) {
          // Sets data to the forecast, making it accessible here as 'data'
          var data = scope.forecast;
          // Loops through our data and formats time from UNIX timestamp to a 'real' date
          angular.forEach(data, function(d) { 
            d.time = new Date(d.time * 1000); 
          });
          console.log(data);

          // var maxTempCalc = function(data) {
          //   return d3.max(data.map(function (d) {
          //     return d.temperatureMax
          //   }))
            
          // }

          // var max = maxTempCalc(data)

          // console.log(max);

          // Define our chart and appending our svg to it
          var chart = d3.select('.line').append('svg'),
              w = 800,
              h = 500,
              margins = {
                top: 20,
                right: 20,
                bottom: 20,
                left: 50
              },
              padding = 20,

          xScale = d3.time.scale().domain([data[0].time, data[data.length - 1].time]).range([margins.left, w - margins.right]),
          yScale = d3.scale.linear()
            .domain([
              d3.min(data.map(function (d) {
                return d.temperatureMin
              })), 
              d3.max(data.map(function (d) {
                return d.temperatureMax
              }))
            ])
            .range([h - margins.top, margins.bottom])



          //     xScale = d3.time.scale().domain().range([margins.left, w - margins.right]), // TODO: Add domain
          //     yScale = d3.scale.linear().range([h - margins.top, margins.bottom]), // TODO: Add domain
          //     xAxis = d3.svg
          //               .axis()
          //               .scale(xScale)
          //               .ticks(8)
          //               .tickSize(1)
          //               .tickFormat(d3.time.format('%d/%m'))
          //               .orient('bottom'),

          //     yAxis = d3.svg
          //               .axis()
          //               .scale(yScale)
          //               .ticks(10)
          //               .tickSize(1)
          //               .orient('left');

          //     chart.attr('width', w + margins.left + margins.right)
          //          .attr('height', h + margins.top + margins.bottom);

          //     chart.append('svg:g')
          //          .attr('class', 'x axis')
          //          .attr('transform', 'translate(0,' + (h - margins.bottom) + ')')
          //          .call(xAxis)
          //          .attr('shape-rendering', 'crispEdges');

          //     chart.selectAll('.x text ')
          //          .attr('transform', function(d) {
          //               // console.log( this.getBBox());
          //               return 'translate(' + this.getBBox().height + ',' + this.getBBox().height + ')rotate(-45)';
          //             });

          //     chart.append('svg:g')
          //          .attr('class', 'y axis')
          //          .attr('transform', 'translate(' + (margins.left) + ',0)')
          //          .call(yAxis)
          //          .attr('shape-rendering', 'crispEdges');

          //     var lineGen = d3.svg.line()
          //          .x(function(d) {
          //             return xScale(new Date(d.timestamp * 86400));
          //          })
          //          .y(function(d) {
          //             return yScale(Number(d.temperatureMax));
          //          })
          //          .interpolate('basis');

          //     chart.append('svg:path')
          //          .attr('d', lineGen(data)) // TODO: Verify what to pass into it
          //          .attr('stroke', 'green')
          //          .attr('stroke-width', 1)
          //          .attr('fill', 'none');

          });
        }
      }
    }]);