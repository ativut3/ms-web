'use strict';

/**
 * @ngdoc overview
 * @name msWebApp
 * @description
 * # msWebApp
 *
 * Main module of the application.
 */
angular
  .module('msWebApp', [
    'ngRoute', 'ngAnimate', 'ngTouch', 'pascalprecht.translate', 'ui.bootstrap'
  ])
  .config(function ($routeProvider, $locationProvider, $translateProvider) {
    $translateProvider.useStaticFilesLoader({
        prefix: 'localization/',
        suffix: '.json'
      });
    $translateProvider.preferredLanguage('th');
    $translateProvider.useSanitizeValueStrategy(null);

    $routeProvider
      .when('/', {
        template: '<home-section></home-section>',
        controller: 'HomeSectionCtrl'
      })
      .when('/about-us', {
        template: '<about-us-section></about-us-section>',
        controller: 'AboutUsSectionCtrl'
      })
      .when('/our-services', {
        template: '<our-services-section></our-services-section>',
        controller: 'OurServicesSectionCtrl'
      })
      .when('/contact-us', {
        template: '<contact-us-section></contact-us-section>',
        controller: 'ContactUsSectionCtrl'
      })
      .when('/camp', {
        template: '<camp-section></camp-section>',
        controller: 'CampSectionCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });

      /* Remove hash from the url routing & Prettify Url
      https://scotch.io/tutorials/pretty-urls-in-angularjs-removing-the-hashtag */
      $locationProvider.html5Mode(true);
  })
  .run(['$rootScope', '$window', function ($rootScope, $window) {
    $rootScope.$on('$routeChangeSuccess', function () {
      $window.scrollTo(0,0);
    });
  }]);
