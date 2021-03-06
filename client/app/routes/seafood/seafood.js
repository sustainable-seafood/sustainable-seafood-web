'use strict';

angular.module('sustainableSeafoodWebApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('seafood', {
        url: '^/seafood',
        templateUrl: 'app/routes/seafood/seafood.html',
        controller: 'SeafoodCtrl',
        controllerAs: 'vm'
      })
      .state('seafood.choice', {
        url: '/choice',
        templateUrl: 'app/routes/seafood/seafood-choice/seafood-choice.html',
        controller: 'SeafoodChoiceCtrl',
        controllerAs: 'vm'
      });
  });
