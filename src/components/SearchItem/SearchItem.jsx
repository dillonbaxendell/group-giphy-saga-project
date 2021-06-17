import React from 'react'
import {useDispatch} from 'react-redux';

export default function SearchItem({url}) {

    console.log(url.images.fixed_width_small.url);

    const dispatch = useDispatch();

    const image = url.images.fixed_width_small.url

    const addNewFavorite = event => {
        event.preventDefault();
        console.log('favorited');
        dispatch({type:'ADD_FAVORITE', payload:{image}  })
    }
    
    return (
        <div>
            <img src={image} ></img>
            <button onClick={addNewFavorite}>Favorite</button>
            
        </div>
    )
}
