angular.module('app').controller('signupCtrl', function($scope, signupService){
  $scope.test = signupService.test;

  signupService.starwars().then(function(res){
    $scope.starwars = res;
  })
})
