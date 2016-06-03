angular.module('fanCo').controller('ForecastCtrl', ['$scope', 'forecast', function($scope, forecast) {
  $scope.forecast = forecast;
  // console.log(forecast);
  // console.log(forecast[0].forecastData);
 // TODO

}]);