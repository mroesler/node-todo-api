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


    // db.collection('Todos').find({_id: ObjectID('5979c2dc05fd59159a29b4fa')}).toArray().then(
    //     (docs) => {
    //         console.log('Todos:');
    //         console.log(JSON.stringify(docs, undefined, 2));
    //     }
    // ).catch(
    //     () => {
    //         console.log("Unable to fetch Todos data");
    //     }
    // );

    db.collection('Users').find({name: 'Micha Rösler'}).toArray().then(
        (docs) => {
            console.log('Users:');
            console.log(JSON.stringify(docs, undefined, 2));
        }
    ).catch(
        () => {
            console.log("Unable to fetch Users data");
        }
    );

    db.collection('Todos').find().count().then(
        (count) => {
            console.log(`Todos Count: ${count}`);
        }
    ).catch(
        () => {
            console.log("Unable to fetch Todos data");
        }
    );

    db.close();
});