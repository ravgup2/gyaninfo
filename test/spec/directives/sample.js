'use strict';

describe('Directive: Sample', function () {

  var compile, scope, elm;

    beforeEach(function () {
        module('gyaninfoApp')
        inject(function($compile, $rootScope){
		    compile = $compile;
		    scope = $rootScope.$new();
		  });

        elm = angular.element(
			      '<div>' +
			        '<sample-directive>' +
			        '</sample-directive>' +
			      '</div>');
        compile(elm)(scope);
		scope.$digest();	
    });


  	it('should have span element', function () {
  		var spanElement = elm.find('span');
		expect(spanElement.text()).to.equal('This span is appended from sample directive.');
	});

	it('should have B element', function () {
		scope.text = 'some test Ravi';
		compile(elm)(scope);
  		scope.$digest();
  		var h4Element = elm.find('b');
		expect(h4Element.text()).to.equal(scope.text);
	});

	//Validate Scope
	it('should increment value on click of button', function () {
	  scope.value=10;
	  var button = elm.find('button');

	  button.triggerHandler('click');
	  scope.$digest();
	  expect(scope.value).to.equal(11);
	});
});