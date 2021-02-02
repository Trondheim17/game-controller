import React from 'react'
import Button from './Button'

const GameTile = (props) => {
    return (
        <div>
            <div className='gameImage' title={props.game.name} style={{backgroundImage: `url(${props.game.image.small_url})`}} />
            <div className='gameTitle'>{props.game.name}</div>
            <Button name={'Add to Library'} onClick={() => props.handleAddToLibrary(props.game)}/>
            <Button name={'Add to Wishlist'}/>
        </div>
    )
}

export default GameTile