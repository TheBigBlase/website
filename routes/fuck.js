const {MongoClient} = require('mongodb'); //change for mongodb
const express = require('express');
const router = express.Router();
const settings = require('../settings');
const chalk = require('chalk');
const fs = require('fs');


const uri = `mongodb://${settings.username}:${settings.password}@${settings.ip}:${settings.port}/${settings.database}`;
//TODO add date & new bar for usernae

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('fuck', { title: 'fuck fuck fuck fuck ' });
});


router.post('/', async function(req, res, next) {
	const content = req.body.message;
	const nickname = req.body.nickname;
	res.render('no', { title: 'lol' });
	await main(content, nickname);
});


async function main(content, nickname){
	const client = new MongoClient(uri);
    try {
		let stop = await blacklist(content) && await blacklist(nickname);
		if(stop == true ) return;

        await client.connect();
        await  insertMessages(client, content, nickname);
 
		console.log("conncting");
    } 
	catch (e) {
        console.error(e);
    }
	finally {
		rickRoll(client);
        await client.close();
    }
};


async function insertMessages(client, msgContent, nickname){
	const db = client.db(settings.database);
	const collection = db.collection("messages");
	if (nickname === '') { await collection.insertOne({content:msgContent, time: Math.floor(Date.now()/1000)});}
	else { await collection.insertOne({content:msgContent, time: Math.floor(Date.now()/1000), author:nickname});}

};


async function badWords(content) {
	let value = false;
	await new Promise(async (resolve, reject) => {
	fs.readFile("/usr/website/blacklist.txt", "utf8", async(err, data) => { 
		await resolve(data.split("\n")) 
	})
	}).then(async res => {
		await res.forEach(word => {
		if(word.trim().toLowerCase() === content){
			value = true;
		}
	})
	})
	return value; 
}

async function blacklist(content){

	content = content.trim().toLowerCase();
	return await badWords(content);
	
};
	

async function rickRoll(client){     
	const db = client.db(settings.database);
	const collection = db.collection("rickRoll");	

	try {
		await collection.insertOne({time: Math.floor(Date.now()/1000)});
	}

	catch (e) {
        console.error(e);
    }
	finally {
        await client.close();
    }
};


module.exports = router;
