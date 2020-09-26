const db = require("mongoose");
var ObjectId = require('mongoose').Types.ObjectId; 
const { InternalServerError } = require("../errors");

const logger = require("log4js").getLogger();
logger.level = "debug";

module.exports = {

  findMovieById: (id) => {
    return new Promise((resolve, reject) => {

      let movie = db.model("Movie");
      logger.debug("movie-dao :: findById ::", id)

      movie.findById(id, function(errors, movie){
        if(errors){
          console.log(errors);
          return reject('Couldnt find the movie');
        }else{
          if(movie){
            console.log('movie-dao :: findById :: encontrado', movie)
            return resolve(movie)
          }else {
            console.log('movie-dao :: findById :: not existing movie')
            return resolve()
          }
          
        }
      })
    });
  },


  listMovies: () => {
    return new Promise((resolve, reject) => {
      console.log("movie-dao :: list :: list all movies");
      let movie = db.model("Movie");
      

      movie.find({},  function (errors, movies) {
        if (errors) {
          return reject("Error listing movies");
        }
        console.log(movies);
        resolve(movies);
      });
    });
  },

  addMovie: () =>{
    return new Promise((resolve, reject) => {
      console.log("movie-dao :: add :: add single movie");
      let movie = db.model("Movie");
      

      movie.find({},  function (errors, movies) {
        if (errors) {
          return reject("Error listing movies");
        }
        console.log(movies);
        resolve(movies);
      });
    });
  }
};