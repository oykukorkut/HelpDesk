# Help Desk Frontend

Bu proje, Help Desk uygulamasının frontend kısmını içerir. React ve Vite kullanılarak geliştirilmiştir.

## Teknolojiler

- **React 18** - JavaScript kütüphanesi
- **Vite** - Build tool ve development server
- **JavaScript** - Programlama dili
- **CSS** - Styling
- **ESLint** - Code linting
- **react-router-dom** - React uygulamalarında sayfa yönlendirme (routing) için kullanılır

## Proje Yapısı

```
client/
├── public/           # Statik dosyalar
├── src/              # Kaynak kodlar
│   ├── components/   # React bileşenleri
│   ├── pages/        # Sayfa bileşenleri
│   ├── assets/       # Resimler, fontlar vs.
│   ├── App.jsx       # Ana uygulama bileşeni
│   ├── main.jsx      # Uygulama giriş noktası
│   └── index.css     # Global stiller
├── package.json      # Proje bağımlılıkları
├── vite.config.js    # Vite konfigürasyonu
└── README.md         # Bu dosya
```

## Bağımlılıklar

Aşağıdaki paketlerin yüklü olması gerekmektedir:

### Ana Bağımlılıklar
- react
- react-dom
- react-router-dom

### Geliştirme Bağımlılıkları
- @eslint/js
- @types/react
- @types/react-dom
- @vitejs/plugin-react
- eslint
- eslint-plugin-react-hooks
- eslint-plugin-react-refresh
- globals
- vite

Tüm bağımlılıkları yüklemek için:
```bash
npm install
```

## Kurulum

1. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

2. **Development server'ı başlatın:**
   ```bash
   npm run dev
   ```

3. **Tarayıcıda açın:**
   ```
   http://localhost:5173
   ```

## API Bağlantısı

Frontend, backend API'sine bağlanır:
- **Backend URL:** `http://localhost:5000`
- **API Base URL:** `http://localhost:5000/api`

## Geliştirme

### Development Server

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Build Önizleme

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Styling

- **CSS** - Temel styling
- **Responsive Design** - Mobil uyumlu tasarım
- **Modern UI/UX** - Kullanıcı dostu arayüz

## Özellikler

- **React Hooks** - Modern React özellikleri
- **Component-based Architecture** - Modüler yapı
- **Fast Refresh** - Hızlı geliştirme deneyimi
- **ESLint** - Kod kalitesi


## Notlar

- Vite ile hızlı development deneyimi
- Hot Module Replacement (HMR) aktif
- Modern JavaScript özellikleri kullanılıyor
- Component-based yapı ile modüler geliştirme

## Deployment

### Production Build

```bash
npm run build
```

Build işlemi sonrası `dist/` klasörü oluşur.

### Static Hosting

Build edilen dosyalar herhangi bir static hosting servisinde yayınlanabilir:
- Netlify
- Vercel
- GitHub Pages
- AWS S3

## Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## Bağlantılar

- [React Documentation](https://reactjs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Backend API](../server/README.md)

## Giriş Ekranı Özellikleri

- Sadece e-posta ve şifre ile giriş yapılır.
- Kullanıcı kaydı ve kontrolü doğrudan veritabanı üzerinden yapılır.
- Mobil uyumlu ve responsive tasarım korunur.

## Styling (Güncel)

- **Arka Plan:** linear-gradient(135deg, #0A2FA4 0%, #A100C8 100%)
- **Başlık ve butonlarda:** aynı gradient renkleri
- **Label ve link renkleri:** #0A2FA4 ve #A100C8
- **Sade ve modern UI**

## Özellikler (Güncel)

- Sadece giriş (login) ekranı vardır
- Tüm kontroller backend/veritabanı üzerinden yapılır
