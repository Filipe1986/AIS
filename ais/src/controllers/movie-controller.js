const { InvalidArgumentError, InternalServerError, BadRequest } = require('../errors');
const validations = require('../validations');

const logger = require("log4js").getLogger();
logger.level = "debug";


const mongoose = require('mongoose');
const movieDao = require('../dao/movie-dao');
const movieService = require('../services/movies-services');

module.exports = {


 

  findMovieById:  async (req, res) => {
    logger.debug('movie-controller :: findMovieById :: '+req.params.id)
    var id = req.params.id;


    try {
      if(!validations.isInt(id)) {
        throw new BadRequest('The parameter should be a number!');
      }
      let movie = await movieService.findMovieById(id);
      logger.debug('movie-controller :: findMovieById :: movie :: '+ movie);
      let translations = await movieService.findMovieTranslationsById(id)
      logger.debug('movie-controller :: findMovieById :: movie :: '+ translations)
      movie.translations = translations.translations;

      movieDao.addMovie(movie);
      res.status(200).send(movie);
    } catch (error) {
      logger.debug('movie-controller :: findMovieById :: movie :: error :: '+  error);

      if (error instanceof BadRequest) {
        console.log('movie-controller :: findMovieById :: error :: BadRequest');
        res.status(400).json({ error: error.message });
      } else if (error instanceof InternalServerError) {
        console.log('movie-controller :: findMovieById :: error :: InternalServerError');
        res.status(500).json({ error: error.message });
      } else if(error.message == 'Request failed with status code 404'){
        res.status(404).json({ error: error.message });
      } else {
        console.log('movie-controller :: findMovieById :: error :: generic');
        res.status(500).json({ error: error.message });
      }
    }
  },
  listSearchedMovies: async (req, res) => {
    try{
      const movies = await movieDao.listMovies();
      res.json(movies);
    }catch(error){
      res.status(500).json({ error: error.message });
    }
  },
};
