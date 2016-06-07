angular
    .module('fanCo')
    .directive('product',  ['d3Service', 'd3func', 'sales', function(d3Service, d3func, sales) {
      return {
        link: function(scope, element, attrs) {
          d3Service.d3().then(function(d3) {
            var fetchData = sales.getJoinSalesAndPrices();

            fetchData.then(function (data) {
              productLine(data);
            });

            var h = 500;
            var w = 1000;
            var margins = {
                top: 20,
                right: 20,
                bottom: 20,
                left: 50
            }

            var productLine = function (result) {
              var data = d3func.getSumByProduct(result);
              var revenueData = d3func.getSumByDate(result)

              var redProd = d3.values(data)[0];
              var greenProd = d3.values(data)[1];
              var orangeProd = d3.values(data)[2];

              // min-max of the date
              var minMax = function(max) {
                var minMax = null;
                if (max) {
                  angular.forEach(data, function(val) {
                    minMax = d3.max(val, function(d) {
                      return new Date(d.date)
                    });
                  });
                } else {
                  angular.forEach(data, function(val) {
                    minMax = d3.min(val, function(d) {
                      return new Date(d.date)
                    });
                  });
                }
                return minMax;
              }

              var moximum = function (data) {

              }

              var chart = d3.select('.lines')
                     .append('svg')
                     .attr({
                        width: w,
                        height: h,
                        margin: 20,
              });

              var xScale = d3.time
                           .scale()
                           .domain([minMax(false), minMax(true)])
                           .range([margins.left, w - margins.right]);

              var yScale = d3.scale
                            .linear()
                            .domain([0, 75000]) //hardcoded, needs to be adjusted to be dynamic
                            .range([h - margins.top, margins.bottom]);

              var xAxisGen = d3.svg
                            .axis()
                            .scale(xScale)
                            .ticks(12)
                            .tickSize(0)
                            .tickFormat(d3.time.format('%b %y'));

               var yAxisGen = d3.svg
                           .axis()
                           .scale(yScale)
                           .ticks(10)
                           .tickSize(0)
                           .orient('left');

               chart.attr({
                 'width': w + margins.left + margins.right,
                 'height': h + margins.top + margins.bottom
               });

               var xAxis = chart.append('g')
                          .call(xAxisGen)
                          .attr({
                            'class': 'x axis',
                            'transform': 'translate(0,' + (h - margins.bottom) + ')',
                            'shape-rendering': 'crispEdges'
                          });

               var yAxis = chart.append('g')
                          .call(yAxisGen)
                          .attr({
                            'class': 'y axis',
                            'transform': 'translate(' + (margins.left) + ',0)',
                            'shape-rendering':'crispEdges'
                          })


               chart.selectAll('.x text')  // select all the text elements for the xaxis
                    .attr('transform', function(d) {
                      return 'translate(' + this.getBBox().height + ',' + this.getBBox().height + ')rotate(-45)';
                    });

               var lineGen = d3.svg.line()
                            .x(function(d) {
                              return xScale(new Date (d.date));
                            })
                            .y(function(d) {
                              return yScale(d.sum);
                            })
                            .interpolate('monotone');


                var vis = chart.append('path')
                            .attr({
                              'd': lineGen(redProd.sort(function (a, b) {
                                return new Date(a.date) - new Date(b.date)
                              })),
                              'stroke': 'red',
                              'stroke-width': 1,
                              'fill': 'none'
                            });

                vis = chart.append('path')
                  .attr({
                    'd': lineGen(greenProd.sort(function (a, b) {
                      return new Date(a.date) - new Date(b.date)
                    })),
                    'stroke': 'green',
                    'stroke-width': 1,
                    'fill': 'none'
                  });

                vis = chart.append('path')
                  .attr({
                    'd': lineGen(orangeProd.sort(function (a, b) {
                      return new Date(a.date) - new Date(b.date)
                    })),
                    'stroke': 'orange',
                    'stroke-width': 1,
                    'fill': 'none'
                });

                // overall function on everything
                vis = chart.append('path')
                  .attr({
                    'd': lineGen(d3.values(revenueData).sort(function (a, b) {
                      return new Date(a.date) - new Date(b.date)
                    })),
                    'stroke': 'blue',
                    'stroke-width': 1,
                    'fill': 'none'
                  });

                // chart.selectAll('g')
                //     .data(redProd)
                //     .enter()
                //     .on('mouseover', function(d) {
                //       console.log(d);
                //     })

            };//end productline

          });
        }
      }
    }]);
