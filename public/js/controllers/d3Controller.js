angular.module('fanCo')
  .directive('barChart', ['d3Service', function(d3Service) {
    return {
      link: function(scope, element, attrs) {
        d3Service.d3().then(function(d3) {
          
          // axis
          var w = 500;
          var h = 300;
          var padding = 30;

          // var dataset = [
          //                 [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
          //                 [410, 12], [475, 44], [25, 67], [85, 21], [220, 88],[600, 150]
          //               ];

          //Dynamic, random dataset
          var dataset = [];
          var numDataPoints = 50;
          var xRange = Math.random() * 1000;
          var yRange = Math.random() * 1000;
          for (var i = 0; i < numDataPoints; i++) {
              var newNumber1 = Math.round(Math.random() * xRange);
              var newNumber2 = Math.round(Math.random() * yRange);
              dataset.push([newNumber1, newNumber2]);
          }

          // var formatAsPercentage = d3.format(".1%");

          var xScale = d3.scale.linear()
                               .domain([0, d3.max(dataset, function(d) { return d[0]; })]) //this loops through each of the x values in our arrays and returns the value of the greatest one
                               .range([padding, w - padding * 2]);   //the output range is set to 0 and w, the SVG’s width.

          var yScale = d3.scale.linear()
                               .domain([0, d3.max(dataset, function(d) { return d[1]; })])
                               .range([h - padding, padding]);

          var rScale = d3.scale.linear()
                               .domain([0, d3.max(dataset, function(d) { return d[1]; })])
                               .range([2, 5]);

          var xAxis = d3.svg.axis()
                            .scale(xScale) //tells where scale operates
                            .orient("bottom") //specifies where to set the labels
                            .ticks(5) //Set rough # of ticks. It's a suggestion.
                            // .tickFormat(formatAsPercentage);

          //Define Y axis
          var yAxis = d3.svg.axis()
                            .scale(yScale)
                            .orient("left")
                            .ticks(5);



          var svg = d3.select(".chart")
                      .append("svg")
                      .attr("width", w)
                      .attr("height", h);

          svg.selectAll("circle")
             .data(dataset)
             .enter()
             .append("circle")
             .attr("cx", function(d) {
                    return xScale(d[0]);
               })
             .attr("cy", function(d) {
                    return yScale(d[1]);
               })
             .attr("r", function(d) {
              return rScale(d[1]);
              });


          // svg.selectAll("text")
          //       .data(dataset)
          //       .enter()
          //       .append("text")
          //       .text(function(d) {
          //               return d[0] + "," + d[1];
          //          })
          //       .attr("x", function(d) {
          //           return xScale(d[0]);
          //       })
          //       .attr("y", function(d) {
          //           return yScale(d[1]);
          //       })
          //       .attr("font-family", "sans-serif")
          //       .attr("font-size", "11px")
          //       .attr("fill", "red");

          svg.append("g") //we need to call the axis
              .attr("class", "axis")  //Assign "axis" class
              .attr("transform", "translate(0," + (h - padding) + ")") //We transform the entire axis group, pushing it to the bottom. With the use of (h - padding), so the group’s top edge is set to h, the height of the entire image, minus the padding value we created earlier.
              .call(xAxis); //D3’s call() function takes a selection as input and hands that selection off to any function.

          //Create Y axis
          svg.append("g")
              .attr("class", "axis")
              .attr("transform", "translate(" + padding + ",0)")
              .call(yAxis);

        });
      }}
  }]);