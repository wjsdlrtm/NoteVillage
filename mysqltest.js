var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '172.20.10.4',
  user     : 'javauser',
  password : 'javadude',
  database : 'javatest'
});

connection.connect();

connection.query('SELECT * from testdata', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].foo);
  console.log('The solution is: ', rows[1].bar);
});

connection.end();
