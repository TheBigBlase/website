import nc from "next-connect"
import {all} from '../../middlewares/index';
import { insertMessage } from '../../db/index';
const handler = nc();

handler.use(all);

handler.post(async(req, res) => {
	const { message, name } = req.body;
	if(!message){
		req.status(400).send('Please leave a message.');
		return;
	}
	if(!name){
		name = '';
		return;
	}
	await insertMessage(req.db, {
		message, name
	});
});

export default handler;
