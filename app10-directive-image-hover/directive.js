angular.module('app').directive('imgDir', function(){


  return {
    restrict: 'E',
    templateUrl: 'img.html',
    scope: {
      imgUrl: '@str'
    }
  }
})
