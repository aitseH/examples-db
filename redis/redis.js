import redis from 'redis'

const port = process.env.REDIS_PORT || 6379
const host = process.env.REDIS_HOST || '127.0.0.1'

export default redis.createClient(port, host)