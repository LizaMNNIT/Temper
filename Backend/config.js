var mysql      = require('mysql');
var connection = mysql.createConnection({
  host:'den1.mysql4.gear.host',
  user:'sosili',
  password:'harneet@6432',
  database:'sosili',
  multipleStatements: true
});

connection.connect(function(err){
if(!err) {
    console.log("Database is connected");
} else {
    console.log("Error while connecting with database");
}
});
module.exports = connection;
