angular
    .module('fanCo')
    .directive('prices',  ['d3Service', 'd3func', 'sales', function(d3Service, d3func, sales) {
      return {
        link: function(scope, element, attrs) {
          d3Service.d3().then(function(d3) {
            var fetchData = sales.getJoinSalesAndPrices();

            fetchData.then(function (data) {
              drawLine(d3func.summarize(data));
            });

            var h = 500;
            var w = 800;
            var margins ={
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 50
                }

            var drawLine = function (result) {
              var resultByDate = d3func.sorted(result, true)
              var minDate = resultByDate[0].date;
              var maxDate = resultByDate[resultByDate.length-1].date;
              // console.log('mindate: ',minDate)
              // console.log('maxDate: ',maxDate)

              var chart = d3.select('.line').append('svg').attr({
                          width: w + 'px',
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
                            tooltip.html('<strong>Weekly Total Sales $' + roundedSum +'</strong>')
                                    .style("left", (d3.event.pageX -95) +'px') 
                                    .style("top", (d3.event.pageY-370)+'px')
                          })

                           .on('mouseout', function(d){
                              tooltip.transition()
                                      .duration(300)
                                      .style('opacity',0)
                            })

            };//end drawline
            
          });

        }
      }
  }]);
