/**
 * Created by morgansliman on 1/22/17.
 */
const orm = require('../config/orm');
const handlebars = require('express-handlebars');

function caps(title) {
	let words = title.split(' ');
	for (let i = 0; i < words.length; i++) {
		if (words[i].length > 3 || (words[i] != 'the' && words[i] != 'and')) {
			words[i] = words[i][0].toUpperCase() + words[i].substr(1);
		}
	}
	title = words.join(' ');
	return title;
}

function loadBurgers(cb) {
	orm.selectAll((err, res) => {
		if (err) throw err;
		let burgers = [];
		for (let i = 0; i < res.length; i++) {
			burgers.push({
				burger: {
					name: res[i].burger_name,
					id: res[i].id,
					devoured: res[i].devoured
				}
			});
		}
		cb(burgers);
	});
}

function addBurger(param, cb) {
	orm.insertOne(param, (err, res) => {
		if (err) throw err;
		cb(res);
	});
}

function devour(param, cb) {
	orm.updateOne(param, (err) => {
		cb(err);
	});
}

exports.helpers = {
	capitalize: caps
};

exports.getBurgers = loadBurgers;
exports.addBurger = addBurger;
exports.devour = devour;