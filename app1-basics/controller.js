angular.module('app').controller('ctrl', function($scope, service){
  $scope.test = service.test;
})
