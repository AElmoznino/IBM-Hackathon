angular
  .module('fanCo')
  .factory('sales', ['$http', '$q', function($http, $q) {
    var salesService = {
      salesData: [],
      pricesData: [],

      getAllSales: function() {
        var sales = {};
        return $http.get('/getSales').then(function(data) {
          angular.copy(data.data, salesService.salesData);
        })
      },

      getPrices: function() {
        var prices = {};
        return $http.get('/getPrices').then(function(data) {
          angular.copy(data.data, salesService.pricesData);
        });
      },

      getJoinSalesAndPrices: function () {
        var defer = $q.defer();
        var that = this;
        $q.all([
          $q.when(this.getAllSales()),
          $q.when(this.getPrices())
        ])
        .then(function () {
          var data = [];
          angular.forEach(that.salesData, function (val) {
            for (var i = 0; i < that.pricesData.length; i++) {
              if (that.pricesData[i]['SKU'] === val['SKU'] && that.pricesData[i]['Channel'] === val['Channel']) {
                val['Revenue Per Unit Sold ($)'] = that.pricesData[i]['Revenue Per Unit Sold ($)'];
              }
            }
          });

          angular.forEach(that.salesData, function (val, key) {
            angular
              .extend({}, data.push({
                'Week Of': val['Week Of'],
                'SKU': val['SKU'],
                'City': val['City'],
                'Neighborhood': val['Neighborhood'],
                'Channel':  val['Channel'],
                'Sales (Units)': val['Sales (Units)'],
                'Revenue Per Unit Sold ($)': val['Revenue Per Unit Sold ($)']
              }));
          });

          defer.resolve(data);
       }, function (err) {
         defer.reject(err);
         console.log(err);
       });

       return defer.promise;
     }
   }

    return salesService;
  }]);
