angular.module('app').directive('dirHigh', function(){

  return {
    restrict: 'A',
    link: function($scope, elem, attr){
      elem.on('click', function(){
        elem.select();
      })
    }
  }
})
