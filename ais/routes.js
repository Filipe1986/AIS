const movie = require('./src/movie');

module.exports = app => {
  app.get('/', (req, res) => {res.send('The app is running!!!')});
  
  movie.routes(app);
};