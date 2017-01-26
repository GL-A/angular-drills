angular.module('app').controller('detailsCtrl', function($scope, detailsService){
  $scope.test = detailsService.test;

  detailsService.starwars().then(function(res){
    $scope.starwars = res;
  })
})
