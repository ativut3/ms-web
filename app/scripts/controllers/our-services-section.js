'use strict';

angular.module('msWebApp')

  .controller('OurServicesSectionCtrl', function () {

  })

  .directive('ourServicesSection', function () {
    return {
      restrict: 'E',
      controller: 'OurServicesSectionCtrl',
      templateUrl: 'views/our-services-section.html',
      replace: true
    };
  });
