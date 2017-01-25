angular.module('routing')
.controller('mainCtrl', function($scope, service, $state){


service.starwars().then(function(res){
  $scope.starwars = res;
})

})
