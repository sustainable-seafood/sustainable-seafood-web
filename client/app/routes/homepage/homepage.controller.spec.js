'use strict';

describe('Controller: HomepageController', function() {

  // load the controller's module
  beforeEach(module('sustainableSeafoodWebApp'));
  beforeEach(module('stateMock'));

  var scope;
  var HomepageController;
  var state;
  var $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$httpBackend_, $controller, $rootScope, $state) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/things')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    state = $state;
    HomepageController = $controller('HomepageController', {
      $scope: scope
    });
  }));
});
