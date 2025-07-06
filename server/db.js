const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',           // MySQL sunucu adresin
  user: 'root',              // MySQL kullanıcı adın
  password: '1234',        // MySQL şifren
  database: 'helpdesk',  // Kendi veritabanı adın
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();