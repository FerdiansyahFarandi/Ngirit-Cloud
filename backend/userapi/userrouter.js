const express = require('express');
var user = require('./userservice');
var router = express.Router();

router.post('/api/v1/register', user.regist);
router.post('/api/v1/login', user.login);

module.exports = router;