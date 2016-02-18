'use strict';

angular.module('sustainableSeafoodWebApp')
  .factory('Seafood', function ($resource, API) {
    var url = API.endpoint;
    return $resource(url + '/cities/:city_id/species/:species_id/seafoods/:id',
      {
        city_id: '@_city_id',
        species_id: '@_species_id',
        id: '@_id'
      },
      {
        query: {
          method: 'GET'
        }
      }
    );
  });
