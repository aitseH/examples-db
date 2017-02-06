#!/usr/local/bin/babel-node

import redis from './redis'

redis.set('some key', 'some value')
redis.expire('some key', 2)

//redis.setex('some key', 2, 'some value')

setInterval(() => {
  redis.get('some key', (err, value) => {
    if(err) throw err

    if(value) {
      console.log(`value: ${value}`)
    }

    else {
      console.log('value is gone')
      process.exit()
    }
  })
}, 1e3)
