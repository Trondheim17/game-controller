import React from 'react'
import Shelf from './Shelf'

const ShelvesContainer = (props) => {
    const { shelvesList } = props
    const inLibraryFilter = shelvesList.filter(game => game.isInLibrary)
    const inWishlistFilter = shelvesList.filter(game => game.isInWishlist)
    const inCompleteFilter = shelvesList.filter(game => game.isInComplete)
    return (
        <div>
            <Shelf name={'Library'} gamesInShelf={inLibraryFilter} handleAddToShelf={props.handleAddToShelf} handleRemoveFromShelf={props.handleRemoveFromShelf} handleEditShelf={props.handleEditShelf}/>
            <Shelf name={'Wishlist'} gamesInShelf={inWishlistFilter} handleAddToShelf={props.handleAddToShelf} handleRemoveFromShelf={props.handleRemoveFromShelf} handleEditShelf={props.handleEditShelf}/>
            <Shelf name={'Complete'} gamesInShelf={inCompleteFilter} handleAddToShelf={props.handleAddToShelf} handleRemoveFromShelf={props.handleRemoveFromShelf} handleEditShelf={props.handleEditShelf}/>
        </div>
    )
}

export default ShelvesContainer