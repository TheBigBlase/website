const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => { 
	res.send("lol u bad")});

app.listen(port, () => { 
	console.log(`listening on http:localhost:${port}`)});
