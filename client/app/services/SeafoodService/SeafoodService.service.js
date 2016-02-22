'use strict';

angular.module('sustainableSeafoodWebApp')
  .service('SeafoodService', SeafoodService);

  function SeafoodService(Seafood) {
    var service = this;

    service.seafoods = [];

    service.getSeafood = function() {
      Seafood.get({}, {},
        function(data) {
          console.log(data);
          service.seafoods = data.seafoods;
        },
        function(err) {
          console.log(err);
        }
      );
    }
  }
