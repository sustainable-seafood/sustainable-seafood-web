'use strict';

angular.module('sustainableSeafoodWebApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/routes/main/homepage/homepage.html',
        controller: 'HomepageController',
        controllerAs: 'vm'
      })
      .state('choose-seafood', {
        url: '^/choose-seafood',
        templateUrl: 'app/routes/main/choose-seafood/choose-seafood.html',
        controller: 'ChooseSeafoodCtrl',
        controllerAs: 'vm',
      });
  });
