'use strict';

angular.module('sustainableSeafoodWebApp')
  .factory('Species', function ($resource, API) {
    var url = API.endpoint;
    return $resource(url + '/species/:id/:controller',
      {
        id: '@_id'
      },
      {
        get: {
          method: 'GET',
          params: {
            controller: ''
          }
        },
        query: {
          method: 'GET',
          params: {
            controller: 'seafoods'
          }
        }
      }
    );
  });
