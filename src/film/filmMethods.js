const mongoose = require('mongoose');
const filmModel = require('./filmModel');

exports.addMovie = async(newFilm) =>{
    try {
        let movie = new filmModel(newFilm);
        await movie.save();
        console.log(`Movie created ${movie}`);
    } catch (error) {
        console.log(error);
    }
    mongoose.connection.close();
}

exports.allList = async () => {
    try {
        aList = await filmModel.find();
        console.log(aList);
    } catch (error) {
        console.log(error);
    }
    mongoose.connection.close();
};

exports.updateMovie = async (upMovie) => {
    try {
        if (upMovie.newtitle) {
            await filmModel.findOneAndUpdate(
                {name: upMovie.title},
                { $set: {name: upMovie.newtitle}}
            );
            console.log(`Movie had been updated ${upMovie.newtitle}`);
        } else if (upMovie.newactor) {
            await filmModel.findOneAndUpdate(
                {name: upMovie.title},
                { $set: {actor: upMovie.newactor}}
            );
            console.log(`Movie actor has been updated ${upMovie.newactor}`)
        }
    } catch (error){
        console.log(error);
    }
    mongoose.connection.close();
};

exports.deleteMovie = async (deMovie) => {
    try {
        let dList = await filmModel.findOneAndDelete({name: deMovie.title, actor: deMovie.actor});
        console.log(`Movie deleted: ${dList}`)
    } catch (error) {
        console.log(error);
    }
    mongoose.connection.close();
};