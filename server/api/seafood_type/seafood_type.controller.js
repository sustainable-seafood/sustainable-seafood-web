/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/seafood_types              ->  index
 * POST    /api/seafood_types              ->  create
 * GET     /api/seafood_types/:id          ->  show
 * PUT     /api/seafood_types/:id          ->  update
 * DELETE  /api/seafood_types/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
var sqldb = require('../../sqldb');
var SeafoodType = sqldb.SeafoodType;

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

function responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function saveUpdates(updates) {
  return function(entity) {
    return entity.updateAttributes(updates)
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.destroy()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

// Gets a list of SeafoodTypes
export function index(req, res) {
  SeafoodType.findAll()
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Gets a single SeafoodType from the DB
export function show(req, res) {
  SeafoodType.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Creates a new SeafoodType in the DB
export function create(req, res) {
  SeafoodType.create(req.body)
    .then(responseWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing SeafoodType in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  SeafoodType.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Deletes a SeafoodType from the DB
export function destroy(req, res) {
  SeafoodType.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
