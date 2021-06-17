import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios'

//SEARCH
export default function Search() {

let [newSearch, setNewSearch] = useState('');
const dispatch = useDispatch();

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
        </div>
    )
}
