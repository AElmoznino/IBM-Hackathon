angular
    .module('fanCo')
    .directive('prices',  ['d3Service', 'd3func', 'sales', function(d3Service, d3func, sales) {
      return {
        link: function(scope, element, attrs) {
          d3Service.d3().then(function(d3) {
            var fetchData = sales.getJoinSalesAndPrices();

            fetchData.then(function (data) {
              scope.combine = d3func.summarize(data);
              drawLine(scope.combine);
            });

            var drawLine = function (result) {
              var resultByDate = d3func.sorted(result, true),
                  chart = d3.select('.line').append('svg'),
                  width = 900,
                  height = 500,
                  margins = {
                      top: 20,
                      right: 20,
                      bottom: 20,
                      left: 50
                  },
                  xScale = d3.time.scale().range([margins.left, width - margins.right])
                                  .domain([resultByDate[0].date, resultByDate[resultByDate.length-1].date]),
                  yScale = d3.scale.linear().range([height - margins.top, margins.bottom])
                                   .domain([0, d3.max(result.map(function (d) {
                                      return d.sum;
                                    }))]),
                  xAxis = d3.svg
                            .axis()
                            .scale(xScale)
                            .ticks(12)
                            .tickSize(0)
                            .tickFormat(d3.time.format('%b %y')),

                  yAxis = d3.svg
                            .axis()
                            .scale(yScale)
                            .ticks(20)
                            .tickSize(0)
                            .orient('left');

                  chart.attr('width', width + margins.left + margins.right)
                       .attr('height', height + margins.top + margins.bottom);

                  chart.append('svg:g')
                       .attr('class', 'x axis')
                       .attr('transform', 'translate(0,' + (height - margins.bottom) + ')')
                       .call(xAxis)
                       .attr('shape-rendering','crispEdges');

                  chart.selectAll('.x text')  // select all the text elements for the xaxis
                        .attr('transform', function(d) {
                          return 'translate(' + this.getBBox().height + ',' + this.getBBox().height + ')rotate(-45)';
                        });

                  chart.append('svg:g')
                       .attr('class', 'y axis')
                       .attr('transform', 'translate(' + (margins.left) + ',0)')
                       .call(yAxis)
                       .attr('shape-rendering','crispEdges');

                  var lineGen = d3.svg.line()
                       .x(function(d) {
                         return xScale(new Date(d.date));
                       })
                       .y(function(d) {
                         return yScale(Number(d.sum));
                       })
                       .interpolate('basis');

                  chart.append('svg:path')
                       .attr('d', lineGen(result))
                       .attr('stroke', 'green')
                       .attr('stroke-width', 1)
                       .attr('fill', 'none');

              }
          });
        }
      }
  }]);
