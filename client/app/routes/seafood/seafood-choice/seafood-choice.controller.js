'use strict';

angular.module('sustainableSeafoodWebApp')
  .controller('SeafoodChoiceCtrl', SeafoodChoiceCtrl);

    function SeafoodChoiceCtrl(SeafoodService, SpeciesService) {
      
      var vm = this;

      vm.selection             = {};
      vm.scopedSeafoods        = [];
      vm.picker                = false;
      vm.processing            = false;
      vm.disableSeafoodOptions = true;

      vm.SeafoodService = SeafoodService;
      vm.SpeciesService = SpeciesService;
      vm.SpeciesService.getSpecies();
      vm.SeafoodService.getSeafoodList();

      vm.getSeafoods = function() {
        vm.disableSeafoodOptions = true;
        vm.scopedSeafoods = _.filter(vm.SeafoodService.seafoods, function(seafood) {return seafood.species.id == vm.selection.species});
        vm.disableSeafoodOptions = false;
      };

      vm.showSeafood = function() {
        vm.processing            = true;
        vm.picker                = true;
        vm.processing            = false;
        vm.disableSeafoodOptions = true;
        vm.harvestingMethod = true;
        console.log(vm.selection.seafood);
      };

      vm.closeSeafood = function() {
        vm.selection = {};
        vm.picker = false;
      };
    };
