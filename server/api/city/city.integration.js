'use strict';

var app = require('../..');
import request from 'supertest';

var newCity;

describe('City API:', function() {

  describe('GET /api/cities', function() {
    var citys;

    beforeEach(function(done) {
      request(app)
        .get('/api/cities')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          citys = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      citys.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/cities', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/cities')
        .send({
          name: 'New City',
          info: 'This is the brand new city!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newCity = res.body;
          done();
        });
    });

    it('should respond with the newly created city', function() {
      newCity.name.should.equal('New City');
      newCity.info.should.equal('This is the brand new city!!!');
    });

  });

  describe('GET /api/cities/:id', function() {
    var city;

    beforeEach(function(done) {
      request(app)
        .get('/api/cities/' + newCity._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          city = res.body;
          done();
        });
    });

    afterEach(function() {
      city = {};
    });

    it('should respond with the requested city', function() {
      city.name.should.equal('New City');
      city.info.should.equal('This is the brand new city!!!');
    });

  });

  describe('PUT /api/cities/:id', function() {
    var updatedCity;

    beforeEach(function(done) {
      request(app)
        .put('/api/cities/' + newCity._id)
        .send({
          name: 'Updated City',
          info: 'This is the updated city!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedCity = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedCity = {};
    });

    it('should respond with the updated city', function() {
      updatedCity.name.should.equal('Updated City');
      updatedCity.info.should.equal('This is the updated city!!!');
    });

  });

  describe('DELETE /api/cities/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/cities/' + newCity._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when city does not exist', function(done) {
      request(app)
        .delete('/api/cities/' + newCity._id)
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
