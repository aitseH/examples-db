#!/usr/local/bin/babel-node

import userSets from './user_set'

userSets.remove('admins', 'user1')

userSets.add('admins', 'user1').then(data => {
  console.log('added user1 to group')
  
  userSets.belongs('admins', 'user1').then(data => {
    console.log('%s belongs to group: %j', 'user1' , data)
  })
})


