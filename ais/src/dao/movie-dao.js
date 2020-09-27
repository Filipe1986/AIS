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
      logger.debug("movie-dao :: list :: list all movies");
      let movie = db.model("Movie");
      

      movie.find({},  function (errors, movies) {
        if (errors) {
          return reject("Error listing movies");
        }
        logger.debug(movies);
        resolve(movies);
      });
    });
  },

  addMovie: (movie) =>{
    return new Promise((resolve, reject) => {
      logger.debug("movie-dao :: save :: save single movie");
      let movieModel = db.model("Movie");
      

      movieModel.create(movie,  function (error, movies) {
        if (error) {
          logger.debug(error);
          return reject("Error adding movie");
        }
        logger.debug('movie-dao :: addMovie :: ', movie);
        resolve(movie);
      });
    });
  }
};
