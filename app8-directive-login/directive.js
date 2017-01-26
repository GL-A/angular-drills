angular.module('app').directive('dir', function(){
  return {
    restrict: 'E',
    templateUrl: 'dir.html',
    controller: function($scope){
      $scope.logInUser = function(user){
        alert('hello' + " " + user.username + " " + user.password);
      }

    }
  }
})
