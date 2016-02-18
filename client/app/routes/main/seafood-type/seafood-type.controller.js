'use strict';

angular.module('sustainableSeafoodWebApp')
  .controller('SeafoodTypeCtrl', function ($scope, $stateParams, SeafoodTypeService) {
    $scope.SeafoodTypeService = SeafoodTypeService;
    $scope.SeafoodTypeService.getSeafoodTypes($stateParams.id);
  });
