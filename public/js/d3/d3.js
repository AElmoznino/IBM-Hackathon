//Width and height
var svgW = 500;
var svgH = 100;

//Data
var dataset = [ 5, 10, 15, 20, 25 ];

//Create SVG element
var svg = d3.select(".chart")
      .append("svg")
      .attr("width", svgW)
      .attr("height", svgH);

var circles = svg.selectAll("circle")
    .data(dataset)
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


// //Width and height
// var svgW = 500;
// var svgH = 100;
// var barPadding = 1;

// //Data
// var dataset = [ 12, 10, 13, 19, 21, 25, 22, 18, 15, 13,
//                 11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

// //Create SVG element
// var svg = d3.select(".chart")
//       .append("svg")
//       .attr("width", svgW)
//       .attr("height", svgH);

// svg.selectAll("rect")
//    .data(dataset)
//    .enter() //data(dataset) sees that we have 20 values in the data set, so it calls enter() 20 times. enter()
//    .append("rect")
//    .attr("fill", function(d) {
//     return "rgb(0, " + (d * 10) + ", 0)";
//     })
//    .attr("x", function(d, i) {
//        return i * (svgW / dataset.length);
//    })
//    .attr("y", function(d) {
//        return svgH - (d*4);  //Height minus data value
//    })
//    .attr("width", svgW / dataset.length - barPadding)
//    .attr("height", function(d) {
//        return d * 4;  //Just the data value
//    });

//    svg.selectAll("text")
//       .data(dataset)
//       .enter()
//       .append("text")
//       .text(function(d) {
//               return d;
//          })
//      .attr("x", function(d, i) {
//             return i * (svgW / dataset.length) + (svgW / dataset.length - barPadding) / 2;
//         })
//       .attr("y", function(d) {
//              return svgH - (d * 4) + 14;              // +15
//         })
//       .attr("font-family", "sans-serif")
//       .attr("font-size", "11px")
//       .attr("fill", "white")
//       .attr("text-anchor", "middle")

// var w = 500;
// var h = 100;

// var dataset = [
//                 [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
//                 [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
//               ];

// //Create SVG element
// var svg = d3.select(".chart")
//             .append("svg")
//             .attr("width", w)
//             .attr("height", h);


// svg.selectAll("circle")
//    .data(dataset)
//    .enter()
//    .append("circle")
//    .attr("cx", function(d) {
//           return d[0];
//      })
//    .attr("cy", function(d) {
//           return d[1];
//      })
//    .attr("r", function(d) {
//        return Math.sqrt(h - d[1]);
//    })


// svg.selectAll("text")
//       .data(dataset)
//       .enter()
//       .append("text")
//       .text(function(d) {
//               return d[0] + "," + d[1];
//          })
//       .attr("x", function(d) {
//              return d[0];
//         })
//         .attr("y", function(d) {
//              return d[1];
//         })
//         .attr("font-family", "sans-serif")
//         .attr("font-size", "11px")
//         .attr("fill", "red");


//scales
// var w = 500;
// var h = 300;
// var padding = 20;

// var dataset = [
//                 [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
//                 [410, 12], [475, 44], [25, 67], [85, 21], [220, 88],[600, 150]
//               ];


// var xScale = d3.scale.linear()
//                      .domain([0, d3.max(dataset, function(d) { return d[0]; })]) //this loops through each of the x values in our arrays and returns the value of the greatest one
//                      .range([padding, w - padding * 2]);   //the output range is set to 0 and w, the SVG’s width.

// var yScale = d3.scale.linear()
//                      .domain([0, d3.max(dataset, function(d) { return d[1]; })])
//                      .range([h - padding, padding]);

// var rScale = d3.scale.linear()
//                      .domain([0, d3.max(dataset, function(d) { return d[1]; })])
//                      .range([2, 5]);


// var svg = d3.select(".chart")
//             .append("svg")
//             .attr("width", w)
//             .attr("height", h);

// svg.selectAll("circle")
//    .data(dataset)
//    .enter()
//    .append("circle")
//    .attr("cx", function(d) {
//           return xScale(d[0]);
//      })
//    .attr("cy", function(d) {
//           return yScale(d[1]);
//      })
//    .attr("r", function(d) {
//     return rScale(d[1]);
//     });


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
