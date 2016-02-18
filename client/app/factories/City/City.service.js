'use strict';

angular.module('sustainableSeafoodWebApp')
  .factory('City', function ($resource, API) {
    var url = API.endpoint;
    return $resource(url + '/cities/:id', {id: '@_id'},
      {
        query: {
          method: 'GET'
        }
      });
  });
