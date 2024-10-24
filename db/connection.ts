import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',      
  host: 'localhost',
  database: 'employee_db',   
  password: '123456789',   
  port: 5432,
});

export default pool;
