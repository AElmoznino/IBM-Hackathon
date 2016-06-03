angular.module('fanCo').controller('ForecastCtrl', ['$scope', 'forecast', function($scope, forecast) {
  $scope.forecast = forecast.forecastData;
  console.log($scope.forecast);
  console.log(forecast);
  console.log(forecast[0].forecastData);
 // TODO

}]);