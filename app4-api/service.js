angular.module('apiApp').service('service', function($http){
  this.test = 'test';

  this.starWars = function(){
    return $http.get('http://swapi.co/api/people/').then(function(res){
      console.log(res);
      return res.data.results;
    })
  }
})
