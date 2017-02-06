#!/usr/local/bin/babel-node

import level from 'level'
import path from 'path'

const dbPath = path.join(__dirname, 'mydb')
const db = level(dbPath)

export default db