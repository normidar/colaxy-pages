# Gizlilik Politikası (AI LABO)

_Son güncelleme: 5 Kasım 2026_

"AI LABO" (bundan sonra "Uygulama" olarak anılacaktır), yapay zekanın kullanıcı adına cihaz özelliklerini çalıştırmasını sağlayan bir yardımcı program uygulamasıdır. Bu politika, Uygulamanın hangi bilgileri işlediğini açıklar.

## 1. Uygulama nasıl çalışır (abonelik ve kendi API anahtarınız)

Uygulama iki kullanım şekli sunar:

- Uygulamanın sağladığı yapay zeka modeli (abonelik, varsayılan seçenek): Giriş yaptıktan sonra (bkz. bölüm 4) abone olarak, kendi API anahtarınızı almadan geliştiricinin sağladığı yapay zeka modellerini kullanabilirsiniz. Bu modda sohbet içeriğiniz ve bölüm 3'te açıklanan yapay zeka özellikleri, geliştiricinin işlettiği bir arka uç sunucusu (Google Cloud Run üzerinde çalışır) üzerinden OpenRouter'a gönderilir.
- Kendi API anahtarınız (BYOK, "kendi anahtarınızı getirin", gelişmiş modda kullanılabilir): Ayarlar'da OpenRouter, Anthropic (Claude), OpenAI (ChatGPT), Google (Gemini) veya xAI (Grok) sağlayıcılarından birine ait kendi API anahtarınızı girersiniz. Bu modda giriş yapmanız gerekmez; istekler cihazınızdan doğrudan sağlayıcıya gider ve geliştiricinin işlettiği herhangi bir sunucudan geçmez.

## 2. API anahtarlarının işlenmesi (BYOK modu)

BYOK modunda girdiğiniz bir API anahtarı yalnızca cihaz üzerinde şifrelenmiş depolamada saklanır (iOS Keychain / Android Keystore, flutter_secure_storage aracılığıyla). Geliştiriciye veya başka herhangi bir üçüncü tarafa asla gönderilmez.

## 3. Cihazınızın dışına gönderilen bilgiler

### Yapay zeka sağlayıcıları

Sohbet özelliğini kullandığınızda, yazdığınız mesajlar, eklediğiniz görseller ve dosyalar ve yapay zekanın çalıştırdığı araçların sonuçları (örneğin çektiği bir fotoğraf, okuduğu bir dosyanın veya web sayfasının metni, konumunuz ya da baktığı takvim etkinlikleri ve kişiler), yapay zekanın yanıt verebilmesi için bir yapay zeka sağlayıcısına gönderilir. Bazı yapay zeka özellikleri ayrıca şunları gönderir:

- Görsel oluşturma ve fotoğraf düzenleme: komut ve düzenleme sırasında sizin veya yapay zekanın seçtiği referans fotoğraflar.
- Video oluşturma: komut ve ilk ya da son kare olarak kullanılan fotoğraflar.
- Metne çevirme (transkripsiyon): metne çevrilen ses dosyası.
- Yapay zekanın hafızası: yapay zekanın hafızasına kaydettiği veya hafızasında aradığı metin, bir yapay zeka sağlayıcısı tarafından sayısal vektörlere (embedding) dönüştürülür. Hafızanın kendisi yalnızca cihazınızda saklanır.

Kendi API anahtarınızla bunlar doğrudan seçtiğiniz sağlayıcıya gönderilir (metne çevirme ve video oluşturma yalnızca OpenRouter anahtarıyla kullanılabilir). Abonelikte ise geliştiricinin arka uç sunucusu üzerinden OpenRouter'a gider; arka uç bu içeriği yalnızca iletir ve saklamaz (arka ucun sakladıkları bölüm 4'te açıklanmıştır). Bu bilgilerin nasıl işlendiği, bilgiyi fiilen işleyen sağlayıcının kendi gizlilik politikasına tabidir:

- OpenRouter: <https://openrouter.ai/privacy>
- Anthropic (Claude): <https://www.anthropic.com/legal/privacy>
- OpenAI (ChatGPT): <https://openai.com/policies/privacy-policy>
- Google (Gemini): <https://policies.google.com/privacy>
- xAI (Grok): <https://x.ai/legal/privacy-policy>

Uygulama, ilk açılışta bu konudaki açık onayınızı ister.

### Uygulamanın doğrudan bağlandığı web siteleri ve hizmetler

- Web araması: arama kelimeleri doğrudan cihazınızdan DuckDuckGo'ya (<https://duckduckgo.com/privacy>), sonuç çıkmazsa Wikipedia'ya (Wikimedia Foundation, <https://foundation.wikimedia.org/wiki/Policy:Privacy_policy>) gönderilir. Yalnızca arama kelimeleri gönderilir (IP adresiniz gibi her internet isteğinin taşıdığı teknik bilgiler hariç).
- Web sayfalarını okuma ve web API'lerini çağırma: yapay zeka bir web sayfasını okuduğunda veya bir web isteği gönderdiğinde (curl komutu gibi), cihazınız doğrudan yapay zekanın seçtiği siteye bağlanır ve isteğin içeriğini gönderir; yapay zeka bir dosya yüklerse bu, Uygulamanın klasöründen bir dosyayı da içerebilir. O sitenin kendi gizlilik politikası geçerlidir. Uygulama yalnızca internetteki herkese açık adreslere bağlanır, yerel ağınızdaki cihazlara asla bağlanmaz.
- Adresler ve yerler: adres arama, işletim sisteminin coğrafi kodlama hizmetini (iOS'ta Apple, Android'de Google), yakındaki yerleri arama (yalnızca iOS) ise Apple Haritalar'ı kullanır. Adres veya arama kelimeleri ve yakınınızda arama yaptığınızda konumunuz Apple'a veya Google'a gönderilir.
- Konuşmadan metne, işletim sisteminin konuşma tanıma hizmetini (Apple / Google) kullanır; sesiniz bu şirketlerin sunucularında işlenebilir.

## 4. Hesap ve abonelik

Aşağıdakiler yalnızca uygulamanın sağladığı yapay zeka modelini kullanmanız durumunda geçerlidir. Yalnızca kendi API anahtarınızı kullanıyorsanız bunların hiçbiri gerçekleşmez.

- Giriş: Google, Apple veya e-posta adresi ve şifre ile giriş yapabilirsiniz (Firebase Authentication aracılığıyla). Yalnızca e-posta adresiniz ve seçtiğiniz giriş yönteminin verdiği bir tanımlayıcı toplanır.
- Arka uç sunucusu: Giriş yaptıktan sonra yapay zeka istekleriniz, abonelik durumunuzu kontrol etmek ve aylık kullanımınızı (kullandığınız yapay zekanın maliyeti) takip etmek amacıyla geliştiricinin işlettiği bir arka uç sunucusundan (Google Cloud Run, Google Cloud altyapısında çalışır) geçer. Arka uç, OpenRouter'a hesap kimliğiniz yerine ondan türetilmiş takma bir kimlik verir.
- İstek kayıtları: arka uç her yapay zeka isteği için yalnızca bir özet kaydeder: türü (sohbet, görsel, video, ses veya embedding), model, sonuç veya hata kodu, ne kadar sürdüğü, mesaj sayısı, görsel içerip içermediği, yapay zekanın çağırdığı araçların adları, token sayısı ve maliyet. Mesajlarınızın, görsellerinizin, seslerinizin ve araç sonuçlarının içeriği asla kaydedilmez. Bu kayıtlar 90 gün sonra silinir ve destek, sorun giderme, kötüye kullanımı önleme ve maliyet takibi için kullanılır.
- Video oluşturma: bir videonun ücretini kesinleştirmek için arka uç işin kimliğini, modeli, tahmini maliyeti ve zaman bilgilerini saklar. Bitmiş video OpenRouter'dan cihazınıza iletilir ve sunucuda saklanmaz.
- Uygulama doğrulaması: isteklerin Uygulamanın orijinal bir kopyasından geldiğini doğrulamak için Google Play Integrity (Android) ve Apple App Attest (iOS) tabanlı Firebase App Check kullanılır. Bu, Google'a veya Apple'a içeriğinizi değil, uygulama ve cihaz bütünlüğüyle ilgili bilgileri gönderir.
- Abonelik yönetimi: Satın almalar, geri yükleme ve abonelik durumu RevenueCat (<https://www.revenuecat.com/privacy>) tarafından yönetilir. App Store / Google Play satın alma bilgileriniz bu amaçla RevenueCat ile paylaşılır.
- Davet kodları: Bir davet kodu oluşturduğunuzda veya girdiğinizde, bonusu (ek aylık kullanım) hesaplamak için hangi hesabın hangisini davet ettiğini ve kendi kodunuzu sunucumuzda saklarız. Davet eden hesabın uygulamasında, davet edilen her kişi için bir sıra numarası, davet tarihi, mevcut yapay zeka planı (Mini / Standard) ve bunun sağladığı bonus yüzdesi gösterilir. Taraflardan herhangi birini tanımlayabilecek e-posta adresi gibi bilgiler karşı tarafa asla gösterilmez. Hesabınızı silerseniz davet kodunuz da silinir.
- Özellik oylaması ve önerileri: "Sıradaki özelliğe oy ver" bölümünde oy verdiğinizde veya özellik önerdiğinizde, günde bir kez sınırını uygulamak ve oyları saymak için hangi hesabın hangi gün hangi özelliğe oy verdiğini ve önerinizin metnini sunucumuzda saklarız. Öneriler yayınlanmadan önce incelenir ve listede yapay zeka ile çevrilmiş bir başlık olarak gösterilebilir (hesap bilgileri gösterilmez). Hesabınızı silerseniz oy ve öneri kayıtlarınız silinir (toplam oy sayıları ve yayınlanmış başlıklar kalır).
- Hesabınızı silme: Ayarlar > Hesap ve abonelik > Hesabı sil bölümünden giriş hesabınızı, sunucunun onun için sakladığı her şeyle (abonelik durumu, aylık kullanım, istek kayıtları, video oluşturma kayıtları, davet kodu, oylar ve öneriler) ve RevenueCat'teki müşteri kaydınızla birlikte silebilirsiniz. Bu, aboneliği iptal etmez; aboneliği App Store veya Google Play ayarlarından iptal edin. Uygulamayı artık açamıyorsanız <https://normidar.com/ailabo/delete-account.html> sayfasına bakın.

## 5. Cihaz özelliklerine erişim

İsteğiniz üzerine yapay zeka şu cihaz özelliklerini çalıştırabilir: fener, titreşim, metinden konuşmaya, ekran parlaklığı, ses düzeyi (Android), konum ve adres arama, pusula, hava basıncı ve adım sayısı, Bluetooth (tarama ve bir cihazdan okuma veya cihaza yazma), NFC etiketlerini okuma ve yazma, Wi-Fi/pil/cihaz bilgileri ve sensörlerin okunması, panoyu okuma ve yazma, kamera (fotoğraf ve video), QR kod okuma, ses kaydı/oynatma ve metne çevirme, konuşmadan metne, takvim etkinliklerini okuma, ekleme, değiştirme ve silme, kişileri arama ve ekleme, görsel ve video oluşturma ve fotoğraf düzenleme, Uygulamanın klasöründeki dosyalar (oluşturma, PDF ve Office belgeleri dahil okuma, düzenleme, yeniden adlandırma, kopyalama, arama ve silme), uygulamaya özel veritabanları, bir yapılacaklar listesi, yapay zekanın hafızası, yapay zekanın yaptığı web sayfalarını gösterme (cihazınızda yalnızca Uygulamanın kendisine sunulur), fotoğraf arşivine kaydetme, sistem paylaşım menüsüyle paylaşma, diğer uygulamaları, URL'leri, haritaları, arama veya mesajlaşma uygulamasını açma, alarm/görev planlama ve size seçenekli sorular sorma.

- Bu işlemlerin sonuçları (fotoğraflar, kayıtlar, videolar, dosyalar, veritabanları, yapılacaklar listesi, yapay zekanın hafızası) ve sohbet geçmişiniz yalnızca cihazınızda saklanır. Geliştiricinin işlettiği herhangi bir sunucuya yüklenmez; cihazınızdan yalnızca bölüm 3'te açıklandığı şekilde çıkar (yapay zeka bunları okuduğunda veya kullandığında yapay zeka sağlayıcısına ya da yapay zekanın istek gönderdiği siteye).
- Diğer uygulamalardan Uygulamaya paylaştığınız metin ve dosyalar yalnızca yeni bir sohbetin mesaj kutusuna konur (dosyalar Uygulamanın klasörüne kopyalanır). Mesajı siz göndermedikçe hiçbir şey gönderilmez.
- Varsayılan olarak araçlar, uygulama içinde ek bir onay olmadan çalışır. Ayarlar > Araç izinleri bölümünden her aracı ayrı ayrı "Sor" (çalışmadan önce bir onay ekranı gösterilir) veya "Reddet" (yapay zeka asla çalıştıramaz) olarak ayarlayabilirsiniz. Bu ayarlardan bağımsız olarak Uygulama, sohbet kişisel verilerinizle birlikte dış içerik de gördükten sonra (bir web sayfası ya da QR, NFC veya Bluetooth okuması gibi) verilerinizi cihaz dışına gönderebilecek bir istekten önce ve bir dosyanın üzerine yazmak ya da bir takvim etkinliğini silmek gibi geri alınamayan işlemlerden önce her zaman size sorar. Bundan ayrı olarak, Uygulama kamera, mikrofon, konum, takvim, kişiler vb. özelliklere ilk kez erişmeden önce işletim sisteminin kendi izin iletişim kutuları her zaman gösterilir.
- Telefon aramaları ve kısa mesajlar yalnızca içerik önceden doldurulmuş şekilde arama/mesajlaşma uygulamasını açmakla sınırlıdır - Uygulama hiçbir zaman kendi başına arama yapmaz veya mesaj göndermez; son işlemi her zaman siz gerçekleştirirsiniz.
- Konum, Bluetooth, takvim, kişiler ve benzeri veriler yalnızca yapay zeka sizin talimatınızla bunları istediğinde alınır; Uygulama bunlara arka planda sürekli erişmez. Yapay zeka bir yanıt üzerinde çalışırken Uygulamadan çıkarsanız bir süre çalışmaya devam edebilir; bu sırada gösterilen bildirim sohbet içeriğini değil, yalnızca durumunu içerir. Planlanan görevler yalnızca Uygulama açıkken çalışır.

## 6. Analitik ve çökme raporlama

Uygulama, geliştirmeye yardımcı olmak için Firebase Analytics (hangi özellik ve araçların kullanıldığı, model adları, token sayıları ve hatalar gibi kullanım istatistikleri) ve Firebase Crashlytics (bir çökme olursa türü ve konumu) kullanır. Bunların hiçbiri gerçek içeriğinizi (sohbet metni, araç çağrısı argümanları [dosya içerikleri, konum koordinatları, arama sorguları vb.] veya API anahtarları) asla almaz. Giriş yaptığınızda, size destek verirken sorunların bölüm 4'teki sunucu kayıtlarıyla eşleştirilebilmesi için hesap kimliğiniz (e-posta adresiniz değil, Firebase'in takma bir tanımlayıcısı) eklenir. Her ikisini de istediğiniz zaman Ayarlar > Kullanım verilerini gönder bölümünden kapatabilirsiniz.

## 7. Reklamlar

Abonelik olmadan kendi API anahtarınızı kullanıyorsanız, Uygulama Google AdMob aracılığıyla banner reklamlar gösterir ("Reklamsız" plan dahil aboneler hiçbir zaman reklam görmez). Onay gereken bölgelerde (AEA ve Birleşik Krallık gibi) önce Google'ın onay formu gösterilir ve siz bir seçim yapana kadar reklam yüklenmez. iOS'ta Uygulama reklam göstermeden önce izleme izni (App Tracking Transparency) ister; yalnızca izin verirseniz kişiselleştirilmiş reklamlar gösterilir. Reddederseniz yalnızca kişiselleştirilmemiş reklamlar gösterilir.

## 8. Üçüncü taraflarla paylaşım

Geliştirici, kişisel bilgilerinizi üçüncü taraflara satmaz. Yukarıdaki 3-7. bölümlerde açıklanan yapay zeka sağlayıcıları, DuckDuckGo ve Wikipedia, yapay zekanın isteğiniz üzerine bağlandığı siteler, Apple ve Google (adres arama, haritalar, konuşma tanıma, uygulama doğrulaması), RevenueCat ve Google (Firebase/AdMob) ile paylaşım, bu hizmetlerin çalışması için gereken kapsamla sınırlıdır.

## 9. Çocukların gizliliği

Uygulama 13 yaşın altındaki çocuklara yönelik değildir.

## 10. İletişim

Bu politikayla ilgili sorularınız için bize şu adresten ulaşabilirsiniz:

normidar7@gmail.com

## 11. Bu politikadaki değişiklikler

Bu politika zaman zaman güncellenebilir. Önemli değişiklikler Uygulama içinde veya bu sayfada duyurulacaktır.
