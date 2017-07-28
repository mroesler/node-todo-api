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

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'})
    // .then(
    //     (result) => {
    //         console.log(result);
    //     }
    // )
    // .catch(
    //      (error) => {
    //       console.log("No record found for deletion");
    //      }
    // );
    
    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'})
    // .then(
    //     (result) => {
    //         console.log(result);
    //     }
    // )
    // .catch(
    //      (error) => {
    //       console.log("No record found for deletion");
    //      }
    // );

    // findOneAndDelete
    db.collection('Todos').findOneAndDelete({text: 'Eat lunch'})
    .then(
        (result) => {
            console.log(`'You deleted the record with id: ${result.value._id} and text: ${result.value.text}`);
        }
    )
    .catch(
        (error) => {
            console.log("No record found for deletion");
        }
    );
    db.close();
});