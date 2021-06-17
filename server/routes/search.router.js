const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios')
const router = express.Router();
require('dotenv').config();

router.get(`/`, (req, res) => {
    let newSearch = req.query.q
    console.log('newSearch:', newSearch)
  // return all categories
  axios.get(`http://api.giphy.com/v1/gifs/search?q=${newSearch}&api_key=${process.env.GIPHY_API_KEY}&limit=5`)
  .then((response) => {
      console.log ('success! Here is your data:', response.data)
    res.send(response.data);
  }).catch( err => {
      console.log(err)
    res.sendStatus(500);
  });
});

module.exports = router;