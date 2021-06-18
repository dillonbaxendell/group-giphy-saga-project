import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

//SET FAVORITES W/ DISPATCH AND CATEGORIES HERE
export default function FavoritesItem({favorite}) {
    // console.log(favorite.url);

const dispatch = useDispatch();
const [category, setCategory] = useState('');
const categoryName = useSelector((store => store.getCategory))
// console.log(categoryName)
//GET REQUEST
useEffect(() => {
    dispatch({type: 'FETCH_FAVORITE'})
    dispatch({type: 'FETCH_CATEGORY'})
}, []);

//DELETE REQUEST
const handleDelete = () => {

    dispatch({
        type: 'DELETE_FAVORITE',
        payload: {id: favorite.id}
    })
}

const favoriteID = favorite.id;
//CATEGORY POST
const handleSubmit=(category, favoriteID)=>{
   
    // console.log(favoriteID)
    dispatch({
            type: 'ADD_CATEGORY',
            payload: {
                category,
                favoriteID
            }})
}

const handleClear = () => {
    dispatch({type: 'CLEAR_FAVORITE'})
}

    return (
        <Card>
            <CardContent>
            <img key={favorite.id} src={favorite.url}></img>
            </CardContent>
            <CardActions>
            <button onClick={handleDelete}>DELETE</button>
            <InputLabel>Category</InputLabel>
            <Select value={category} onChange={(event) => setCategory(event.target.value)}>
                {categoryName.map((name) => (
                    <MenuItem key={name.id} value={name.id}>
                        {name.name}
                    </MenuItem>
                ))}
            </Select>
            <button onClick = {handleSubmit(category, favoriteID)}>Submit New Category</button>
            </CardActions>
        </Card>
    )
}
