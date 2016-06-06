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
            // console.log(data)

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
                  tmp += val[i];
                }
                sum.push(tmp);
              });
              return sum;
            }

            var getDate = function (data) {
              var d = [];

              angular.forEach(data, function (v, key) {
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

            

            var h = 500;
            var w = 800;
            var margins ={
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 50
                }
           

            function buildLine(d) {    
                  console.log(resultByDate)
                  var minDate = resultByDate[0].date;
                  var maxDate = resultByDate[resultByDate.length-1].date;
                  // console.log('mindate: ',minDate)
                  // console.log('maxDate: ',maxDate)

                  var chart = d3.select('.line').append('svg').attr({
                              width: w,
                              height: h,
                              margins: margins,
                              id: 'svg'
                  });                        
                  

                  var xScale = d3.time.scale()
                                  .domain([minDate, maxDate])
                                  .range([margins.left, w - margins.right])
                                  // .nice()
                  var yScale = d3.scale.linear()
                                   .domain([0, d3.max(result.map(function (d) {
                                    //  console.log(d.sum);
                                      return d.sum;
                                    }))])
                                   .range([h - margins.top, margins.bottom])
                                   .nice()
                  
                  var xAxisGen = d3.svg
                                .axis()
                                .scale(xScale)
                                .ticks(12)
                                .tickSize(1)
                                .tickFormat(d3.time.format('%b %y'))                             
                  
                  var yAxisGen = d3.svg
                                .axis()
                                .scale(yScale)
                                .ticks(20)
                                .tickSize(1)
                                .orient('left');

                    

                      chart.attr({
                        'width': w + margins.left + margins.right,
                        'height': h + margins.top + margins.bottom
                      })

                      var xAxis = chart.append('g').call(xAxisGen)
                           .attr({
                              'class': 'x-axis',
                              'transform': 'translate(0,' + (h - margins.bottom) + ')',
                              'shape-rendering': 'crispEdges'
                            })

                      var yAxis = chart.append('g').call(yAxisGen)
                            .attr({
                              'class': 'y-axis',
                              'transform': 'translate(' + (margins.left) + ',0)',
                              'shape-rendering':'crispEdges'
                            })
                           

                      chart.selectAll('.x-axis text')  // select all the text elements for the xaxis
                            .attr('transform', function(d) {
                              console.log( this.getBBox());
                              return 'translate(' + this.getBBox().height + ',' + this.getBBox().height + ')rotate(-45)';
                            });

                      var lineGen = d3.svg.line()
                           .x(function(d) {
                             return xScale(new Date(d.date));
                           })
                           .y(function(d) {
                             return yScale(Number(d.sum));
                           })
                           .interpolate('linear');


                      var viz = chart.append('svg:path')

                            .attr({
                              'd': lineGen(result),
                              'stroke': 'green',
                              'stroke-width': 1,
                              'fill': 'none'
                            });

                      var tooltip =  d3.select('.line').append('div')
                                        .attr('class', 'tooltip')
                                        .style('opacity', 0)

                      var dots = chart.selectAll('circle')
                                  .data(resultByDate)
                                  .enter()
                                  .append('circle')
                                  .attr({
                                    cx: function(d) {return xScale(new Date(d.date));},
                                    cy: function(d) {return yScale(Number(d.sum));},
                                    r: 4
                                  })
                                  .on('mouseover', function(d){
                                    var roundedSum = d3.round(d.sum,1);
                                    console.log(roundedSum)
                                    tooltip.transition()
                                            .duration(500)
                                            .style('opacity', .85)
                                    tooltip.html('<strong>Sales $' + roundedSum +'</strong>')
                                            .style("left", (d3.event.pageX) +'px') 
                                            .style("top", (d3.event.pageY-420)+'px')
                                  })

                                   .on('mouseout', function(d){
                                      tooltip.transition()
                                              .duration(300)
                                              .style('opacity',0)
                                    })

              }//end function buildLine

              //function for updating the chart according to the user's selection
              function updateLine(result){
                
              } //end function updateLine


              buildLine(resultByDate);

              d3.select('select')
                .on('change', function(d, i){
                  // console.log(resultByDate)
                  // console.log('before splice:', months.length)
                  var sel = d3.select('#date-option').node().value;
                  // console.log(sel)
                  resultByDate.splice(0, resultByDate.length-sel);
                  console.log(resultByDate)

                  // updateLine(resultByDate);
                })
          }); 
        }
      }
  }]);
