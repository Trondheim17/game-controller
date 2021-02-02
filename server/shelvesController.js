const shelvesArr = []

module.exports = {
    getGames: (res, req) => {
        res.status(200).send(shelvesArr)
    },
    addGameToLibrary: (req, res) => {
        const newGame = { ...req.body, isInLibrary: true, isInWishlist: false, isInComplete: false }
        shelvesArr.push(newGame)
        res.status(200).send(shelvesArr)
    },
    addGameToWishlist: (req, res) => {
        const newGame = { ...req.body, isInLibrary: false, isInWishlist: true, isInComplete: false }
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