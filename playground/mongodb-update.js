//const MongoClient = require('mongodb').MongoClient;
// Object destructuring
const {MongoClient, ObjectID} = require('mongodb');

var db = 'TodoApp';
var url = 'mongodb://127.0.0.1:27017/' + db;

MongoClient.connect(url, (err, db) => {
    if(err) {
        return console.log('Unable to connect to Mongodb server', err);
    }
    console.log('Connected to Mongodb server');

    // findOneAndUpdate
    db.collection('Todos').findOneAndUpdate(
        // Filter
        {
            _id: new ObjectID('5979c2dc05fd59159a29b4fa')
        },
        // Update
        {
            $set: {
                completed: true
            }
        },
        // Options
        {
            returnOriginal: false
        }
        // Optional callback (or promise if not provided)
    )
    .then(
        (result) => {
            console.log(result);
        }
    )
    .catch();

    db.close();
});