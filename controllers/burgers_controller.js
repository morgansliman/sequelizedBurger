/**
 * Created by morgansliman on 1/22/17.
 */
const express = require('express');
const bodyParser = require('body-parser');
const model = require('../models/burger');

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
	model.getBurgers((data) => {
		res.render('index', { burgers: data });
	});
});

router.post('/', (req, res) => {
	model.addBurger(req.body.burger.trim(), () => {
		res.redirect('/');
	});
});

router.post('/devour', (req, res) => {
	model.devour(req.body.num, (err) => {
		if (err) {
			res.redirect('/');  // should add some error checking here
		}
		else {
			res.redirect('/');
		}
	})
});

module.exports = router;