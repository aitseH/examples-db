#!/usr/local/bin/babel-node
import db from './db'

const batch = db.batch()

// plan A
batch.put('四斋蒸鹅心', '死宅真恶心')
     .put('死宅针娥心', '死宅真恶心')
     .del('死宅')
     .write(err => {
       if(err) {
         console.error(`batch operation faild: ${err}`)
       }
     })

// plan B
const operation = [
  {type: 'put', key: '四斋蒸鹅心', value: '死宅真恶心' },
  {type: 'put', key: '死宅针娥心', value: '死宅真恶心' },
  {type: 'del', key: '死宅'}
]

db.batch(operation, err => {
  if(err) {
    console.error(`batch operation faild: ${err}`)
  }
})
