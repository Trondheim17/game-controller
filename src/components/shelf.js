import React from "react";
import GameTile from "./gameTile";

const Shelf = (props) => {
    const filteredGames = props.gamesInShelf.map((game) => {
        return (
            <GameTile key={game.id} game={game} />
        )
    })
    return (
        <div>
            <h2>{props.name}</h2>
            {filteredGames}
        </div>
    )
}

export default Shelf