# Help Desk Uygulaması

Bu proje, modern bir Help Desk uygulamasının tam stack çözümüdür. React frontend ve Node.js backend kullanılarak geliştirilmiştir.

## Teknolojiler

### Frontend
- **React 19** - JavaScript kütüphanesi
- **Vite** - Build tool ve development server
- **React Router DOM** - Sayfa yönlendirme
- **CSS** - Styling

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MySQL** - Veritabanı
- **CORS** - Cross-origin resource sharing

## Gereksinimler

Projeyi çalıştırmak için aşağıdaki yazılımların yüklü olması gerekmektedir:

- **Node.js** (v18 veya üzeri)
- **MySQL** (v8.0 veya üzeri)
- **npm** veya **yarn**

## Kurulum

### 1. Projeyi Klonlayın
```bash
git clone <repository-url>
cd HelpDesk
```

### 2. MySQL Veritabanını Kurun

#### MySQL Kurulumu
- **Windows:** [MySQL Installer](https://dev.mysql.com/downloads/installer/)
- **macOS:** `brew install mysql`
- **Linux:** `sudo apt-get install mysql-server`

#### Veritabanını Oluşturun
```sql
-- MySQL'e bağlanın
mysql -u root -p

-- Veritabanını oluşturun
CREATE DATABASE helpdesk;

-- Veritabanını kullanın
USE helpdesk;

-- Users tablosunu oluşturun
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'user', 'technician') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Help requests tablosunu oluşturun
CREATE TABLE help_requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    email VARCHAR(100) NOT NULL,
    priority ENUM('Düşük', 'Orta', 'Yüksek', 'Kritik') DEFAULT 'Orta',
    department VARCHAR(100),
    category VARCHAR(100),
    status ENUM('Açık', 'Beklemede', 'İşlemde', 'Çözüldü', 'Kapalı') DEFAULT 'Açık',
    request_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Örnek kullanıcılar ekleyin
INSERT INTO users (name, email, password, role) VALUES
('Admin User', 'admin@example.com', 'admin123', 'admin'),
('Test User', 'user@example.com', 'user123', 'user'),
('Technician', 'tech@example.com', 'tech123', 'technician');
```

### 3. Backend Kurulumu

```bash
# Server klasörüne gidin
cd server

# Bağımlılıkları yükleyin
npm install

# Environment dosyası oluşturun
cp .env.example .env
```

#### Environment Dosyasını Düzenleyin
`.env` dosyasını oluşturun ve aşağıdaki içeriği ekleyin:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=helpdesk
DB_PORT=3306
```

**Not:** `your_mysql_password` kısmını kendi MySQL şifrenizle değiştirin.

### 4. Frontend Kurulumu

```bash
# Client klasörüne gidin
cd client

# Bağımlılıkları yükleyin
npm install
```

## Projeyi Çalıştırma

### 1. Backend'i Başlatın

```bash
# Server klasöründe
cd server
npm start
```

Backend `http://localhost:5000` adresinde çalışacaktır.

### 2. Frontend'i Başlatın

```bash
# Client klasöründe (yeni terminal)
cd client
npm run dev
```

Frontend `http://localhost:5173` adresinde çalışacaktır.

## API Endpoints

### Kullanıcı İşlemleri
- `POST /api/login` - Kullanıcı girişi
- `GET /api/users` - Tüm kullanıcıları listele

### Help Request İşlemleri
- `POST /api/help-requests` - Yeni destek talebi oluştur
- `GET /api/help-requests` - Destek taleplerini listele

## Geliştirme

### Backend Geliştirme
```bash
cd server
npm start
```

### Frontend Geliştirme
```bash
cd client
npm run dev
```

### Linting
```bash
# Frontend
cd client
npm run lint

# Backend (manuel kontrol)
```

## Proje Yapısı

```
HelpDesk/
├── client/              # React frontend
│   ├── src/
│   │   ├── components/  # React bileşenleri
│   │   ├── pages/       # Sayfa bileşenleri
│   │   └── assets/      # Resimler ve kaynaklar
│   └── package.json
├── server/              # Node.js backend
│   ├── controllers/     # İş mantığı
│   ├── routes/          # API route'ları
│   ├── db.js           # Veritabanı bağlantısı
│   └── package.json
└── README.md           # Bu dosya
```

## Güvenlik

- CORS middleware aktif
- Environment variables kullanımı
- SQL injection koruması
- Şifre hash'leme (geliştirilecek)

## Sorun Giderme

### MySQL Bağlantı Hatası
- MySQL servisinin çalıştığından emin olun
- Veritabanı bilgilerini kontrol edin
- Port 3306'nın açık olduğunu kontrol edin

### Port Çakışması
- Backend port: 5000
- Frontend port: 5173
- Bu portların boş olduğundan emin olun

### CORS Hatası
- Backend'in doğru portta çalıştığını kontrol edin
- Frontend'de API URL'ini kontrol edin

## Notlar

- Backend varsayılan olarak port 5000'de çalışır
- Frontend varsayılan olarak port 5173'te çalışır
- MySQL veritabanı port 3306'da çalışmalıdır
- Tüm API endpoint'leri `/api` prefix'i ile başlar

## Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## Bağlantılar

- [Frontend README](client/README.md)
- [Backend README](server/README.md)
- [React Documentation](https://reactjs.org/)
- [Express.js Documentation](https://expressjs.com/)
- [MySQL Documentation](https://dev.mysql.com/doc/)
