#!/usr/local/bin/babel-node

import cuid from 'cuid'
import db from './sublevels'

const user = {
  name: 'nanoo',
  email: 'ncysatnaf@gmail.com'
}

db.users.put(user.email, user, () => {
  const userMessages = db.message.sublevel(user.email)
  userMessages.put(cuid(), {
    from: `alice@gensokyo.com`,
    to: `ncysatnaf@gmail.com`,
    subject: 'Hi!',
    body: 'hi, my name is alice'
  })
})