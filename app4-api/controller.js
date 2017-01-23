angular.module('apiApp').controller('ctrl', function($scope, service){
  $scope.test = service.test;

  // $scope.starWars = function(){
  //   service.starWars().then(function(response){
  //       //console.log(response);
  //       return response;
  //     })
  // }
  // $scope.starWars();


  service.starWars().then(function(response){
    $scope.name = response.data;
    $scope.work = response.data.abilities;
  })
})
