const CheckRequest = require('../models/check_request');

exports.displayRequest = (req, res, next) => {
    CheckRequest.find().then(chkRequest => {
        res.status(200).json(chkRequest);
    }).catch(err => {
        res.status(400).json({
            error: err
        });
    });
}

exports.createRequest = (req, res, next) =>{
    const checkRequest = new CheckRequest({
        user_id: req.body.user_id,
        date_needed: req.body.date_needed,
        department_id: req.body.department_id,
        department_head: req.body.department_head,
        department_name:  req.body.department_name,
        vendor_id:  req.body.vendor_id,
        vendor_name:  req.body.vendor_name,
        particular:  req.body.particular,
        amount_requested: req.body.amount_requested,
        project_id:  req.body.project_id,
        project_name: req.body.project_name,
        subproject: req.body.subproject,
        project_class: req.body.project_class,
        taxability_id: req.body.taxability_id,
        supporting_documents: req.body.supporting_documents,
        status: req.body.status
    });
    checkRequest.save().then(() => {
        res.status(201).json({
            message: 'Request successfully created'
        });
    }).catch(err => {
        res.status(400).json({
            error: err
        });
    });
}

exports.getRequest = (req, res, next) => {
    CheckRequest.findOne({_id: req.params.id}).then(chkRequest => {
        res.status(200).json(chkRequest);
    }).catch(err => {
        res.status(400).json({
            error: err
        });
    })
}

exports.updateRequest = (req, res, next) => {
    const user = new User({
        _id: req.params.id,
        email: req.body.email,
        f_name: req.body.f_name,
        l_name: req.body.l_name,
        department_id: req.body.department_id,
        role_id: req.body.role_id,
        position: req.body.position,
        status: "active",
        date_created: Date.now()
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