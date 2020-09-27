var axios = require('axios');

const logger = require("log4js").getLogger();
logger.level = "debug";

const baseURL = 'https://api.themoviedb.org/3/movie/';
const translationURL = '/translations';
const api_key_url = '?api_key=' + process.env.API_KEY;
var configGet = {
  method: 'get',
  url: '',
  headers: { }
};
module.exports = {
  findMovieById: (id) => {
    return new Promise((resolve, reject) => {
      logger.debug('movie-service :: findMovieById :: '+ id)
    

      logger.debug(baseURL);
      logger.debug(id);
      logger.debug(api_key_url);
  
      configGet.url = (baseURL + id + api_key_url);
      logger.debug('movie-service :: findMovieById :: url :: ' + configGet.url);
  
      axios(configGet)
      .then(function (response) {
        logger.debug(JSON.stringify(response.data))
        return resolve(response.data);
      })
        .catch(function (error) {
          
          logger.debug(JSON.stringify(error));
          logger.debug(JSON.stringify(error.response.status));
          reject(error);
        });
  
    })

  },
  findMovieTranslationsById: (id) => {
    return new Promise((resolve, reject) => {
      logger.debug('movie-service :: findMovieTranslationsById :: '+ id)
    

      logger.debug(baseURL);
      logger.debug(id);
      logger.debug(api_key_url);
  
      configGet.url = (baseURL + id + translationURL +api_key_url);
      logger.debug('movie-service :: findMovieTranslationsById :: url :: ' + configGet.url);
  
      axios(configGet)
      .then(function (response) {
        logger.debug(JSON.stringify(response.data))
        return resolve(response.data);
      })
        .catch(function (error) {
          
          logger.debug(JSON.stringify(error));
          logger.debug(JSON.stringify(error.response.status));
          reject(error);
        });
  
    })

  },

}




