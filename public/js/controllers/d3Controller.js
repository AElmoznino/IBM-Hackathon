angular.module('fanCo')
  .directive('barChart', ['d3Service', 'sales', function(d3Service, sales) {
    return {
      link: function(scope, element, attrs) {
        d3Service.d3().then(function(d3) {

          //our data
          var data = sales.salesData;

          //arrays for storing the specific data
          dateArray = [];
          productArray = [];
          salesArray = [];

          var getDate = function() { //we get the date and push into it's array
            for(var i = 0; i < 3; i++) { //loop through data
              for (var prop in data[i]) { //loop through the objects of data
                // console.log(data[i]['Week Of']);
                var date = data[i]['Week Of'];
                if (prop === 'Week Of') {
                  dateArray.push(date);
                }
              }
            }
          }
          getDate(); 

          var getSku = function() { //we get the date and push into it's array
            for(var i = 0; i < 3; i++) { //loop through data
              for (var prop in data[i]) { //loop through the objects of data
                var sku = data[i]['SKU'];
                if (prop === 'SKU') {
                  productArray.push(sku); 
                }
              }
            }
          }
          getSku();

          var getSales = function() { //we get the date and push into it's array
            for(var i = 0; i < 3; i++) { //loop through data
              for (var prop in data[i]) { //loop through the objects of data
                var sales = data[i]['Sales (Units)'];

                if (prop === 'Sales (Units)') {
                  salesArray.push(sales); 
                }
                
              }
            }
          }
          getSales();
          console.log(salesArray)
          console.log(productArray)
          console.log(dateArray)

          // // console.log(sales.salesData)

          // var margin = {top: 20, right: 40, bottom: 40, left:50},
          //     width = 900,
          //     height = 500;

          // var x = d3.time.scale()
          //     .domain([new Date(data[0]['Week Of']), d3.time.day.offset(new Date(data[1]['Week Of']), 1)])
          //     .rangeRound([0, width - margin.left - margin.right]);
          //     console.log(data[data.length - 1]['Week Of'])
          // var y = d3.scale.linear()
          //     .domain([0, d3.max(data, function(d) { return d['Sales (Units)']; })])
          //     .range([height - margin.top - margin.bottom, 0]);

          // var xAxis = d3.svg.axis()
          //     .scale(x)
          //     .orient('bottom')
          //     .ticks(d3.time.days, 1)
          //     .tickFormat(d3.time.format(' %d %m %y'))
          //     .tickSize(0)
          //     .tickPadding(8);

          // var yAxis = d3.svg.axis()
          //     .scale(y)
          //     .orient('left')
          //     .tickPadding(8);

          // var svg = d3.select('.chart').append('svg')
          //     .attr('class', 'chart')
          //     .attr('width', width)
          //     .attr('height', height)
          //   .append('g')
          //     .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

          // svg.selectAll('.chart')
          //     .data(data)
          //     .enter().append('rect')
          //     .attr('class', 'bar')
          //     .attr('x', function(d) { return x(new Date(d['Week Of'])); })
          //     .attr('y', function(d) { return height - margin.top - margin.bottom - (height - margin.top - margin.bottom - y(d['Sales (Units)'])) })
          //     .attr('width', 10)
          //     .attr('height', function(d) { return height - margin.top - margin.bottom - y(d['Sales (Units)']) });

          // svg.append('g')
          //     .attr('class', 'x axis')
          //     .attr('transform', 'translate(0, ' + (height - margin.top - margin.bottom) + ')')
          //     .call(xAxis);

          // svg.append('g')
          //   .attr('class', 'y axis')
          //   .call(yAxis);

          // axis
          // var w = 500;
          // var h = 300;
          // var padding = 30;

          // var margin = {top: 20, right: 20, bottom: 20, left:20},
          // width = 600,
          // height = 500;

          // var dataset = sales.salesData;
          // // console.log(sales.salesData)


          // var xScale = d3.scale.linear()
          //                      .domain([0, d3.max(dataset, function(d) { return d[0]; })]) //this loops through each of the x values in our arrays and returns the value of the greatest one
          //                      .range([padding, w - padding * 2]);   //the output range is set to 0 and w, the SVG’s width.

          // var yScale = d3.scale.linear()
          //                      .domain([0, d3.max(dataset, function(d) { return d[1]; })])
          //                      .range([h - padding, padding]);

          // // var rScale = d3.scale.linear()
          // //                      .domain([0, d3.max(dataset, function(d) { return d[1]; })])
          // //                      .range([2, 5]);
          // console.log(yScale)
          // console.log(xScale)
          // var xAxis = d3.svg.axis()
          //                   .scale(xScale) //tells where scale operates
          //                   .orient("bottom") //specifies where to set the labels
          //                   .ticks(5) //Set rough # of ticks. It's a suggestion.
          //                   // .tickFormat(formatAsPercentage);
          //             d3.time.scale()
          //               .domain([new Date(dataset[0]['Week Of']), d3.time.day.offset(new Date(dataset[dataset.length - 1].date), 1)])
          //               .rangeRound([0, width - margin.left - margin.right]);

          //               console.log(dataset[0]['Week Of'])
          //               console.log(new Date)
          // //Define Y axis
          // var yAxis = d3.svg.axis()
          //                   .scale(yScale)
          //                   .orient("left")
          //                   .ticks(5);



          // var svg = d3.select(".chart")
          //             .append("svg")
          //             .attr("width", w)
          //             .attr("height", h);

          // // svg.selectAll("circle")
          // //    .data(dataset)
          // //    .enter()
          // //    .append("circle")
          // //    .attr("cx", function(d) {
          // //           return xScale(d[0]);
          // //      })
          // //    .attr("cy", function(d) {
          // //           return yScale(d[1]);
          // //      })
          // //    .attr("r", function(d) {
          // //     return rScale(d[1]);
          // //     });


          // // svg.selectAll("text")
          // //       .data(dataset)
          // //       .enter()
          // //       .append("text")
          // //       .text(function(d) {
          // //               return d[0] + "," + d[1];
          // //          })
          // //       .attr("x", function(d) {
          // //           return xScale(d[0]);
          // //       })
          // //       .attr("y", function(d) {
          // //           return yScale(d[1]);
          // //       })
          // //       .attr("font-family", "sans-serif")
          // //       .attr("font-size", "11px")
          // //       .attr("fill", "red");

          // svg.append("g") //we need to call the axis
          //     .attr("class", "axis")  //Assign "axis" class
          //     .attr("transform", "translate(0," + (h - padding) + ")") //We transform the entire axis group, pushing it to the bottom. With the use of (h - padding), so the group’s top edge is set to h, the height of the entire image, minus the padding value we created earlier.
          //     .call(xAxis); //D3’s call() function takes a selection as input and hands that selection off to any function.

          // //Create Y axis
          // svg.append("g")
          //     .attr("class", "axis")
          //     .attr("transform", "translate(" + padding + ",0)")
          //     .call(yAxis);

        });
      }}
  }]);