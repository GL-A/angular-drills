angular.module('arrayApp').controller('arrayController', function($scope, service){
  $scope.test = service.test;

  $scope.myData = function(){
    $scope.data = service.getMyData();  
  }
  $scope.myData();
})
