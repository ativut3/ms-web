'use strict';

angular.module('msWebApp')

  .controller('ContactUsSectionCtrl', [ function () {

  }])

  .directive('contactUsSection', ['$window', function ($window) {
    return {
      restrict: 'E',
      controller: 'ContactUsSectionCtrl',
      templateUrl: 'views/contact-us-section.html',
      replace: true,
      link: function () {
        function initMap () {
          var latlng = new google.maps.LatLng(13.7195362, 100.5806025);
          var myOptions = {
              zoom: 17,
              center: latlng,
              scrollwheel:  true
          };

          var map = new google.maps.Map($window.document.getElementById('map'), myOptions);
          var marker = new google.maps.Marker({
            position: {lat: 13.719627, lng: 100.580466},
            map: map
          });
        }

        initMap();
      }
    };
  }]);
