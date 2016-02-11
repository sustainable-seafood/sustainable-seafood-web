'use strict';

angular.module('sustainableSeafoodWebApp', [
  'sustainableSeafoodWebApp.auth',
  'sustainableSeafoodWebApp.admin',
  'sustainableSeafoodWebApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
