const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {type: String, required: true},
    f_name: {type: String, required: true},
    l_name: {type: String, required: true},
    department_id: {type: String, required: true},
    role_id: {type: String, required: true},
    position: {type: String, required: true},
    status: {type: String, required: true},
    date_created: {type: Date}
})

module.exports = mongoose.model('Users', userSchema);