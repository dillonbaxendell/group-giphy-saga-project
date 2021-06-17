import React from 'react'
import FavoritesItem from '../FavoritesItem/FavoritesItem';
import {useSelector} from 'react-redux';



export default function FavoritesList() {
    const favoritesList = useSelector(store => store.getFavorite);


    return (
        <div>
            <h2>Favorites List</h2>
        {favoritesList.map( favorite => (
            <FavoritesItem favorite={favorite}/>
        ))}
        </div>
    )
}
