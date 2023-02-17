const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // Add query to get all genres
  console.log(req.params.id);
  // res.sendStatus(500);
  const id = req.params.id;
  const queryText = `SELECT "genres"."name" FROM "movies"
    JOIN "movies_genres" ON "movies_genres"."movie_id" = "movies"."id"
    JOIN "genres" ON "genres"."id" = "movies_genres"."genre_id"
    WHERE "movies"."id" = ${id};`;
  pool.query(queryText)
  .then((response) => {
    console.log(response);
    res.send(response.rows);
  })
  .catch((err) => {
    res.sendStatus(500);
  });
});

module.exports = router;