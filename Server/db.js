const { Pool } = require('pg')

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.HOST,
  database: process.env.DB_NAME,
  port: process.env.PORT
})

module.exports = pool