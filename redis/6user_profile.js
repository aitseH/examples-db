#!/usr/local/bin/babel-node

import UserProfile from './user_profile'

const user = 'nano'
const profile = {
  name: "nanoo",
  address: "earth",
  email: 'ncysatnaf@gmail.com'
}

UserProfile.set(user, profile)
  .then((data) => {
    console.log('saved user profile')
    UserProfile.get(user).then((data) => {
      console.log(`loaded user profile: %j`, profile)
    })
  })