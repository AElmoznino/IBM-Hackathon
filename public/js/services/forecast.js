'use stricts';

module.exports = function ($http, $q) {
  var forecastService = {
    forecastData: [],

    getForecast: function() {
      var deferred = $q.defer();
      var apiKey = '9711d482a429070923e6dbb923fb2012',
        lat = '42.3587',
        lon = '-71.0567',
        url = ['https://api.forecast.io/forecast/', apiKey, '/', lat, ',', lon, '?exclude=currently,minutely,hourly,flags&units=si&callback=JSON_CALLBACK'].join('');

      $http.jsonp(url).then(function(data) {
        // This copies the incoming data inte forecastService.forecastData
        angular.copy(data.data, forecastService.forecastData);
        deferred.resolve(forecastService.forecastData); //
      }, function(error){
          console.log('getForecast error: ' + error.toString());
          deferred.reject(error);
      });
      
      return deferred.promise;
    },

  } // Closes the forecastService
  return forecastService;
};
