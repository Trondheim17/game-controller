import React from 'react'

const GameTile = (props) => {
    return (
        <div>
            <div className='gameImage' title={props.game.name} style={{backgroundImage: `url(${props.game.image.small_url})`}} />
            <div className='gameTitle'>{props.game.name}</div>
        </div>
    )
}

export default GameTile