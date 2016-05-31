angular.module('fanCo').factory('sales', ['$http', function($http) {
  var salesService = {
    salesData: [],

    getAllSales: function() {
      return $http.get('/getSales').then(function(data) {
        angular.copy(data.data, salesService.salesData);
      });
    }
  }

  
  return salesService;
}]);

// TODO: Handle the sales data coming in from the GET request.
//
