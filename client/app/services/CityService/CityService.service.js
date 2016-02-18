'use strict';

angular.module('sustainableSeafoodWebApp')
  .service('CityService', CityService);

  function CityService(City) {
    var service = this;
    service.cities = [];
    this.getCities = function() {
      City.query({}, {},
        function(data) {
          service.cities = data.cities;
        },
        function(err) {
          console.log(err);
        }
      ).$promise;
    };
  };