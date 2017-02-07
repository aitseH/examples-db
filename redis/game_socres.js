import redis from './redis'

const score = (game, player, diff) => new Promise((res, rej) => {
  redis.zincrby(key(game), diff, player, (err, data) => {
    if(err) rej(err)

    res(data)
  })
})

const rank = (game) => new Promise((res, rej) => {
  redis.zrevrange(key(game), 0, -1, "WITHSCORES", (err, data) => {
    if(err) {
      rej(err)
    } else {
      let rank = []
      for (let i=0;i<data.length;i+=2) {
        rank.push({player: data[i], score: data[i+1]})
      }
      res(rank)
    }
  })
})

function key(game) {
  return `game:${game}`
}

export default {
  score,
  rank
}