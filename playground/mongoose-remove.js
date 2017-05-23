const { ObjectID } = require('mongodb')

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });
Todo.findOneAndRemove({ _id: '592461c8ebab6577a1c84313' }).then((todo) => {
  console.log(todo);
});


Todo.findByIdAndRemove('592461c8ebab6577a1c84313').then((todo) => {
  console.log(todo);
});
