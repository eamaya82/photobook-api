require('dotenv').config();

const config = {
  server: {
    hostname: process.env.SERVER_HOSTNAME,
    port: process.env.SERVER_PORT,
  },
  database: {
    url: process.env.DATABASE_URL,
  },
  pagination: {
    limit: 2,
    skip: 0,
    page: 1,
  },
};

module.exports = config;
