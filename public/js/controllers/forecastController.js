angular.module('fanCo').controller('ForecastCtrl', ['$scope', 'forecast', function($scope, forecast) {
  $scope.forecast = forecast.forecastData;
}]);