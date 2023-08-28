const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.searchwithusertype);

router.get('/sort', userController.sortbyname);

module.exports = router;
