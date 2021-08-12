const settings = require('../settings');

export async function insertMessage(db, {message, name}) { 
	return db.collection(settings.database)
					.insertOne({
						content:message, 
						time: Math.floor(Date.now()/1000),
						nickname: name
					})
			.then(({ops}) => ops[0]);
}
