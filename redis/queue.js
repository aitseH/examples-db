import redis from './redis'

const push = (work) => new Promise((resolve, reject) => {
  redis.lpush('workqueue', JSON.stringify(work), (err, data) => {
    if(err) reject(err)

    resolve(data)
  })
})

const pop = () => new Promise((resolve, reject) => {
  redis.rpop('workqueue', (err, data) => {
    if(err) reject(err)

    resolve(JSON.parse(data))
  })
})

export default {
  push,
  pop
}