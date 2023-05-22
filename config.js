const {
  PORT = 3000,
  DB_ADDRESS = 'mongodb://127.0.0.1:27017/bitfilmsdb',
  JWT_SECRET = 'dev-secret',
} = process.env;

module.exports = {
  PORT,
  DB_ADDRESS,
  JWT_SECRET,
};
