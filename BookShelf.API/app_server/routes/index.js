var express = require('express');
var router = express.Router();
//var ctrlMain = require('../controllers/main')
var ctrlOthers = require('../controllers/others')

/* GET home page. */
router.get('/', ctrlOthers.angularApp);

module.exports = router;
