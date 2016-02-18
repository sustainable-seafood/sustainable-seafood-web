'use strict';

describe('Controller: CityCtrl', function () {

  // load the controller's module
  beforeEach(module('sustainableSeafoodWebApp'));

  var CityCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CityCtrl = $controller('CityCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
