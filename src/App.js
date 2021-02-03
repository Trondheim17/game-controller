import React, { Component } from 'react'
import './Reset.css'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import GamesList from './components/GameList'
import ShelvesContainer from './components/Shelves'
const axios = require('axios')

class App extends Component {
  constructor() {
    super()

    this.state = {
      gamesList: [],
      shelvesList: [],

    }

    this.handleAddToShelf = this.handleAddToShelf.bind(this)
    this.handleRemoveFromShelf = this.handleRemoveFromShelf.bind(this)
    this.handleEditShelf = this.handleEditShelf.bind(this)
  }


  handleAddToShelf = (game, shelf) => {
    axios.post(`/api/shelves`, {game, shelf})
      .then(res => {
        this.setState({
          shelvesList: res.data
        })
      }).catch(err => console.log(err))
  }

  handleRemoveFromShelf = (game) => {
    axios.delete(`/api/shelves/${game.id}`)
    .then(res => {
      this.setState({
        shelvesList: res.data
      })
    }).catch(err => console.log(err))
  }

  handleEditShelf = (game, shelf) => {
    axios.put(`/api/shelves/${game.id}`, {shelf})
    .then(res => {
      this.setState({
        shelvesList: res.data
      })
    }).catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <div className='mainContainer'>
        <GamesList handleAddToShelf={this.handleAddToShelf} />
        <ShelvesContainer shelvesList={this.state.shelvesList} handleAddToShelf={this.handleAddToShelf} handleRemoveFromShelf={this.handleRemoveFromShelf} handleEditShelf={this.handleEditShelf}/>
        </div>
        <Footer />
      </div>

    );
  }
}

export default App;
