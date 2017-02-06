#!/usr/local/bin/babel-node

import redis from './redis'
import assert from 'assert'

redis.set('key', 'value', (err) => {
  if(err){
    throw err
  }

  redis.get('key', (err, value) => {
    if(err) {
      throw err
    }

    assert.equal(value, 'value')
    console.log('it works')
    redis.quit()
  })
})