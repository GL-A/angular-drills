angular.module('app').service('signupService', function($http){
  this.test = 'test';

  this.starwars = function(){
    return $http ({
      method: 'GET',
      url: 'http://swapi.co/api/planets/'
    }).then(function(res){
      console.log(res);
      return res.data.results;
    })
  }
})
