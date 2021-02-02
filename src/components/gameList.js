import React, { Component } from 'react'
import Search from './search'
import GameTile from './gameTile'
import axios from 'axios'

class GamesList extends Component {
    constructor() {
        super()

        this.state = {
            allGames: []
        }

        this.handleSearch = this.handleSearch.bind(this)
    }

    componentDidMount = () => {
        this.getGames()
    }
    

    getGames = () => {
        axios.get(`api/games`)
            .then(res => {
                this.setState({
                    allGames: res.data.results
                })
            }).catch(err => console.log(err))
    }

    handleSearch = (userInput) => {
        axios.get(`/api/games?name=${userInput}`)
            .then(res => {
                this.setState({
                    allGames: res.data.results
                })
            }).catch(err => console.log(err))
    }

    render() {
        const { allGames } = this.state
        let mappedAllGames = allGames.map((game, index) => {
            return (
                <GameTile key={game.id} game={game} handleAddToLibrary={this.props.handleAddToLibrary} handleAddToWishlist={this.props.handleAddToWishlist}/>
            )
        })
        return (
            <div className='gamesList'>
                <h2>All Games</h2>
                <Search handleSearch={this.handleSearch}/>
                {mappedAllGames}
            </div>
        )
    }
}

export default GamesList