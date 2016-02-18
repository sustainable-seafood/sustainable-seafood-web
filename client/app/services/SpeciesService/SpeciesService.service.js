'use strict';

angular.module('sustainableSeafoodWebApp')
  .service('SpeciesService', SpeciesService);

  function SpeciesService(Species) {
    var service = this;

    service.species = [];

    service.getSpecies = function(cityId) {
      Species.query({city_id: cityId}, {},
        function(data) {
          service.species = data.species;
        },
        function(err) {
          console.log(err);
        }
      );
    };
  }
