angular.module('routing')
.service('service', function($http){

this.starwars = function(){
  return $http.get('http://swapi.co/api/people/').then(function(res){
    console.log(res);
    return res.data.results;
  })
}


})
