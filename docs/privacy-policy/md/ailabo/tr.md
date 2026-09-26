# Gizlilik Politikası (AI LABO)

_Son güncelleme: 26 Eylül 2026_

"AI LABO" (bundan sonra "Uygulama" olarak anılacaktır), yapay zekanın kullanıcı adına cihaz özelliklerini çalıştırmasını sağlayan bir yardımcı program uygulamasıdır. Bu politika, Uygulamanın hangi bilgileri işlediğini açıklar.

## 1. Uygulama nasıl çalışır (BYOK ve uygulamanın sağladığı yapay zeka modeli)

Uygulama iki kullanım şekli sunar:

- BYOK (kendi anahtarınızı getirin): Ayarlar'da OpenRouter, Anthropic (Claude), OpenAI (ChatGPT), Google (Gemini) veya xAI (Grok) sağlayıcılarından birine ait kendi API anahtarınızı girersiniz. Bu modda giriş yapmanız gerekmez ve geliştiricinin işlettiği herhangi bir sunucudan geçilmez.
- Uygulamanın sağladığı yapay zeka modeli (abonelik): Giriş yaptıktan sonra (bkz. bölüm 4) abone olarak, kendi API anahtarınızı almadan geliştiricinin sağladığı bir yapay zeka modelini kullanabilirsiniz. Bu modda sohbet içeriğiniz, geliştiricinin işlettiği bir arka uç sunucusu (Google Cloud Run üzerinde çalışır) üzerinden yapay zeka sağlayıcısına gönderilir.

## 2. API anahtarlarının işlenmesi (BYOK modu)

BYOK modunda girdiğiniz bir API anahtarı yalnızca cihaz üzerinde şifrelenmiş depolamada saklanır (iOS Keychain / Android Keystore, flutter_secure_storage aracılığıyla). Geliştiriciye veya başka herhangi bir üçüncü tarafa asla gönderilmez.

## 3. Yapay zeka sağlayıcınıza gönderilen bilgiler

Sohbet özelliğini kullandığınızda, yazdığınız mesajlar, eklediğiniz görseller ve yapay zekanın çalıştırdığı herhangi bir aracın sonuçları bir yapay zeka sağlayıcısına gönderilir. BYOK modunda bu, doğrudan seçtiğiniz sağlayıcıya; uygulamanın sağladığı yapay zeka modeli modunda ise geliştiricinin arka uç sunucusu üzerinden OpenRouter'a gönderilir. Bu bilgilerin nasıl işlendiği, bilgiyi fiilen işleyen sağlayıcının kendi gizlilik politikasına tabidir:

- OpenRouter: <https://openrouter.ai/privacy>
- Anthropic (Claude): <https://www.anthropic.com/legal/privacy>
- OpenAI (ChatGPT): <https://openai.com/policies/privacy-policy>
- Google (Gemini): <https://policies.google.com/privacy>
- xAI (Grok): <https://x.ai/legal/privacy-policy>

Uygulama, ilk açılışta bu konudaki açık onayınızı ister.

Web araması: Yapay zeka web arama aracını kullandığında, arama kelimeleri doğrudan cihazınızdan DuckDuckGo'ya (<https://duckduckgo.com/privacy>) gönderilir. Yalnızca arama kelimeleri gönderilir (IP adresiniz gibi her internet isteğinin taşıdığı teknik bilgiler hariç).

## 4. Hesap ve abonelik

Aşağıdakiler yalnızca uygulamanın sağladığı yapay zeka modelini kullanmanız durumunda geçerlidir. Yalnızca BYOK modunu kullanıyorsanız bunların hiçbiri gerçekleşmez.

- Giriş: Google, Apple veya e-posta adresi ve şifre ile giriş yapabilirsiniz (Firebase Authentication aracılığıyla). Yalnızca e-posta adresiniz ve seçtiğiniz giriş yönteminin verdiği bir tanımlayıcı toplanır.
- Arka uç sunucusu: Giriş yaptıktan sonra sohbet istekleriniz, abonelik durumunuzu kontrol etmek ve aylık kullanımınızı takip etmek amacıyla geliştiricinin işlettiği bir arka uç sunucusundan (Google Cloud Run, Google Cloud altyapısında çalışır) geçer.
- Abonelik yönetimi: Satın almalar, geri yükleme ve abonelik durumu RevenueCat (<https://www.revenuecat.com/privacy>) tarafından yönetilir. App Store / Google Play satın alma bilgileriniz bu amaçla RevenueCat ile paylaşılır.

## 5. Cihaz özelliklerine erişim

İsteğiniz üzerine yapay zeka şu cihaz özelliklerini çalıştırabilir: fener, titreşim, metinden konuşmaya, konum, Bluetooth taraması, Wi-Fi/pil/cihaz bilgileri ve sensörlerin okunması, panoyu okuma ve yazma, kamera, QR kod okuma, ses kaydı/oynatma, konuşmadan metne, görsel oluşturma, dosya oluşturma/okuma/listeleme/silme, uygulamaya özel bir veritabanını okuma ve yazma, görselleri fotoğraf arşivine kaydetme, sistem paylaşım menüsüyle paylaşma, diğer uygulamaları, URL'leri, arama veya mesajlaşma uygulamasını açma, alarm/görev planlama.

- Bu işlemlerin sonuçları (çekilen fotoğraflar, kaydedilen sesler, oluşturulan dosyalar vb.) yalnızca cihazınızda saklanır. Hiçbiri geliştiricinin işlettiği herhangi bir sunucuya gönderilmez.
- Varsayılan olarak araçlar, uygulama içinde ek bir onay olmadan çalışır. Araçlar sekmesinden her aracı ayrı ayrı "Onay gerekli" (çalışmadan önce bir onay ekranı gösterilir) veya "Engelle" (yapay zeka asla çalıştıramaz) olarak ayarlayabilirsiniz. Bundan bağımsız olarak, Uygulama kamera, mikrofon, konum vb. özelliklere ilk kez erişmeden önce işletim sisteminin kendi izin iletişim kutuları her zaman gösterilir.
- Telefon aramaları ve kısa mesajlar yalnızca içerik önceden doldurulmuş şekilde arama/mesajlaşma uygulamasını açmakla sınırlıdır - Uygulama hiçbir zaman kendi başına arama yapmaz veya mesaj göndermez; son işlemi her zaman siz gerçekleştirirsiniz.
- Konum, Bluetooth ve benzeri veriler yalnızca yapay zeka sizin talimatınızla bunları istediğinde alınır; Uygulama bunlara arka planda sürekli erişmez.

## 6. Analitik ve çökme raporlama

Uygulama, geliştirmeye yardımcı olmak için Firebase Analytics (toplu kullanım istatistikleri) ve Firebase Crashlytics (bir çökme olursa türü ve konumu) kullanır. Bunların hiçbiri gerçek içeriğinizi (sohbet metni, araç çağrısı argümanları [dosya içerikleri, konum koordinatları, arama sorguları vb.] veya API anahtarları) asla almaz. Firebase Analytics'ten istediğiniz zaman Ayarlar üzerinden çıkabilirsiniz.

## 7. Reklamlar

BYOK modunu ücretsiz olarak (aktif bir abonelik olmadan) kullanıyorsanız, Uygulama Google AdMob aracılığıyla banner reklamlar gösterir (aboneler hiçbir zaman reklam görmez). iOS'ta Uygulama ilk açılışta izleme izni (App Tracking Transparency) ister; yalnızca izin verirseniz kişiselleştirilmiş reklamlar gösterilir. Reddederseniz yalnızca kişiselleştirilmemiş reklamlar gösterilir.

## 8. Üçüncü taraflarla paylaşım

Geliştirici, kişisel bilgilerinizi üçüncü taraflara satmaz. Yukarıdaki 3-7. bölümlerde açıklanan yapay zeka sağlayıcıları, DuckDuckGo, RevenueCat ve Google (Firebase/AdMob) ile paylaşım, bu hizmetlerin çalışması için gereken kapsamla sınırlıdır.

## 9. Çocukların gizliliği

Uygulama 13 yaşın altındaki çocuklara yönelik değildir.

## 10. İletişim

Bu politikayla ilgili sorularınız için bize şu adresten ulaşabilirsiniz:

normidar7@gmail.com

## 11. Bu politikadaki değişiklikler

Bu politika zaman zaman güncellenebilir. Önemli değişiklikler Uygulama içinde veya bu sayfada duyurulacaktır.
