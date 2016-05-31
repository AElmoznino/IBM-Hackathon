var app = angular.module('fanCo', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    // .state('home', {
    //   url: '/home',
    //   templateUrl: '/templates/home.html',
    //   controller: 'MainCtrl'
    // })
    .state('sales', {
      url: '/sales',
      templateUrl: '/templates/sales.html',
      controller: 'SalesCtrl',
      resolve: {
        salesPromise: ['sales',function(sales){
          console.log("Retrieved hardcoded sales data");
          return sales.getAllSales();
        }]
      }
    })
    // TODO: Implement Weather route for View 2
    // .state('weather', {
    //   url: '/weather',
    //   templateUrl: '/templates/weather.html',
    //   controller: 'WeatherCtrl'
    // })
    // the 'home' above is a placeholder for now. TODO: add more states
    $urlRouterProvider.otherwise('sales');
}]);



///////// ALL D3 DATA MANIPULATION SHOULD BE WITHIN SERVICES OR CONTROLLERS ////////

// Beginning of Andrés example below: 
// var data = d3.csv("../../data/fanco-sales.csv");

// var stack = d3.stack()
//   .keys()

// Rony's example below: 
// var data = [10, 6, 16, 23, 42];
// var x = d3.scale.linear()
//     .domain([0, d3.max(data)])
//     .range([0, 420]);

// d3.select(".chart")
//   .selectAll("div")
//     .data(data)
//   .enter().append("div")
//     .style("width", function(d) { return x(d) + "px"; })
//     .text(function(d) { return "Sales:" + d; });