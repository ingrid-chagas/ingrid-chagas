const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodequiz');
mongoose.Promise = global.Promise;

module.exports = mongoose;