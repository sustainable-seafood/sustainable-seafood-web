'use strict';

describe('Service: SeafoodType', function () {

  // load the service's module
  beforeEach(module('sustainableSeafoodWebApp'));

  // instantiate service
  var SeafoodType;
  beforeEach(inject(function (_SeafoodType_) {
    SeafoodType = _SeafoodType_;
  }));

  it('should do something', function () {
    expect(!!SeafoodType).toBe(true);
  });

});
