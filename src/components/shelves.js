import React from 'react'
import Shelf from './shelf'

const ShelvesContainer = (props) => {
    const { shelvesList } = props
    const inLibraryFilter = shelvesList.filter(game => game.isInLibrary)
    const inWishlistFilter = shelvesList.filter(game => game.isInWishlist)
    const inCompleteFilter = shelvesList.filter(game => game.isInComplete)
    return (
        <div>
            <Shelf name={'Library'} gamesInShelf={inLibraryFilter}/>
            <Shelf name={'Wishlist'} gamesInShelf={inWishlistFilter}/>
            <Shelf name={'Complete'} gamesInShelf={inCompleteFilter}/>
        </div>
    )
}

export default ShelvesContainer