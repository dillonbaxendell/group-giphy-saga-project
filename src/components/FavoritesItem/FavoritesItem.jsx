import React from 'react'


//SET FAVORITES W/ DISPATCH AND CATEGORIES HERE
export default function FavoritesItem({favorite}) {
    return (
        <div>
            <img key={favorite.id} src={favorite.url}></img>
        </div>
    )
}

export default FavoritesItem;