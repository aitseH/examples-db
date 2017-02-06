#!/usr/local/bin/babel-node

import db from './db'
import assert from 'assert'

const stream = db.createReadStream({
  gte: 'a',
  lte: 'z'
})

stream.on('data', (data) => {
  assert(data.key >= 'a' && data.key <= 'z')
})