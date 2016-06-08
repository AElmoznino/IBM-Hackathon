angular
    .module('fanCo')
    .directive('product',  ['d3Service', 'd3func', 'sales', function(d3Service, d3func, sales) {
      return {
        link: function(scope, element, attrs) {
          d3Service.d3().then(function(d3) {
            var fetchData = sales.getJoinSalesAndPrices();

            fetchData.then(function (data) {
              updateLine(data);
              var datos = data;

              d3.select('select')
                .on('change', function(d,i) {

                  var sel = d3.select('#product-option').node().value;
                  console.log(sel);
                  if (sel === 'total') {
                    productLine(data);
                    d3.select("svg").remove();

                  } else if (sel === 'products'){
                    updateLine(data);
                    d3.select("svg").remove();
                  }
                })


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
                            .domain([0, 12000]) //hardcoded, needs to be adjusted to be dynamic
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


                	//append a g tag for each line and set of tooltip circles and give it a unique ID based on the column name of the data
                	 var vis = chart.selectAll('.line')
          	              .data(d3.entries(data))
                          .enter()
                          .append('g')
                  		    // .attr('clip-path', 'url(#clip)')
                	        .attr('class', 'line')
                          .attr('fill', 'none')
                      	  .attr('id', function(d, i) {
                            return d.key.substr(0, d.key.indexOf(' ')).toLowerCase()+'-line';
                          })
                	  	    .on('mouseover', function (d) {
                            var selectNotThis = $('.line').not(this);
                            //
                            d3.selectAll('g:not(#'+ this.id +')')
                              .selectAll('.line')
      		                    .style('opacity', .2);

                            d3.select(this)
                              .style('stroke-width', '3px');
                        	})
                        	.on('mouseout',	function(d) {        //undo everything on the mouseout
                          		d3.select(this)
                            		.style('stroke-width','1px');

                              d3.selectAll('.line')
        		                    .style('opacity', 1);
                    	    });

                  vis.append('path')
                        	.attr('class', 'line')
                        	.style('stroke', function (d) {
                        	  return d.key.substr(0, d.key.indexOf(' ')).toLowerCase();
                        	})
                        	.attr('d', function(d) {
                            return lineGen(d.value.sort(function (a, b) {
                              return new Date(a.date) - new Date(b.date)
                        	   }));
                           })
                        	.transition()
                        	.duration(4000)
                        	.attrTween('d', function (d) {
                  			       var interpolate = d3.scale.quantile()
                  				         .domain([0, 1])
                  				         .range(d3.range(1, d.value.length+1));

                    			return function(t) {
                    				return lineGen(d.value.slice(0, interpolate(t)));
                    			};
                    		});

            };//end productline
            //updates the line removing the previus chart and showing the products view
            var updateLine = function(result){
              console.log('updating')
                      var data = d3func.getSumByProduct(result);
                      var revenueData = d3func.getSumByDate(result)



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

                      var y0Scale = d3.scale
                                    .linear()
                                    .domain([0, 72000]) //hardcoded, needs to be adjusted to be dynamic
                                    .range([h - margins.top, margins.bottom]);

                      var y1Scale = d3.scale
                                    .linear()
                                    .domain([0, 50]) //hardcoded, needs to be adjusted to be dynamic
                                    .range([h - margins.top, margins.bottom]);

                      var xAxisGen = d3.svg
                                    .axis()
                                    .scale(xScale)
                                    .ticks(12)
                                    .tickSize(0)
                                    .tickFormat(d3.time.format('%b %y'));

                       var y0AxisGen = d3.svg
                                   .axis()
                                   .scale(y0Scale)
                                   .ticks(10)
                                   .tickSize(0)
                                   .orient('left');

                       var y1AxisGen = d3.svg
                                   .axis()
                                   .scale(y1Scale)
                                   .ticks(10)
                                   .tickSize(0)
                                   .orient('right');

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

                       var y0Axis = chart.append('g')
                                  .call(y0AxisGen)
                                  .attr({
                                    'class': 'y axis',
                                    'transform': 'translate(' + (margins.left) + ',0)',
                                    'shape-rendering':'crispEdges'
                                  })

                      var y1Axis = chart.append('g')
                                  .call(y1AxisGen)
                                  .attr({
                                    'class': 'y axis',
                                    'transform': 'translate(' + (w -10) + ',0)',
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
                                      return y0Scale(d.sum);
                                    })
                                    .interpolate('monotone');


                        // overall function on everything
                      var  vis = chart.append('path')
                          .attr({
                            'd': lineGen(d3.values(revenueData).sort(function (a, b) {
                              return new Date(a.date) - new Date(b.date)
                            })),
                            'stroke': 'blue',
                            'stroke-width': 1,
                            'fill': 'none'
                          })
                          .transition()
                          .duration(4000)
                          // .attrTween('d', function (d) {
                          //          var interpolate = d3.scale.quantile()
                          //              .domain([0, 1])
                          //              .range(d3.range(1, d.value.length+1));


                     d3.csv("https://raw.githubusercontent.com/AElmoznino/IBM-Hackathon/master/data/weatherhistory.csv", function(error, weather){
                       if (error) {
                         console.log(error)
                       } else {
                         }
                       console.log(weather);
                     })
                         
            } //end upadte line

          });
        }
      }
    }]);
