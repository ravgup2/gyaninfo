'use strict';

describe('Directive: Other', function () {

  var compile, scope, directiveElem;

    beforeEach(function () {
        module('gyaninfoApp')
        inject(function($compile, $rootScope, $httpBackend){
		    compile = $compile;
		    scope = $rootScope.$new();
		    scope.config = {
		      prop: 'value'
		    };
		    scope.notify = true;
		    scope.onChange = sinon.spy();
		  });

        directiveElem = getCompiledElement();	
    });

    function getCompiledElement(){
	    var compiledDirective = compile(angular.element('<other-directive config="config" notify="notify" on-change="onChange()"></other-directive'))(scope);
	    scope.$digest();
	    return compiledDirective;
	  }

  it('config on isolated scope should be two-way bound', function(){
    var isolatedScope = directiveElem.isolateScope();
    console.log(isolatedScope);
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

  it('should call onChange method of scope when invoked from isolated scope', function () {
      var isolatedScope = directiveElem.isolateScope();
      isolatedScope.onChange();

      expect(scope.onChange).to.have.been.called;
  });

  //Check require
  it.skip('should fail if ngModel is not specified', function () {
  	var fun = function(){
	    getCompiledElement('<input type="text" other-directive />');
	  };
	  console.log(fun);
	  //expect().to.throw();
	});

	it.skip('should work if ng-model is specified and not wrapped in form', function () {
	  expect(function(){
	    getCompiledElement('<div><input type="text" ng-model="name" other-directive /></div>');
	  }).to.not.throw();
	});

	it.skip('should set form dirty', function () {
	  var directiveElem = getCompiledElement('<form name="sampleForm"><input type="text" ng-model="name" other-directive /></form>');

	  expect(scope.sampleForm.$dirty).to.equal(true);
	});

});