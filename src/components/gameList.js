import React, { Component } from 'react'
import Search from './search'
import GameTile from './gameTile'
import axios from 'axios'
const apiKey = process.env.GIANT_BOMB_KEY

class GamesList extends Component {
    constructor() {
        super()

        this.state = {
            allGames: []
        }

        this.handleClick = this.handleClick.bind(this)
    }

    getGames = () => {
        axios.get(`https://www.giantbomb.com/api/games/?api_key=${apiKey}&format=json`)
            .then(res => {
                this.setState({
                    allGames: res.data
                })
            }).catch(err => console.log(err))
    }

    handleClick = (userInput) => {
        axios.get(`https://www.giantbomb.com/api/games/?api_key=${apiKey}&format=json&filter=name:${userInput}`)
            .then(res => {
                this.setState({
                    allGames: res.data
                })
            })
    }


    render() {
        const { allGames } = this.state
        return (
            <div>
                <h2>All Games</h2>
                <Search handleClick={this.handleClick}/>
                <GameTile gamesList={allGames}/>
            </div>
        )
    }
}

export default GamesList