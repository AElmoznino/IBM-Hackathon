angular.module('fanCo').factory('sales', ['$http', function($http) {
  var salesService = {
    salesData: [],
    pricesData: [],

    getAllSales: function() {
      return $http.get('/getSales').then(function(data) {
        angular.copy(data.data, salesService.salesData);
      });
    },

    getPrices: function() {
      return $http.get('/getPrices').then(function(data) {
        angular.copy(data.data, salesService.pricesData);
      });
    }
  }

  
  return salesService;
}]);

// TODO: Handle the sales data coming in from the GET request.
//
