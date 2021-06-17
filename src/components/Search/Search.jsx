import './Search.css';
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

//SEARCH
export default function Search() {
  let [newSearch, setNewSearch] = useState("");
  const dispatch = useDispatch();

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
        </div>
      </form>
    </div>
  );
}
