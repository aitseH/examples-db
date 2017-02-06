import redis from './redis'

const set = (userId, profile) => new Promise((resolve, reject) => {
  redis.hmset(`profile:${userId}`, profile, (err, data) => {
    if(err) reject(err)

    resolve(data)
  })
})

const get = (userId) => new Promise((resolve, reject) => {
  redis.hgetall(`profile:${userId}`, (err, data) => {
    if(err) reject(err)

    resolve(data)
  })
})

export default {
  set,
  get
}