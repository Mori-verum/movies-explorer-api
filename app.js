require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');
const routes = require('./routes/index');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { validateUserBody, validateLoginParameters } = require('./utils/validateRequestParameters');
const {
  createUser,
  login,
} = require('./controllers/usersControllers');

const { PORT = 3000, DB_ADDRESS } = process.env;

const app = express();
app.use(cors());
mongoose.connect(DB_ADDRESS);

app.use(bodyParser.json());

app.use(requestLogger);

app.post('/signup', validateUserBody, createUser);
app.post('/signin', validateLoginParameters, login);

app.use(routes);

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
