import { Sequelize } from "sequelize";
import dotenv from 'dotenv'

dotenv.config()

export const Seq= new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host:process.env.DB_HOST,
    dialect:"mysql",
    logging:false
  }

);

 export const Connection = async () => {
      try{
        await Seq.authenticate()
        const [rows] = await Seq.query('SELECT * FROM users;');
        console.log(rows)
        console.log("My SQL CONNECTION SUCCESSFUL FROM MYSQL FILE..........")
      }
      catch{
        console.error("My SQL CONNECTION FAILED........")
      }
 }
























// import dotenv from 'dotenv';
// import mysql from 'mysql2/promise';

// dotenv.config();

// export let pool;

// export const connect_mysql_db = async () => {
//   try {
//     // Create MySQL pool
//     //Poolused to creat a connection and reuse the same connection for fast and efficient work
//     pool = mysql.createPool({
//       host: process.env.DB_HOST,
//       user: process.env.DB_USER,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_NAME,
//       port: process.env.DB_PORT,
//       waitForConnections: true,
//       connectionLimit: 10,
//       queueLimit: 0
//     });

//     // All data sent to rows array then shown in console.log(rows)
//    const [rows] = await pool.query('SELECT * FROM users;');
//    console.log(rows)
//   //  console.log(rows[0].test); // 1

//   } catch (err) {
//     console.error('MySQL not connected:', err.message);
//     process.exit(1);
//   }
// };
