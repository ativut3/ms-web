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
    'ngRoute', 'pascalprecht.translate'
  ])
  .config(function ($routeProvider, $locationProvider, $translateProvider) {
    $translateProvider.useStaticFilesLoader({
        prefix: 'localization/',
        suffix: '.json'
      });
    $translateProvider.preferredLanguage('th');
    $translateProvider.useSanitizeValueStrategy('escape');

    $routeProvider
      .when('/', {
        template: '<home-section></home-section>',
        controller: 'HomeSectionCtrl',
      })
      .when('/about-us', {
        template: '<about-us-section></about-us-section>',
        controller: 'AboutUsSectionCtrl',
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
  });
