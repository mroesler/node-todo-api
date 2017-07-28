const mongoose = require('mongoose');

var db = 'TodoApp';
var url = 'mongodb://127.0.0.1:27017/' + db;

// Tell mongoose to use global Promise(s)
mongoose.Promise = global.Promise;

// Connect to database
mongoose.connect(url, {useMongoClient: true});

// Export
module.exports = {mongoose};