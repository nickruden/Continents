var mysql = require('mysql2');

var db = mysql.createConnection({
host : 'bocg2cmeficw000b5qyo-mysql.services.clever-cloud.com',
port: '3306',
user : 'uqod9urhjmwdwj89',
password : 'RuS3sRialInl5ndmIvRE',
database: 'bocg2cmeficw000b5qyo'
});

db.connect( function (err) {
if (err) {
console.log("!!! Cannot connect !!! Error:"); throw err;
} else {
console.log("Connection established.");
}
});

module.exports = db;