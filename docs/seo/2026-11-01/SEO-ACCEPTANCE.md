# UGC Onur — dar SEO / GEO / AEO kabulü

Kaynak başlangıcı `fe2c8ce3176ee3b76aba193793ef01db82f25712`; bu değişiklik **yereldir**, yayına alınmadı. Canlı sürümün masaüstü/mobil ticari akışı ve 1 Kasım istemci ölçüm yenilemesi Main deposundaki `docs/legal-2026-11-01/onur-portfolio-browser-2026-11-01.json` ile zaten kanıtlıdır; bu kontrol onu tekrar çalıştırmadı.

## Kapatılan iki hata

- Ana EN/TR `Person.image` şeması aynı portreyi gösteren profil sayfalarının lisans alanlarını taşımıyordu. Mevcut `/usage-rights/`, `/#brief` ve Onur kredi bilgisi ortak rendera taşındı; yeni hak veya fotoğrafçı iddiası eklenmedi. [Google görsel metadata rehberi](https://developers.google.com/search/docs/appearance/structured-data/image-license-metadata), lisans ve edinme bağlantılarını açıklar; bu metadata bir görünürlük garantisi değildir.
- EN/TR kişi profillerinde karşılıklı dil bağlantıları yoktu. İki self-canonical profil artık aynı EN/TR/x-default kümesini sunar. Service sayfaları yanlış çeviri eşleşmesiyle bağlanmadı. [Google yerelleştirme rehberi](https://developers.google.com/search/docs/specialty/international/localized-versions), alternatiflerin karşılıklı tanımlanmasını açıklar.

Mevcut üretici yalnız izinli 20 metin/HTML hedefini yazdı; 13 çıktı değişti. 1 Kasım doğrulanmış snapshot byte düzeyinde korundu; HTML ve AI belgelerindeki eski 30 Ekim fallback değerleri bu snapshot ile eşitlendi. On HTML sayfasının hukuki footer'ı değişmedi. Yeni asset, bağımlılık, servis, `.site-output` kopyası veya full build yok.

## Kanıt

`seo-acceptance.json`: beş sınırlı public GET (ana sayfa, TR profil, robots, sitemap, gerçek portre) HTTP200 ve başlangıç kaynağıyla byte eşliği. Portre `image/webp`, 18.534 byte; noindex header yok. Bu GET'ler **düzeltme öncesindeki canlı sürümü** ölçer. Canonical, Person kimliği, sosyal kimlik bağlantıları ve görsel URL'si korunur. [Google görsel rehberi](https://developers.google.com/search/docs/appearance/google-images) doğrultusunda mevcut gerçek `<img>`, alt metin ve görsel site haritası reuse edildi.

İki red karşı örneği mevcut testlerde üretildi: eksik ana sayfa license ve eksik profil hreflang. Düzeltme sonrası mevcut Node suite **9 PASS / 0 FAIL / 0 SKIP**. Test artık EN/TR kaydedilmiş HTML'nin render + tarihli snapshot ile eşliğini de denetler. Log: `/tmp/vct-ugc-seo-final-2026-11-01.log`; metin üretim allowlist/hash kaydı `/tmp/vct-ugc-seo-generator-2026-11-01.json`.

Sponsorlu işler yalnız **Brantial ve Mostdomain**; fiyatlar video **300 USD**, carousel slaytı **100 USD**, tam carousel **200 USD**. Paid ads/boost/whitelisting, ek kullanım, ham dosya, münhasırlık ve sentetik benzerlik izinleri ayrı yazılı kapsam gerektirir. Aynı mevcut haklar korunur; form hâlâ e-posta taslağı açar ve teslim edilmiş lead sayılmaz.

## Arama niyeti ve sınırlar

Mevcut birinci taraf GSC kaydı (`2026-10-30/PLAN.md`): 28 Temmuz–27 Ekim 2026 için 2 tıklama / 57 gösterim; görünen tek sorgu `ai cevapları ugc`, 0 tıklama / 14 gösterim. Bu tarihli kayıt bugünkü performans veya ticari talep hacmi değildir. Yeni GSC sağlayıcısının ücretsiz plan/kota tavanı doğrulanmadığından API raporu başlatılmadı.

| Ticari niyet adayı | Mevcut cevap / hedef |
| --- | --- |
| AI / SaaS ürününü anlatacak tech UGC creator | `/ai-saas-ugc-creator/`, iki gerçek sponsorlu örnek |
| Mobil uygulama ürün anlatımı | `/mobile-app-ugc-creator/`, mevcut müşteriler mobil-app işiymiş gibi sunulmaz |
| Türkçe / İngilizce creator kimliği | `/onur-huseyin-kocak/` ve `/tr/onur-huseyin-kocak/` |
| Carousel iş birliği, fiyat ve reklam lisansı | `/#rates`, `/tr/#rates`, `/usage-rights/` |

Bu niyetler ölçülmüş sorgu hacmi değildir. Mevcut query planının 2.000 satırı benzersizdir; tümü `candidate_not_volume_validated`, hacim ve sıra boş. Yeni doorway sayfası üretilmedi. İndekslenme, ilk sıra, AI yanıtında görünme veya gelen e-posta sayısı garanti edilmez.

## Sonraki doğru adım

Kaynak checkpoint'i bağımsız incelenebilir. Canlı düzeltme için yeni depolama/kota ve yayın onayı gerekir: root kaydı 8,477/10 GB ihtiyatlı rezervle yeni deploy'u durduruyor. Bu aşama deployment veya Search Console indeks kabulü değildir. Tavan doğrulanınca yalnız mevcut ticari sayfalar için sınırlı GSC sorgu/sayfa/CTR takibi yapılır; veri olmadan 2.000 ayrı sayfa açılmaz.
