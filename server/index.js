const express = require('express');

let app = express();
const port = 4540;

const db = require('../db');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('./dist'));

app.get('/api/cr_reviews', (req, res) => {
    db.getCReviews((err, results) => {
        if (err) throw err;
        res.send(results).end();
    });
});


app.listen(port, () => {
    console.log(Date());
    console.log(`Listening on: ${port}`);
});