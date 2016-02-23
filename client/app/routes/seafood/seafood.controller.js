'use strict';

angular.module('sustainableSeafoodWebApp')
  .controller('SeafoodCtrl', SeafoodCtrl);

    function SeafoodCtrl($state) {
      
      var vm = this;

      vm.switch = $state.is('seafood.choice')

      vm.moveBack = function() {
        if(vm.switch) {
          $state.go('home');
        } else {
          $state.go('seafood.choice');
        }
      }

      vm.moveForward = function() {
        $state.go('seafood.comparison');
      }
    };
