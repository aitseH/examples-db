#!/usr/local/bin/babel-node

import couch from './couchdb'

const databases = ['users', 'messages']

const initCouch = async() => {
  const arr = []

  for (let database of databases ) {
   arr.push(createDatabase(database))
  }

  await Promise.all(arr)
}

const createDatabase = (db) => new Promise((res, rej) => {
  couch.db.create(db, (err) => {
    if(err && err.statusCode != 412) {
      rej(err)
    }else {
      console.log('create database: %j success', db)
    }
  })
})

initCouch()