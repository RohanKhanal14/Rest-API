const express = require('express');
const userRouter = require('./routes/user.route');
const db_connection = require('./db/Connection');
const dotenv = require('dotenv').config();

const app = express();

app.use(express.json());
app.use('/api', userRouter);
db_connection();

module.exports = app;