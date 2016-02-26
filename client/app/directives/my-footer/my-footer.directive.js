'use strict';

angular.module('sustainableSeafoodWebApp')
  .directive('myFooter', function () {
    return {
      templateUrl: 'app/directives/my-footer/my-footer.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
