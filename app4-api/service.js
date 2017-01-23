angular.module('apiApp').service('service', function($http){
  this.test = 'hello';

  this.poke = function(){
    return $http({
      method: 'GET',
      url: 'http://pokeapi.co/api/v2/pokemon/'
    }).then(function(response){
      console.log(response);
      return response;
    })
  }
})
