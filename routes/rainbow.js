const express = require('express');
const router = express.Router();
const axios = require('axios');


/* GET users listing. */
router.post('/', function(req, res, next) {
			console.log('fuck you sample');
			asiox.post('127.0.0.1:9003/rainbow', {
			})
		.then(res => {
			console.log(res.statusCode)})
		.catch(error => {
			console.error(error)});
});
	
module.exports = router;
