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

            var data = scope.dataset;
            // console.log(data1);

            var getSumByDate = function (data) {
              var sumObj = {};
              angular.forEach(data, function (val, key) {
                sumObj[key] = [];
              });

              angular.forEach(data, function (val, key) {
                for (var i = 0; i < val.length; i++) {
                  sumObj[key].push(val[i]['Revenue Per Unit Sold ($)'] * val[i]['Sales (Units)']);
                }
              });

              return sumObj;
            }

            var getSum = function (data) {
              var sum = [];
              angular.forEach(data, function (val, key) {
                var tmp = 0;
                for (var i = 0; i < val.length; i++) {
                  // sum.push(val[i]['Revenue Per Unit Sold ($)'] * val[i]['Sales (Units)']);
                  tmp += val[i];
                }
                sum.push(tmp);
              });
              return sum;
            }



            var l = getSumByDate(data);
            var s = getSum(l);

            console.log(d3.min(s),d3.max(s) );
            var parseDate = d3.time.format("%U").parse;

            angular.forEach(l, function (v, key) {
              var d = new Date(key);
              console.log(d.timestamp);
            });

            var chart = d3.select(".chart").append('svg'),
                width = 1000,
                height = 500,
                margins = {
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 50
                },
                xScale = d3.scale.linear().range([margins.left, width - margins.right]).domain([d3.min(s),d3.max(s)]),
                yScale = d3.scale.linear().range([height - margins.top, margins.bottom]).domain([d3.min(s),d3.max(s)]),
                xAxis = d3.svg
                          .axis()
                          .scale(xScale),

                yAxis = d3.svg
                          .axis()
                          .scale(yScale);

                chart.append('svg:g')
                     .call(xAxis);

          });
        }
      }

  }]);
