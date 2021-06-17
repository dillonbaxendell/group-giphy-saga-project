import './Search.css';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import React from 'react';
import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios'
import SearchItem from '../SearchItem/SearchItem'
//SEARCH
export default function Search() {
  let [newSearch, setNewSearch] = useState("");
  const dispatch = useDispatch();

const searchResults = useSelector(store => store.getResults)

let [newFavorite, setNewFavorite] = useState('');



const handleSearch = (event) => {
    event.preventDefault();
    console.log(newSearch);
    dispatch({ type: "FETCH_SEARCH", payload: newSearch });
  };



    return (
        <div>
        <form onSubmit={handleSearch}>
        <div className="textField">
          <TextField
            color="primary"
            id="standard-search"
            label="Search"
            type="search"
            onChange={(evt) => setNewSearch(evt.target.value)}
          />
          <Button type="submit">Submit</Button>
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
            </form> 
        </div>
  );
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