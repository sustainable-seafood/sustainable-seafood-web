'use strict';

angular.module('sustainableSeafoodWebApp')
  .controller('SeafoodChoiceCtrl', SeafoodChoiceCtrl);

    function SeafoodChoiceCtrl(SeafoodService, SpeciesService) {
      
      var vm = this;

      vm.selection  = {};
      vm.picker     = false;
      vm.processing = false;

      vm.SeafoodService = SeafoodService;
      vm.SpeciesService = SpeciesService;
      vm.SpeciesService.getSpecies();

      vm.showSeafood = function() {
        vm.processing = true;
        vm.SeafoodService.getSeafood(vm.selection.seafood)
          .then(function() {
            vm.picker     = true;
            vm.processing = false;
          }, function(err) {
            console.log(err);
          }
        );
      };
    };
