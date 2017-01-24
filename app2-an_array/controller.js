angular.module('arrayApp').controller('arrayController', function($scope, service){
  $scope.test = service.test;
  $scope.data = service.myData;
})
