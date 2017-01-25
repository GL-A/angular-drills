angular.module('apiApp').service('service', function($http){
  this.test = 'hello';

  this.poke = function(){
    return $http({
      method: 'GET',
      url: 'http://swapi.co/api/people/'
    }).then(function(response){
      console.log(response);
      return response;
    })
  }
})
