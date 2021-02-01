const shelvesArr = []

module.exports = {
    getGames: (res, req) => {
        res.status(200).send(shelvesArr)
    },
    addGame: (req, res) => {
        const { id, title, isInLibrary, isInWishlist, isInCompleted } = req.body
        const newGame = { id, title, isInLibrary, isInWishlist, isInCompleted }
        shelvesArr.push(newGame)
        res.status(200).send(shelvesArr)
    },
    editShelf: (req, res) => {
        const { key } = req.body
        shelvesArr[i][key] = !shelvesArr[i][key]
        res.status(200).send(shelvesArr)
    },
    deleteGame: (req, res) => {
        const i = shelvesArr.findIndex(game => game.id === +req.params.id)
        shelvesArr.splice(i, 1)
        res.status(200).send(shelvesArr)
    }

}