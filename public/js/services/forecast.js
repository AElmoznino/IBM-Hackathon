angular
  .module('fanCo')
  .factory('forecast', ['$http', '$q', function ($http, $q) {
    var forecastService = {
      forecastData: [],

      getForecast: function() {
        var deferred = $q.defer();
        var apiKey = '871830d2ca37d894c7ce25994ee70244',
          lat = '42.3587',
          lon = '-71.0567',
          url = ['https://api.forecast.io/forecast/', apiKey, '/', lat, ',', lon, '?exclude=currently,minutely,hourly,alerts,flags&units=si&callback=JSON_CALLBACK'].join('');

        $http.jsonp(url).then(function(data) {
          angular.copy(data.data.daily.data, forecastService.forecastData); // This copies the incoming data inte forecastService.forecastData
          console.log(forecastService.forecastData);
          deferred.resolve(forecastService.forecastData); // 
        }, function(error){
            console.log('getForecast error: ' + error.toString());
            deferred.reject(error);
        }); 
        return deferred.promise;
      },

    } // Closes the forecastService
    return forecastService;
}]);
