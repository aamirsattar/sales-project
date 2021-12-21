const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.post('/register',userController.signup);
router.post('/login', userController.login);
router.get('/listUsers', userController.listUsers);
router.post('/addBook', userController.addBook);
router.post('/addCustomer', userController.addCustomer);
router.post('/addCategory', userController.addCategory);
router.post('/addPublisher', userController.addPublisher);
router.post('/addOrder', userController.addOrder);

module.exports = router;