'use strict';

angular.module('sustainableSeafoodWebApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/routes/main/homepage/homepage.html',
        controller: 'HomepageController'
      })
      .state('city', {
        url: '^/cities',
        templateUrl: 'app/routes/main/city/city.html',
        controller: 'CityCtrl'
      })
      .state('species', {
        url: '^/cities/{cityId}/species',
        templateUrl: 'app/routes/main/species/species.html',
        controller: 'SpeciesCtrl'
      })
      .state('choose-seafood', {
        url: '^/cities/{cityId}/species/{speciesId}/choose-seafood',
        templateUrl: 'app/routes/main/choose-seafood/choose-seafood.html',
        controller: 'ChooseSeafoodCtrl'
      });
  });
