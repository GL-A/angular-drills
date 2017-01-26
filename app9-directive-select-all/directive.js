angular.module('app').directive('dirSelect', function(){

  return {
    restrict: 'A',
    link: function(scope, elem, attrs){
      elem.on('click', function(){
        elem.select();
      })
    }
  }
})
