'use strict';

angular.module('sustainableSeafoodWebApp.auth', [
  'sustainableSeafoodWebApp.constants',
  'sustainableSeafoodWebApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
