const Pool = require('pg').Pool

const pool = new Pool({
  user: process.env.dbuser,
  host: process.env.dbhost,
  database: process.env.dbdatabase,
  password: process.env.dbpassword,
  port: process.env.dbport,
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