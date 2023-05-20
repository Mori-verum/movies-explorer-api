const usersRouter = require('express').Router();
const { validateUserInfo } = require('../utils/validateRequestParameters');
const {
  getCurrentUser,
  updateUser,
} = require('../controllers/usersControllers');

// возвращает информацию о пользователе (email и имя)
usersRouter.get('/me', getCurrentUser);

// обновляет информацию о пользователе (email и имя)
usersRouter.patch('/me', validateUserInfo, updateUser);

module.exports = usersRouter;