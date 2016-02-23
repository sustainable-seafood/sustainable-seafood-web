'use strict';

angular.module('sustainableSeafoodWebApp')
  .service('SeafoodService', SeafoodService);

  function SeafoodService(Seafood, $q) {
    var service = this;

    service.seafood  = {};
    service.seafoods = [];

    service.getSeafood = function(seafoodId) {
      return $q(function(resolve, reject) {
        Seafood.get({id: seafoodId}, {},
          function(data) {
            service.seafood = data.seafood;
            resolve();
          },
          function(err) {
            reject(err);
          }
        );
      });
    }

    service.getSeafoodList = function() {
      Seafood.get({}, {},
        function(data) {
          service.seafoods = data.seafoods;
        },
        function(err) {
          console.log(err);
        }
      );
    }
  }
