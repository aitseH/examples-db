#!/usr/local/bin/babel-node

import {EventEmitter} from 'events'

const emitter = new EventEmitter()

emitter.on('some event', () => {
  console.log('some event happend')
})

emitter.emit('some event')