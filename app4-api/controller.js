angular.module('apiApp').controller('ctrl', function($scope, service){
  $scope.test = service.test;

  $scope.starWars = function(){
    service.starWars().then(function(response){
        //console.log(response);
      })
  }
  $scope.starWars();
})
