var axios = require('axios');

const logger = require("log4js").getLogger();
logger.level = "debug";

var baseURL = 'https://api.themoviedb.org/3/movie/';
var translationsURL = 'translations?api_key=' + process.env.API_KEY;
var configGet = {
  method: 'get',
  url: '',
  headers: { }
};
module.exports = {
  findMovieById: (id) => {
    return new Promise((resolve, reject) => {
      logger.debug('movie-service :: findMovieById :: '+id)
    

      logger.debug(baseURL);
      logger.debug(id);
      logger.debug(translationsURL);
  
      configGet.url = (baseURL + id + translationsURL);
      logger.debug('movie-service :: findMovieById :: url :: '+configGet.url);
  
      axios(configGet)
      .then(function (response) {
        logger.debug(JSON.stringify(response.data))
        return resolve(response.data);
      })
        .catch(function (error) {
          logger.debug(JSON.stringify(error))
          JSON.stringify(error)
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




