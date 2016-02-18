'use strict';

describe('Service: SeafoodTypeService', function () {

  // load the service's module
  beforeEach(module('sustainableSeafoodWebApp'));

  // instantiate service
  var SeafoodTypeService;
  beforeEach(inject(function (_SeafoodTypeService_) {
    SeafoodTypeService = _SeafoodTypeService_;
  }));

  it('should do something', function () {
    expect(!!SeafoodTypeService).toBe(true);
  });

});
