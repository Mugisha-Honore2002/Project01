const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  password:'23456',
  host: 'localhost',
  database: 'perntodo',
  port: 5432,
})

module.exports = pool