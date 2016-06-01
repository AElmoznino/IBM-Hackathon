angular.module('fanCo')
  .directive('barChart', ['d3Service', 'sales', 'hardData', function(d3Service, sales, hardData) {
    return {
      link: function(scope, element, attrs) {
        d3Service.d3().then(function(d3) {

<<<<<<< HEAD
      //our data
      var dataset = [];

      var origData = hardData.datos;


      // console.log(dataset)

       /* Width and height */
      var w = 625,
      h = 300,
      /* Space between the bars */
      barPadding = 5,
      /* Padding used throughout the SVF */
      padding = 60,
      /* Delay used for transitions */
      delayLength = 500

      dateArray = [];

      salesArray = [];
      salesObjectArray = [];

      var getSales = function() { //we get the date and push into it's array
        for(var i = 0; i < origData.length; i++) { //loop through data
          for (var prop in origData[i]) { //loop through the objects of data
            var sales = origData[i]['Sales (Units)'];

            if (prop === 'Sales (Units)') {
              salesArray.push(sales); 
            }
            
          }
        }
      }
      
      // construir objeto con X y Y. x = index and y = data

      var getSalesObjectArray = function(x, y) {
        for (var i =0; i < dataset.length; i++){

        }
        for (var i =0; i < salesArray.length; i++){

        }
        


        for (var i = 0; i < dateArray.length; i++) {
          var newObject = {};
          newObject.x = i;
          newObject.y = salesArray[i];
          dataset.push(newObject);
          console.log(dataset)
        };
      }

      var getDate = function() { //we get the date and push into it's array
        for(var i = 0; i < origData.length; i++) { //loop through data
          for (var prop in origData[i]) { //loop through the objects of data
            // console.log(data[i]['Week Of']);
            var date = origData[i]['Week Of'];
            if (prop === 'Week Of') {
              dateArray.push(date);
              // console.log(date)
            }
          }
        }
      }
      getDate()
      getSales()
      getSalesObjectArray()

      // console.log(salesArray)
     

     /* Define X scale */
           var xScale = d3.scale.linear()
             .domain([padding, w ])
             .range([padding, w  ]);    

           /* Define Y scale */
           var yScale = d3.scale.linear()
             .domain([0,       
               d3.max(dataset, function(d) {
                 return d3.max(d, function(d) {
                   return  d.y;
                 });
               })
             ])
             .range([padding, h]);

           /* Define X axis */
           var xAxis = d3.svg.axis()
             .scale(xScale)
             .orient("bottom")
             .tickSize(0, 0)
             .ticks(0);

           /* Define Y axis */
           var yAxis = d3.svg.axis()
             .scale(yScale)
             .orient("left")
             .tickSize(6, 0)
             .ticks(7);

           /* Create SVG element */
           var svg = d3.select(".chart")
                 .append("svg")
                 .attr("width", w)
                 .attr("height", h + (padding / 2));

           
           /* Add a rect for each data value */
           var rects = svg.selectAll("rect")
             .data(dataset)
             .enter()
             .append("rect")
             .attr("x", function(d, i) {
              console.log(dataset)
               return i * ((w - padding) / dataset.length) + padding;;
             })
             .attr("y", function(d) {
              // console.log(d.y)
               return d.y  + d.y - h;
              }
             )
             .attr("height", h
             //  function(d) {
             //   // return h - yScale(d.y);
             // }
             )
             .attr("width", (w - padding) / dataset.length - barPadding )
             /* When the user mouses over a bar show the tooltip div and fill it with the relevant data */
             /* Not such a great solution for touchscreens? */
             .on("mouseover", function(d) {

               /* Get this bar's x/y values, then augment for the tooltip */
               var xPosition;
               var toolTipHeight = parseInt($(".tooltip").css("height"));
               var yPosition = parseInt(d3.select(this).attr("y") ) + (parseInt(d3.select(this).attr("height")) / 2) - toolTipHeight;
               

               if ( d3.select(this).attr("x") < 350) {
                 xPosition = parseFloat(d3.select(this).attr("x")) + 27;
                 d3.select(".tooltip").classed("tooltip-left", false).classed("tooltip-right", true);
               } else {
                 xPosition = parseFloat(d3.select(this).attr("x")) -140;
                 d3.select(".tooltip").classed("tooltip-left", true).classed("tooltip-right", false);;
               }

               /* Update the tooltip position and value */
               d3.select(".tooltip")
                 .style("left", xPosition + "px")
                 .style("top", yPosition + "px")
                 .select(".value")
                 .text(d.y);

               /* Show the tooltip */
               d3.select(".tooltip").classed("hidden", false);

             })
             .on("mouseout", function() {
               /* Hide the tooltip */
               d3.select(".tooltip").classed("hidden", true);
               
             });

           /* Take the datearray and use it lable the x axis */
           svg.selectAll("text")
             .data(dateArray)
             .enter()
             .append("text")
             .text(function(d) {
               return d;
             })
             .attr("x", function(d, i){
               return i * ((w - padding) / dateArray.length) + (((w - padding) / dateArray.length - barPadding) / 2) + padding; 
              })
             .attr("y", function(d){
               return h + 12;
             })
             .attr("font-family", "sans-serif")
             .attr("font-size", "11px")
             .attr("fill", "black")
             .attr("text-anchor", "middle"); 

           /* Create X axis */
           svg.append("g")
             .attr("class", "x axis")
             .attr("transform", "translate(0," + h +  ")")
             .call(xAxis);

           /* Create Y axis */
           svg.append("g")
             .attr("class", "y axis")
             .attr("transform", "translate(" +  padding + ", 0)")
             .call(yAxis)
             /* Add some extra text for the unit alongside the axis */ 
             .append("text")
             .attr("transform", "rotate(-90)") 
             .attr("y", -padding +12) /* magic number just to stop the top of the T being cut off */
             .attr("x", -(h / 2))
             .attr("dy", ".71em")
             .style("text-anchor", "end")
             .text("Thousands");

          

       

         



       


        
=======
          var data = sales.salesData;
          // // console.log(sales.salesData)

          var margin = {top: 20, right: 40, bottom: 40, left:50},
              width = 900,
              height = 500;

          var x = d3.time.scale()
              .domain([new Date(data[0]['Week Of']), d3.time.day.offset(new Date(data[1]['Week Of']), 1)])
              .rangeRound([0, width - margin.left - margin.right]);
              // console.log(data[data.length - 1]['Week Of'])
          var y = d3.scale.linear()
              .domain([0, d3.max(data, function(d) { return d['Sales (Units)']; })])
              .range([height - margin.top - margin.bottom, 0]);

          var xAxis = d3.svg.axis()
              .scale(x)
              .orient('bottom')
              .ticks(d3.time.days, 1)
              .tickFormat(d3.time.format(' %d %m %y'))
              .tickSize(0)
              .tickPadding(8);

          var yAxis = d3.svg.axis()
              .scale(y)
              .orient('left')
              .tickPadding(8);

          var svg = d3.select('.chart').append('svg')
              .attr('class', 'chart')
              .attr('width', width)
              .attr('height', height)
            .append('g')
              .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

          svg.selectAll('.chart')
              .data(data)
              .enter().append('rect')
              .attr('class', 'bar')
              .attr('x', function(d) { return x(new Date(d['Week Of'])); })
              .attr('y', function(d) { return height - margin.top - margin.bottom - (height - margin.top - margin.bottom - y(d['Sales (Units)'])) })
              .attr('width', 10)
              .attr('height', function(d) { return height - margin.top - margin.bottom - y(d['Sales (Units)']) });

          svg.append('g')
              .attr('class', 'x axis')
              .attr('transform', 'translate(0, ' + (height - margin.top - margin.bottom) + ')')
              .call(xAxis);

          svg.append('g')
            .attr('class', 'y axis')
            .call(yAxis);

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
>>>>>>> master

        });
      }}
  }]);
<<<<<<< HEAD


  //arrays for storing the specific data
         //   dateArray = [];
         //   productArray = [];
         //   salesArray = [];
         //   salesObjectArray = [];

         //   var getDate = function() { //we get the date and push into it's array
         //     for(var i = 0; i < 3; i++) { //loop through data
         //       for (var prop in data[i]) { //loop through the objects of data
         //         // console.log(data[i]['Week Of']);
         //         var date = data[i]['Week Of'];
         //         if (prop === 'Week Of') {
         //           dateArray.push(date);
         //           // console.log(date)
         //         }
         //       }
         //     }
         //   }

         //   // var getSku = function() { //we get the date and push into it's array
         //   //   for(var i = 0; i < 3; i++) { //loop through data
         //   //     for (var prop in data[i]) { //loop through the objects of data
         //   //       var sku = data[i]['SKU'];
         //   //       if (prop === 'SKU') {
         //   //         productArray.push(sku); 
         //   //       }
         //   //     }
         //   //   }
         //   // }
         //   // getSku();

         //   var getSales = function() { //we get the date and push into it's array
         //     for(var i = 0; i < 3; i++) { //loop through data
         //       for (var prop in data[i]) { //loop through the objects of data
         //         var sales = data[i]['Sales (Units)'];

         //         if (prop === 'Sales (Units)') {
         //           salesArray.push(sales); 
         //         }
                 
         //       }
         //     }
         //   }

         // var getSalesObjectArray = function (x, y) {
         //    //we get the date and push into it's array
         //   for(var i = 0; i < 3; i++) { //loop through data
         //     for (var prop in data[i]) { //loop through the objects of data
         //       var sku = data[i]['SKU'];
         //       if (prop === 'SKU') {
         //         productArray.push(sku); 
         //         // console.log(sku)
         //       }
         //     }
         //   }
         
         

         //    for (var i = 0; i < dateArray.length; i++) {
         //           var newObject = {};
         //           newObject.x = i;
         //           newObject.y = productArray[i];
         //           salesObjectArray.push(newObject);
         //           console.log(newObject)
         //    }; 
         // };

         // getDate(); 
         // getSales();
         // getSalesObjectArray();


         // console.log(salesArray)
         // console.log(productArray)
         // console.log(dateArray)
         // console.log(salesObjectArray)
=======
>>>>>>> master
