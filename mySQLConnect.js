var mysql = require('mysql2');

var db = mysql.createConnection({
host : 'localhost',
port: '3306',
user : 'root',
password : 'root',
database: 'mydb'
});

db.connect( function (err) {
if (err) {
console.log("!!! Cannot connect !!! Error:"); throw err;
} else {
console.log("Connection established.");
}
});

module.exports = db;