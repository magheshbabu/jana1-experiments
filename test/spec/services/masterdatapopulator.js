'use strict';

describe('Service: masterDataPopulator', function () {

  // load the service's module
  beforeEach(module('generatorAngularTestApp'));

  // instantiate service
  var masterDataPopulator;
  beforeEach(inject(function (_masterDataPopulator_) {
    masterDataPopulator = _masterDataPopulator_;
  }));

  it('should do something', function () {
    expect(!!masterDataPopulator).toBe(true);
  });

});
