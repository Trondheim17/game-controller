import axios from 'axios'
import React, { Component } from 'react'

class Search extends Component {
    constructor() {
        super()

        this.state = {
            userInput: '',
        }
    }

    handleChange = e => {
        this.setState({
            userInput: e.target.value
        })
    }

   render(){
       return(
           <div>
               <input placeholder='Search Game Titles'/>
               <button onClick={() => this.props.handleClick(this.state.userInput)}> Search </button>
           </div>
       )
   }
}

export default Search