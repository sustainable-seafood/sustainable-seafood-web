'use strict';

describe('Service: SeafoodService', function () {

  // load the service's module
  beforeEach(module('sustainableSeafoodWebApp'));

  // instantiate service
  var SeafoodService;
  beforeEach(inject(function (_SeafoodService_) {
    SeafoodService = _SeafoodService_;
  }));

  it('should do something', function () {
    expect(!!SeafoodService).toBe(true);
  });

});
