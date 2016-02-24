'use strict';

angular.module('gyaninfoApp')
.directive('otherDirective', function() {
  return {
  	templateUrl : 'views/other-directive.html',
    transclude: true,
    //require: ['ngModel', '^?form'],
  	//template: '<span>This span is appended from other directive.</span>',
  	scope:{
      config: '=',
      notify: '@',
      onChange:'&'
    },
	link: function (scope, elem, attrs, ctrls) {
		/*if(ctrls[1]){ console.log(ctrls);
          ctrls[1].$setDirty();
      }*/

      return  function () {
        data: 'hello world'
      }
	}			
  };
});