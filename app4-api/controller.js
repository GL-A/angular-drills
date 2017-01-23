angular.module('apiApp').controller('ctrl', function($scope, service){
  $scope.test = service.test;

  $scope.pokemon = function(){
    service.poke().then(function(response){
      //console.log(response);
    })
  }
  $scope.pokemon();
})
