angular.module('apiApp').service('service', function($http){
  this.test = 'test';

  this.pokeapi = function(){
    return $http.get('http://pokeapi.co/api/v2/pokemon/4/').then(function(res){
      console.log(res.data.abilities);
      return res.data.abilities;
    })
  }
})
