'use strict';

angular.module('gyaninfoApp')
.directive('firstDirective', function() {
  return {
  	require: ['ngModel', '^?form'],
	link: function (scope, elem, attrs, ctrls) {
    if(ctrls[1]){
        ctrls[1].$setDirty();
    }
    if(ctrls[0]){
        elem.addClass('redBorder');
    }
	}			
  };
});