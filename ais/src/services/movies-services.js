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
      logger.log('movie-service :: findMovieById :: '+ id)
    

      logger.log(baseURL);
      logger.log(id);
      logger.log(api_key_url);
  
      configGet.url = (baseURL + id + api_key_url);
      logger.log('movie-service :: findMovieById :: url :: ' + configGet.url);
  
      axios(configGet)
      .then(function (response) {
        logger.log(JSON.stringify(response.data))
        return resolve(response.data);
      })
        .catch(function (error) {
          
          logger.log(JSON.stringify(error));
          logger.log(JSON.stringify(error.response.status));
          reject(error);
        });
  
    })

  },
  findMovieTranslationsById: (id) => {
    return new Promise((resolve, reject) => {
      logger.log('movie-service :: findMovieTranslationsById :: '+ id)
    

      logger.log(baseURL);
      logger.log(id);
      logger.log(api_key_url);
  
      configGet.url = (baseURL + id + translationURL +api_key_url);
      logger.log('movie-service :: findMovieTranslationsById :: url :: ' + configGet.url);
  
      axios(configGet)
      .then(function (response) {
        logger.log(JSON.stringify(response.data))
        return resolve(response.data);
      })
        .catch(function (error) {
          
          logger.log(JSON.stringify(error));
          logger.log(JSON.stringify(error.response.status));
          reject(error);
        });
  
    })

  },


  findMovieByName: (name) => {
    axios(configGet)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });


  }
}




