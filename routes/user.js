const express = require('express');
const connection = require('../connection');
const router = express.Router();
const userController = require('../controllers/user');

router.post('/signup', userController.controllerForUserSignUp);
router.get('/contacts', userController.controllerToGetAllContacts);
router.patch('/contact/update-by-ID', userController.controllerToUpdateContactByID);
router.post('/contact/add', userController.controllerToAddContact);
router.delete('/contact/delete', userController.controllerToDeleteContact);

module.exports = router;