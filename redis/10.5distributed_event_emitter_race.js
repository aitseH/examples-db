#!/usr/local/bin/babel-node
import DistributedEmitter from './distributed_emitter'
import {exec} from 'child_process'

exec('redis-cli monitor').stdout.pipe(process.stdout)

const emitter = DistributedEmitter()

emitter.on('some event', () => {
  console.log('some event happened')
})

emitter.emit('some event', 'some payload')

