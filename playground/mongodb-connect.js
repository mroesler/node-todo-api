//const MongoClient = require('mongodb').MongoClient;
// Object destructuring
const {MongoClient, ObjectID} = require('mongodb');

// Object destructuring ES6
// var user = {name: 'Micha', age: 25};
// var {name} = user;
// console.log(name);

var db = 'TodoApp';
var url = 'mongodb://127.0.0.1:27017/' + db;

MongoClient.connect(url, (err, db) => {
    if(err) {
        return console.log('Unable to connect to Mongodb server', err);
    }
    console.log('Connected to Mongodb server');
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Could not insert document into todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    
    // db.collection('Users').insertOne({
    //     name: 'Micha Rösler',
    //     age: 36,
    //     location: 'Cologne'
    // }, (err, res) => {
    //     if(err) {
    //          return console.log('Could not insert document into Users', err);
    //     }
    //     console.log(JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 2));
    // });
    db.close();
});