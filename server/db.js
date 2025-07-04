const mysql = require('mysql2');
require('dotenv').config();

// MySQL bağlantı konfigürasyonu
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'helpdesk_db',
  port: process.env.DB_PORT || 3306
};

// Veritabanı bağlantısı oluştur
const db = mysql.createConnection(dbConfig);

// Bağlantıyı test et
db.connect((err) => {
  if (err) {
    console.error('MySQL bağlantı hatası:', err);
    return;
  }
  console.log('MySQL veritabanına başarıyla bağlandı');
});

module.exports = db; 