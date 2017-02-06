import redis from './redis'

export const count = (user) => new Promise((resolve, reject) => {
  const now = new Date()
  const year = now.getUTCFullYear()
  const month = format(now.getUTCMonth()+1)
  const day = [year, month, now.getUTCDate()].join('-')

  const key = `counters:${user}`

  redis.multi()
       .hincrby(key, year, 1)
       .hincrby(key, month, 1)
       .hincrby(key, day, 1)
       .hincrby(key, 'total', 1)
       exec((err, data) => {
         if(err) reject(err)

         resolve(data)
       })
})

function format(n) {
  return (`0${n}`).slice(-2)
}