'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var seafoodTypeCtrlStub = {
  index: 'seafoodTypeCtrl.index',
  show: 'seafoodTypeCtrl.show',
  create: 'seafoodTypeCtrl.create',
  update: 'seafoodTypeCtrl.update',
  destroy: 'seafoodTypeCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var seafoodTypeIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './seafood_type.controller': seafoodTypeCtrlStub
});

describe('SeafoodType API Router:', function() {

  it('should return an express router instance', function() {
    seafoodTypeIndex.should.equal(routerStub);
  });

  describe('GET /api/seafood_types', function() {

    it('should route to seafoodType.controller.index', function() {
      routerStub.get
        .withArgs('/', 'seafoodTypeCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/seafood_types/:id', function() {

    it('should route to seafoodType.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'seafoodTypeCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/seafood_types', function() {

    it('should route to seafoodType.controller.create', function() {
      routerStub.post
        .withArgs('/', 'seafoodTypeCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/seafood_types/:id', function() {

    it('should route to seafoodType.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'seafoodTypeCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/seafood_types/:id', function() {

    it('should route to seafoodType.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'seafoodTypeCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/seafood_types/:id', function() {

    it('should route to seafoodType.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'seafoodTypeCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
