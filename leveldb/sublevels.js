#!/usr/local/bin/babel-node

import level from 'level'
import path from 'path'
import sublevel from 'level-sublevel'

const dbPath = path.join(__dirname, 'mydb')
const db = sublevel(level(dbPath, {
  valueEncoding: 'json'
}))

const users = db.sublevel('users')
const message = db.sublevel('messages')

export default {
  db,
  users,
  message
}