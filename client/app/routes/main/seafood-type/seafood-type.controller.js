'use strict';

angular.module('sustainableSeafoodWebApp')
  .controller('SeafoodTypeCtrl', function ($scope, $stateParams, $http) {
    $http.get('/api/cities/' + $stateParams.id).then(response => {
      $scope.city = response.data;
    });
  });
