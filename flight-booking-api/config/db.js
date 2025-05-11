import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const connection = mysql.createConnection({
host: "localhost",
  user: "root",
  password: "cdac",
  database:"flight_booking" 
});

connection.connect((err) => {
  if (err) {
    console.error('❌ MySQL connection error:', err.message);
  } else {
    console.log('✅ Connected to MySQL database');
  }
});

export default connection;
