angular.module('fanCo')
  .directive('barChart', ['d3Service', 'sales', 'hardData', function(d3Service, sales, hardData) {
    return {
      link: function(scope, element, attrs) {
        d3Service.d3().then(function(d3) {

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

          

       

         



       


        

        });
      }}
  }]);


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