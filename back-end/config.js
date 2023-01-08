
const SECRET_KEY = "UtterFrustration";
const PORT = 3001;
const BCRYPT_SALT_ROUNDS = 10;
const API_KEY = "rkqWOfeqjuCrYVDy0ASrs9nQj0vLcHfmOcaIQIq6"
const DB_URI =
  process.env.NODE_ENV === 'test'
    ? 'postgresql:///receiptsus_test'
    : 'postgresql:///receiptsus';

module.exports = {
    SECRET_KEY,
    PORT,
    BCRYPT_SALT_ROUNDS,
    API_KEY,
    DB_URI
}