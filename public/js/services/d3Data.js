angular
  .module('fanCo')
  .factory('d3func', ['sales', function (sales) {
    var getSumByDate = function (data) {
      // console.log(data);
      var sumObj = {};
      angular.forEach(data, function (val, key) {
        sumObj[val['date']] = [];
      });

      angular.forEach(data, function (val, key) {
        sumObj[val['date']].push(val['cost'] * val['sales']);
      });

      // console.log(sumObj);
      return sumObj;
    }
   
   var getSumByProduct = function (data) {
        // console.log(data);
        var prodObj = {};
        angular.forEach(data, function (val, key) {
          prodObj[val['product']] = [];
          // console.log(val)
        });

        angular.forEach(data, function (val, key) {
          prodObj[val['product']].push({
            date: val.date,
            sum: val['cost'] * val['sales']
          });
        });

        console.log(prodObj);
        return prodObj;
      }
      
    var getSum = function (data) {
      var sum = [];

      angular.forEach(data, function (val, key) {
        var tmp = 0;
        for (var i = 0; i < val.length; i++) {
          // sum.push(val[i]['Revenue Per Unit Sold ($)'] * val[i]['Sales (Units)']);
          tmp += val[i];
        }
        sum.push(tmp);
      });

      sum.map(function (v) {
        // console.log(v);
      });
      return sum;
    }

    var getDate = function (data) {
      var d = [];
      angular.forEach(data, function (v, key) {
        // d.push(parseDate(new Date(key)));
        d.push(new Date(key));
      });

      return d;
    }

    // combine sum and dates in array
    var summarize = function (data) {
      var result = [],
          l = getSumByDate(data),
          s = getSum(l),
          d = getDate(l);
      angular.forEach(s, function (val, i) {
        // console.log(i);
        result[i] = {
          sum: val,
          date: d[i]
        }
      });

      return result;
    };

    var sorted = function (data, byDate) {
      var sortedArr = data;

      if (byDate) {
        sortedArr.sort(function(x, y) {
          return x.date - y.date;
        });
      } else {
        sortedArr.sort(function(x, y) {
           return y.sum - x.sum;
        });
      }

      return sortedArr;
    };

    return {
      summarize: summarize,
      sorted: sorted,
      getSumByProduct: getSumByProduct
    }

  }])
