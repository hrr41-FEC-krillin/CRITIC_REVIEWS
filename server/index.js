const express = require('express');
const app = express();

const port = process.env.PORT || 4540;

const db = require('../db');
const cors = require('cors')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static('./public'));

app.get('/api/cr_reviews', (req, res) => {
  db.getCReviews((err, results) => {
    if (err) throw err;
    res.send(results).end();
  });
});


app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(Date(), `Listening on: ${port}`);
});
