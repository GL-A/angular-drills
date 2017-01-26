angular.module('app').directive('dirImg', function(){
  return {
    restrict: 'E',
    templateUrl: 'dirImg.html',
    scope: {
      urlAny: '@str'
    }
  }
})
