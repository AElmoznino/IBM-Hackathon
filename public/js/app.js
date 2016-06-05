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
        controller: 'SalesCtrl',
        resolve: {
          allData: ['sales',function(sales){
            sales.getAllSales();
            sales.getPrices();
          }]
        }
      })
      .state('forecast', {
        url: '/forecast',
        templateUrl: '/templates/forecast.html',
        controller: 'ForecastCtrl',
        resolve: {
          allData: ['forecast', function(forecast){
            return forecast.getForecast();
          }]
        }
      });

      $urlRouterProvider.otherwise('/home');
  }]);
