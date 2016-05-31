// var data = [10, 6, 16, 23, 42];
var data = d3.csv("../../data/fanco-sales.csv");

var stack = d3.stack()
  .keys()


// var x = d3.scale.linear()
//     .domain([0, d3.max(data)])
//     .range([0, 420]);

// d3.select(".chart")
//   .selectAll("div")
//     .data(data)
//   .enter().append("div")
//     .style("width", function(d) { return x(d) + "px"; })
//     .text(function(d) { return "Sales:" + d; });