'use strict';

angular.module('sustainableSeafoodWebApp')
  .service('SpeciesService', SpeciesService);

  function SpeciesService(Species, $q) {
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
      return $q(function(resolve, reject) {
        Species.query({id: speciesId}, {},
          function(data) {
            service.specificSeafoods = data.seafoods;
            resolve();
          },
          function(err) {
            reject(err);
          }
        );
      });
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
