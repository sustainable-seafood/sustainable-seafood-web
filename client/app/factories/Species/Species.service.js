'use strict';

angular.module('sustainableSeafoodWebApp')
  .factory('Species', function ($resource, API) {
    var url = API.endpoint;
    return $resource(url + '/cities/:city_id/species/:id',
      {
        city_id: '@_city_id',
        id: '@_id'
      },
      {
        query: {
          method: 'GET'
        }
      });
  });
