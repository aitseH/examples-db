#!/usr/local/bin/babel-node

import level from 'level'
import path from 'path'
import assert from 'assert'

const dbPath = path.join(__dirname, 'mydb')
const options = {
  keyEncoding: 'binary',
  valueEncoding: 'json'
}

const db = level(dbPath, options)

db.put(new Buffer([1, 2, 3]), { some: 'json' }, (err) => {
  if(err){
    return console.error(err)
  }

  db.get(new Buffer([1, 2, 3]), (err, value) => {
    if(err) {
      return console.error(err)
    }

    assert.deepEqual(value, { some: 'json' })
    console.log(value)
  })
})