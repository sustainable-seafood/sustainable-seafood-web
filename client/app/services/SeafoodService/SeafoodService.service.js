'use strict';

angular.module('sustainableSeafoodWebApp')
  .service('SeafoodService', SeafoodService);

  function SeafoodService(Seafood) {
    var service = this;

    service.seafoods = [];

    service.getSeafoods = function(cityId, speciesId) {
      Seafood.query({city_id: cityId, species_id: speciesId}, {},
        function(data) {
          console.log(data)
          service.seafoods = data.seafoods;
        },
        function(err) {
          console.log(err);
        }
      );
    }
  }
