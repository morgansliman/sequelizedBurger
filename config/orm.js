/**
 * Created by morgansliman on 1/22/17.
 */
const conn = require('./connection');

const ORM = {
	selectAll: function(cb) {
		conn.query("SELECT * FROM `burgers`", (err, res) => {
			cb(err, res);
		});
	},
	insertOne: function(param, cb) {
		let sql = "INSERT INTO `burgers` (`burger_name`, `devoured`) values (?, 0)";
		conn.query(sql, param.toString(), (err, res) => {
			cb(err, res);
		});
	},
	updateOne: function (param, cb) {
		let sql = "UPDATE `burgers` SET devoured=1 WHERE id=?";
		conn.query(sql, [param.toString()], (err) => {
			cb(err);
		});
	}
};

module.exports = ORM;