const express = require('express')
require('dotenv').config()
const gameCtrl = require('./gamesListController.js')
const shelvesCtrl = require('./shelvesController')
const app = express()

app.use(express.json())

app.get(`/api/games`, gameCtrl.getGames)
app.post(`/api/shelves/addToLibrary`, shelvesCtrl.addGameToLibrary)
app.post(`/api/shelves/addToWishlist`, shelvesCtrl.addGameToWishlist)
app.get(`/api/shelves`, shelvesCtrl.getGames)
app.put(`/api/shelves/:id`, shelvesCtrl.editShelf)
app.delete(`/api/shelves/:id`, shelvesCtrl.deleteGame)

const port = 4000
app.listen(port, () => console.log(`Server is listening on port: ${port}`))