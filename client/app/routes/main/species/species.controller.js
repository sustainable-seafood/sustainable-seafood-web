'use strict';

angular.module('sustainableSeafoodWebApp')
  .controller('SpeciesCtrl', function ($scope, $stateParams, SpeciesService) {
    $scope.SpeciesService = SpeciesService;
    $scope.SpeciesService.getSpecies($stateParams.id);
  });
