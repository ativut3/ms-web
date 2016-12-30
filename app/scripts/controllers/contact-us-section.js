'use strict';

angular.module('msWebApp')

  .controller('ContactUsSectionCtrl', function () {

    };
  })

  .directive('contactUsSection', function () {
    return {
      restrict: 'E',
      controller: 'ContactUsSectionCtrl',
      templateUrl: 'views/contact-us-section.html',
      replace: true
    };
  });
