const mongoose = require('mongoose');

var todoSchema = mongoose.Schema({

    username: String,
    todo: String,
    date: String,

});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
