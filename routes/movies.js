const moviesRouter = require('express').Router();
const { validateMovieBody, validateMovieId } = require('../utils/validateRequestParameters');
const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/moviesControllers');

moviesRouter.get('/', getMovies);

moviesRouter.post('/', validateMovieBody, createMovie);

moviesRouter.delete('/:movieId', validateMovieId, deleteMovie);

module.exports = moviesRouter;
