'use strict';

angular.module('sustainableSeafoodWebApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'ngAnimate'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  })
  .run(function ($rootScope, $anchorScroll) {
    // Force scroll on top when new page is loaded
    $rootScope.$on('$locationChangeSuccess', function() {
      $anchorScroll();
    });
  })
  .constant('API', {endpoint:'http://localhost:3000/v1', frontend:'http://localhost:9000'});
