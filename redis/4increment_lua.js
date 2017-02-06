#!/usr/local/bin/babel-node

import fs from 'fs'
import path from 'path'
import redis from './redis'

const script = fs.readFileSync(
  path.join(__dirname, 'lua_scripts', 'increment.lua'),
  {encoding: 'utf8'}
)

function increment(key, cb) {
  redis.eval(script, 1, key, cb)
}

for(var i = 0; i < 10 ; i ++) {
  increment('some key', (err, newValue) => {
    if(err) throw err

    console.log(`successfully set new value to %j`, newValue)
    redis.quit()
  })
}