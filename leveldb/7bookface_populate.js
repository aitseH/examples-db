#!/usr/local/bin/babel-node

import path from 'path'
import level from 'level'

const user = [
  {
    name: 'bot01',
    friends: [
      'bot02',
      'bot03'
    ]
  },
  {
    name: 'bot02',
    friends: [
      'bot01',
      'bot03'
    ]
  },
  {
    name: 'bot03',
    friends: [
      'bot01'
    ]
  }
]


const dbPath = path.join(__dirname, 'mydb')
const db = level(dbPath, {
  valueEncoding: 'json'
})

let batch = []

user.forEach(user => {
  batch.push({
    type: 'put',
    key: user.name,
    value: {
      name: user.name,
      createdAt: new Date
    }
  })

  user.friends.forEach(friend => {
    batch.push({
      type: 'put',
      key: `${user.name}!friendships!${friend}`,
      value: {
        source: user.name,
        target: friend,
        createdAt: new Date
      }
    })
  })
})

db.batch(batch, (err) => {
  if(err) {
    throw err
  }

  console.log('populated successfully')
})