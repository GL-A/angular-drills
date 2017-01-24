angular.module('apiApp').controller('ctrl', function($scope, service){
  $scope.test = service.test;

  service.pokeapi().then(function(res){
    $scope.pokemon = res;
  })
})
