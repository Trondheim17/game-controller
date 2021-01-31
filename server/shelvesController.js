const shelvesArr = []

module.exports = {
    getGames: (res, req) => {
        res.status(200).send(shelvesArr)
    },
    addGame: (req, res) => {
        const { id, title, isInLibrary, isInWishlist, isInWishlist} = req.body
        const newGame = { id, title, isInLibrary, isInWishlist, isInWishlist}
        shelvesArr.push(newGame)
        res.status(200).send(shelvesArr)
    },
    editShelf: (req, res) => {
        const i = shelvesArr.findIndex(shelvesArr => shelvesArr.id === +req.params.id)
        shelvesArr[i].complete = !todos[i].complete
        res.status(200).send(todos)
    },
    deleteGame: (req, res) => {
        
    }

}