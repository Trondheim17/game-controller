const axios = require('axios')

module.exports = {
    getGames: (req, res) => {
        if (req.query.name) {
            axios.get(`https://www.giantbomb.com/api/games/?api_key=${process.env.GIANT_BOMB_KEY}&format=json&filter=name:${req.query.name}`)
                .then(response => {
                    res.status(200).send(response.data)
                }).catch(err => res.status(502).send(err.toString()))
        } else {
            axios.get(`https://www.giantbomb.com/api/games?api_key=${process.env.GIANT_BOMB_KEY}&format=json`)
                .then(response => {
                    res.status(200).send(response.data)
                }).catch(err => res.status(502).send(err.toString()))
        }
    }

}