'use strict';

angular.module('sustainableSeafoodWebApp')
  .controller('SpeciesCtrl', function ($scope, $state, $stateParams, SpeciesService) {
    if(!$stateParams.cityId) {
      $state.go('city');
    }

    $scope.SpeciesService = SpeciesService;
    $scope.SpeciesService.getSpecies($stateParams.cityId);

    $scope.nextPage = function() {
      $state.go('choose-seafood', {cityId: $stateParams.cityId, speciesId: $scope.selectedSpecies})
    }
  });
