angular
  .module('fanCo', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/templates/home.html'
      })
      .state('sales', {
        url: '/sales',
        templateUrl: '/templates/sales.html',
        controller: 'SalesCtrl'
      })
      .state('forecast', {
        url: '/forecast',
        templateUrl: '/templates/forecast.html'
      });

      $urlRouterProvider.otherwise('/home');
  }]);
