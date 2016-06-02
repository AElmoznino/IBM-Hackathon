angular
  .module('fanCo', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/templates/home.html',
        controller: 'MainCtrl',
        resolve: {
          allData: ['sales',function(sales){
            sales.getAllSales();
            sales.getPrices();
          }]
        }
      })
      .state('sales', {
        url: '/sales',
        templateUrl: '/templates/sales.html',
        controller: 'SalesCtrl'
      })
      .state('home.d3', {
        url: '/d3',
        templateUrl: '/templates/d3.html'
      })
      .state('price', {
        url: '/prices',
        templateUrl: '/templates/prices.html',
        controleer: 'SalesCtrl',
        resolve: {
          allData: ['sales',function(sales){
            sales.getAllSales();
            sales.getPrices();
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
      $urlRouterProvider.otherwise('/home');
  }]);
