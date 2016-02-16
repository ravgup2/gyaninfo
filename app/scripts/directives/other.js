'use strict';

angular.module('gyaninfoApp')
.directive('otherDirective', function() {
  return {
  	//templateUrl : 'views/sample-directive.html',
  	template: '<span>This span is appended from other directive.</span>',
  	scope:{
      config: '=',
      notify: '@',
      onChange:'&'
    },
	link: function (scope, elem) {
		
	}			
  };
});