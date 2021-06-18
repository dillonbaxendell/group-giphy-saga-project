const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
  // return all categories
  const queryText = `SELECT * FROM category ORDER BY name ASC`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

//POST REQUEST for new category
router.post('/:id', (req, res) => {
  const category = req.body;

  console.log(category);

  const queryText = `UPDATE "favorites" SET "category_id"=$1 WHERE "favorites".id = ;`

    pool.query(queryText, [category])
.then(result => {
  res.sendStatus(201);
})
.catch( err => {
  console.log('error in POST new category', err);
})
})

module.exports = router;
