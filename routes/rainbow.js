const express = require('express');
const router = express.Router();
const axios = require('axios');


/* GET users listing. */
router.get('/', function(req, res, next) {
		console.log('fuck you sample');
		axios.post('127.0.0.1:9003/rainbow', {bullshit: 'fuckyousample'})
	.then(res => {
		console.log(res.statusCode)})
	.catch(error => {
		console.error(error)});
		console.log('fuck you sample 2');
});
	
module.exports = router;
