angular
    .module('fanCo')
    .directive('forecastDirective', ['d3Service', 'forecast', function(d3Service, forecast) {
      return {
        link: function(scope, element, attrs) {
          // Invoking our d3Service:
          d3Service.d3().then(function(d3) {
          // Sets data to the forecast, making it accessible here as 'data'
          var data = scope.forecast.daily.data;
          // Loops through our data and formats time from UNIX timestamp to a 'real' date
          angular.forEach(data, function(d) { 
            d.time = new Date(d.time * 1000); 
          });
          // console.log(data);
          angular.forEach(data, function(d) {
            d.temperatureAvg = ((d.temperatureMax + d.temperatureMin) / 2);
          });
          console.log(data);

          // maxTempCalc returns the temperatureMax from the dataset (i.e. the highest temperature). Can be used to return the min temp too.
          // var maxTempCalc = function(data) {
          //   return d3.max(data.map(function (d) {
          //     return d.temperatureMax
          //   }))
            
          // }
          // Define the highest temperature: 
          // var max = maxTempCalc(data)
          // Log the highest temperature: 
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

          xScale = d3.time.scale()
            .domain([data[0].time, data[data.length - 1].time])
            .range([margins.left, w - margins.right]),
          yScale = d3.scale.linear()
            .domain([
              d3.min(data.map(function (d) {
                return d.temperatureMin
              })), 
              d3.max(data.map(function (d) {
                return d.temperatureMax
              }))
            ])
            .range([h - margins.top, margins.bottom]),

          xAxis = d3.svg
                    .axis()
                    .scale(xScale)
                    .ticks(8)
                    .tickSize(1)
                    .tickFormat(d3.time.format('%d/%m'))
                    .orient('bottom')

          yAxis = d3.svg
                    .axis()
                    .scale(yScale)
                    .ticks(10)
                    .tickSize(1)
                    .orient('left')

          chart.attr('width', w + margins.left + margins.right)
               .attr('height', h + margins.top + margins.bottom);
          
          chart.append('svg:g')
               .attr('class', 'x axis')
               .attr('transform', 'translate(0,' + (h - margins.bottom) + ')')
               .call(xAxis)
               .attr('shape-rendering', 'crispEdges');
          
          chart.append('svg:g')
               .attr('class', 'y axis')
               .attr('transform', 'translate(' + (margins.left) + ',0)')
               .call(yAxis)
               .attr('shape-rendering', 'crispEdges');

          // Display the maximum temperature
          var lineGen = d3.svg.line()
               .x(function(d) {
                  return xScale(new Date(d.time));
               })
               .y(function(d) {
                  return yScale(Number(d.temperatureAvg));
               })
               .interpolate('linear');

          chart.append('svg:path')
               .attr('d', lineGen(data)) // TODO: Verify what to pass into it
               .attr('stroke', 'green')
               .attr('stroke-width', 1)
               .attr('fill', 'none');

          // TODO: Display the minimum temperature


          // Displays the X axis text with a 45° tilt for a nicer look: 
          chart.selectAll('.x text ')
               .attr('transform', function(d) {
                  return 'translate(' + this.getBBox().height + ',' + this.getBBox().height + ')rotate(-45)';
                });

          var tooltip =  d3.select('.line').append('div')
                                    .attr('class', 'tooltip')
                                    .style('opacity', 0)

          var dots = chart.selectAll('circle')
                          .data(data)
                          .enter()
                          .append('circle')
                          .attr({
                            cx: function(d) {return xScale(new Date(d.time));},
                            cy: function(d) {return yScale(Number(d.temperatureAvg));},
                            r: 4
                          })
                          .on('mouseover', function(d){
                            var roundedSum = d3.round(d.temperatureAvg,1);
                            console.log(roundedSum)
                            tooltip.transition()
                                    .duration(500)
                                    .style('opacity', .85)
                            tooltip.html('<strong>Average temperature: ' + roundedSum +'°C</strong>')
                                    .style("left", (d3.event.pageX -95) +'px') 
                                    .style("top", (d3.event.pageY-270)+'px')
                          })

                           .on('mouseout', function(d){
                              tooltip.transition()
                                      .duration(300)
                                      .style('opacity',0)
                            })


          });
        }
      }
    }]);