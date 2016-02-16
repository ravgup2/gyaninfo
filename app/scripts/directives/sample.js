'use strict';

angular.module('gyaninfoApp')
.directive('sampleDirective', function() {
  return {
  	//templateUrl : 'views/sample-directive.html',
    
  	template: '<span>This span is appended from sample directive.</span>'+
				'<button>Increment value!</button>',

	link: function (scope, elem) {
		elem.append('<b>'+scope.text+'</b>');
	    elem.find('button').on('click', function(){
          scope.value++;
        });
	}			
  };
});