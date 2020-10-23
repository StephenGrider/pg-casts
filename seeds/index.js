const { Pool } = require('pg');

const run = async () => {
  const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'instagram',
    user: 'sg',
    password: '',
  });

  const res = await pool.query('SELECT 1 + 1;');

  console.log(res);

  pool.end();
};

run();
