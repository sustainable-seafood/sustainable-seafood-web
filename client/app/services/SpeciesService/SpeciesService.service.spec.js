'use strict';

describe('Service: SpeciesService', function () {

  // load the service's module
  beforeEach(module('sustainableSeafoodWebApp'));

  // instantiate service
  var SpeciesService;
  beforeEach(inject(function (_SpeciesService_) {
    SpeciesService = _SpeciesService_;
  }));

  it('should do something', function () {
    expect(!!SpeciesService).toBe(true);
  });

});
