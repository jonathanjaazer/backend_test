const User = require('../models/user');

exports.displayUsers = (req, res, next) => {
    User.find().then(users => {
        res.status(200).json(users);
    }).catch(err => {
        res.status(400).json({
            error: err
        });
    });
}

exports.createUser = (req, res, next) =>{
    const user = new User({
        email: req.body.email,
        f_name: req.body.f_name,
        l_name: req.body.l_name,
        department_id: req.body.department_id,
        role_id: req.body.role_id,
        position: req.body.position,
        status: "active",
        date_created: Date.now()
    });
    user.save().then(() => {
        res.status(201).json({
            message: 'User successfully created'
        });
    }).catch(err => {
        res.status(400).json({
            error: err
        });
    });
}

exports.getUser = (req, res, next) => {
    User.findOne({_id: req.params.id}).then(users => {
        res.status(200).json(users);
    }).catch(err => {
        res.status(400).json({
            error: err
        });
    })
}

exports.updateUser = (req, res, next) => {
    const user = new User({
        _id: req.params.id,
        email: req.body.email,
        f_name: req.body.f_name,
        l_name: req.body.l_name,
        department_id: req.body.department_id,
        role_id: req.body.role_id,
        position: req.body.position
    });
    User.updateOne({_id: req.params.id}, user).then(
        () => {
            res.status(201).json({
                message: "User successfully updated"
            });
        }
    ).catch(err => {
        res.status(400).json({
            error: err
        });
    });
}