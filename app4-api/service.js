angular.module('apiApp').service('service', function($http){
  this.test = 'test';
  this.poke = function(){
    return $http.get('http://pokeapi.co/api/v2/pokemon/').then(function(res){
      console.log(res.data.results);
      return res;
    })
  }
})
