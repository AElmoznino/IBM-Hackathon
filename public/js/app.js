(function() {
  'use strict';

  global.jQuery = global.$ = require('jquery');
  require('bootstrap');
  require('angular');
  require('angular-ui-router');

  var d3Service = require('./services/d3Service'),
      d3Func = require('./services/d3Data'),
      forecastServ = require('./services/forecast'),
      salesServ = require('./services/sales'),
      barsDirective = require('./directives/channelDirective'),
      pieDirective = require('./directives/pieDirective'),
      forecastDirective = require('./directives/forecastDirective'),
      productDirective = require('./directives/productDirective'),
      forecastCtrl = require('./controllers/forecastController');

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
        })
        .state('neighborhood', {
          url: '/neighborhood',
          templateUrl: '/templates/neighbourhood.html'
        })
         .state('channel', {
          url: '/channel',
          templateUrl: '/templates/channel.html'
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
    }])
    .factory('d3Service', ['$document', '$q', '$rootScope', d3Service])
    .factory('d3func', d3Func)
    .factory('forecast', ['$http', '$q', forecastServ])
    .factory('sales', ['$http', '$q', salesServ])
    .directive('channel',  ['d3Service', 'd3func', 'sales', barsDirective])
    .directive('pie',  ['d3Service', 'd3func', 'sales', pieDirective])
    .directive('forecastDirective', ['d3Service', 'forecast', forecastDirective])
    .directive('product',  ['d3Service', 'd3func', 'sales', productDirective])
    .controller('ForecastCtrl', ['$scope', 'forecast', forecastCtrl]);

}());
