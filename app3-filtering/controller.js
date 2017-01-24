angular.module('app').controller('ctrl', function($scope, service){
  $scope.test = service.test;

  $scope.getMyData = function(){
    $scope.data = service.data();
  }
  $scope.getMyData();
  $scope.sortObj = service.sortObj;
  $scope.sortValue = service.sortValue;
})
