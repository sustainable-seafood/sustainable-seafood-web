'use strict';

angular.module('sustainableSeafoodWebApp')
  .factory('SeafoodType', function ($resource, API) {
    var url = API.endpoint;
    return $resource(url + '/cities/:city_id/seafood_types/:id',
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
