angular
    .module('fanCo')
    .directive('prices',  ['d3Service', 'sales', function(d3Service, sales) {
      return {
        link: function(scope, element, attrs) {
          d3Service.d3().then(function(d3) {
            scope.dataset = sales.sales;
            scope.prices = sales.prices;

            console.log(scope.prices);

            // Adding price to
            angular.forEach(scope.dataset, function (val) {
              // console.log(val);
              angular.forEach(val, function (prop) {
                if (scope.prices.hasOwnProperty(prop['SKU'])) {
                  if (prop['Channel'] === 'Retail') {
                    prop['Revenue Per Unit Sold ($)'] = scope.prices[prop['SKU']][prop['Channel']];
                  } else {
                    prop['Revenue Per Unit Sold ($)'] = scope.prices[prop['SKU']][prop['Channel']];
                  }
                }
              })
            });

            var data = scope.dataset;

            var getSumByDate = function (data) {
              var sumObj = {};
              angular.forEach(data, function (val, key) {
                sumObj[key] = [];
              });

              angular.forEach(data, function (val, key) {
                for (var i = 0; i < val.length; i++) {
                  sumObj[key].push(val[i]['Revenue Per Unit Sold ($)'] * val[i]['Sales (Units)']);
                }
              });

              return sumObj;
            }

            var getSum = function (data) {
              var sum = [];
              angular.forEach(data, function (val, key) {
                var tmp = 0;
                for (var i = 0; i < val.length; i++) {
                  // sum.push(val[i]['Revenue Per Unit Sold ($)'] * val[i]['Sales (Units)']);
                  tmp += val[i];
                }
                sum.push(tmp);
              });
              return sum;
            }

            var getDate = function (data) {
              var d = [];

              angular.forEach(data, function (v, key) {
                // d.push(parseDate(new Date(key)));
                d.push(new Date(key));
              });

              return d;
            }

            // combine sum and dates in array
            var combine = function (data) {
              var result = [],
                  l = getSumByDate(data),
                  s = getSum(l),
                  d = getDate(l);
              angular.forEach(s, function (val, i) {
                result[i] = {
                  sum: val,
                  date: d[i]
                }
              });

              return result;
            };

            var sort = function (data, byDate) {
              var sortedArr = [];
              if (byDate) {
                sortedArr = data.sort(function(x, y) {
                   return d3.ascending(x.date, y.date);
                });
              } else {
                sortedArr = data.sort(function(x, y) {
                   return d3.descending(x.sum, y.sum);
                });
              }

              return sortedArr;
            }

            var result = combine(data),
                resultByDate = sort(result, true);

            var chart = d3.select('.line').append('svg'),
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
                                  //  console.log(d.sum);
                                    return d.sum;
                                  }))]),
                xAxis = d3.svg
                          .axis()
                          .scale(xScale)
                          .ticks(12)
                          .tickSize(1)
                          .tickFormat(d3.time.format('%b %y')),

                yAxis = d3.svg
                          .axis()
                          .scale(yScale)
                          .ticks(20)
                          .tickSize(1)
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
                        // console.log( this.getBBox());
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

          });
        }
      }
  }]);
