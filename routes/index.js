const router = require('express').Router();

const usersRoutes = require('./users');
const moviesRoutes = require('./movies');
const authProtector = require('../middlewares/authProtector');
const NotFoundError = require('../utils/errors/NotFoundError');

router.use('/users', authProtector, usersRoutes);
router.use('/movies', authProtector, moviesRoutes);

router.use('*', authProtector, (req, res, next) => {
  next(new NotFoundError('Страница по указанному маршруту не найдена'));
});

module.exports = router;
