const gamesArr = []

module.exports = {
    getGames: (req, res) => {
        res.status(200).send(gamesArr)
    },
    addGame: (req, res) => {
        const { title } = req.body
        const newGame = { title }
        gamesArr.push(newGame)
        res.status(200).send(gamesArr)
    },
    shelfGame: (req, res) => {

    },
    deleteGame: (req, res) => {
        
    }

}