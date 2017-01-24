angular.module('app').controller('ctrl', function($scope, service){
  $scope.test = service.test;

  $scope.getMyData = function(){
    $scope.data = service.getMyData();
  }

  $scope.getMyData();
  $scope.sortObj = service.sortObj;
  $scope.sortObj2 = service.sortObj2;




})
