import React, { useState } from 'react'
import Button from './Button'
import Shelf from './Shelf'

const ShelvesContainer = (props) => {
    const [renderedShelf, setRenderedShelf] = useState('Library')
    const { shelvesList } = props
    const inLibraryFilter = shelvesList.filter(game => game.isInLibrary)
    const inWishlistFilter = shelvesList.filter(game => game.isInWishlist)
    const inCompleteFilter = shelvesList.filter(game => game.isInComplete)
    return (
        <div>
            <div className='shelfButtonRow'>
                <Button className='shelfButton' onClick={() => setRenderedShelf('Library')}  name='Library'/>
                <Button className='shelfButton' onClick={() => setRenderedShelf('Wishlist')} name='Wishlist'/>
                <Button className='shelfButton' onClick={() => setRenderedShelf('Complete')} name='Complete'/>
            </div>
            {renderedShelf === 'Library' ? (
                <Shelf name={'Library'} gamesInShelf={inLibraryFilter} handleAddToShelf={props.handleAddToShelf} handleRemoveFromShelf={props.handleRemoveFromShelf} handleEditShelf={props.handleEditShelf} />
            ) : null}
            {renderedShelf === 'Wishlist' ? (
                <Shelf name={'Wishlist'} gamesInShelf={inWishlistFilter} handleAddToShelf={props.handleAddToShelf} handleRemoveFromShelf={props.handleRemoveFromShelf} handleEditShelf={props.handleEditShelf} />
            ) : null}
            {renderedShelf === 'Complete' ? (
                <Shelf name={'Complete'} gamesInShelf={inCompleteFilter} handleAddToShelf={props.handleAddToShelf} handleRemoveFromShelf={props.handleRemoveFromShelf} handleEditShelf={props.handleEditShelf} />
            ) : null}
        </div>
    )
}

export default ShelvesContainer