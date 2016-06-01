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

            var svgW = 500;
            var svgH = 100;

            var data = scope.dataset;

            //Create SVG element
            var svg = d3.select(".chart")
                  .append("svg")
                  .attr("width", svgW)
                  .attr("height", svgH);

            var circles = svg.selectAll("circle")
                .data(data)
                .enter()
                .append("circle");

            circles.attr("cx", function(d, i) {
              return (i * 50) + 25; // i, is also automatically populated for us. i is a numeric index value of the current element. Counting starts at zero, so for our “first” circle i == 0, the second circle’s i == 1 and so on. We’re using i to push each subsequent circle over to the right, because each subsequent loop through, the value of i increases.
              })
             .attr("cy", h/2) //h is the height of the entire SVG, so h/2 is one-half of its height. This has the effect of aligning all circles in the vertical center.
             .attr("r", function(d) { //the radius r of each circle is simply set to d, the corresponding data value.
               return d;
             });

            circles.attr("fill", "yellow")
            .attr("stroke", "orange")
            .attr("stroke-width", function(d) {
                return d/2;
            });


            // axis
            var w = 500;
            var h = 300;
            var padding = 30;

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
        }
    }
  }]);
