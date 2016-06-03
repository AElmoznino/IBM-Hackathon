angular
  .module('fanCo')
  .factory('forecast', ['$http', function ($http) {

    var forecastService = {
        forecastData: [], 

     getForecast: function() {
      var apiKey = '871830d2ca37d894c7ce25994ee70244',
          lat = '42.3587',
          lon = '-71.0567',
          url = ['https://api.forecast.io/forecast/', apiKey, '/', lat, ',', lon, '?exclude=currently,minutely,hourly,alerts,flags&units=si&callback=JSON_CALLBACK'].join('');

      return $http.jsonp(url).then(function(data) {
        angular.copy(data.data.daily.data, forecastService.forecastData); // This copies the incoming data inte forecastService.forecastData
        // var fcd = forecastService.forecastData; // declaring a shorter variable
        // angular.forEach(fcd, function(fcd) {
        //   for (var prop in fcd) {
        //     console.log("obj." + prop + " = " + fcd[prop]);
        //   }
        //   // console.log(fcd); // TODO: have it save a new array of objects that just contain temperature and timestamp.
        // }); // this line prints out each object.
        // console.log(forecastService.forecastData);
      }); // Closes the return $http
    },

    // function pollForecastIO(callback) {
    //     var url = ['https://api.forecast.io/forecast/', apiKey, '/', lat, ',', lon, '?callback=JSON_CALLBACK'].join('');

    //     $http.jsonp(url)
    //         .success(function (data) {
    //             callback(null, data);
    //         })
    //         .error(function (error) {
    //             console.log(err);
    //             callback(error);
    //         });
    // }

    // function currentForecast(callback) {
    //     if (!cachedForecast) {
    //         pollForecastIO(function (err, data) {
    //             cachedForecast = data;
    //             callback(null, cachedForecast);
    //         })
    //     } else {
    //         callback(null, cachedForecast);
    //     }
    // }

    } // Closes the forecastService

    return forecastService;
  }])
