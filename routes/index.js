const router = require('express').Router();

const { validateUserBody, validateLoginParameters } = require('../utils/validateRequestParameters');
const {
  createUser,
  login,
} = require('../controllers/usersControllers');
const usersRoutes = require('./users');
const moviesRoutes = require('./movies');
const authProtector = require('../middlewares/authProtector');
const NotFoundError = require('../utils/errors/NotFoundError');

router.post('/signup', validateUserBody, createUser);
router.post('/signin', validateLoginParameters, login);

router.use('/users', authProtector, usersRoutes);
router.use('/movies', authProtector, moviesRoutes);

router.use('*', authProtector, (req, res, next) => {
  next(new NotFoundError('Страница по указанному маршруту не найдена'));
});

module.exports = router;
