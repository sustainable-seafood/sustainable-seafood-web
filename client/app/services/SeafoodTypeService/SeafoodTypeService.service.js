'use strict';

angular.module('sustainableSeafoodWebApp')
  .service('SeafoodTypeService', SeafoodTypeService);

  function SeafoodTypeService(SeafoodType) {
    var service = this;

    service.seafoodTypes = [];

    service.getSeafoodTypes = function(cityId) {
      SeafoodType.query({city_id: cityId}, {},
        function(data) {
          service.seafoodTypes = data.seafood_types;
        },
        function(err) {
          console.log(err);
        }
      );
    };
  }
