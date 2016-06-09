'use stricts';

module.exports = function($scope, forecast) {
  $scope.forecast = forecast.forecastData;

  $scope.getDatetime = new Date();
};
