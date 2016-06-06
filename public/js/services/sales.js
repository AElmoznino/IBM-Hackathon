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
        // using $q to resolve a promise
        var defer = $q.defer();
        var that = this;
        // using promise to be sure that I get dataand after it displaying data
        $q.all([
          //assuring that the data already stored
          $q.when(this.getAllSales()),
          $q.when(this.getPrices())
        ])
        // after succesful call I'm doing some manipulation with object
        .then(function () {
          // creating a new object to store specific data
          var data = [];
          // looping over 2 objects and combining data into one
          for (var i = 0; i < that.pricesData.length; i++) {
            angular.forEach(that.salesData, function (val) {
              if (that.pricesData[i]['SKU'] === val['SKU'] && val['Channel'] === that.pricesData[i]['Channel']) {
                val['Revenue Per Unit Sold ($)'] = that.pricesData[i]['Revenue Per Unit Sold ($)'];
              }
            });
          }

          //sending to directives data with specific elements
          angular.forEach(that.salesData, function (val, key) {
            data.push({
                'Week Of': val['Week Of'],
                'SKU': val['SKU'],
                'City': val['City'],
                'Neighborhood': val['Neighborhood'],
                'Channel':  val['Channel'],
                'Sales (Units)': val['Sales (Units)'],
                'Revenue Per Unit Sold ($)': val['Revenue Per Unit Sold ($)']
              });
          });
          // resolving a promise
          defer.resolve(data);
       }, function (err) {
         // rejecting if happened something on the way
         defer.reject(err);
         console.log(err);
       });

       //sending back promise
       return defer.promise;
     }
   }

    return salesService;
  }]);
