
const movieController = require('../controllers/movie-controller');



module.exports = app => {


    app
    .route('/movies')
    .get(movieController.listSearchedMovies);

    app.route('/movies/:id')
    .get(movieController.findMovieById);

};
