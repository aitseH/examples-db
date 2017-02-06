#!/usr/local/bin/babel-node

import redis from './redis'

redis.multi()
     .set('key A', 'some value for A')
     .get('key A')
     .set('key A', 'some Other value for A')
     .get('key A')
     .exec((err, results) => {
       if(err) throw err

       console.log('terminated. result: %j', results)
       redis.quit()
     })