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

    render() {
        console.log(this.state.userInput)
        return (
            <div className='searchBarContainer'>
                <div className='searchBar'>
                    <input onChange={this.handleChange} placeholder='Search Game Titles' />
                    <button className='searchButton' onClick={() => this.props.handleSearch(this.state.userInput)}> Search </button>
                </div>
            </div>
        )
    }
}

export default Search