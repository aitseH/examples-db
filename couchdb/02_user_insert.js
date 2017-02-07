#!/usr/local/bin/babel-node

import users from './user_insert'

const user = {
  email: "ncysatnaf@gamil.com",
  username: "nanoo",
}

users.create(user).then(data => {
  console.log('add user success')
})