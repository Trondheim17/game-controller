import React, { Component } from 'react'
import './Reset.css'
import './App.css';
import Header from './components/header'
import GamesList from './components/gameList'
import ShelvesContainer from './components/shelves'
const axios = require('axios')

class App extends Component {
  constructor() {
    super()

    this.state = {
      gamesList: [],
      shelvesList: [],

      }

      this.handleAddToLibrary = this.handleAddToLibrary.bind(this)
  }


  handleAddToLibrary = (game) => {
    const { id, name} = game
    axios.post(`/api/shelves`, {id, name})
    .then(res => {
      this.setState({
        shelvesList: [...this.state.shelvesList, res.data]
      })
    }).catch(err => console.log(err))
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <GamesList handleAddToLibrary={this.handleAddToLibrary}/>
        <ShelvesContainer shelvesList={this.state.shelvesList}/>
      </div>

    );
  }
}

export default App;
