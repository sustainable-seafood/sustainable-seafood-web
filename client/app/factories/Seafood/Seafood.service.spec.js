'use strict';

describe('Service: Seafood', function () {

  // load the service's module
  beforeEach(module('sustainableSeafoodWebApp'));

  // instantiate service
  var Seafood;
  beforeEach(inject(function (_Seafood_) {
    Seafood = _Seafood_;
  }));

  it('should do something', function () {
    expect(!!Seafood).toBe(true);
  });

});
