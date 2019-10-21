  const db =  require('.');
  const dummy_data = require('./dummy-data.json');

  db.saveCReviews(dummy_data, console.log("seeded"));