const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');
const AuthError = require('../utils/errors/AuthError');

const authProtector = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new AuthError('Требуется авторизация'));
  }

  const token = authorization.split('Bearer ')[1];
  let payload;

  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    next(new AuthError('Требуется авторизация'));
  }

  req.user = payload;

  return next();
};

module.exports = authProtector;
