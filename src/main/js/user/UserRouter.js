const express = require('express');
const Paths = require('../PathEnum');
const UserController = require('./UserController');

const router = express.Router();
const userController = new UserController();

// TODO: login should be POST
router.get(Paths.logIn.href, userController.logIn.bind(userController));
router.get(Paths.createUser.href, userController.createUser.bind(userController));

module.exports = router;
