angular.module('app').directive('loginDir', function(){


  return {
    restrict: 'E',
    templateUrl: 'loginDir.html',
    controller: function($scope){
      $scope.logInUser = function(user){
        alert('hello');
      }
    }
  }
})
