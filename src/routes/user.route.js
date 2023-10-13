const express = require('express');
const { getUser, createUser, updateUser, deleteUser } = require('../controllers/user.controller');

const userRouter = express.Router();

userRouter.get('/user',getUser);
userRouter.post('/user/:id',createUser);
userRouter.put('/user/:id',updateUser);
userRouter.delete('/user/:id',deleteUser);

module.exports = userRouter ;