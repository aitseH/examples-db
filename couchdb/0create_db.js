#!/usr/local/bin/babel-node

import couch from './couchdb'

couch.db.create('test1', (err) => {
  if(err) {
    console.error(err)
  }
})