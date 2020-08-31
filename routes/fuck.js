const mysql = require('mysql');
const express = require('express');
const router = express.Router();
const sqlSettings = require('../settings');


let connection = mysql.createConnection({ 
	host: 'localhost',
	user: sqlSettings.sql.username,
	password: sqlSettings.sql.password,
	database: sqlSettings.sql.database
});
connection.connect(function(err) { if (err) throw err; console.log(`connected to ${sqlSettings.sql.database}`)});

let ip, message;


/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('niceLayout', { title: 'fuck fuck fuck fuck ' });
});

router.post('/', async function(req, res, next) {
	ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	message = req.body.title;
	res.render('niceLayout', { title: 'I hate you' });
	await connection.query(`INSERT INTO messages (ip, message) values ("${ip}", "${message}")`);
});

module.exports = router;
