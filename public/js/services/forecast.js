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
      }); 
    },
    
    } // Closes the forecastService

    return forecastService;
  }])
