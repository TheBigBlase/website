import nc from "next-connect"
import {all} from '../../middlewares/index';
import { insertMessage } from '../../db/index';
import Router from 'next/router';
const handler = nc();

handler.use(all);

handler.post(async(req, res) => {
	const { message, name } = req.body;

	if(!message || !name){
		res.status(400).send('Please enter a message and a name.');
	}

	else{
		await insertMessage(req.db, {
		message, name
	});
}
});

export default handler;
