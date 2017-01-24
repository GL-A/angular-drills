angular.module('apiApp').controller('ctrl', function($scope, service){
  $scope.test = service.test;

  service.poke().then(function(res){
    $scope.poke = res.data.results;

  })
})
