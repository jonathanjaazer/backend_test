const mongoose = require('mongoose');

const requestSchema = mongoose.Schema({
    type_of_request: {type: String, required: true},
    date_created: {type: Date, default: Date.now},
    date_updated: {type: Date},
    date_needed: {type:Date, required: true},
    user_id: {type: String, required: true},
    user_name: {type: String, required: true},
    department_id: {type: String, required: true},
    department_head: {type: String, required: true},
    department_name: {type: String, required: true},
    vendor_id: {type: String, required: true},
    vendor_name: {type: String, required: true},
    particular: {type: String, required: true},
    amount_requested: {type: mongoose.Decimal128, required: true},
    project_id: {type: String, required: true},
    project_name: {type: String, required: true},
    subproject: {type: String},
    project_class: {type: Array, required: true},
    taxability_id: {type: String, required: true},
    supporting_documents: {type: Array, required: true},
    status: {type: String, required: true},
});

module.exports = mongoose.model('Check_request', requestSchema);