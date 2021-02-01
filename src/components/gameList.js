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

        this.handleClick = this.handleClick.bind(this)
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

    handleClick = (userInput) => {
        console.log(userInput)
        axios.get(`/api/games?name=${userInput}`)
            .then(res => {
                console.log(res)
                this.setState({
                    allGames: res.data.results
                })
            }).catch(err => console.log(err))
    }
    
    
    render() {
        const { allGames } = this.state
        let mappedAllGames = allGames.map((game, index) => {
            return (
                <GameTile key={game.id} game={game}/>
            )
        })
        return (
            <div>
                <h2>All Games</h2>
                <Search handleClick={this.handleClick}/>
                {mappedAllGames}
            </div>
        )
    }
}

export default GamesList