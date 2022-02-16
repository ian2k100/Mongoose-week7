require("./db/connection");
const mongoose = require("mongoose");;

const yargs = require("yargs/yargs");
const {hideBin} = require("yargs/helpers");
const { addMovie, allList, updateMovie, deleteMovie } = require("./film/filmMethods");
const argv = yargs(hideBin(process.argv)).argv;

const app = async() => {
    if(argv.add){
        await addMovie({
            name: argv.title,
            actor: argv.actor,
            year: argv.year,
            genre: argv.genre,
            rating: argv.rating,
        })
    } else if (argv.list){
        await allList()
    } else if (argv.update){
        await updateMovie(argv)
    } else if (argv.delete) {
        await deleteMovie(argv)
    } else {
        console.log('Wrong Command')
    }
}

app();