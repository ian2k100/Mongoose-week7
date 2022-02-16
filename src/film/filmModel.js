const mongoose = require('mongoose');

const filmSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    actor:{
        type:String,
        default:'actor unknown',
    },
    year:{
        type:Number,
        required:false,
    },
    genre:{
        type:String,
        required:false,
    },
    rating:{
        type:String,
        required:false,
    },
});

const filmModel = mongoose.model('Movies', filmSchema)

module.exports = filmModel