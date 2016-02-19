'use strict';

angular.module('sustainableSeafoodWebApp')
  .directive('footer', function() {
    return {
      templateUrl: 'directives/footer/footer.html',
      restrict: 'E',
      link: function(scope, element) {
        element.addClass('footer');
      }
    };
  });
