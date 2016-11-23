'use strict';

angular.module('msWebApp')

  .controller('AboutUsSectionCtrl', function () {

  })

  .directive('aboutUsSection', function () {
    return {
      restrict: 'E',
      controller: 'AboutUsSectionCtrl',
      templateUrl: 'views/about-us-section.html',
      replace: true
    };
  });
