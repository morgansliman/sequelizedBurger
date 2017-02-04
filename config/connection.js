/**
 * Created by morgansliman on 1/22/17.
 */
const mysql = require('mysql');

const conn = mysql.createConnection({
	host: 'mysql4.gear.host',
	port: 3306,
	user: 'burgersdb',
	password: process.env.PASS,
	database: 'burgersdb'
});

conn.connect((err) => {
	if (err) throw err;
});

module.exports = conn;