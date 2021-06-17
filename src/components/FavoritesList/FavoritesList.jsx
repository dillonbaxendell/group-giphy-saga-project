import React from 'react'
import FavoritesItem from '../FavoritesItem/FavoritesItem';

const favoritesList = [
    {   id: 1,
        url: 'https://media.giphy.com/media/hXEMC5UvfULmw/giphy.gif'
    }, {
        id: 2,
        url: 'https://media.giphy.com/media/spHCUbRqG4cjS/giphy.gif'
    }
]

export default function FavoritesList() {
    return (
        <div>
            <h2>Favorites List</h2>
        {favoritesList.map( favorite => (
            <FavoritesItem favorite={favorite}/>
        ))}
        </div>
    )
}
