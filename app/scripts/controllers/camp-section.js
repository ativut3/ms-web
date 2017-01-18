'use strict';

angular.module('msWebApp')

  .controller('CampSectionCtrl', function ($scope) {
    $scope.tabs = {
      adventureCamp: { isExpanded: true },
      funCamp: { isExpanded: false },
      fantasticCamp: { isExpanded: false },
      geniusCamp: { isExpanded: false },
      hahahaCamp: { isExpanded: false },
      robotsCamp: { isExpanded: false },
      throughTimeCamp: { isExpanded: false },
      labOneCamp: { isExpanded: false },
      labTwoCamp: { isExpanded: false }
    };
  })

  .directive('campSection', function () {
    return {
      restrict: 'E',
      controller: 'CampSectionCtrl',
      templateUrl: 'views/camp-section.html',
      replace: true
    };
  });
