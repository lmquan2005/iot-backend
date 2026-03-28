const pool = require('../config/db');

async function runQuery(sql, binds = []) {
  try {
    const [rows] = await pool.execute(sql, binds);
    return rows;
  } catch (err) {
    throw err;
  }
}

module.exports = { runQuery };