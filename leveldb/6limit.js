#!/usr/local/bin/babel-node

import db from './db'
import assert from 'assert'

const stream = db.createReadStream({
  limit: 10
})

let count = 0
stream.on('data', (data) => {
  assert(++count <= 10)
})