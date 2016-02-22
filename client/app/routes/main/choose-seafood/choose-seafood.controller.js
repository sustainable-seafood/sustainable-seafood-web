'use strict';

angular.module('sustainableSeafoodWebApp')
  .controller('ChooseSeafoodCtrl', ChooseSeafoodCtrl);

    function ChooseSeafoodCtrl(SeafoodService, SpeciesService) {
      
      var vm = this;

      vm.selection = {};

      vm.SpeciesService = SpeciesService;
      vm.SpeciesService.getSpecies();

      vm.SeafoodService = SeafoodService;
    };
