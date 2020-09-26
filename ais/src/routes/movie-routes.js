
const movieController = require('../controllers/movie-controller');



module.exports = app => {


    app
    .route('/movies')
    .get(movieController.listMovies);

    app.route('/movies/:id')
    .get(movieController.findMovieById);

    app.route('/movies/:name')
    .get(movieController.findMovieById);

};
