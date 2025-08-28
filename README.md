# ⏱️ TimerTracker - React Timer Uygulaması (Vite ile)

## 📄 Proje Hakkında

**Timer Tracker**, React ve Vite kullanılarak geliştirilmiş basit ve şık bir zamanlayıcı uygulamasıdır.Saat, dakika ve saniyeyi takip eder, kullanıcının zamanı başlatmasına, durdurmasına ve sıfırlamasına olanak sağlar.

- Zamanı başlatma  
- Zamanı durdurma  
- Zamanı sıfırlama  

Kullanıcı dostu ve sade tasarımı ile temel React hook’larının (`useState`, `useRef`, `useEffect`) nasıl kullanılacağını göstermektedir.

## ✨ Özellikler

- **Saat, dakika, saniye** olarak zamanı takip eder.  
- Zaman formatı `HH:MM:SS` şeklinde 2 haneli gösterim.  
- `Başlat`, `Durdur`, `Sıfırla` butonları ile kontrol sağlanır.  
- React hook’ları ile state ve yan etkiler yönetilir.  
- Timer çalışırken arka planda `setInterval` kullanır ve düzgün temizleme yapılır.  

## ⚙️ Kurulum ve Çalıştırma

1. Depoyu klonla veya indir:

```bash
git clone https://github.com/busraydinn/Timer-Tracker.git
cd timer-app
```
2. Gerekli bağımlılıkları yükle
```
npm install
```
3. Uygulamayı Başlat
```
npm run dev
```
Tarayıcıda http://localhost:5173 adresinde açılır.
## 🗂️ Proje Dosya Yapısı
```
/src
  ├─ Timer.jsx
  ├─ main.jsx         # React giriş noktası
  └─ styles/
       ├─ Timer.css
```
## 🔧 İyileştirme Önerileri (Geliştirme için)

- Geriye sayım (countdown) modu eklenebilir.
- Zaman dolunca sesli uyarı veya bildirim eklenebilir.
- Kullanıcı temaları (gece/gündüz modu) eklenebilir.
- LocalStorage ile son zaman kaydedilip devam ettirilebilir.
- Animasyon ve progress bar ile görsellik artırılabilir.


## 🚀 Canlı Demo

Projeyi canlı olarak denemek için:  
[https://busraydinn.github.io/Timer-Tracker](https://busraydinn.github.io/Timer-Tracker)
