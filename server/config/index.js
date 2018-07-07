require('dotenv').config();

const config = {
  server: {
    hostname: process.env.SERVER_HOSTNAME,
    port: process.env.SERVER_PORT,
  },
  database: {
    url: process.env.DATABASE_URL,
  }
};

module.exports = config;
