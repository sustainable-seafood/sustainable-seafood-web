'use strict';

describe('Controller: ChooseSeafoodCtrl', function () {

  // load the controller's module
  beforeEach(module('sustainableSeafoodWebApp'));

  var ChooseSeafoodCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChooseSeafoodCtrl = $controller('ChooseSeafoodCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
