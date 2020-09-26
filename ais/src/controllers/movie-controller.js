const { InvalidArgumentError, InternalServerError } = require('../errors');

const logger = require("log4js").getLogger();
logger.level = "debug";


const mongoose = require('mongoose');
const movieDao = require('../dao/movie-dao');
const movieService = require('../services/movies-services');

module.exports = {


  listMovies: async (req, res) => {
    try{
      const movies = await movieDao.listMovies();
      res.json(movies);
    }catch(error){
      res.status(500).json({ error: error.message });
    }
  },

  findMovieById:  async (req, res) => {
    logger.debug('movie-controller :: findMovieById :: '+req.params.id)
    var id = req.params.id;
    try {
      let movie = await movieService.findMovieById(id)
      logger.debug('movie-controller :: findMovieById :: movie :: '+ movie)

      //const movie = await movieDao.findMovieById(id);
      res.status(200).send(movie);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  findMovieByName:  async (req, res) => {
    logger.debug('movie-controller :: findMovieByName :: '+name)
    try {
      const movie = await movieDao.findMovieById(req.params.name);
      res.status(200).send(movie);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

};
