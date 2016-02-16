'use strict';

describe('Directive: Other', function () {

  var compile, scope, directiveElem;

    beforeEach(function () {
        module('gyaninfoApp')
        inject(function($compile, $rootScope){
		    compile = $compile;
		    scope = $rootScope.$new();
		    scope.config = {
		      prop: 'value'
		    };
		    scope.notify = true;
		    scope.onChange = sinon.spy();
		  });

        directiveElem = angular.element(
			      '<div>' +
			        '<other-directive>' +
			        '</other-directive>' +
			      '</div>');
        directiveElem = compile(directiveElem)(scope);
		scope.$digest();	
    });

	it('config on isolated scope should be two-way bound', function(){
	  var isolatedScope = directiveElem.isolateScope();
	  isolatedScope.config.prop = "value2";

	  expect(scope.config.prop).to.equal('value2');
	});

	it('notify on isolated scope should be one-way bound', function(){
	  var isolatedScope = directiveElem.isolateScope();

	  isolatedScope.notify = false;

	  expect(scope.notify).to.equal(true);
	});

	it('onChange should be a function', function(){
	    var isolatedScope = directiveElem.isolateScope();

	    expect(typeof(isolatedScope.onChange)).to.equal('function');
	});



});