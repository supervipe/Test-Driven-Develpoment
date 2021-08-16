const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController.js');

router.get('/getAll/', controller.getAll);
//router.post('/login/', controller.login);


module.exports = router;