'use stricts';

module.exports = function(d3Service, d3func, sales) {
    return {
      link: function(scope, element, attrs) {
        d3Service.d3().then(function(d3) {
          var fetchData = sales.getJoinSalesAndPrices();

          fetchData.then(function (data) {
            chartBars(d3.values(data).sort(function(a, b) { return new Date(a.date) - new Date(b.date)}));
            // chartBars(data);
          });

          var chartBars = function (sortbyDate) {
            var margin = {top: 20, right: 20, bottom: 30, left: 40},
                width = 960 - margin.left - margin.right,
                height = 500 - margin.top - margin.bottom;


            var xScale = d3.scale.ordinal()
                .rangeRoundBands([0, width], .3);

            var yScale = d3.scale.linear()
                .rangeRound([height, margin.bottom]);

            var color = d3.scale.ordinal()
                .range(['#98abc5', '#8a89a6', '#7b6888', '#6b486b', '#a05d56', '#d0743c', '#ff8c00']);

            var xAxis = d3.svg.axis()
                .scale(xScale)
                .tickSize(0)
                .tickFormat(d3.time.format('%b %y'));

            var yAxis = d3.svg.axis()
                .scale(yScale)
                .orient('left')
                .tickSize(0)
                .tickFormat(d3.format('.2s'));

            var svg = d3.select('#chart')
                .append('svg')
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append('g')
                .attr('transform', 'translate(' + margin.left + ',0)');

            color.domain(d3.values(sortbyDate).map(function (d) {
              return d.channel;
            }));

            angular.forEach(sortbyDate, function(d) {
              var y0 = 0;
              d.ages = color.domain()
                        .map(function(name) {
                          return {
                            name: name,
                            y0: y0,
                            y1: y0 += d.sales
                          };
                        });
              d.total = d.ages[d.ages.length - 1].y1;
            });

            xScale.domain(d3.values(sortbyDate).map(function(d) { return new Date(d.date); }));

            yScale.domain(d3.extent(d3.values(sortbyDate), function (d) { return d.total; }));

            svg.append('g')
                .attr('class', 'x axis')
                .attr('transform', 'translate(0,' + height + ')')
                .call(xAxis);

            svg.selectAll('.x text')  // select all the text elements for the xaxis
                // .attr('content', 'week')
                .attr('transform', function(d) {
                  return 'translate('+ -this.getBBox().height*0.7 + ',' + this.getBBox().height*1.3 + ')rotate(-65)';
                });

            svg.append('g')
                .attr('class', 'y axis')
                .call(yAxis)
                .append('text')
                .attr('transform', 'rotate(-90)')
                .attr('y', 6)
                .attr('dy', '.71em')
                .style('text-anchor', 'end')
                .text('Sales channel');

            var date = svg.selectAll('.date')
                .data(d3.values(sortbyDate))
                .enter()
                .append('g')
                .attr('class', 'g')
                .attr('transform', function(d) { return 'translate(' + xScale(new Date(d.date)) + ',0)'; });

            date.selectAll('rect')
                .data(function(d) { return d.ages; })
                .enter()
                .append('rect')
                .attr('width', xScale.rangeBand())
                .attr('y', function(d) { return yScale(d.y1); })
                .attr('height', function(d) { return yScale(d.y0) - yScale(d.y1); })
                .style('fill', function(d) { return color(d.name); })

            var legend = svg.selectAll('.legend')
                .data(color.domain().slice())
                .enter()
                .append('g')
                .attr('class', 'legend')
                .attr('transform', function(d, i) { return 'translate(0,' + i * 20 + ')'; });

            legend.append('rect')
                .attr('x', width - 18)
                .attr('width', 18)
                .attr('height', 18)
                .style('fill', color);

            legend.append('text')
                .attr('x', width - 24)
                .attr('y', 9)
                .attr('dy', '.35em')
                .style('text-anchor', 'end')
                .text(function(d) { return d; });


          };
      }); // end of d3
    }
  }
};
