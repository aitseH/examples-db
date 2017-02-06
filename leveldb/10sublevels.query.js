#!/usr/local/bin/babel-node

import db from './sublevels'

const email = process.argv[2]

db.users.get(email, (err, user) => {
  if(err) {
    throw err
  }
  console.log('User: %j', user)

  const userMessages = db.message.sublevel(email)

  userMessages.createValueStream().on('data', (message) => {
    console.log('Message: %j',message)
  })
  .once('end', () => {
    console.log('noe more messages')
  })
})