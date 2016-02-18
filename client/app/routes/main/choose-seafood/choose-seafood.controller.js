'use strict';

angular.module('sustainableSeafoodWebApp')
  .controller('ChooseSeafoodCtrl', function ($scope, $stateParams, SeafoodService, SpeciesService) {
    if(!$stateParams.cityId) {
      $state.go('city');
    } else if(!$stateParams.speciesId) {
      $state.go('species', {cityId: $stateParams.cityId})
    }

    $scope.SpeciesService = SpeciesService;
    $scope.SpeciesService.getSingleSpecies($stateParams.cityId, $stateParams.speciesId);

    $scope.SeafoodService = SeafoodService;
    $scope.SeafoodService.getSeafoods($stateParams.cityId, $stateParams.speciesId);
  });
