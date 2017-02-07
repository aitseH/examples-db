#!/usr/local/bin/babel-node

import gameScores from './game_socres'

const room = 'room1'

setInterval(() => {
  const player = `player${random()}`
  gameScores.score(room, player, random())
},1e2)

setInterval(() => {
  gameScores.rank(room).then(data => {
    console.log('%s ranking:\n', room, data)
  })
},1e3)

function random(){
  return Math.floor(Math.random() * 10)
}