const Pool = require('pg').Pool

const pool = new Pool({
  user: process.env.POSTGRESQL_USER,
  host: 'aadbservice',
  database: process.env.POSTGRESQL_DATABASE,
  password: process.env.POSTGRESQL_PASSWORD,
  port: 5432,
})

const getCars = (req, res) => {
    pool.query('SELECT * FROM cars', (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
}

module.exports = {
    getCars
}