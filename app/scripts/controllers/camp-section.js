'use strict';

angular.module('msWebApp')

  .controller('CampSectionCtrl', function () {

  })

  .directive('campSection', function () {
    return {
      restrict: 'E',
      controller: 'CampSectionCtrl',
      templateUrl: 'views/camp-section.html',
      replace: true
    };
  });
