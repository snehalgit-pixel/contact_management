const express = require('express');
const connection = require('../connection');
const router = express.Router();
const userController = require('../controllers/user');

router.post('/signup', userController.controllerForUserSignUp);
router.get('/contacts', userController.controllerToGetAllContacts);

module.exports = router;