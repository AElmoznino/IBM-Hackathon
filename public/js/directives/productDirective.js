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
            var w = 800;
            var margins ={
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 50
                }
          

          var productLine = function (result) {
              var data = d3func.getSumByProduct(result); 
              // console.log('data :', data)  

              
            var minMax = function(max) {
              var minMax = null;
              // var max = null;       
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

            
             var chart = d3.select('.lines').append('svg').attr({
                         width: w,
                         height: h,
                         margins: margins,
                         
             });                        
             
             console.log(d3.entries(data))

             var xScale = d3.time.scale()
                             .domain([minMax(false), minMax(true)])
                             .range([margins.left, w - margins.right])
                             // .nice()
             var yScale = d3.scale.linear()
                              .domain([0, 10000]) //hardcoded, needs to be adjusted to be dynamic
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
                     // console.log( this.getBBox());
                     return 'translate(' + this.getBBox().height + ',' + this.getBBox().height + ')rotate(-45)';
                   });

             var lineGen = d3.svg.line()
                  .x(function(d) {
                    return xScale(d.date);
                  })
                  .y(function(d) {
                    // console.log('d.sum', d)
                    return yScale(d.sum);
                  })
                  .interpolate('linear');


             var viz = chart.append('svg:path')

                   .attr({
                     'd': lineGen(result, function(d){
                      console.log(d)
                     }),
                     'stroke': 'green',
                     'stroke-width': 1,
                     'fill': 'none'
                   });

            

          };//end productline
            
          });

        }
      }
  }]);
