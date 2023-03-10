const express = require('express');
const {getAllUsers, getUserId, getUserByName} = require('../controllers/userController');

const routerUser = express.Router();

routerUser.get ('/users', getAllUsers);
routerUser.get('/user/:id', getUserId);
routerUser.get('/username/:name', getUserByName);


module.exports = routerUser;