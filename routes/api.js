const express = require('express');
const router = express.Router();


const User = require('../models/user');

User.methods(['get', 'put', 'post', 'delete']);
User.register(router, '/users');

module.exports = router;