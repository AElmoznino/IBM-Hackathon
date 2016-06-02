angular
    .module('fanCo')
    .directive('prices',  ['d3Service', 'sales', function(d3Service, sales) {
      return {
        link: function(scope, element, attrs) {
          d3Service.d3().then(function(d3) {
            scope.dataset = sales.sales;
            scope.prices = sales.prices;

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
            // console.log(data1);

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
              // var parseDate = d3.time.format("%b/%d/%y");

              angular.forEach(data, function (v, key) {
                // d.push(parseDate(new Date(key)));
                d.push(new Date(key));
              });

              return d;
            }

            // combine to arrays
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

            var sort = function (data) {
              var sortedArr = data.sort(function(x, y){
                 return d3.ascending(x.index, y.index);
              });

              return sortedArr;
            }

            var result = combine(data),
                sortedResult = sort(result);

            var chart = d3.select(".line").append('svg'),
                width = 500,
                height = 500,
                margins = {
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 50
                },
                xScale = d3.time.scale().range([margins.left, width - margins.right])
                                .domain([result[result.length-1].date, result[0].date]),
                yScale = d3.scale.linear().range([height - margins.top, margins.bottom]).domain([sortedResult[0].sum,sortedResult[sortedResult.length-1].sum]),
                xAxis = d3.svg
                          .axis()
                          .scale(xScale)
                          .tickSize(1)
                          .tickFormat(d3.time.format('%b/%d/%y')),

                yAxis = d3.svg
                          .axis()
                          .scale(yScale)
                          .tickSize(1)
                          .orient("left");

                chart.attr("width", width + margins.left + margins.right)
                     .attr("height", height + margins.top + margins.bottom);

                chart.append('svg:g')
                     .attr("class", "xaxis")
                     .attr("transform", "translate(0," + (width - margins.bottom) + ")")
                     .call(xAxis);

                chart.selectAll(".xaxis text")  // select all the text elements for the xaxis
                      .attr("transform", function(d) {
                        return "translate(" + this.getBBox().height*-0.5 + "," + this.getBBox().height*1.5 + ")rotate(-45)";
                      })
                      .attr("margins", 50);

                chart.append("svg:g")
                     .attr("transform", "translate(" + (margins.left) + ",0)")
                     .call(yAxis);

                var lineGen = d3.svg.line()
                     .x(function(d) {
                       console.log(d);
                       return xScale(d);
                     })
                     .y(function(d) {
                       console.log(d);
                       return yScale(d);
                     });

                chart.data(data)
                    .enter()
                    .append('rect')
                    .attr('class', 'bar')
                    .attr('x', result.date)
                    .attr('y', result.sum)
                    .attr('width', 10)
                    .attr('height', function(d) { return height - margins.top - margins.bottom - yAxis(d3.max(s)) });

                // chart.append('svg:path')
                //      .attr('d', lineGen(d, s))
                //      .attr('stroke', 'green')
                //      .attr('stroke-width', 2)
                //      .attr('fill', 'none');

          });
        }
      }

  }]);
