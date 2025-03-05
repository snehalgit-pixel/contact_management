const express = require('express');
const connection = require('../connection');
const router = express.Router();
const userController = require('../controllers/user');

router.post('/signup', userController.controllerForUserSignUp);
router.get('/contacts', userController.controllerToGetAllContacts);
router.patch('/update-contact-by-ID', userController.controllerToUpdateContactByID);

module.exports = router;