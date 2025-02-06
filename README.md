# Mikro Frontend Mimarisi - Vue ve React

Bu proje, Vue.js container uygulaması içerisinde Vue.js ve React mikro frontendlerini barındıran bir mikro frontend mimarisi örneğidir.

## Proje Yapısı

```
.
├── container/         # Vue.js container uygulaması
├── vue-app/          # Vue.js mikro frontend
└── react-app/        # React mikro frontend
```

## Başlangıç

Her bir uygulamayı ayrı terminal penceresinde çalıştırmanız gerekmektedir.

### 1. Vue Mikro Frontend (Port: 3001)

```bash
cd vue-app
npm install
npm run start-mf  # Bu komut önce build alıp sonra preview modunda çalıştıracak
```

### 2. React Mikro Frontend (Port: 3002)

```bash
cd react-app
npm install
npm run start-mf  # Bu komut önce build alıp sonra preview modunda çalıştıracak
```

### 3. Container Uygulaması (Port: 3000)

```bash
cd container
npm install
npm run dev
```

## Geliştirme

- Container uygulaması: http://localhost:3000
- Vue mikro frontend: http://localhost:3001
- React mikro frontend: http://localhost:3002

## Teknolojiler

- Vite
- Vue.js 3
- React
- TypeScript
- Module Federation

## Özellikler

- Her uygulama bağımsız olarak geliştirilebilir ve çalıştırılabilir
- Module Federation ile bileşen paylaşımı
- TypeScript desteği
- CORS yapılandırması
- Paylaşılan bağımlılıklar (Vue, React, Vue Router)

## Önemli Notlar

1. Mikro frontendler (vue-app ve react-app) `npm run start-mf` komutu ile çalıştırılmalıdır. Bu komut:
   - Önce uygulamayı build eder (`npm run build`)
   - Sonra preview modunda çalıştırır (`npm run preview`)
   - Bu sayede `remoteEntry.js` dosyası oluşturulur ve servis edilir

2. Container uygulaması normal development modunda (`npm run dev`) çalıştırılabilir

3. Geliştirme sırasında önce mikro frontendlerin çalıştırılması, sonra container uygulamasının başlatılması önerilir

4. Her uygulama kendi bağımsız state yönetimini ve routing mekanizmasını içerir 