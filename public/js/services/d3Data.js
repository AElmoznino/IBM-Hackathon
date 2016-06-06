angular
  .module('fanCo')
  .factory('d3func', ['sales', function (sales) {
    var getSumByDate = function (data) {
      var sumObj = {};
      angular.forEach(data, function (val, key) {
        sumObj[val['Week Of']] = [];
      });

      angular.forEach(data, function (val, key) {
        sumObj[val['Week Of']].push(val['Revenue Per Unit Sold ($)'] * val['Sales (Units)']);
      });
      console.log(sumObj);

      return sumObj;
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
      sorted: sorted
    }

  }])
