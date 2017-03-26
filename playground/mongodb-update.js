//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');



  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("58d4156103554c67648910ce")
  // },{
  //   $set: {
  //     complete: true
  //   }
  // },{
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID("58d2b26a48287a25388e6d41")
},{
  $inc: {
    age: 1
  },
  $set: {
    name: 'Nut'
  }
},{
  returnOriginal: false
}).then((result) => {
  console.log(result);
});


//db.close();
});
