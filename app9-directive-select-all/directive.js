angular.module('app').directive('dir', function(){
  return {
    restrict: 'A',
    link: function(scope, elem, att){
      elem.on('click', function(){
        elem.select();
      })
    }
  }
})
