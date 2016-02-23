'use strict';

describe('Controller: SeafoodChoiceCtrl', function () {

  // load the controller's module
  beforeEach(module('sustainableSeafoodWebApp'));

  var SeafoodChoiceCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SeafoodChoiceCtrl = $controller('SeafoodChoiceCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
