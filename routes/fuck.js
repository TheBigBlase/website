const {MongoClient} = require('mongodb'); //change for mongodb
const express = require('express');
const router = express.Router();
const settings = require('../settings');
const chalk = require('chalk');


const uri = `mongodb://${settings.username}:${settings.password}@${settings.ip}:${settings.port}/${settings.database}`;
//TODO add date & new bar for usernae

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('fuck', { title: 'fuck fuck fuck fuck ' });
});

router.post('/', async function(req, res, next) {
	content = req.body.message;
	res.render('fuck', { title: 'I hate you' });
	await main(content);
});




async function main(content){

	const client = new MongoClient(uri);
    try {

        await client.connect();
        await  insertMessages(client, content);
 
    } 
	catch (e) {
        console.error(e);
    }
	finally {
        await client.close();
    }
};


async function insertMessages(client, msgContent){
	const db = client.db(settings.database);
	const collection = db.collection("messages");
	await collection.insertOne({content:msgContent});

};
module.exports = router;
