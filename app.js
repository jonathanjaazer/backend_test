const express = require('express');
const mongoose = require('mongoose');
const User = require('./model/user');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


mongoose.connect(`mongodb://192.168.7.144:27017/test`)
.then(() => {
    console.log("Successfully connected to the database ");
}).catch((error) => {
    console.log("Unable to connect to the database " + error);
});

app.use(cors());
app.use(express.json());

app.get('/user', (req, res, next) => {
    User.find().then(users => {
        res.status(200).json(users);
    }).catch(err => {
        res.status(400).json({
            error: err
        });
    })
});

app.get('/user/:id', (req, res, next) => {
    User.findOne({_id: req.params.id}).then(users => {
        res.status(200).json(users);
    }).catch(err => {
        res.status(400).json({
            error: err
        });
    })
});

app.post('/user', (req, res, next) =>{
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        createdAt: Date()
    });
    
    user.save().then(() => {
        res.status(201).json({
            message: 'Post saved successfully'
        });
    }).catch(err => {
        res.status(400).json({
            error: err
        });
    });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})