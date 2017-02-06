#!/usr/local/bin/babel-node

import db from './db'

db.put('绅士','hentai')
db.put('淑女','hentai')

db.get('绅士', (err, value) => {
  if(err) {
    console.log(err)
    return
  }
  console.log(value)
})

db.del('绅士')

db.put('绅士', 'hentai', (err) => {
  if(err) {
    console.error(`err : ${err}`)
  }
})