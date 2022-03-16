var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "colleges"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM collegeData where Website='www.calbaptist.edu/'", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  }
  );
});