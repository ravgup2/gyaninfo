'use strict';

/**
 * @ngdoc function
 * @name gyaninfoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gyaninfoApp
 */
angular.module('gyaninfoApp')
  .controller('MainCtrl', function ($scope) {
  	$scope.text = 'Some testing stuff';
  	$scope.value=1;
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
