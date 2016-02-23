'use strict';

angular.module('sustainableSeafoodWebApp')
  .controller('SeafoodChoiceCtrl', SeafoodChoiceCtrl);

    function SeafoodChoiceCtrl(SeafoodService, SpeciesService) {
      
      var vm = this;

      vm.selection             = {};
      vm.picker                = false;
      vm.processing            = false;
      vm.disableSeafoodOptions = true;

      vm.SeafoodService = SeafoodService;
      vm.SpeciesService = SpeciesService;
      vm.SpeciesService.getSpecies();

      vm.getSeafoods = function() {
        vm.disableSeafoodOptions = true;
        vm.SpeciesService.getSpecificSeafoods(vm.selection.species)
          .then(function() {
            vm.disableSeafoodOptions = false;
          }, function(err) {
            console.log(err);
          }
        );
      };

      vm.showSeafood = function() {
        vm.processing = true;
        vm.SeafoodService.getSeafood(vm.selection.seafood)
          .then(function() {
            console.log(vm.SeafoodService.seafood)
            vm.picker     = true;
            vm.processing = false;
          }, function(err) {
            console.log(err);
          }
        );
      };
    };
