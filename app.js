const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/user');
const requestRouter = require('./routes/check_request');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


mongoose.connect(`mongodb://192.168.7.144:27017/dboCRIS`)
.then(() => {
    console.log("Successfully connected to the database ");
}).catch((error) => {
    console.log("Unable to connect to the database " + error);
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(morgan("short"));

app.use('/api/users', userRouter);
app.use('/api/check_requests', requestRouter);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})