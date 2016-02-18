'use strict';

angular.module('sustainableSeafoodWebApp')
  .controller('CityCtrl', function ($scope, $state, CityService) {
    $scope.CityService = CityService;
    $scope.CityService.getCities();

    $scope.nextPage = function() {
      $state.go('species', {cityId: $scope.selectedCity})
    }
  });
