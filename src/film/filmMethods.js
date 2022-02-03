const mongoose = require('mongoose');
const filmModel = require('./filmModel');

exports.addMovie = async(newFilm) =>{
    try {
        let movie = new filmModel(newFilm);
        await movie.save()
        console.log(`Movie created`)
    } catch (error) {
        console.log(error)
    }
    mongoose.connection.close()
}

exports.list = async() => {
    try {
        await fileModel.find({})
    } catch (error) {
        console.log(error)

    }
    mongoose.connection.close()
}