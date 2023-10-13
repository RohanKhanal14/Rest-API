const express = require('express');
const userRouter = require('./routes/user.route');
const dotenv = require('dotenv').config();
const app = express();

app.use('/api',userRouter);

module.exports = app;