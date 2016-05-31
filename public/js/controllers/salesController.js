angular.module('fanCo').controller('SalesCtrl', ['$scope', 'sales', function($scope, sales) {
  $scope.sales = sales.salesData;
  
}]);
