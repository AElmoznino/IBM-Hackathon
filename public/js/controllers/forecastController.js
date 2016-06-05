angular.module('fanCo').controller('ForecastCtrl', ['$scope', 'forecast', function($scope, forecast) {
  $scope.forecast = forecast.forecastData;
  console.log(forecast);
  console.log(forecast.forecastData);

 
  // // console.log(forecast);
  // console.log(Object.keys(forecast));

  // for(var i = 0; i < Object.keys(forecast).length; i++) {
  //     //console.log(Object.values(forecast)[i])  
  // }

  // for(var key in forecast){
  //   console.log(forecast[key])
  // }
  // André writes: Somehow I manage to use the forecast service here, but I can't get the graph to display,
  // The above prints the object that contains the 8 days of forecasts, but I'm not accessing (and maybe not saving them) correctly.
 // TODO

}]);