#!/usr/local/bin/babel-node

import queue from './queue'

const missing = 10

for(var i=0;i<10;i++){
  queue.push({some: 'work', id: i}).then((data) => {

    if(-- missing == 0){
      console.log('all work is pushed')
      poll()
    }
  })
}

const poll = () => {
  queue.pop().then((data) => {

    console.log(`work: %j`, data)
    if(!data) {
      setTimeout(poll, 1e3)
    }else {
      poll()
    }
  })
}