const express = require('express');
const router = express.Router();
const signUp = require('../api/signup');



router.post('/api/signup', signUp);
router.post('/api/login', customerController.create);
router.get('/getCustomer/:customerId', customerController.getById);
router.get('/uniqueCities', customerController.uniqueCities);

module.exports = router;