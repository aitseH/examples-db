#!/usr/local/bin/babel-node

import DistributedEmitter from './distributed_emitter'

const emitter1 = DistributedEmitter()
const emitter2 = DistributedEmitter()

const channels = ['channel 1', 'channel 2']

channels.forEach((channel) => {
  emitter1.on(channel, (msg) => {
    console.log('%s message: ', channel, msg)
  })
})

channels.forEach((channel) => {
  setInterval(() => {
    emitter2.emit(channel, {time: Date.now()})
  })
})