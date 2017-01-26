angular.module('app').controller('ctrl', function($scope, service){
  service.starwars().then(function(res){
    $scope.starwars = res;
  })
})
