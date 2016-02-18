'use strict';

(function() {

class HomepageController {

  constructor($http) {
    this.$http = $http;
    this.awesomeThings = [];
  }
}

angular.module('sustainableSeafoodWebApp')
  .controller('HomepageController', HomepageController);

})();
