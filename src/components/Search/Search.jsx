import React from 'react';
import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios'
import SearchItem from '../SearchItem/SearchItem'
//SEARCH
export default function Search() {

const dispatch = useDispatch();
const searchResults = useSelector(store => store.getResults)

let [newSearch, setNewSearch] = useState('');
let [newFavorite, setNewFavorite] = useState('');



const handleSearch = (event) => {
    event.preventDefault();
    console.log(newSearch)
    dispatch({type: 'FETCH_SEARCH', payload: newSearch})
}

const clearScreen = () => {
    dispatch({type: 'CLEAR_REDUX'})
}

console.log(searchResults)
    return (
        <div>
            <form onSubmit={handleSearch}>
            <input type="text" placeholder = "Search" onChange={(evt) => setNewSearch(evt.target.value)} />
            <button type = "submit" >Submit</button>
            </form>
            <p>Images will show here:</p>
            {searchResults.map((url, i) => (
                <SearchItem
                    value={i}
                    url={url}
                />
            ))}
            {/* <img src={searchResults} ></img>
            <button onClick={addNewFavorite}>Favorite</button> 
            <button onClick={clearScreen}>Clear</button> */}
            
            
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