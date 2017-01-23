angular.module('apiApp').service('service', function($http){
  this.test = 'test';


  this.starWars = function(){
    return $http({
      method: 'GET',
      url: 'http://pokeapi.co/api/v2/pokemon/'
    }).then(function(response){
      console.log(response);
      return response;

    })
  }
})
