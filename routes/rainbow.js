const express = require('express');
const router = express.Router();
const axios = require('axios');
const { exec } = require("child_process");

/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log('fuck you sample');
	exec("curl -X POST localhost:9003/rainbow",(error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
});
	
module.exports = router;
