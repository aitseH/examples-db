#!/usr/local/bin/babel-node

import db from './db'

const stream = db.createReadStream()

stream.on('data', (data) => {
  console.log(`${data.key} : ${data.value}`)
})

stream.once('end', () => {
  console.log('no more data')
})

stream.once('close', () => {
  console.log('stream close')
})

stream.once('error', (error) => {
  console.error(`stream emitted error: ${err}`)
})