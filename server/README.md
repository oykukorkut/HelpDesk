# Help Desk Backend API

Bu proje, Help Desk uygulamasının backend API'sini içerir. Node.js ve Express.js kullanılarak geliştirilmiştir.

## 🚀 Teknolojiler

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MySQL** - Veritabanı
- **mysql2** - MySQL driver
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

## 📁 Proje Yapısı

```
server/
├── index.js          # Ana server dosyası
├── db.js             # Veritabanı bağlantı konfigürasyonu
├── routes/           # API route'ları
│   └── index.js      # Ana route'lar
├── controllers/      # İş mantığı fonksiyonları
│   └── index.js      # Ana controller'lar
├── package.json      # Proje bağımlılıkları
└── README.md         # Bu dosya
```

## 🛠️ Kurulum

1. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

2. **Environment dosyası oluşturun:**
   ```bash
   cp .env.example .env
   ```

3. **Environment değişkenlerini ayarlayın:**
   ```env
   PORT=5000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=helpdesk_db
   DB_PORT=3306
   ```

4. **Server'ı başlatın:**
   ```bash
   npm start
   ```

## 📡 API Endpoints

### Ana Endpoint'ler

- `GET /` - Ana sayfa
- `GET /api` - API ana sayfası
- `GET /api/test` - Test endpoint'i

## 🔧 Geliştirme

### Server'ı Geliştirme Modunda Çalıştırma

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

## 📊 Veritabanı

MySQL veritabanı kullanılmaktadır. Veritabanı bağlantısı `db.js` dosyasında yapılandırılmıştır.

### Veritabanı Bağlantı Ayarları

- **Host:** `localhost` (varsayılan)
- **Port:** `3306` (varsayılan)
- **Database:** `helpdesk_db` (varsayılan)

## 🔒 Güvenlik

- CORS middleware aktif
- Environment variables kullanımı
- SQL injection koruması (mysql2)

## 📝 Notlar

- Tüm API endpoint'leri `/api` prefix'i ile başlar
- Route'lar `routes/` klasöründe organize edilmiştir
- Controller'lar `controllers/` klasöründe bulunur
- Veritabanı bağlantısı ayrı bir modülde yönetilir

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 📦 Bağımlılıklar

Aşağıdaki paketlerin yüklü olması gerekmektedir:

- cors
- dotenv
- express
- mysql2

Tüm bağımlılıkları yüklemek için:
```bash
npm install
```
