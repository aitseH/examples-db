import Redis from 'redis'
import redis from './redis'
import cuid from 'cuid'
import {EventEmitter} from 'events'

const popTimeout = 10

const push = (work) => new Promise((res, rej) => {
  
  const id = cuid()
  const item = {
    id,
    work,
    created: Date.now(),
  }
  
  redis.lpush('workqueue:in', JSON.stringify(item), (err) => {
    if(err) rej(err)

    resolve(id)
  })
})

const Worker = (fn) => {
  const conn = Redis.createClient()

  setImmediate(next)  

  let worker = new EventEmitter()
  worker.close = close

  return worker

  function next() {
    conn.brpoplpush('workqueue:in', 'workqueue:processing', popTimeout, popped)

    function popped(err, item){
      if(err) {
        worker.emit('error', err)
      } else {
        if(item) {
          const parsed = JSON.parse(item)
          fn(parsed.word, parse.id, workFinished)
        }
      }
    }

    function workFinished(){
      conn.lrem('workqueue:processing', 1, item, poppedFromProcessing)
    }

    function poppedFromProcessing(err){
      if(err) {
        worker.emit('error', err)
      }
      next()
    }
    
  }
  function close(){
    conn.quit()
  }
}


export default {
  push,
  Worker
}