import React, { Component } from 'react'
import './App.css';
import Header from './components/header'
import GamesList from './components/gameList'

class App extends Component {
  constructor() {
    super()

    this.state = {
      gamesList: [],

      }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <GamesList />
      </div>

    );
  }
}

export default App;
