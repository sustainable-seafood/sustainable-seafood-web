'use strict';

var app = require('../..');
import request from 'supertest';

var newSeafoodType;

describe('SeafoodType API:', function() {

  describe('GET /api/seafood_types', function() {
    var seafoodTypes;

    beforeEach(function(done) {
      request(app)
        .get('/api/seafood_types')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          seafoodTypes = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      seafoodTypes.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/seafood_types', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/seafood_types')
        .send({
          name: 'New SeafoodType',
          info: 'This is the brand new seafoodType!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newSeafoodType = res.body;
          done();
        });
    });

    it('should respond with the newly created seafoodType', function() {
      newSeafoodType.name.should.equal('New SeafoodType');
      newSeafoodType.info.should.equal('This is the brand new seafoodType!!!');
    });

  });

  describe('GET /api/seafood_types/:id', function() {
    var seafoodType;

    beforeEach(function(done) {
      request(app)
        .get('/api/seafood_types/' + newSeafoodType._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          seafoodType = res.body;
          done();
        });
    });

    afterEach(function() {
      seafoodType = {};
    });

    it('should respond with the requested seafoodType', function() {
      seafoodType.name.should.equal('New SeafoodType');
      seafoodType.info.should.equal('This is the brand new seafoodType!!!');
    });

  });

  describe('PUT /api/seafood_types/:id', function() {
    var updatedSeafoodType;

    beforeEach(function(done) {
      request(app)
        .put('/api/seafood_types/' + newSeafoodType._id)
        .send({
          name: 'Updated SeafoodType',
          info: 'This is the updated seafoodType!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedSeafoodType = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedSeafoodType = {};
    });

    it('should respond with the updated seafoodType', function() {
      updatedSeafoodType.name.should.equal('Updated SeafoodType');
      updatedSeafoodType.info.should.equal('This is the updated seafoodType!!!');
    });

  });

  describe('DELETE /api/seafood_types/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/seafood_types/' + newSeafoodType._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when seafoodType does not exist', function(done) {
      request(app)
        .delete('/api/seafood_types/' + newSeafoodType._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
