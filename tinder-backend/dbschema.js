const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    name: {type: 'string', required: true},
    url: {type: 'string', required:true},
    info: {type: 'string', required: true}
});

const Cards = mongoose.model("data" , Schema)
module.exports= Cards