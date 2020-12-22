const express = require('express');
const router = express.Router();
const axios = require('axios');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('lamp', { title: 'you are speed' } );
});

router.post('/', function(req, res, next) {
	const method = req.body.method;
	//const redValue = req.body.red;
	//const greenValue = req.body.green;
	//const blueValue = req.body.blue;
	console.log(method);
	if(method == 'rainbow'){
		asiox.post('127.0.0.1:9003/rainbow', { 
			})
		.then(res => {
			console.log(res.statusCode)})
		.catch(error => {
			console.error(error)});
	}
	else if(method == 'wipe'){
		asiox.post('127.0.0.1:9003/wipe', { 
			red: redValue,
			green: greenValue,
			red: redValue
			})
		.then(res => {
			console.log(res.statusCode)})
		.catch(error => {
			console.error(error)});
	}
	else if(method == 'clear'){
		asiox.post('127.0.0.1:9003/', { 
			})
		.then(res => {
			console.log(res.statusCode)})
		.catch(error => {
			console.error(error)});
	}
	else {
		res.render('error', { title: '404 you dumb dumb'});
	}
	});
	
module.exports = router;
