const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '597edb477f4800662238dd4c';
var userId = '597b0ec57dc2b06a400e4d0e';

if(!ObjectID.isValid(id)) {
    console.log('Id not valid');
}

if(!ObjectID.isValid(userId)) {
    console.log('UserId not valid');
}

// find, findOne and findById can all handle string IDs instead of ObjectID - Objects
Todo.find({_id: id})
.then((todos) => console.log('Todos:', todos))
.catch((err) => console.log(err));

Todo.findOne({_id: id})
.then((todo) => console.log('Todo:', todo))
.catch((err) => console.log(err));

Todo.findById(id)
.then((todo) => {
    if(!todo) {
        return console.log('Id not found!');
    }
    console.log('Todo by Id:', todo);
})
.catch((err) => console.log(err));

User.findById(userId)
.then((user) => {
    if(!user) {
        return console.log('User not found!');
    }
    console.log('User by Id:', user);
})
.catch((err) => console.log(err));