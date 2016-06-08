angular
  .module('fanCo')
  .factory('d3func', [function () {
    var getSumByDate = function (data) {
      var sumObj = {};

      angular.forEach(data, function (val, key) {
        sumObj[val['date']] = {
          date: val['date'],
          sum: 0
        };
      });

      angular.forEach(sumObj, function (val, key) {
        angular.forEach(data, function (v, k) {
          if (key === v.date) {
            // val.sum.push(v.cost * v.sales)
            val.sum += (v.cost * v.sales)
          }
        });
      });

      return sumObj;
    }

    var getSumByProduct = function (data) {
      var prodObj = {};
      angular.forEach(data, function (val, key) {
        prodObj[val['product']] = [];
      });

      angular.forEach(data, function (val, key) {
        prodObj[val['product']].push({
          date: val.date,
          sum: val['cost'] * val['sales']
        });
      });

      return prodObj;
    }

    var getSumByNeighborhood = function (data) {
      // console.log(data);
      var neighObj = {};
      angular.forEach(data, function (val, key) {
        neighObj[val['neighborhood']] = {
          label: val.neighborhood,
          sum: val['cost'] * val['sales']
        };
      });

      angular.forEach(neighObj, function (val, key) {
        angular.forEach(data, function (v, k) {
          if (key === v.neighborhood) {
            val.sum += (v.cost * v.sales)
          }
        })
      });

      // console.log(neighObj);
      return neighObj;
    }

    return {
      getSumByDate: getSumByDate,
      getSumByProduct: getSumByProduct,
      getSumByNeighborhood: getSumByNeighborhood
    }

  }])
