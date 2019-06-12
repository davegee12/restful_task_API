var mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {type: String, required: [true, "A task needs a name"], minlength: 3},
    description: {type: String},
    completed: {type: Boolean},
}, {timestamps: true});

const Task = mongoose.model('Task', TaskSchema);