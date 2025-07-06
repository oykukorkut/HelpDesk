const express = require('express');
const cors = require('cors');
const db = require('./db');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5050;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);

// Örnek: Tüm kullanıcıları çek
app.get('/api/users', async (req, res) => {
  console.log("GET /api/users çağrıldı"); // Terminalde istek geldi mi görmek için

  try {
    const [rows] = await db.query('SELECT * FROM users');
    res.json(rows);
  } catch (err) {
    console.error("HATA:", err); // Hata varsa terminale yaz
    res.status(500).json({ error: 'Veritabanı hatası' });
  }
});


// LOGIN ENDPOINTİ
app.post('/api/login', async (req, res) => {
  console.log('LOGIN endpointine istek geldi:', req.body);
  const { email, password, role } = req.body;
  if (!email || !password || !role) {
    return res.status(400).json({ success: false, message: 'E-posta, şifre ve rol gereklidir.' });
  }
  try {
    const [users] = await db.query('SELECT * FROM users WHERE email = ? AND role = ?', [email, role]);
    if (users.length === 0) {
      return res.status(404).json({ success: false, message: 'Kullanıcı bulunamadı veya rol hatalı.' });
    }
    const user = users[0];
    if (user.password !== password) {
      return res.status(401).json({ success: false, message: 'Şifre hatalı.' });
    }
    // Şifre doğruysa kullanıcıyı döndür (şifreyi göndermeden)
    const { password: _, ...userWithoutPassword } = user;
    res.json({ success: true, user: userWithoutPassword });
  } catch (err) {
    console.error('LOGIN ERROR:', err, err.stack); // stack trace ile birlikte
    res.status(500).json({ success: false, message: 'Sunucu hatası.' });
  }
});

app.get('/test', (req, res) => {
  console.log("TEST çalıştı");
  res.send("Merhaba dünya");
});


// Ana endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Help Desk Backend API' });
});

// Server başlatma
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor`);
}); 