angular
  .module('fanCo', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/templates/home.html',
        controller: 'MainCtrl'
      })
      .state('home.sales', {
        url: '/sales',
        templateUrl: '/templates/sales.html',
        controller: 'SalesCtrl',
        resolve: {
          salesPromise: ['sales',function(sales){
            sales.getAllSales();
          }]
        }
      }).state('home.d3', {
        url: '/d3',
        templateUrl: '/templates/d3.html'
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
