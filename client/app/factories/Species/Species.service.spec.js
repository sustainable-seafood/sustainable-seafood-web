'use strict';

describe('Service: Species', function () {

  // load the service's module
  beforeEach(module('sustainableSeafoodWebApp'));

  // instantiate service
  var Species;
  beforeEach(inject(function (_Species_) {
    Species = _Species_;
  }));

  it('should do something', function () {
    expect(!!Species).toBe(true);
  });

});
