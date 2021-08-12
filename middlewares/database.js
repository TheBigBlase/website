import nc from "next-connect";
import { MongoClient } from 'mongodb';
const settings = require('../settings');
global.mongo = global.mongo || {};

const uri = `mongodb://${settings.username}:${settings.password}@${settings.ip}:${settings.port}/${settings.database}`;

export default async function database(req, res, next) {
	if (!global.mongo.client){
		global.mongo.client = new MongoClient(uri);
		await global.mongo.client.connect();
	}
	req.dbClient = global.mongo.client;
	req.db = global.mongo.client.db(settings.database);
	return next();
}
