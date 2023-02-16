const mongoose = require('mongoose');
const config = require('../config/db');

const ClickSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    geo: {
        type: String,
        required: true
    },
   device: {
        type: String,
        required: true
    },
});

const Click = module.exports = mongoose.model('Click', ClickSchema);

module.exports.getAllClick = function(err, click) {
    const filter = {};
    Click.find(filter);
};



module.exports.addClick = function(newClick, callback) {
    newClick.save(callback);
};