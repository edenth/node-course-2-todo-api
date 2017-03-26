//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  // db.collection('Todos').deleteMany({test: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({complete: false}).then((result) => {
  //   console.log(result);
  // });

  //deleteDuplicateName
  // db.collection('Users').deleteMany({name: 'Jane'}).then((result) => {
  //   console.log(result);
  // });

  //deleteById
  // db.collection('Users').findOneAndDelete({
  //   _id: new ObjectID("58d2b11776e5940d989a19a7"}).then((result) => {
  //   console.log(result);
  // });

//db.close();
});
