angular.module('apiApp').service('service', function($http){
  this.test = 'test';


  this.marverlApi = function(){
    var key = "c5f7152f7a8908acd4aacdeb1ee3ccbe";
    return $http.get('http://swapi.co/api/people/').then(function(res){
      console.log(res);
      return res;
    })
  }
})
