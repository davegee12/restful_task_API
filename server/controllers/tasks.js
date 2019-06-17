var mongoose = require('mongoose');

require('../models/task.js');
const Task = mongoose.model('Task');

module.exports = {
    index: (req, res) => {
        Task.find({}, (err, result) => {
            console.log("######################################################")
            console.log(result);
            if(err){
                res.json({error: err})
            }
            else{
                console.log("######################################################")
                res.json({result: result})
            }
        })
    },

    show: (req, res) => {
        Task.findById(req.params.id, (err, id) => {
            if(err){
                res.json({error: err})
            }
            else{
                res.json({result: id})
            }
        })
    },

    create: (req, res) => {
        console.log("POST DATA", req.body);
        Task.create(req.body, (err, result) => {
            if (err){
                res.json({error: err})
            }
            else{
                console.log("Message successfully added to data")
                res.json({result: result});
            }
        })
    },

    update: (req, res) => {
        console.log("this is the controller file " + req.body);
        Task.update({_id: req.params.id}, req.body, (err, result) => {
            if (err){
                res.json({error: err})
            }
            else{
                res.json({result: result});
            }
        })
    },

    delete: (req, res) => {
        Task.remove({_id: req.params.id}, (err, result) => {
            if (err){
                res.json({error: err})
            }
            else{
                res.json({result: result});
            }
        })
    }
}