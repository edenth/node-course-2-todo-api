const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var userId = '58d7d8de07c594102436803e';
// var id = '58d8e5a3265dd00c2220daed1';
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos',todos);
// });
//
// Todo.findOne({
//   _id:id
// }).then((todo) => {
//   console.log('Todo',todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id',todo);
// }).catch((e) => console.log(e));

//User.findById
// User.findById(userId).then((user) => {
//   if(!user){
//     return console.log('ID not found');
//   };
//   console.log('User by id',user);
// }).catch((e) => console.log(e));

User.findById(userId).then((user) => {
  if(!user){
    return console.log('ID not found');
  };
  console.log(JSON.stringify(user, undefined, 2));
},(e) => {
  console.log(e);
});
