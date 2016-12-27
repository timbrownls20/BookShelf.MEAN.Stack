var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main')

router.get('/About', ctrlMain.about);

module.exports = router;
