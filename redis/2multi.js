#!/usr/local/bin/babel-node

import redis from './redis'

redis.multi()
     .set('key A', 'some value A')
     .set('key B', 'some value B')
     .expire('some other key', 2)
     .exec((err) => {
       if(err) throw err

       console.log('terminated')
       redis.quit()
     })

