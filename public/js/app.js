angular
  .module('fanCo', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/templates/home.html',
        resolve: {
          getData: ['sales', function (sales) {
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
      .state('neighborhood', {
        url: '/neighborhood',
        templateUrl: '/templates/neighbourhood.html',
        controller: 'SalesCtrl'
      })
       .state('channel', {
        url: '/channel',
        templateUrl: '/templates/channel.html',
        controller: 'SalesCtrl'
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
