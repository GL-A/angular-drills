angular.module('apiApp').controller('ctrl', function($scope, service){
  $scope.test = service.test;
  service.starWars().then(function(res){
    $scope.character = res;
  })
})
