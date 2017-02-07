import couch from './couchdb'
import schemas from './schemas'

const users = couch.use('users')

const createUser = (user) => new Promise((res, rej) => {
  users.insert(user, user.email, (err, data) => {
    if(err) rej(err)
    
    res(data)
  })
})

const create = schemas.validating('user', createUser)

export default {
  create
}