angular.module('app').controller('ctrl', function($scope, service){
  $scope.test = service.test;
  $scope.data = service.myData;

  $scope.obj = service.obj;
  $scope.objDir = service.objDir;
})
