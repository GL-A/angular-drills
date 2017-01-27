angular.module('app').service('service', function($http){

  this.starwars = function(){
    return $http.get('http://swapi.co/api/people').then(function(response){
      console.log(response);
      return response.data.results;
    })
  }
})
