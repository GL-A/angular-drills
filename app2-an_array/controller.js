angular.module('arrayApp').controller('arrayController', function($scope, service){
  $scope.test = service.test;
  $scope.getMyData = function(){
    $scope.data = service.data();
  }
  $scope.getMyData();
})
