import redis from './redis'

const add = (group, member) => new Promise((res,rej) => {
  redis.sadd(key(group), member, (err, data) => {
    if(err) rej(data)

    res(data)
  })
})

const remove = (group, member) => new Promise((res,rej) => {
  redis.srem(key(group), member, (err, data) => {
    if(err) rej(data)

    res(data)
  })
})

const belongs = (group, member) => new Promise((res,rej) => {
  redis.sismember(key(group), member, (err, data) => {
    if(err) rej(data)
    
    res(data == 1)
  })
})


function key(group) {
  return `group:${group}`
}

export default {
  add,
  remove,
  belongs
}