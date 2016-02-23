'use strict';

angular.module('sustainableSeafoodWebApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/routes/homepage/homepage.html',
        controller: 'HomepageController',
        controllerAs: 'vm'
      });
  });
