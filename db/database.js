export async function insertMessage(db, {message, name}) { 
	const date = new Date();
	return db.collection("messages")
					.insertOne({
						content:message, 
						time: date.toISOString(),
						author: name
					})
			.then(({ops}) => ops[0]);
}
