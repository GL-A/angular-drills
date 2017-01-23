angular.module('app').controller('ctrl', function($scope, service){
  $scope.test = service.test;

  $scope.getMyData = function(){
    $scope.data = service.getMyData();
  }

  $scope.getMyData();


  $scope.dropDown = service.dropDown;
})
