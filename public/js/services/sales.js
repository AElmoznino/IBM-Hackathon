angular
  .module('fanCo')
  .factory('sales', ['$http', function($http) {
    var salesService = {
      salesData: [],
      pricesData: [],
      sales: [],
      prices: {},

      getAllSales: function() {
        var sales = {};
        return $http.get('/getSales').then(function(data) {
          angular.copy(data.data, salesService.salesData);
        }).then(function () {
          angular.forEach(salesService.salesData, function (val) {
            for (var prop in val) {
              if (prop === 'Week Of') {
                sales[val[prop]] = [];
              }
            }
          });

          angular.forEach(salesService.salesData, function (val) {
            for (var prop in sales) {
              if (val['Week Of'] === prop) {
                angular
                  .extend(sales[prop], sales[prop].push({
                    'SKU': val['SKU'],
                    'City': val['City'],
                    'Neighborhood': val['Neighborhood'],
                    'Channel':  val['Channel'],
                    'Sales (Units)': val['Sales (Units)']
                  }));
              }
            }
          });
          salesService.sales = sales;
        });

      },

      getPrices: function() {
        var prices = {};
        return $http.get('/getPrices').then(function(data) {
          angular.copy(data.data, salesService.pricesData);
        }).then(function () {
          angular.forEach(salesService.pricesData, function (val) {
            for (var prop in val) {
              if (prop === 'SKU') {
                prices[val[prop]] = {};
              }
            }
          });

          angular.forEach(salesService.pricesData, function (val) {
            for (var prop in prices) {
              if (val['SKU'] === prop) {
                prices[prop][val['Channel']] = val['Revenue Per Unit Sold ($)'];
              }
            }
          });
          salesService.prices = prices;
        });
      }
    }

    return salesService;
  }]);
