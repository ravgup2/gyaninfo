'use strict';

describe('Directive: First', function () {
	var compile, scope, directiveElem;
	beforeEach(module("gyaninfoApp"))
	beforeEach(function () {
		inject(function($compile, $rootScope){
			compile = $compile;
			scope = $rootScope;
		});
	});

	function getCompiledElement(ele){
	    var compiledDirective = compile(angular.element(ele))(scope);
	    scope.$digest();
	    return compiledDirective;
	  }

	it('should bind redBorder in ngModel', function () {
		directiveElem = getCompiledElement('<form><input ng-model="first.name" first-directive /></form>');
		expect(directiveElem.find('input').hasClass('redBorder')).to.be.true;
	});
})