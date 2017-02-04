/**
 * Created by morgansliman on 1/22/17.
 */
const express = require('express');
const router = require('./controllers/burgers_controller');
const handlebars = require('express-handlebars');
const model = require('./models/burger');

const app = express();
const hbs = handlebars.create({
	defaultLayout: 'main',
	helpers: model.helpers
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.use(router);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log('Server listening on port:', PORT);
});