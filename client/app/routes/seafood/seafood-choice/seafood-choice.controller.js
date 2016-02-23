'use strict';

angular.module('sustainableSeafoodWebApp')
  .controller('SeafoodChoiceCtrl', SeafoodChoiceCtrl);

    function SeafoodChoiceCtrl(SeafoodService, SpeciesService) {
      
      var vm = this;

      vm.selection = {};

      vm.SpeciesService = SpeciesService;
      vm.SpeciesService.getSpecies();

      vm.SeafoodService = SeafoodService;
    };
