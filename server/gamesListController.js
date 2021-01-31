const gamesArr = []

module.exports = {
    getGames: (req, res) => {
        res.status(200).send(gamesArr)
    },
    
}