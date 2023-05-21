const { celebrate, Joi } = require('celebrate');
const { regex } = require('./validateUrl');

const validateUserBody = celebrate({
  body: Joi.object().keys({
    name: Joi.string()
      .min(2)
      .max(30)
      .required()
      .messages({
        'string.min': 'Минимальная длина поля "name" - 2',
        'string.max': 'Максимальная длина поля "name" - 30',
        'string.empty': 'Поле "email" должно быть заполнено',
      }),
    email: Joi.string()
      .email()
      .message('Поле "email" должно быть валидным email-адресом')
      .required()
      .messages({
        'string.empty': 'Поле "email" должно быть заполнено',
      }),
    password: Joi.string()
      .required()
      .messages({
        'string.empty': 'Поле "password" должно быть заполнено',
      }),
  }),
});

const validateLoginParameters = celebrate({
  body: Joi.object().keys({
    email: Joi.string()
      .email()
      .message('Поле "email" должно быть валидным email-адресом')
      .required()
      .messages({
        'string.empty': 'Поле "email" должно быть заполнено',
      }),
    password: Joi.string()
      .required()
      .messages({
        'string.empty': 'Поле "password" должно быть заполнено',
      }),
  }),
});

const validateMovieBody = celebrate({
  body: Joi.object().keys({
    country: Joi.string()
      .required()
      .messages({
        'string.empty': 'Поле "country" должно быть заполнено',
      }),
    director: Joi.string()
      .required()
      .messages({
        'string.empty': 'Поле "director" должно быть заполнено',
      }),
    duration: Joi.number()
      .required()
      .messages({
        'string.empty': 'Поле "duration" должно быть заполнено',
      }),
    year: Joi.string()
      .required()
      .messages({
        'string.empty': 'Поле "year" должно быть заполнено',
      }),
    description: Joi.string()
      .required()
      .messages({
        'string.empty': 'Поле "description" должно быть заполнено',
      }),
    image: Joi.string()
      .required()
      .pattern(regex)
      .message('Поле "image" должно быть валидным url-адресом')
      .messages({
        'string.empty': 'Поле "image" должно быть заполнено',
      }),
    trailer: Joi.string()
      .required()
      .pattern(regex)
      .message('Поле "trailer" должно быть валидным url-адресом')
      .messages({
        'string.empty': 'Поле "trailer" должно быть заполнено',
      }),
    thumbnail: Joi.string()
      .required()
      .pattern(regex)
      .message('Поле "thumbnail" должно быть валидным url-адресом')
      .messages({
        'string.empty': 'Поле "thumbnail" должно быть заполнено',
      }),
    nameRU: Joi.string()
      .required()
      .messages({
        'string.empty': 'Поле "nameRU" должно быть заполнено',
      }),
    nameEN: Joi.string()
      .required()
      .messages({
        'string.empty': 'Поле "nameEN" должно быть заполнено',
      }),
  }),
});

const validateMovieId = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string()
      .length(24)
      .hex()
      .message('id должен быть в hex формате')
      .required()
      .messages({
        'string.length': 'Длина id должна быть 24 символа',
      }),
  }),
});

const validateUserInfo = celebrate({
  body: Joi.object().keys({
    name: Joi.string()
      .min(2)
      .max(30)
      .messages({
        'string.min': 'Минимальная длина поля "name" - 2',
        'string.max': 'Максимальная длина поля "name" - 30',
      }),
    email: Joi.string()
      .email()
      .message('Поле "email" должно быть валидным email-адресом')
      .required()
      .messages({
        'string.empty': 'Поле "email" должно быть заполнено',
      }),
  }),
});

module.exports = {
  validateUserBody,
  validateLoginParameters,
  validateMovieBody,
  validateMovieId,
  validateUserInfo,
};
