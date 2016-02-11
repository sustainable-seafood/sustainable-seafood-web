/**
 * SeafoodType model events
 */

'use strict';

import {EventEmitter} from 'events';
var SeafoodType = require('../../sqldb').SeafoodType;
var SeafoodTypeEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
SeafoodTypeEvents.setMaxListeners(0);

// Model events
var events = {
  'afterCreate': 'save',
  'afterUpdate': 'save',
  'afterDestroy': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  SeafoodType.hook(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc, options, done) {
    SeafoodTypeEvents.emit(event + ':' + doc._id, doc);
    SeafoodTypeEvents.emit(event, doc);
    done(null);
  }
}

export default SeafoodTypeEvents;
