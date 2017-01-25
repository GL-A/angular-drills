angular.module('apiApp').service('service', function($http){
  this.test = 'test';
var date = new Date();

  this.marverlApi = function(){
    var key = "c5f7152f7a8908acd4aacdeb1ee3ccbe&hash=f3e2099029038eaa57f3bb06f178e15520d896f9";
    return $http.get('https://gateway.marvel.com/v1/public/characters?name=Spider-Man&apikey='+ date).then(function(res){
      console.log(res);
      console.log(date);
      return res;
    })
  }
})
