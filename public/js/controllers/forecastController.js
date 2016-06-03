angular.module('fanCo').controller('ForecastCtrl', ['$scope', 'forecast', function($scope, forecast) {
  $scope.forecast = forecast;
  console.log($scope.forecast);
  console.log(forecast);
  // André writes: Somehow I manage to use the forecast service here, but I can't get the graph to display,
  // The above prints the object that contains the 8 days of forecasts, but I'm not accessing (and maybe not saving them) correctly. 
 // TODO

}]);