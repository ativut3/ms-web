'use strict';

angular.module('msWebApp')

  .controller('OurServicesSectionCtrl', function () {

  })

  .directive('ourServicesSection', function () {
    return {
      restrict: 'E',
      controller: 'OurServicesSectionCtrl',
      templateUrl: 'views/our-services-section.html',
      replace: true,
      link: function () {
        $('.scrolling  a[href*="#"]').on('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          var target = $(this).attr('href');
          $(target).velocity('scroll', {
            duration: 800,
            offset: -150,
            easing: 'easeOutExpo',
            mobileHA: false
          });
        });
      }
    };
  });
