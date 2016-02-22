'use strict';

angular.module('sustainableSeafoodWebApp')
  .factory('Seafood', function ($resource, API) {
    var url = API.endpoint;
    return $resource(url + '/seafoods/:id', { id: '@_id' });
  });
