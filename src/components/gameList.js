import React, { Component } from 'react'
import Search from './Search'
import GameTile from './GameTile'
import axios from 'axios'

class GamesList extends Component {
    constructor() {
        super()

        this.state = {
            allGames: [],
            pageNumber: 0,
        }

        this.handleSearch = this.handleSearch.bind(this)
    }

    componentDidMount = () => {
        this.getGames()
    }

    getGames = () => {
        axios.get(`/api/games`)
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
                <GameTile gameTileType={'gameList'} key={game.id} game={game} handleAddToShelf={this.props.handleAddToShelf} />
            )
        })
        return (
            <div className='gamesListContainer'>
                <h2>All Games</h2>
                <Search handleSearch={this.handleSearch} />
                <div className='gamesList'>
                    {mappedAllGames}
                </div>
            </div>
        )
    }
}

export default GamesList