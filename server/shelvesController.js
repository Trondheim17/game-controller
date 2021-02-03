const shelvesArr = []

module.exports = {
    getGames: (res, req) => {
        res.status(200).send(shelvesArr)
    },

    addToShelf: (req, res) => {
        const gameIndex = shelvesArr.findIndex(game => game.id === req.body.game.id)
        if (gameIndex === -1) {
            const newGame = { ...req.body.game, [`isIn${req.body.shelf}`]: true }
            shelvesArr.push(newGame);
        } else {
            const editedGame = { ...shelvesArr[gameIndex], [`isIn${req.body.shelf}`]: true }
            shelvesArr.splice(gameIndex, 1, editedGame)
        }
        res.status(200).send(shelvesArr)
    },

    editGame: (req, res) => {
        const gameIndex = shelvesArr.findIndex(game => game.id === +req.params.id)
        const editedGame = { ...shelvesArr[gameIndex], [`isIn${req.body.shelf}`]: false }
        shelvesArr.splice(gameIndex, 1, editedGame)
        res.status(200).send(shelvesArr)
    },

    deleteGame: (req, res) => {
        const gameIndex = shelvesArr.findIndex(game => game.id === +req.params.id)
        shelvesArr.splice(gameIndex, 1)
        res.status(200).send(shelvesArr)
    }

}