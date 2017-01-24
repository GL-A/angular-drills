angular.module('apiApp').controller('ctrl', function($scope, service){
  $scope.test = service.test;
  service.marverlApi().then(function(res){
    $scope.marvel = res;
  })
})
