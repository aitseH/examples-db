import nano from 'nano'
import http from 'http'

http.globalAgent.maxSockets = Number(process.env.HTTP_MAX_SOCKETS) || 1024

export default nano(process.env.COUCHDB_URL || 'http://127.0.0.1:5984')