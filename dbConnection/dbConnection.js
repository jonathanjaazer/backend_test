const mongoose = require('mongoose');

const connection = (db) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(`mongodb://192.168.7.144:27017/${db}`)
            .then(() => {
                resolve("Successfully connected to the database");
            }).catch((error) => {
                reject("Unable to connect to the database " + error);
            });
    });
}

module.exports = connection;