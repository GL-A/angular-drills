angular.module('login').directive('loginDir' ,function(){
  return{
    restrict: 'E',
    templateUrl: './login.html',
    controller: function($scope){
      $scope.logInUser = function(user) {
        alert('hello' + ' ' + user.username);
      }
    }
    //end of return
  }
  //end of directive
})
