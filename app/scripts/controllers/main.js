'use strict';

/**
 * @ngdoc function
 * @name msWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the msWebApp
 */
angular.module('msWebApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
