angular.module('app').controller('ctrl', function($scope, service){


  service.starwars().then(function(response){
    $scope.starwars = response;
  })
})
