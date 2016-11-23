'use strict';

angular.module('msWebApp')

  .controller('HomeSectionCtrl', function () {

  })

  .directive('homeSection', function () {
    return {
      restrict: 'E',
      controller: 'HomeSectionCtrl',
      templateUrl: 'views/home-section.html',
      replace: true,
      link: function () {
        jQuery('.bannercontainerV1 .fullscreenbanner').revolution({
         delay: 5000,
         startwidth: 1170,
         startheight: 560,
         fullWidth: "on",
         fullScreen: "off",
         hideCaptionAtLimit: "",
         dottedOverlay: "twoxtwo",
         navigationStyle: "preview4",
         fullScreenOffsetContainer: "",
         hideTimerBar:"on"
        });
      }
    };
  });
