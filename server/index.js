const express = require('express')
const gameCtrl = require('./controller.js')
const apiKey = process.env.GIANT_BOMB_KEY
const app = express()

app.use(express.json())

app.get(`https://www.giantbomb.com/api/games/?api_key=${apiKey}`, gameCtrl.getGames)
app.post(`https://www.giantbomb.com/api/games/?api_key=${apiKey}`, gameCtrl.addGame)
app.put(`https://www.giantbomb.com/api/games/?api_key=${apiKey}/:id`, gameCtrl.shelfGame)
app.delete(`https://www.giantbomb.com/api/games/?api_key=${apiKey}/:id`, gameCtrl.deleteGame)
