let mysql = require('mysql');

let connection = mysql.createConnection({
    host: '104.211.102.71',
    user: 'devmedstore',
    password: 'uapL6{9h?',
    database: 'testml'
});

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
   
    console.log('Connected to the MySQL server.');
  });