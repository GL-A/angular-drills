angular.module('app').controller('ctrl', function($scope, service){
  $scope.test = service.test;
  $scope.myData = service.myData;
  $scope.sortObj = service.sortObj;
})
