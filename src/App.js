import React, { Component } from 'react'
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      shelfID: 0

    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Game Collector
        </header>
      </div>

    );
  }
}

export default App;
