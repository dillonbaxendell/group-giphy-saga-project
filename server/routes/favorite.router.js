const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = 'SELECT * FROM "favorites";'
  pool.query(queryText)
  .then((result) => { res.send(result.rows); })
  .catch((err) => {
    console.log('Error completing Select favorites query', err);
    res.sendStatus(500);
  });
});

// add a new favorite
router.post('/', (req, res) => {
  // making req.body set to new value -> This works and logs correctly!
  const newFavorite = req.body;
  //! This will log newFavorite as an object in our database. Do we want this? I'm not sure that we do. Wouldn't we want it to log as a string?
  console.log('url to save:', newFavorite)

  const queryText = `INSERT INTO "favorites" ( "url" )
  VALUES ($1)`;
  const queryValues = [newFavorite]
  pool.query(queryText, queryValues)
  .then(() => {res.sendStatus(201); })
  .catch((err) => {
    console.log('Error completing POST query', err)
  })
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
