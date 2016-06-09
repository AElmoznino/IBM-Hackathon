module.exports = function(d3Service, d3func, sales) {
      return {
        link: function(scope, element, attrs) {
          d3Service.d3().then(function(d3) {
            // var fetchData = sales.getJoinSalesAndPrices();

            // fetchData.then(function (data) {
            //   productLine(data);
            // });

var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .rangeRound([height, 0]);

var color = d3.scale.ordinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickFormat(d3.format(".2s"));

var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var data = [
    {
    "Date": "May",
    "Retail": 500,
    "Direct Sales": 60
  },{
    "Date": "June",
    "Retail": 250,
    "Direct Sales": 55
  },{
    "Date": "July",
    "Retail": 300,
    "Direct Sales": 333
  },{
    "Date": "August",
    "Retail": 240,
    "Direct Sales": 423
  },{
    "Date": "September",
    "Retail": 240,
    "Direct Sales": 350
  },{
    "Date": "October",
    "Retail": 122,
    "Direct Sales":80
  }];
  color.domain(d3.keys(data[0]).filter(function(key) { return key !== "Date"; }));

  data.forEach(function(d) {
    var y0 = 0;
    d.ages = color.domain().map(function(name) { return {name: name, y0: y0, y1: y0 += +d[name]}; });
    d.total = d.ages[d.ages.length - 1].y1;
  });

  // data.sort(function(a, b) { return b.total - a.total; });

  x.domain(data.map(function(d) { return d.Date; }));
  y.domain([0, d3.max(data, function(d) { return d.total; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Sales channel");

  var date = svg.selectAll(".date")
      .data(data)
    .enter().append("g")
      .attr("class", "g")
      .attr("transform", function(d) { return "translate(" + x(d.Date) + ",0)"; });

  date.selectAll("rect")
      .data(function(d) { return d.ages; })
    .enter().append("rect")
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.y1); })
      .attr("height", function(d) { return y(d.y0) - y(d.y1); })
      .style("fill", function(d) { return color(d.name); })
      .on("mouseover", function() { tooltip.style("display", "block"); })
      .on("mouseout", function() { tooltip.style("display", "none"); })


  var legend = svg.selectAll(".legend")
      .data(color.domain().slice().reverse())
    .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  legend.append("rect")
      .attr("x", width - 18)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", color);

  legend.append("text")
      .attr("x", width - 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function(d) {
        console.log(d.ages);
        return d; });



  // Prep the tooltip bits, initial display is hidden

  var tooltip = d3.select('#chart')
    .append('div')
    .attr('class', 'tooltip3')


  tooltip.append('div')
    .attr('class', 'label')

  tooltip.append("rect")
    .attr("width", 30)
    .attr("height", 20)
    .attr("fill", "red")
    .attr("top", "-260px")
    .attr("left", "520px")
    .style("opacity", 0.5)

  tooltip.append("text")
    .attr("x", 15)
    .attr("dy", "1.2em")
    .style("text-anchor", "middle")
    .attr("font-size", "12px")
    .attr("font-weight", "bold");


          //end productline

            // pieChart(dataset);
          });

        }
      }
  }]);
