'use strict';

angular.module('sustainableSeafoodWebApp')
  .service('SpeciesService', SpeciesService);

  function SpeciesService(Species) {
    var service = this;

    service.species = [];
    service.singleSpecies = {};

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

    service.getSingleSpecies = function(cityId, speciesId) {
      Species.query({city_id: cityId, id: speciesId}, {},
        function(data) {
          service.singleSpecies = data.species;
        },
        function(err) {
          console.log(err);
        }
      );
    };
  }
