/* eslint-disable global-require, no-console */

require('dotenv').config();

const { FS_ENV } = process.env;
let details;

if (FS_ENV === 'production') {
  details = require('./config/database.prod.js');
} else {
  details = require('./config/database.dev.js');
}

const { connection } = details;

console.log('Using connection info:');
console.log({
  ...connection,
  password: '*****',
});

module.exports = details;