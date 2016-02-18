'use strict';

describe('Controller: SpeciesCtrl', function () {

  // load the controller's module
  beforeEach(module('sustainableSeafoodWebApp'));

  var SpeciesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpeciesCtrl = $controller('SpeciesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
