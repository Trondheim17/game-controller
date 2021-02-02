import React from 'react'
import Shelf from './shelf'

const ShelvesContainer = (props) => {
    return (
        <div>
            <Shelf name={'Library'}/>
            <Shelf name={'Wishlist'}/>
            <Shelf name={'Complete'}/>
        </div>
    )
}

export default ShelvesContainer