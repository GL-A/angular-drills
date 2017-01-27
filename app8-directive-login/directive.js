angular.module('app').directive('loginDir', function(){
  return{
    restrict: 'E',
    templateUrl: 'login.html',
    controller: function($scope){
      $scope.logInUser = function(user){
        alert('hello' + ' ' + user.username + ' ' + user.password);
      }
    }
  }
})
