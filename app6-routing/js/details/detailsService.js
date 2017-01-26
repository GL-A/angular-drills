angular.module('app').service('detailsService', function($http){
  this.test = 'test';


  this.starwars = function(){
    return $http({
      method: 'GET',
      url: 'http://swapi.co/api/people/'
    }).then(function(res){
      console.log(res)
      return res.data.results;
    })
  }
})
