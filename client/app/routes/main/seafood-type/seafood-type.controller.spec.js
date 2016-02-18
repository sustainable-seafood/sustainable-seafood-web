'use strict';

describe('Controller: SeafoodTypeCtrl', function () {

  // load the controller's module
  beforeEach(module('sustainableSeafoodWebApp'));

  var SeafoodTypeCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SeafoodTypeCtrl = $controller('SeafoodTypeCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
