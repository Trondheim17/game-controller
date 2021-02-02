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
       console.log(this.state.userInput)
       return(
           <div>
               <input onChange={this.handleChange} placeholder='Search Game Titles'/>
               <button onClick={() => this.props.handleSearch(this.state.userInput)}> Search </button>
           </div>
       )
   }
}

export default Search