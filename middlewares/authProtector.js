const { JWT_SECRET } = process.env;
const jwt = require('jsonwebtoken');
const AuthError = require('../utils/errors/AuthError');

// eslint-disable-next-line consistent-return
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

  next();
};

module.exports = authProtector;
