'use strict';

angular.module('sustainableSeafoodWebApp')
  .service('SpeciesService', SpeciesService);

  function SpeciesService(Species) {
    var service = this;

    service.species          = [];
    service.specificSeafoods = [];
    service.singleSpecies    = {};

    service.getSpecies = function() {
      Species.get({}, {},
        function(data) {
          service.species = data.species;
        },
        function(err) {
          console.log(err);
        }
      );
    };

    service.getSpecificSeafoods = function(speciesId) {
      Species.query({id: speciesId}, {},
        function(data) {
          service.specificSeafoods = data.seafoods;
        },
        function(err) {
          console.log(err);
        }
      );
    };

    service.getSingleSpecies = function(speciesId) {
      Species.get({id: speciesId}, {},
        function(data) {
          service.singleSpecies = data.species;
        },
        function(err) {
          console.log(err);
        }
      );
    };
  }
