const express = require('express');
const connection = require('../connection');
const router = express.Router();
const userController = require('../controllers/user');

router.post('/signup', userController.controllerForUserSignUp);

module.exports = router;