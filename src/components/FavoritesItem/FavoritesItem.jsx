import React from 'react'
import {useDispatch} from 'react-redux';
import {useState, useEffect} from 'react';


//SET FAVORITES W/ DISPATCH AND CATEGORIES HERE
export default function FavoritesItem({favorite}) {

const dispatch = useDispatch();
//const [category, setCategory] = useState('');

//GET REQUEST
useEffect(() => {
    dispatch({type: 'FETCH_FAVORITE'})
}, []);

//DELETE REQUEST
const handleDelete = () => {
    console.log('clicked delete!');

    dispatch({
        type: 'DELETE_FAVORITE',
        payload: {id: favorite.id}
    })
}



    return (
        <div>
            <img key={favorite.id} src={favorite.url}></img>
            <button onClick={handleDelete}>DELETE</button>
            {/* <select onChange={(event) => setCategory(event.target.value)}>
                <option value ="select">Select a Category</option>
                <option value="funny">Funny</option>
                <option value="cohort">Cohort</option>
                <option value="cartoon">Cartoon</option>
                <option value="nsfw">NSFW</option>
                <option value="meme">Meme</option>
            </select>
            <button onClick = {handleCategory}>Submit New Category</button> */}
        </div>
    )
}
