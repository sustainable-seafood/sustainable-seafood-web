'use strict';

angular.module('sustainableSeafoodWebApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/routes/main/homepage/homepage.html',
        controller: 'MainController'
      })
      .state('city', {
        url: '^/cities',
        templateUrl: 'app/routes/main/city/city.html',
        controller: 'CityCtrl'
      })
      .state('seafood-type', {
        url: '^/cities/{id}/seafood-types',
        templateUrl: 'app/routes/main/seafood-type/seafood-type.html',
        controller: 'SeafoodTypeCtrl'
      });
  });
