angular
    .module('fanCo')
    .directive('pie',  ['d3Service', 'd3func', 'sales', function(d3Service, d3func, sales) {
      return {
        link: function(scope, element, attrs) {
          d3Service.d3().then(function(d3) {
            var fetchData = sales.getJoinSalesAndPrices();

            fetchData.then(function (data) {
              pieChart(d3func.getSumByNeighborhood(data));
            });

            var dataset =
              [
              {label: "Allston", sales: 12340},
              {label: "Back Bay", sales: 123150 },
              {label: "Charlestown", sales: 250655},
              {label: "Downtown", sales: 455006},
              {label: "Jamaica Plain", sales: 506000},
              {label: "North End", sales: 65000},
              {label: "South End", sales: 560433},
              {label: "West End", sales: 45000},
            ]

            var width = 400;
            var height = 400;
            var radius = Math.min(width, height) / 2;

            var color = d3.scale.category20c();
            var donutWidth = 75;

            var pieChart = function (result) {

              var svg = d3.select('#chart')
                .append('svg')
                .attr('width', width)
                .attr('height', height)
                .append('g')
                .attr('transform', 'translate(' + (width / 2) +  ',' + (height / 2) + ')');

              // To define the radius we use D3's svg.arc() and provide its outerRadius() method with the radius we defined earlier:

              var arc = d3.svg.arc()
                .innerRadius(radius - donutWidth)
                .outerRadius(radius);

              // For the start and end angles of the segments, we use D3's layout.pie():
              var pie = d3.layout.pie()
                .value(function(d) { return d.sum; })
                .sort(null);

              // For it we need to define how to extract the numerical data from each entry in our result;
              // this is where the count property of the objects we defined earlier comes into play.
              // If we had just had an array of numbers, then instead of returning d.count we could just have returned d.
              // We specify sort(null) to disable sorting of the entries, because a)
              // we have them in the order we want and b) later on sorting will mess with our animation.
              // By default it will sort in order of descending value.


              var path = svg.selectAll('path')
                .data(pie(d3.values(result)))
                .enter()
                .append('path')
                .attr('d', arc)
                .attr('fill', function(d, i) {
                  return color(d.data.label);
                });

              //legend
              var legendRectSize = 18;
              var legendSpacing = 4;

              var legend = svg.selectAll('.legend')
                .data(color.domain())
                .enter()
                .append('g')
                .attr('class', 'legend')
                .attr('transform', function(d, i) {
                  var height = legendRectSize + legendSpacing;
                  var offset =  height * color.domain().length / 2;
                  var horz = -2 * legendRectSize;
                  var vert = i * height - offset;
                  return 'translate(' + horz + ',' + vert + ')';
              });

              legend.append('rect')
                .attr('width', legendRectSize)
                .attr('height', legendRectSize)
                .style('fill', color)
                .style('stroke', color);

              legend.append('text')
                .attr('x', legendRectSize + legendSpacing)
                .attr('y', legendRectSize - legendSpacing)
                .text(function(d) { return d; });
              //tooltip
              var tooltip = d3.select('#chart')
                .append('div')
                .attr('class', 'tooltip2')


              tooltip.append('div')
                .attr('class', 'label');

              tooltip.append('div')
                .attr('class', 'count');

              tooltip.append('div')
                .attr('class', 'percent');

              path.on('mouseover', function(d) {
                var total = d3.sum(d3.values(result).map(function(d) {
                  return d.sum;
                }));

                var percent = d3.round(100 * d.data.sum / total, 1);
                tooltip.select('.label').html(d.data.label);
                tooltip.select('.count').html(d3.round(d.data.sum, 2));
                tooltip.select('.percent').html(percent + '%');
                tooltip.style('display', 'block');
              });
              
              path.on('mouseout', function() {
                tooltip.style('display', 'none');
              });

            }; //end productline
          });

        }
      }
  }]);
