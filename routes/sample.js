const express = require('express');
const router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('sample', { title: 'me dumb card go fire' } );
});

	
module.exports = router;
