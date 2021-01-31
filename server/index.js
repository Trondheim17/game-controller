const express = require('express')
require('dotenv').config()
const gameCtrl = require('./gamesListController.js')
const shelvesCtrl = require('./shelvesController')
const apiKey = process.env.GIANT_BOMB_KEY
const app = express()

app.use(express.json())

app.get(`https://www.giantbomb.com/api/games/?api_key=${apiKey}&format=json`, gameCtrl.getGames)
app.post(`https://www.giantbomb.com/api/games/?api_key=${apiKey}&format=json`, shelvesCtrl.addGame)
app.get(`https://www.giantbomb.com/api/games/?api_key=${apiKey}&format=json`, shelvesCtrl.getGames)
app.put(`https://www.giantbomb.com/api/games/?api_key=${apiKey}/:id&format=json`, shelvesCtrl.editShelf)
app.delete(`https://www.giantbomb.com/api/games/?api_key=${apiKey}/:id&format=json`, shelvesCtrl.deleteGame)

const port = 4000
app.listen(port, () => console.log(`Server is listening on port: ${port}`))