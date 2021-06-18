import React from 'react'
import {useDispatch} from 'react-redux';

export default function SearchItem({url}) {

    const dispatch = useDispatch();

    //This is the size of the image that we want to display in a URL format
    const image = url.images.fixed_width_small.url

    const addNewFavorite = event => {
        event.preventDefault();
        console.log('The image url is FROM SEARCHITEM',image)
        dispatch({type:'ADD_FAVORITE', payload: image  })
    }
    
    return (
        <div>
            <img src={image} ></img>
            <button onClick={addNewFavorite}>Favorite</button>
            
        </div>
    )
}
