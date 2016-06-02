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
        angular.copy(data.data.daily.data, forecastService.forecastData);
        console.log(forecastService.forecastData);
      });
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
