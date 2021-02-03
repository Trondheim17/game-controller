import React from "react";
import GameTile from "./GameTile";

const Shelf = (props) => {
    const filteredGames = props.gamesInShelf.map((game) => {
        return (
            <GameTile gameTileType={'shelf'} shelfType={props.name} key={game.id} game={game} 
                        handleAddToShelf={props.handleAddToShelf} 
                        handleRemoveFromShelf={props.handleRemoveFromShelf} 
                        handleEditShelf={props.handleEditShelf}/>
        )
    })
    return (
        <div className='shelf'>
            <h2>{props.name}</h2>
            <div className='gamesInShelf'>
                {filteredGames}
            </div>
        </div>
    )
}

export default Shelf