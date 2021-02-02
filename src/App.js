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
    this.handleAddToWishlist = this.handleAddToWishlist.bind(this)
  }


  handleAddToLibrary = (game) => {
    axios.post(`/api/shelves/addToLibrary`, {...game})
      .then(res => {
        this.setState({
          shelvesList: res.data
        })
      }).catch(err => console.log(err))
  }

  handleAddToWishlist = (game) => {
    axios.post(`/api/shelves/addToWishlist`, {...game})
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
        <GamesList handleAddToLibrary={this.handleAddToLibrary} handleAddToWishlist={this.handleAddToWishlist}/>
        <ShelvesContainer shelvesList={this.state.shelvesList} />
        </div>
      </div>

    );
  }
}

export default App;
