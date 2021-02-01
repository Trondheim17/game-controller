const express = require('express')
require('dotenv').config()
const gameCtrl = require('./gamesListController.js')
const shelvesCtrl = require('./shelvesController')
const app = express()

app.use(express.json())

app.get(`/api/games`, gameCtrl.getGames)
app.post(`/api/shelves`, shelvesCtrl.addGame)
app.get(`/api/shelves`, shelvesCtrl.getGames)
app.put(`/api/shelves`, shelvesCtrl.editShelf)
app.delete(`/api/shelves`, shelvesCtrl.deleteGame)

const port = 4000
app.listen(port, () => console.log(`Server is listening on port: ${port}`))