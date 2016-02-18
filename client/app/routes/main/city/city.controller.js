'use strict';

angular.module('sustainableSeafoodWebApp')
  .controller('CityCtrl', function ($scope, CityService) {
    $scope.CityService = CityService
    $scope.CityService.getCities()
  });
