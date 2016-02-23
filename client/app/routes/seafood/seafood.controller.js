'use strict';

angular.module('sustainableSeafoodWebApp')
  .controller('SeafoodCtrl', SeafoodCtrl);

    function SeafoodCtrl($state) {
      
      var vm = this;

      vm.switch = $state.is('seafood.choice') || $state.is('seafood.display')

      if(vm.switch) {
        vm.back    = 'home'
        vm.forward = 'seafood.comparison'
      } else {
        vm.back    = 'seafood.choice'
        vm.forward = '#'
      }
    };
