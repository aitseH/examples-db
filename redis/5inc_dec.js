#!/usr/local/bin/babel-node

import redis from './redis'

for(var i=0;i<10;i++) {
  redis.incr('some key', done)
}

for(var i=0;i<10;i++) {
  redis.incrby('some key', 2, done)
}

for(var i=0;i<10;i++) {
  redis.decr('some key', done)
}

for(var i=0;i<10;i++) {
  redis.decrby('some key', 2, done)
}

function done(err, result) {
  if(err) {
    throw err
  }
  console.log(`new value: ${result}`)
}
redis.quit()