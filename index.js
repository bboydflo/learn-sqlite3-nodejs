const sqlite3 = require('sqlite3').verbose();

// create a db connection
// let db = new sqlite3.Database(':memory:', (err) => {
let db = new sqlite3.Database('./chinook/chinook.db', sqlite3.OPEN_READWRITE, (err) => {
  if(err) {
    return console.error(err.message);
  }
  console.log('sqlite3 db connection opened successfully');
});

// close db connection
db.close(err => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});
