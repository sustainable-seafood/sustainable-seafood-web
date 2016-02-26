'use strict';

describe('Directive: myFooter', function () {

  // load the directive's module and view
  beforeEach(module('sustainableSeafoodWebApp'));
  beforeEach(module('app/directives/my-footer/my-footer.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<my-footer></my-footer>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the myFooter directive');
  }));
});
