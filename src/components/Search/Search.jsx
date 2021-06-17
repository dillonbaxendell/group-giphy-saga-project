import React from 'react';
import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios'

//SEARCH
export default function Search() {

const dispatch = useDispatch();
const searchResults = useSelector(store => store.getResults)
console.log(searchResults);

let [newSearch, setNewSearch] = useState('');

const favoriteThis = () => {
    console.log('favorited')
}

const handleSearch = (event) => {
    event.preventDefault();
    console.log(newSearch)
    dispatch({type: 'FETCH_SEARCH', payload: newSearch})
}

    return (
        <div>
            <form onSubmit={handleSearch}>
            <input type="text" placeholder = "Search" onChange={(evt) => setNewSearch(evt.target.value)} />
            <button type = "submit" >Submit</button>
            </form>
            <p>Images will show here:</p>
            <img src={searchResults} ></img>
            <button onClick={favoriteThis}>Favorite</button>
        </div>
    )
}




// {searchResults.map((url, i) => (
//     <>
//     return (
//         <div key={i}>
//         <img src={url} ></img>
//         <button onClick={favoriteThis}>Favorite</button>
//         </div>
//     )
//     </>
// ))}