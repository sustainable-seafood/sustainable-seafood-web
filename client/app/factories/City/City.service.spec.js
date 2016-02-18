'use strict';

describe('Service: City', function () {

  // load the service's module
  beforeEach(module('sustainableSeafoodWebApp'));

  // instantiate service
  var City;
  beforeEach(inject(function (_City_) {
    City = _City_;
  }));

  it('should do something', function () {
    expect(!!City).toBe(true);
  });

});
