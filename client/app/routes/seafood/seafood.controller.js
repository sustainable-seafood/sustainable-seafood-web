'use strict';

angular.module('sustainableSeafoodWebApp')
  .controller('SeafoodCtrl', SeafoodCtrl);

    function SeafoodCtrl($state) {
      
      var vm = this;

      vm.switch = $state.is('seafood.choice')
    };
