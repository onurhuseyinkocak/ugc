/* =========================================================================
   Onur Hüseyin Koçak — portfolio behaviour
   i18n (EN/TR) · geo default (outside Turkey -> EN) · reveal · video · lead form
   ========================================================================= */
(function () {
  "use strict";

  /* ---------------- i18n dictionary ---------------- */
  var I18N = {
    en: {
      "nav.work": "Work", "nav.tiktok": "TikTok", "nav.cases": "Case studies",
      "nav.about": "About", "nav.services": "Services", "nav.cta": "Book a call",

      "hero.kicker": "Bangkok-based AI &amp; UGC creator",
      "hero.h": "Content that earns<br>attention for <em>modern brands.</em>",
      "hero.sub": "I make performance-driven short-form content — in fluent English and Turkish — for AI companies, SaaS products, mobile apps, startups and travel brands that want to be seen and chosen.",
      "hero.cta1": "Book a collaboration <span class=\"arrow\">→</span>",
      "hero.cta2": "View portfolio",
      "hero.chip1": "English &amp; Turkish content",
      "hero.chip2": "Bangkok, Thailand",
      "hero.chip3": "Brands worldwide",
      "hero.badge": "organic views, recent reels",

      "stat.views": "Organic views across recent videos",
      "stat.comments": "Real comments &amp; conversations",
      "stat.viral": "Videos past 24K views on a small account",
      "stat.lang": "Native-level content in two languages",
      "stat.note": "Real numbers, pulled from live analytics. No bought views, no fake metrics.",

      "work.kicker": "Selected work",
      "work.h": "Short-form that gets watched, shared and remembered.",
      "work.langpill": "Filmed in English &amp; Turkish",
      "work.viral": "Viral",
      "work.tag.ai": "AI / GEO", "work.tag.tech": "AI / Tools", "work.tag.apps": "Apps / No-code", "work.tag.story": "Tech / Story",
      "work.v4.t": "What GEO means for your product", "work.v4.d": "1,691 comments — top performer",
      "work.v6.t": "Not an SEO story — it's GEO", "work.v6.d": "3,146 views — a quick example of why GEO matters",
      "work.v2.t": "Answer Engine Optimization, explained", "work.v2.d": "28,170 views — a complex topic made simple",
      "work.v3.t": "The viral AI video trend, for free", "work.v3.d": "Turning a trend into a how-to people save",
      "work.v5.t": "Anyone can build an app now", "work.v5.d": "A product story told in under a minute",
      "work.v1.t": "The 16-year-old who built an AI company", "work.v1.d": "Narrative hooks that hold attention",
      "work.cta.t": "Your product, in motion.", "work.cta.d": "English or Turkish — let's plan your first batch.", "work.cta.b": "Start a project →",

      "tt.kicker": "On TikTok",
      "tt.h": "Built for the <em>For You</em> page.",
      "tt.p": "TikTok rewards a strong hook, a clear story and a reason to stay. That's exactly how I build — content engineered for watch-time, not just views. New AI, tech and travel videos drop regularly.",
      "tt.follow": "Follow on TikTok <span class=\"arrow\">→</span>", "tt.collab": "Collaborate",

      "cases.kicker": "Case studies",
      "cases.h": "A look behind two videos that broke out.",
      "cases.p": "Reach is the easy part. These are examples of turning a hard, abstract topic into short-form content that people watch to the end — and argue about in the comments.",
      "case.problem": "Problem", "case.strategy": "Strategy", "case.outcome": "Outcome",
      "case.views": "Views", "case.comments": "Comments", "case.likes": "Likes", "case.spend": "Ad spend",
      "case1.h": "Making a brand-new acquisition channel feel obvious.",
      "case1.problem": "“Generative Engine Optimization” is abstract and easy to scroll past. Most explanations sound like a lecture.",
      "case1.strategy": "Open with a sharp contrast hook (SEO vs. GEO), then make it personal: where does your product show up when people ask ChatGPT?",
      "case1.outcome": "The format triggered a real debate — 1,691 comments on a small account, and the video kept circulating for days.",
      "case2.h": "28K views on a topic most people haven't heard of.",
      "case2.problem": "Answer Engine Optimization is a niche, jargon-heavy subject with near-zero search demand yet.",
      "case2.strategy": "Lead with the behaviour shift people already feel — “you ask ChatGPT instead of Google now” — then land the term on top of it.",
      "case2.outcome": "Pure curiosity-driven reach: 28,170 views with no ad spend, proving demand for the topic before competitors caught on.",

      "about.kicker": "About", "about.role": "AI &amp; UGC Creator · Bangkok",
      "about.h": "A creator who actually understands the products he films.",
      "about.big": "I'm Onur — a Bangkok-based creator working with AI and tech brands around the world. Before the camera, I build software and study how people discover products online. That's the difference: I don't just make videos that look good, I make videos that move the metric you care about.",
      "about.p1": "Most UGC stops at “nice clip.” I start from the business question — who's the buyer, what's the objection, what makes them stop scrolling — and design the content backwards from there. Hooks, pacing, on-screen copy and calls to action are all deliberate, because attention without conversion is just noise.",
      "about.p2": "I create in <strong>fluent English and Turkish</strong>, so a single brief can reach a global audience and a Turkish-speaking one without losing tone or nuance. From Bangkok I work with founders and teams across every time zone — async, fast, and easy to brief.",
      "about.li1": "<strong>English &amp; Turkish</strong> — native-level scripts and delivery in both.",
      "about.li2": "<strong>Performance-minded</strong> — built around hooks, retention and conversion.",
      "about.li3": "<strong>Product-fluent</strong> — I understand AI, SaaS and apps from the inside.",
      "about.li4": "<strong>Fast &amp; remote</strong> — Bangkok-based, working with brands worldwide.",

      "svc.kicker": "Services",
      "svc.h": "Everything you need to show up and convert.",
      "svc.p": "Pick a single video or a full content engine. Every deliverable can be produced in English, Turkish, or both.",
      "svc1.t": "UGC Videos", "svc1.d": "Authentic, talking-to-camera content that feels like a recommendation from a friend — not an ad.",
      "svc2.t": "TikTok Content", "svc2.d": "Native short-form engineered for the For You page — strong hooks, tight pacing, high watch-time.",
      "svc3.t": "AI Product Content", "svc3.d": "Explain a complex AI product simply, and show real value in seconds. My specialty.",
      "svc4.t": "SaaS Product Content", "svc4.d": "Feature walk-throughs, use-case demos and founder stories that turn trials into paying users.",
      "svc5.t": "Travel Content", "svc5.d": "Cinematic, on-location storytelling from Bangkok and beyond for travel and lifestyle brands.",
      "svc6.t": "Short-Form Ads", "svc6.d": "Paid-ready creatives built for hooks, retention and conversion across TikTok, Reels and Shorts.",
      "svc7.t": "Creative Strategy", "svc7.d": "Hook angles, content pillars and a posting plan — so every video has a job, not just a view count.",
      "svc8.t": "Content Packages", "svc8.d": "Monthly retainers — a steady drip of on-brand content in EN &amp; TR, planned and shipped for you.",

      "why.quote": "Attention is cheap. Attention that turns into customers is the whole job — and that's what I'm hired to deliver.",
      "why.cite": "Onur Hüseyin Koçak — Bangkok",
      "why1.q": "I understand the <span>product</span>, not just the camera.",
      "why1.p": "I build software myself, so I can take a raw feature list and turn it into a story a buyer actually cares about.",
      "why2.q": "Two languages, <span>one brief</span>.",
      "why2.p": "English for the global market, Turkish for one of the fastest-growing creator audiences — produced natively, never translated word-for-word.",
      "why3.q": "I optimise for <span>conversion</span>.",
      "why3.p": "Hooks, pacing and CTAs are designed on purpose. The goal is never just views — it's sign-ups, installs and sales.",

      "contact.kicker": "Let's work",
      "contact.h": "Have a product worth talking about?",
      "contact.sub": "Tell me what you're building and what success looks like. I'll come back with an honest take and a plan — usually within 24 hours.",
      "contact.response": "Available for new collaborations · replies within 24h",
      "form.name": "Name", "form.name.ph": "Your name",
      "form.email": "Email <span class=\"req\">*</span>",
      "form.company": "Company", "form.company.ph": "Brand / startup",
      "form.product": "Product type <span class=\"req\">*</span>", "form.product.ph": "Select…",
      "form.opt.ai": "AI product", "form.opt.saas": "SaaS", "form.opt.app": "Mobile app", "form.opt.startup": "Startup", "form.opt.travel": "Travel brand", "form.opt.other": "Other",
      "form.goal": "What's the goal?", "form.goal.ph": "Select…",
      "form.goal.aware": "Awareness &amp; reach", "form.goal.conv": "Conversions &amp; installs", "form.goal.ads": "Paid ad creatives", "form.goal.ongoing": "Ongoing content",
      "form.msg": "Tell me about it", "form.msg.ph": "What are you building, and which language(s) do you need — English, Turkish, or both?",
      "form.send": "Send inquiry <span class=\"arrow\">→</span>",
      "form.sending": "Sending…", "form.ok": "Thanks — got it. I'll reply within 24 hours.", "form.err": "Add your email and product type, then try again.",

      "pkg.kicker": "Packages",
      "pkg.h": "Pick a starting point, scale from there.",
      "pkg.p": "Clear scopes, no lock-in. Every package is quoted to your brief — custom quote based on deliverables, usage rights and number of videos.",
      "pkg.quote": "Custom quote",
      "pkg1.t": "Starter UGC Video", "pkg1.d": "One UGC video, one hook angle, edited + raw. Built for a first test.",
      "pkg2.t": "Growth UGC Pack", "pkg2.d": "3 videos, multiple hooks, built for organic + paid testing.",
      "pkg3.t": "Paid Ads Creative Pack", "pkg3.d": "Ad-ready creatives with hook variations for TikTok, Reels &amp; Meta.",
      "pkg4.t": "SaaS / App Launch Pack", "pkg4.d": "5 videos, script strategy, demos + founder content around your launch.",
      "pkg5.t": "Monthly Creator Retainer", "pkg5.d": "A steady drip of on-brand content in EN &amp; TR, planned and shipped monthly.",
      "pkg.cta.t": "Tell me your scope", "pkg.cta.d": "Send your product, goal and number of videos — I'll reply with a clear quote.",

      "faq.kicker": "FAQ",
      "faq.h": "Questions brands ask.",
      "faq.p": "The real questions founders and marketers type into Google — or ask ChatGPT — when they're looking for a creator like me.",
      "faq.q1": "What kind of brands do you make content for?",
      "faq.a1": "AI products, SaaS, mobile apps, tech startups, productivity and consumer apps, and travel brands. If your product lives on the internet and needs attention, it's a fit.",
      "faq.q2": "Do you create UGC in both English and Turkish?",
      "faq.a2": "Yes — natively in both. One brief can become an English version for global audiences and a Turkish version for the local market, with the tone right in each, not a word-for-word translation.",
      "faq.q3": "Can the videos be used as paid ads?",
      "faq.a3": "Yes. Everything is built hook-first for TikTok, Reels and Shorts and works as organic content or paid creative. Usage rights, whitelisting and raw files are agreed up front.",
      "faq.q4": "Do you actually understand technical products?",
      "faq.a4": "I build software myself, so I can read a feature list and turn it into a story a buyer cares about — without getting the product wrong or over-promising.",
      "faq.q5": "How fast can you deliver?",
      "faq.a5": "Fast and fully remote from Bangkok. Most single videos land in days, not weeks; larger batches are scheduled around your launch date.",
      "faq.q6": "How does pricing work?",
      "faq.a6": "Scope-based — from a single test video to a monthly content package. Tell me the product, the goal and how many videos you need, and I'll send a clear quote.",
      "faq.q7": "Can you help with an app or product launch?",
      "faq.a7": "Yes — launch content is a core use case: explainer reels, product demos, founder videos and ad creatives, planned around your release.",
      "faq.q8": "Do you work with international brands?",
      "faq.a8": "Yes. I'm based in Bangkok and work with founders and teams worldwide — async and across time zones, in English or Turkish.",
      "faq.q9": "Do you cover lifestyle or travel content too?",
      "faq.a9": "Through my creator network: <a href=\"https://ugc-mine.vibecodingturkey.com\" target=\"_blank\" rel=\"noopener\">Mine Koçak</a> for lifestyle &amp; beauty, and <a href=\"https://moviatravelhub.vibecodingturkey.com\" target=\"_blank\" rel=\"noopener\">Movia Travel Hub</a> for travel &amp; hospitality. One studio, three audiences.",

      "net.kicker": "Creator network",
      "net.h": "One studio, three audiences.",
      "net.p": "Beyond AI and tech, our family of creators also covers lifestyle and travel — so a brand can reach the right audience with the right face, all from Bangkok.",
      "net.mine.tag": "Lifestyle &amp; Beauty", "net.mine.t": "Mine Koçak",
      "net.mine.d": "Lifestyle &amp; beauty UGC — authentic content for beauty, wellness and lifestyle brands.",
      "net.mine.cta": "Visit the site <span class=\"arrow\">→</span>",
      "net.movia.tag": "Travel &amp; Hospitality", "net.movia.t": "Movia Travel Hub",
      "net.movia.d": "Travel &amp; hospitality content from Bangkok — cafés, hotels, restaurants and venues, brought to life on camera.",
      "net.movia.cta": "Visit the site <span class=\"arrow\">→</span>",

      "footer.tag": "Bangkok-based AI &amp; UGC creator. Performance-driven short-form content in English and Turkish for modern internet brands.",
      "footer.explore": "Explore", "footer.connect": "Connect", "footer.network": "Network", "footer.made": "Bangkok, Thailand · Working worldwide"
    },

    tr: {
      "nav.work": "İşler", "nav.tiktok": "TikTok", "nav.cases": "Vaka analizleri",
      "nav.about": "Hakkımda", "nav.services": "Hizmetler", "nav.cta": "Görüşme planla",

      "hero.kicker": "Bangkok merkezli AI &amp; UGC içerik üreticisi",
      "hero.h": "Modern markalara<br><em>ilgi kazandıran</em> içerikler.",
      "hero.sub": "AI şirketleri, SaaS ürünleri, mobil uygulamalar, startup'lar ve seyahat markaları için akıcı İngilizce ve Türkçe, performans odaklı kısa video üretiyorum. Görünür olun, tercih edilin.",
      "hero.cta1": "Birlikte çalışalım <span class=\”arrow\”>→</span>",
      "hero.cta2": "İşlere göz at",
      "hero.chip1": "İngilizce &amp; Türkçe içerik",
      "hero.chip2": "Bangkok, Tayland",
      "hero.chip3": "Dünya geneli markalar",
      "hero.badge": "organik izlenme, son videolar",

      "stat.views": "Son videolardaki toplam organik izlenme",
      "stat.comments": "Gerçek yorum ve konuşma",
      "stat.viral": "Küçük bir hesapta 24B izlenmeyi geçen video",
      "stat.lang": "İki dilde ana dil seviyesinde içerik",
      "stat.note": "Gerçek rakamlar, canlı analizlerden alındı. Satın alınmış izlenme yok, sahte metrik yok.",

      "work.kicker": "Seçili işler",
      "work.h": "İzlenen, paylaşılan ve akılda kalan kısa videolar.",
      "work.langpill": "İngilizce &amp; Türkçe çekiliyor",
      "work.viral": "Viral",
      "work.tag.ai": "AI / GEO", "work.tag.tech": "AI / Araçlar", "work.tag.apps": "Uygulama / No-code", "work.tag.story": "Tech / Hikâye",
      "work.v4.t": "GEO senin ürünün için ne anlama geliyor", "work.v4.d": "1.691 yorum — en çok etkileşim alan",
      "work.v6.t": "Aslında bir SEO hikâyesi değil", "work.v6.d": "3.146 izlenme — GEO neden önemli, kısa bir örnek",
      "work.v2.t": "Answer Engine Optimization, sade anlatımla", "work.v2.d": "28.170 izlenme — karmaşık bir konu, basitçe",
      "work.v3.t": "Viral AI video trendi, ücretsiz", "work.v3.d": "Bir trendi, insanların kaydettiği bir rehbere çevirmek",
      "work.v5.t": "Artık herkes uygulama yapabilir", "work.v5.d": "Bir dakikadan kısa bir ürün hikâyesi",
      "work.v1.t": "16 yaşında AI şirketi kuran çocuk", "work.v1.d": "Dikkati tutan anlatı kancaları",
      "work.cta.t": "Ürünün, hareket halinde.", "work.cta.d": "İngilizce ya da Türkçe — ilk seti birlikte planlayalım.", "work.cta.b": "Projeye başla →",

      "tt.kicker": "TikTok'ta",
      "tt.h": "<em>Keşfet</em> sayfası için tasarlandı.",
      "tt.p": "TikTok; güçlü bir kanca, net bir hikâye ve kalmak için bir sebep ister. Ben de tam olarak böyle üretiyorum — sadece izlenme değil, izlenme süresi için kurgulanmış içerik. Düzenli olarak yeni AI, teknoloji ve seyahat videoları geliyor.",
      "tt.follow": "TikTok'ta takip et <span class=\”arrow\”>→</span>", "tt.collab": "İş birliği yap",

      "cases.kicker": "Vaka analizleri",
      "cases.h": "Patlayan iki videonun arkasındaki düşünce.",
      "cases.p": "Erişim işin kolay kısmı. Bunlar, zor ve soyut bir konuyu sonuna kadar izlenen — ve yorumlarda tartışılan — kısa videoya çevirmenin örnekleri.",
      "case.problem": "Problem", "case.strategy": "Strateji", "case.outcome": "Sonuç",
      "case.views": "İzlenme", "case.comments": "Yorum", "case.likes": "Beğeni", "case.spend": "Reklam harcaması",
      "case1.h": "Yepyeni bir kazanım kanalını apaçık hissettirmek.",
      "case1.problem": "”Generative Engine Optimization” soyut ve kolayca atlanan bir konu. Çoğu anlatım ders gibi geliyor.",
      "case1.strategy": "Keskin bir karşıtlık kancasıyla aç (SEO vs. GEO), sonra kişiselleştir: insanlar ChatGPT'ye sorduğunda senin ürünün nerede çıkıyor?",
      "case1.outcome": "Format gerçek bir tartışma başlattı — küçük bir hesapta 1.691 yorum ve video günlerce dolaşmaya devam etti.",
      "case2.h": "Çoğu kişinin duymadığı bir konuda 28B izlenme.",
      "case2.problem": "Answer Engine Optimization, henüz neredeyse hiç arama hacmi olmayan, jargon yüklü niş bir konu.",
      "case2.strategy": "İnsanların zaten hissettiği davranış değişimiyle başla — “artık Google yerine ChatGPT'ye soruyorsun” — terimi de bunun üzerine otur.",
      "case2.outcome": "Tamamen meraktan gelen erişim: sıfır reklam harcamasıyla 28.170 izlenme. Rakipler fark etmeden konuya talep olduğunu kanıtladı.",

      "about.kicker": "Hakkımda", "about.role": "AI &amp; UGC İçerik Üreticisi · Bangkok",
      "about.h": "Çektiği ürünleri gerçekten anlayan bir içerik üreticisi.",
      "about.big": "Ben Onur — Bangkok'tan, dünyanın dört bir yanındaki AI ve teknoloji markalarıyla çalışan bir içerik üreticisiyim. Kameranın arkasına geçmeden önce yazılım geliştiriyorum ve insanların ürünleri internette nasıl keşfettiğini inceliyorum. Fark da burada: sadece güzel görünen videolar değil, önemsediğin metriği hareket ettiren videolar yapıyorum.",
      "about.p1": "Çoğu UGC “güzel klip” seviyesinde kalır. Ben iş sorusundan başlarım — alıcı kim, itirazı ne, onu durduran şey ne — ve içeriği oradan geriye doğru kurgularım. Kanca, ritim, ekran yazıları ve harekete geçirici mesajlar bilinçli seçimlerdir; çünkü dönüşüm getirmeyen ilgi sadece gürültüdür.",
      "about.p2": "<strong>Akıcı İngilizce ve Türkçe</strong> içerik üretiyorum; böylece tek bir brief, tonu ve nüansı kaybetmeden hem global hem Türkçe konuşan kitleye ulaşır. Bangkok'tan, her saat diliminden ekiplerle çalışıyorum — hızlı, uzaktan ve brief vermesi kolay.",
      "about.li1": "<strong>İngilizce &amp; Türkçe</strong> — her ikisinde de ana dil seviyesinde senaryo ve sunum.",
      "about.li2": "<strong>Performans odaklı</strong> — kanca, izlenme süresi ve dönüşüm üzerine kurulu.",
      "about.li3": "<strong>Ürüne hâkim</strong> — AI, SaaS ve uygulamaları içeriden biliyorum.",
      "about.li4": "<strong>Hızlı &amp; uzaktan</strong> — Bangkok merkezli, dünya geneli markalarla.",

      "svc.kicker": "Hizmetler",
      "svc.h": "Görünmek ve dönüştürmek için ihtiyacın olan her şey.",
      "svc.p": "Tek bir video da seçebilirsin, eksiksiz bir içerik motoru da. Tüm işler İngilizce, Türkçe ya da her ikisinde üretilebilir.",
      "svc1.t": "UGC Videolar", "svc1.d": "Reklam gibi değil, bir arkadaşın tavsiyesi gibi hissettiren, samimi ve kameraya konuşan içerik.",
      "svc2.t": "TikTok İçeriği", "svc2.d": "Keşfet sayfası için kurgulanmış doğal kısa video — güçlü kanca, sıkı ritim, yüksek izlenme süresi.",
      "svc3.t": "AI Ürün İçeriği", "svc3.d": "Karmaşık bir AI ürününü sade anlat, gerçek değeri saniyeler içinde göster. Uzmanlık alanım.",
      "svc4.t": "SaaS Ürün İçeriği", "svc4.d": "Denemeyi ödeme yapan kullanıcıya çeviren özellik turları, kullanım senaryoları ve kurucu hikâyeleri.",
      "svc5.t": "Seyahat İçeriği", "svc5.d": "Seyahat ve yaşam tarzı markaları için Bangkok'tan ve ötesinden sinematik, mekânında anlatım.",
      "svc6.t": "Kısa Reklam Videoları", "svc6.d": "TikTok, Reels ve Shorts için kanca, izlenme süresi ve dönüşüme göre kurgulanmış reklama hazır içerik.",
      "svc7.t": "Yaratıcı Strateji", "svc7.d": "Kanca açıları, içerik sütunları ve paylaşım planı — böylece her video bir iş yapar, sadece izlenme toplamaz.",
      "svc8.t": "İçerik Paketleri", "svc8.d": "Aylık anlaşmalar — EN &amp; TR markana uygun içeriğin düzenli akışı, senin için planlanır ve teslim edilir.",

      "why.quote": "İlgi ucuzdur. Müşteriye dönüşen ilgi ise işin ta kendisidir — ve ben tam da bunu teslim etmek için işe alınırım.",
      "why.cite": "Onur Hüseyin Koçak — Bangkok",
      "why1.q": "Sadece kamerayı değil, <span>ürünü</span> de anlıyorum.",
      "why1.p": "Yazılımı kendim yazıyorum; bu yüzden ham bir özellik listesini, alıcının gerçekten önemsediği bir hikâyeye çevirebiliyorum.",
      "why2.q": "İki dil, <span>tek brief</span>.",
      "why2.p": "Global pazar için İngilizce, en hızlı büyüyen içerik kitlelerinden biri için Türkçe — kelime kelime çeviri değil, baştan o dilde üretilmiş içerik.",
      "why3.q": "<span>Dönüşüm</span> için optimize ediyorum.",
      "why3.p": "Kanca, ritim ve CTA'lar bilinçli tasarlanır. Hedef hiçbir zaman sadece izlenme değil — kayıt, indirme ve satıştır.",

      "contact.kicker": "Hadi çalışalım",
      "contact.h": "Konuşmaya değer bir ürünün mü var?",
      "contact.sub": "Ne geliştirdiğini ve başarının senin için ne demek olduğunu anlat. Sana dürüst bir değerlendirme ve bir planla döneyim — genelde 24 saat içinde.",
      "contact.response": "Yeni iş birliklerine açık · 24 saat içinde yanıt",
      "form.name": "İsim", "form.name.ph": "Adın",
      "form.email": "E-posta <span class=\”req\”>*</span>",
      "form.company": "Şirket", "form.company.ph": "Marka / startup",
      "form.product": "Ürün tipi <span class=\”req\”>*</span>", "form.product.ph": "Seç…",
      "form.opt.ai": "AI ürünü", "form.opt.saas": "SaaS", "form.opt.app": "Mobil uygulama", "form.opt.startup": "Startup", "form.opt.travel": "Seyahat markası", "form.opt.other": "Diğer",
      "form.goal": "Hedef ne?", "form.goal.ph": "Seç…",
      "form.goal.aware": "Bilinirlik &amp; erişim", "form.goal.conv": "Dönüşüm &amp; indirme", "form.goal.ads": "Reklam içeriği", "form.goal.ongoing": "Sürekli içerik",
      "form.msg": "Biraz anlat", "form.msg.ph": "Ne geliştiriyorsun ve hangi dil(ler)e ihtiyacın var — İngilizce, Türkçe ya da ikisi?",
      "form.send": "Mesaj gönder <span class=\”arrow\”>→</span>",
      "form.sending": "Gönderiliyor…", "form.ok": "Teşekkürler — aldım. 24 saat içinde döneceğim.", "form.err": "E-posta ve ürün tipini ekleyip tekrar dene.",

      "pkg.kicker": "Paketler",
      "pkg.h": "Bir başlangıç seç, oradan büyüt.",
      "pkg.p": "Net kapsam, bağlayıcılık yok. Her paket brief'ine göre fiyatlanır — teslimatlara, kullanım haklarına ve video sayısına göre özel teklif.",
      "pkg.quote": "Özel teklif",
      "pkg1.t": "Başlangıç UGC Videosu", "pkg1.d": "Tek UGC video, tek kanca açısı, edit + ham. İlk test için ideal.",
      "pkg2.t": "Growth UGC Paketi", "pkg2.d": "3 video, çoklu kanca, organik + paid test için.",
      "pkg3.t": "Reklam İçeriği Paketi", "pkg3.d": "TikTok, Reels &amp; Meta için kanca varyasyonlu reklama hazır içerik.",
      "pkg4.t": "SaaS / App Lansman Paketi", "pkg4.d": "5 video, senaryo stratejisi, lansmanın etrafında demo + kurucu içeriği.",
      "pkg5.t": "Aylık İçerik Anlaşması", "pkg5.d": "EN &amp; TR markana uygun içeriğin aylık düzenli akışı.",
      "pkg.cta.t": "Kapsamını anlat", "pkg.cta.d": "Ürününü, hedefini ve video sayısını gönder — net bir teklifle döneyim.",

      "faq.kicker": "SSS",
      "faq.h": "Markaların sorduğu sorular.",
      "faq.p": "Kurucuların ve pazarlamacıların benim gibi bir içerik üreticisi ararken Google'a yazdığı — ya da ChatGPT'ye sorduğu — gerçek sorular.",
      "faq.q1": "Ne tür markalara içerik üretiyorsun?",
      "faq.a1": "AI ürünleri, SaaS, mobil uygulamalar, teknoloji startup'ları, üretkenlik ve tüketici uygulamaları ve seyahat markaları. Ürünün internette yaşıyor ve dikkat istiyorsa, uygundur.",
      "faq.q2": "İçeriği hem İngilizce hem Türkçe üretiyor musun?",
      "faq.a2": "Evet — ikisinde de ana dil seviyesinde. Tek bir brief; global kitle için İngilizce, yerel pazar için Türkçe versiyona dönüşür. Kelime kelime çeviri değil, her dilde doğru tonla.",
      "faq.q3": "Videolar reklam olarak kullanılabilir mi?",
      "faq.a3": "Evet. Her şey TikTok, Reels ve Shorts için kanca-öncelikli kurgulanır; organik içerik ya da reklam olarak çalışır. Kullanım hakları, whitelisting ve ham dosyalar baştan netleşir.",
      "faq.q4": "Teknik ürünleri gerçekten anlıyor musun?",
      "faq.a4": "Yazılımı kendim geliştiriyorum; bir özellik listesini, ürünü yanlış anlatmadan ya da abartmadan, alıcının önemsediği bir hikâyeye çevirebiliyorum.",
      "faq.q5": "Ne kadar hızlı teslim ediyorsun?",
      "faq.a5": "Bangkok'tan hızlı ve tamamen uzaktan. Tek videolar genelde haftalar değil günler içinde; büyük setler lansman tarihine göre planlanır.",
      "faq.q6": "Fiyatlandırma nasıl işliyor?",
      "faq.a6": "Kapsama göre — tek bir test videosundan aylık içerik paketine kadar. Ürünü, hedefi ve kaç video istediğini söyle, net bir teklif göndereyim.",
      "faq.q7": "Uygulama ya da ürün lansmanında yardımcı olur musun?",
      "faq.a7": "Evet — lansman içeriği temel kullanım alanı: açıklayıcı reel'ler, ürün demoları, kurucu videoları ve reklam içerikleri, çıkışına göre planlanır.",
      "faq.q8": "Uluslararası markalarla çalışıyor musun?",
      "faq.a8": "Evet. Bangkok merkezliyim ve dünya genelindeki kurucu ve ekiplerle çalışıyorum — asenkron, farklı saat dilimlerinde, İngilizce ya da Türkçe.",
      "faq.q9": "Lifestyle veya seyahat içeriği de var mı?",
      "faq.a9": "İçerik ağım üzerinden: lifestyle &amp; güzellik için <a href=\”https://ugc-mine.vibecodingturkey.com\” target=\”_blank\” rel=\”noopener\”>Mine Koçak</a>, seyahat &amp; ağırlama için <a href=\”https://moviatravelhub.vibecodingturkey.com\” target=\”_blank\” rel=\”noopener\”>Movia Travel Hub</a>. Tek stüdyo, üç kitle.",

      "net.kicker": "İçerik ağı",
      "net.h": "Tek stüdyo, üç kitle.",
      "net.p": "AI ve teknolojinin ötesinde; ailecek yaşam tarzı ve seyahat içeriğini de kapsıyoruz — böylece bir marka doğru kitleye doğru yüzle ulaşır, hepsi Bangkok'tan.",
      "net.mine.tag": "Lifestyle &amp; Güzellik", "net.mine.t": "Mine Koçak",
      "net.mine.d": "Lifestyle &amp; güzellik UGC — güzellik, wellness ve yaşam tarzı markaları için samimi içerik.",
      "net.mine.cta": "Siteyi gör <span class=\”arrow\”>→</span>",
      "net.movia.tag": "Seyahat &amp; Ağırlama", "net.movia.t": "Movia Travel Hub",
      "net.movia.d": "Bangkok'tan seyahat &amp; ağırlama içeriği — kafeler, oteller, restoranlar ve mekanlar, kamera önünde.",
      "net.movia.cta": "Siteyi gör <span class=\”arrow\”>→</span>",

      "footer.tag": "Bangkok merkezli AI &amp; UGC içerik üreticisi. Modern internet markaları için İngilizce ve Türkçe, performans odaklı kısa video.",
      "footer.explore": "Keşfet", "footer.connect": "Bağlan", "footer.network": "Ağ", "footer.made": "Bangkok, Tayland · Dünya geneli çalışıyorum"
    },

    th: {
      "nav.work": "ผลงาน", "nav.tiktok": "TikTok", "nav.cases": "กรณีศึกษา",
      "nav.about": "เกี่ยวกับ", "nav.services": "บริการ", "nav.cta": "จองการปรึกษา",

      "hero.kicker": "สร้างสรรค์เนื้อหา AI &amp; UGC จาก Bangkok",
      "hero.h": "เนื้อหาที่สร้าง<br><em>ความสนใจให้กับแบรนด์สมัยใหม่</em>",
      "hero.sub": "ผมสร้างเนื้อหาวิดีโอสั้นที่มุ่งประสิทธิภาพ — เป็นภาษาอังกฤษและไทยที่ลื่นไหล — สำหรับบริษัท AI, ผลิตภัณฑ์ SaaS, แอปโทรศัพท์มือถือ, สตาร์ตอัป และแบรนด์การท่องเที่ยวที่อยากโดดเด่นและได้รับความชื่นชอบ",
      "hero.cta1": "เริ่มการทำงานร่วมกัน <span class=\”arrow\”>→</span>",
      "hero.cta2": "ดูผลงาน",
      "hero.chip1": "เนื้อหาภาษาอังกฤษ &amp; ไทย",
      "hero.chip2": "Bangkok, ประเทศไทย",
      "hero.chip3": "แบรนด์ทั่วโลก",
      "hero.badge": "มิวจัดต์วิวแบบออร์แกนิค, วิดีโอล่าสุด",

      "stat.views": "จำนวนมิวจัดต์วิวแบบออร์แกนิคทั้งหมด",
      "stat.comments": "ความเห็นและการสนทนาที่แท้จริง",
      "stat.viral": "วิดีโอที่ได้รับมิวจัดต์วิวเกิน 24,000 ครั้งจากแอคาउนท์เล็ก",
      "stat.lang": "เนื้อหาระดับเจ้าของภาษาในสองภาษา",
      "stat.note": "ตัวเลขที่แท้จริง ดึงมาจากการวิเคราะห์แบบสด ไม่มีมิวจัดต์วิวที่ซื้อ ไม่มีเมตริกส์ปลอม",

      "work.kicker": "ผลงานที่เลือก",
      "work.h": "วิดีโอสั้นที่ได้รับการชมชอบ แชร์ และจดจำ",
      "work.langpill": "ถ่ายทำเป็นภาษาอังกฤษ &amp; ไทย",
      "work.viral": "ไวรัล",
      "work.tag.ai": "AI / GEO", "work.tag.tech": "AI / เครื่องมือ", "work.tag.apps": "แอป / No-code", "work.tag.story": "เทค / เรื่องราว",
      "work.v4.t": "GEO หมายถึงอะไรสำหรับผลิตภัณฑ์ของคุณ", "work.v4.d": "1,691 ความเห็น — ผลงานที่ได้ปฏิกิริยาสูงสุด",
      "work.v6.t": "ไม่ใช่เรื่องราว SEO — มันคือ GEO", "work.v6.d": "3,146 มิวจัดต์วิว — ตัวอย่างสั้น ๆ ของเหตุผลที่ GEO มีความสำคัญ",
      "work.v2.t": "Answer Engine Optimization อธิบายอย่างชัดเจน", "work.v2.d": "28,170 มิวจัดต์วิว — หัวข้อที่ซับซ้อนทำให้เรียบง่าย",
      "work.v3.t": "เทรนด์วิดีโอ AI ไวรัล ฟรี", "work.v3.d": "เปลี่ยนเทรนด์เป็นคู่มือที่ผู้คนบันทึก",
      "work.v5.t": "ตอนนี้ทุกคนสร้างแอปได้", "work.v5.d": "เรื่องราวผลิตภัณฑ์ในเวลาน้อยกว่าหนึ่งนาที",
      "work.v1.t": "เด็ก 16 ปีที่สร้างบริษัท AI", "work.v1.d": "ตัวเบ็ดความสนใจที่ยึดจับได้",
      "work.cta.t": "ผลิตภัณฑ์ของคุณ ในการเคลื่อนไหว", "work.cta.d": "ภาษาอังกฤษหรือไทย — ลองวางแผนชุดแรกของคุณด้วยกัน", "work.cta.b": "เริ่มโครงการ →",

      "tt.kicker": "บน TikTok",
      "tt.h": "สร้างสรรค์สำหรับหน้า <em>For You</em>",
      "tt.p": "TikTok ให้รางวัลแก่ตัวเบ็ดที่แข็งแกร่ง เรื่องราวที่ชัดเจน และเหตุผลที่ต้องอยู่ ฉันสร้างสรรค์อย่างแน่นอนแบบนั้น — เนื้อหาที่ออกแบบมาสำหรับเวลาชมชอบ ไม่ใช่แค่มิวจัดต์วิว วิดีโอ AI, เทคโนโลยี และการท่องเที่ยวใหม่เพิ่มเข้ามาเป็นประจำ",
      "tt.follow": "ติดตามบน TikTok <span class=\”arrow\”>→</span>", "tt.collab": "ร่วมมือ",

      "cases.kicker": "กรณีศึกษา",
      "cases.h": "มองข้างหลังวิดีโอสองวิดีโอที่ถูกวิเคราะห์",
      "cases.p": "การเข้าถึงคือส่วนที่ง่าย นี่คือตัวอย่างของการเปลี่ยนหัวข้อที่ยากและนามธรรมให้เป็นเนื้อหาวิดีโอสั้นที่ผู้คนชม จนจบ — และโต้แย้งในส่วนความเห็น",
      "case.problem": "ปัญหา", "case.strategy": "กลยุทธ์", "case.outcome": "ผลลัพธ์",
      "case.views": "มิวจัดต์วิว", "case.comments": "ความเห็น", "case.likes": "ชอบ", "case.spend": "งบประมาณโฆษณา",
      "case1.h": "ทำให้ช่องทางการได้มาใหม่รู้สึกชัดเจน",
      "case1.problem": "”Generative Engine Optimization” เป็นหัวข้อนามธรรมและเพิ่มเติมเข้าไปได้อย่างง่ายดาย คำอธิบายส่วนใหญ่ฟังเหมือนการบรรยาย",
      "case1.strategy": "เปิดด้วยตัวเบ็ดความเปรียบเทียบแหลม (SEO vs. GEO) แล้วทำให้เป็นส่วนตัว: ผลิตภัณฑ์ของคุณปรากฏตัวที่ไหนเมื่อผู้คนถาม ChatGPT?",
      "case1.outcome": "รูปแบบนี้ทำให้เกิดการโต้เถียงที่แท้จริง — 1,691 ความเห็นจากแอคาउนท์เล็ก และวิดีโอยังคงหมุนเวียนต่อไปเป็นเวลาหลายวัน",
      "case2.h": "28,000 มิวจัดต์วิวในหัวข้อที่ผู้คนส่วนใหญ่ยังไม่ได้ยินมา",
      "case2.problem": "Answer Engine Optimization เป็นหัวข้อเฉพาะที่ยุ่งเหยิงด้วยศัพท์เทคนิคและมีความต้องการการค้นหาเกือบศูนย์ในขณะนี้",
      "case2.strategy": "เริ่มต้นด้วยการเปลี่ยนแปลงพฤติกรรมที่ผู้คนรู้สึกอยู่แล้ว — \”คุณเลยถามไปที่ ChatGPT มากกว่า Google\” — จากนั้นวางศัพท์ด้านบน",
      "case2.outcome": "การเข้าถึงที่ขับเคลื่อนด้วยความสนใจล้วนๆ: 28,170 มิวจัดต์วิวโดยไม่มีงบประมาณโฆษณา พิสูจน์ความต้องการของหัวข้อก่อนที่คู่แข่งจะสังเกตเห็น",

      "about.kicker": "เกี่ยวกับ", "about.role": "สร้างสรรค์เนื้อหา AI &amp; UGC · Bangkok",
      "about.h": "สร้างสรรค์เนื้อหาที่เข้าใจผลิตภัณฑ์ที่ถ่ายทำ",
      "about.big": "ฉันคือ Onur — สร้างสรรค์เนื้อหาจาก Bangkok ทำงานกับแบรนด์ AI และเทคโนโลยีทั่วโลก ก่อนกล้องตัวอย่าง ฉันเขียนโปรแกรมและศึกษาวิธีการที่ผู้คนค้นพบผลิตภัณฑ์ออนไลน์ ความแตกต่างอยู่ที่นี่: ฉันไม่ได้สร้างเพียงวิดีโอที่ดูดี ฉันสร้างวิดีโอที่เคลื่อนไหวเมตริกส์ที่คุณสนใจ",
      "about.p1": "UGC ส่วนใหญ่หยุดอยู่ที่ 'คลิปที่ดี' ฉันเริ่มจากคำถามทางธุรกิจ — ผู้ซื้อคือใคร คำคัดค้านคือ อะไรที่ทำให้พวกเขาหยุดสแกน — และออกแบบเนื้อหาย้อนกลับจากที่นั่น ตัวเบ็ด, จังหวะ, สำเนาบนหน้าจอ และการเรียกอำเภออย่างมีจริยธรรม ความสนใจที่ไม่นำไปสู่การแปลงคือเพียงสัญญาณรบกวน",
      "about.p2": "ฉันสร้างสรรค์เนื้อหาเป็น <strong>ภาษาอังกฤษและไทยที่ลื่นไหล</strong>; ดังนั้น brief หนึ่งฉบับสามารถเข้าถึงผู้ชมทั่วโลกและผู้พูดภาษาไทยโดยไม่สูญเสียโทน หรือความแตกต่าง จาก Bangkok ฉันทำงานกับทีมในเขตเวลาทุก ๆ ที่ — อย่างรวดเร็ว ระยะไกล และให้ brief ได้อย่างสะดวก",
      "about.li1": "<strong>ภาษาอังกฤษ &amp; ไทย</strong> — สคริปต์และการส่งมอบระดับเจ้าของภาษาในทั้งสองสิ่ง",
      "about.li2": "<strong>มุ่งเน้นประสิทธิภาพ</strong> — สร้างขึ้นจากตัวเบ็ด เวลาชมชอบ และการแปลง",
      "about.li3": "<strong>ชำนาญผลิตภัณฑ์</strong> — ฉันรู้ AI, SaaS และแอปจากภายใน",
      "about.li4": "<strong>เร็วขึ้น &amp; ระยะไกล</strong> — ศูนย์กลาง Bangkok แบรนด์ทั่วโลก",

      "svc.kicker": "บริการ",
      "svc.h": "ทุกสิ่งที่คุณต้องการเพื่อปรากฏตัวและแปลง",
      "svc.p": "เลือกวิดีโอเดียว หรือเครื่องยนต์เนื้อหาที่สมบูรณ์ ทั้งหมดสามารถผลิตเป็นภาษาอังกฤษ ไทย หรือทั้งสองอย่าง",
      "svc1.t": "วิดีโอ UGC", "svc1.d": "เนื้อหาแท้ที่สนทนากับกล้อง — รู้สึกเหมือนคำแนะนำจากเพื่อน ไม่ใช่โฆษณา",
      "svc2.t": "เนื้อหา TikTok", "svc2.d": "ปกติวิดีโอสั้นที่ออกแบบสำหรับหน้า For You — ตัวเบ็ดที่แข็งแกร่ง จังหวะแน่นตัน เวลาชมชอบสูง",
      "svc3.t": "เนื้อหาผลิตภัณฑ์ AI", "svc3.d": "อธิบายผลิตภัณฑ์ AI ที่ซับซ้อนอย่างชัดเจน แสดงค่าที่แท้จริงในเวลาไม่กี่วินาที ความชำนาญของฉัน",
      "svc4.t": "เนื้อหาผลิตภัณฑ์ SaaS", "svc4.d": "ทัวร์คุณสมบัติ เดโมกรณีการใช้งาน และเรื่องราวผู้ก่อตั้งที่เปลี่ยนการทดลองเป็นผู้ใช้ที่ต้องจ่าย",
      "svc5.t": "เนื้อหาการท่องเที่ยว", "svc5.d": "การเล่าเรื่องภาพยนตร์ในสถานที่ — สำหรับแบรนด์การท่องเที่ยวและไลฟ์สไตล์ จาก Bangkok และไกลออกไป",
      "svc6.t": "โฆษณาวิดีโอสั้น", "svc6.d": "สร้างสรรค์ที่พร้อมจ่ายแล้ว — สร้างขึ้นสำหรับตัวเบ็ด เวลาชมชอบ และการแปลงทั่วทั้ง TikTok, Reels และ Shorts",
      "svc7.t": "กลยุทธ์สร้างสรรค์", "svc7.d": "มุมตัวเบ็ด เสาเนื้อหา และแผนการโพสต์ — ดังนั้นวิดีโอทุกชุดมีการทำงาน ไม่ใช่แค่นับมิวจัดต์วิว",
      "svc8.t": "แพ็คเนื้อหา", "svc8.d": "สัญญาแบบรายเดือน — การไหลของเนื้อหาที่สม่ำเสมอสำหรับแบรนด์อังกฤษ &amp; ไทย วางแผนและส่งมอบให้คุณ",

      "why.quote": "ความสนใจนั้นราคาถูก ความสนใจที่เปลี่ยนเป็นลูกค้าคือทั้งงาน — และนั่นคือสิ่งที่ฉันได้รับการว่าจ้างให้ส่งมอบ",
      "why.cite": "Onur Hüseyin Koçak — Bangkok",
      "why1.q": "ฉันเข้าใจ <span>ผลิตภัณฑ์</span>, ไม่ใช่แค่กล้อง",
      "why1.p": "ฉันเขียนโปรแกรมเอง ดังนั้นฉันจึงสามารถใช้รายการฟีเจอร์ดิบและเปลี่ยนเป็นเรื่องราวที่ผู้ซื้อสนใจจริง ๆ",
      "why2.q": "สองภาษา <span>brief เดียว</span>",
      "why2.p": "ภาษาอังกฤษสำหรับตลาดโลก ไทยสำหรับผู้ชมที่เติบโตเร็วที่สุดแห่งหนึ่ง — ผลิตแบบเจ้าของภาษา ไม่ใช่แบบแปลคำต่อคำ",
      "why3.q": "ฉันเพิ่มประสิทธิภาพสำหรับ <span>การแปลง</span>",
      "why3.p": "ตัวเบ็ด จังหวะ และ CTA ออกแบบมาโดยตั้งใจ เป้าหมายจะไม่เป็นเพียงมิวจัดต์วิว — มันคือการลงทะเบียน การดาวน์โหลด และการขาย",

      "contact.kicker": "มาทำงานร่วมกันกัน",
      "contact.h": "มีผลิตภัณฑ์ที่คุ่มค่าในการพูดถึงหรือไม่?",
      "contact.sub": "บอกฉันว่าคุณกำลังสร้างและสิ่งที่สำเร็จหมายถึงอะไรกับคุณ ฉันจะยอมรับความซื่อสัตย์และแผน — โดยปกติภายใน 24 ชั่วโมง",
      "contact.response": "ยอมรับการร่วมมือใหม่ · ตอบกลับภายใน 24 ชั่วโมง",
      "form.name": "ชื่อ", "form.name.ph": "ชื่อของคุณ",
      "form.email": "อีเมล <span class=\”req\”>*</span>",
      "form.company": "บริษัท", "form.company.ph": "แบรนด์ / สตาร์ตอัป",
      "form.product": "ประเภทผลิตภัณฑ์ <span class=\”req\”>*</span>", "form.product.ph": "เลือก…",
      "form.opt.ai": "ผลิตภัณฑ์ AI", "form.opt.saas": "SaaS", "form.opt.app": "แอปโทรศัพท์มือถือ", "form.opt.startup": "สตาร์ตอัป", "form.opt.travel": "แบรนด์การท่องเที่ยว", "form.opt.other": "อื่น ๆ",
      "form.goal": "เป้าหมายคืออะไร?", "form.goal.ph": "เลือก…",
      "form.goal.aware": "การรับรู้ &amp; เข้าถึง", "form.goal.conv": "การแปลง &amp; ดาวน์โหลด", "form.goal.ads": "สร้างสรรค์โฆษณา", "form.goal.ongoing": "เนื้อหาที่กำลังดำเนิน",
      "form.msg": "บอกฉันเกี่ยวกับ", "form.msg.ph": "คุณกำลังสร้างอะไร และคุณต้องภาษาใด — อังกฤษ ไทย หรือทั้งสองอย่าง?",
      "form.send": "ส่งการสอบถาม <span class=\”arrow\”>→</span>",
      "form.sending": "กำลังส่ง…", "form.ok": "ขอบคุณ — ฉันได้รับแล้ว ฉันจะตอบกลับภายใน 24 ชั่วโมง", "form.err": "เพิ่มอีเมลและประเภทผลิตภัณฑ์ แล้วลองอีกครั้ง",

      "pkg.kicker": "แพ็กเกจ",
      "pkg.h": "เลือกจุดเริ่มต้น ปรับขนาดจากที่นั่น",
      "pkg.p": "ขอบเขตที่ชัดเจน ไม่มีการล็อก แพ็คเกจแต่ละแพ็คจะอ้างอิงถึง brief ของคุณ — บอกฉันว่าผลิตภัณฑ์ เป้าหมาย และจำนวนวิดีโอ ฉันจะตอบกลับด้วยใจเต็มไป",
      "pkg.quote": "บอกเขาขอบเขตของคุณ",
      "pkg1.t": "วิดีโอ UGC เริ่มต้น", "pkg1.d": "วิดีโอ UGC เดียว ตัวเบ็ดมุมเดียว แก้ไข + ดิบ เหมาะสำหรับการทดสอบครั้งแรก",
      "pkg2.t": "แพ็ค Growth UGC", "pkg2.d": "3 วิดีโอ ตัวเบ็ดหลาย ๆ อัน สร้างสำหรับการทดสอบออร์แกนิค + จ่าย",
      "pkg3.t": "แพ็คสร้างสรรค์โฆษณา", "pkg3.d": "สร้างสรรค์พร้อมใช้โฆษณา — พร้อมตัวเบ็ดต่าง ๆ สำหรับ TikTok, Reels &amp; Meta",
      "pkg4.t": "แพ็ค SaaS / App Launch", "pkg4.d": "5 วิดีโอ กลยุทธ์สคริปต์ เดโมและเนื้อหาผู้ก่อตั้ง รอบการเปิดตัว",
      "pkg5.t": "สัญญาสร้างสรรค์แบบรายเดือน", "pkg5.d": "การไหลของเนื้อหาที่สม่ำเสมอสำหรับแบรนด์อังกฤษ &amp; ไทย ตามแผนและส่งมอบรายเดือน",
      "pkg.cta.t": "บอกเขาขอบเขตของคุณ", "pkg.cta.d": "ส่งผลิตภัณฑ์ เป้าหมาย และจำนวนวิดีโอ — ฉันจะส่งอัตราป้องกันที่ชัดเจน",

      "faq.kicker": "คำถามที่พบบ่อย",
      "faq.h": "คำถามที่แบรนด์ถาม",
      "faq.p": "คำถามที่แท้จริงที่ผู้ก่อตั้งและสมาชิกการตลาดพิมพ์ลงใน Google — หรือถามไปที่ ChatGPT — เมื่อพวกเขากำลังมองหาสร้างสรรค์เนื้อหาเหมือนฉัน",
      "faq.q1": "คุณสร้างเนื้อหาให้กับแบรนด์ประเภทใด?",
      "faq.a1": "ผลิตภัณฑ์ AI, SaaS, แอปโทรศัพท์มือถือ, สตาร์ตอัปเทคโนโลยี ผลิตภัณฑ์ที่มีการผลิตและการท่องเที่ยวแบรนด์ ถ้าผลิตภัณฑ์ของคุณอยู่บนอินเทอร์เน็ตและต้องการความสนใจ มันเข้ากันได้",
      "faq.q2": "คุณสร้างเนื้อหา UGC ทั้งภาษาอังกฤษและไทยหรือไม่?",
      "faq.a2": "ใช่ — เจ้าของภาษาในทั้งสอง brief หนึ่งฉบับสามารถเป็นเวอร์ชันภาษาอังกฤษสำหรับผู้ชมทั่วโลกและเวอร์ชันภาษาไทยสำหรับตลาดท้องถิ่น โดยมีโทนที่เหมาะสมในแต่ละรุ่น ไม่ใช่การแปลคำต่อคำ",
      "faq.q3": "วิดีโอของคุณสามารถใช้เป็นโฆษณาจ่ายแล้วหรือไม่?",
      "faq.a3": "ใช่ ทุกสิ่งถูกสร้างสรรค์ด้วยตัวเบ็ดแรกสำหรับ TikTok, Reels และ Shorts และใช้งานได้เป็นเนื้อหาแบบออร์แกนิคหรือเป็นสร้างสรรค์โฆษณา สิทธิการใช้งาน whitelisting และไฟล์ดิบตกลงตั้งแต่แรก",
      "faq.q4": "คุณเข้าใจผลิตภัณฑ์ทางเทคนิคจริง ๆ หรือไม่?",
      "faq.a4": "ฉันเขียนโปรแกรมเอง ดังนั้นฉันจึงสามารถใช้รายการคุณสมบัติและเปลี่ยนเป็นเรื่องราวที่ผู้ซื้อสนใจจริง ๆ — โดยไม่ทำให้ผลิตภัณฑ์นั้นผิดพลาดหรือเกินจริง",
      "faq.q5": "คุณส่งมอบเร็วแค่ไหน?",
      "faq.a5": "อย่างรวดเร็วและระยะไกลจาก Bangkok แล้ว วิดีโอเดียวส่วนใหญ่มาในไม่กี่วันไม่ใช่สัปดาห์; แบตช์ขนาดใหญ่ตามแผนรอบวันที่เปิดตัว",
      "faq.q6": "ราคากำหนดอย่างไร?",
      "faq.a6": "ขอบเขต — จากวิดีโอทดสอบเดียวไปถึงแพ็คเนื้อหารายเดือน บอกฉันถึงผลิตภัณฑ์ เป้าหมาย และจำนวนวิดีโอที่คุณต้องการ ฉันจะส่งใจเต็มไป",
      "faq.q7": "คุณช่วยเหลือด้วยแอปหรือการเปิดตัวผลิตภัณฑ์ได้หรือไม่?",
      "faq.a7": "ใช่ — เนื้อหาการเปิดตัวคือกรณีการใช้งานหลัก: อธิบายอ่าน เดโมผลิตภัณฑ์ วิดีโอผู้ก่อตั้ง และสร้างสรรค์โฆษณา วางแผนรอบการปล่อยของคุณ",
      "faq.q8": "คุณทำงานกับแบรนด์ระหว่างประเทศหรือไม่?",
      "faq.a8": "ใช่ ฉันศูนย์กลาง Bangkok และทำงานกับผู้ก่อตั้งและทีมทั่วโลก — อะซิงค์ และหลายเขตเวลา ภาษาอังกฤษหรือไทย",
      "faq.q9": "คุณเคลื่อนไปสู่ไลฟ์สไตล์หรือเนื้อหาการท่องเที่ยวด้วยหรือไม่?",
      "faq.a9": "ผ่านเครือข่ายสร้างสรรค์ของฉัน: ไลฟ์สไตล์ &amp; ความงาม <a href=\”https://ugc-mine.vibecodingturkey.com\” target=\”_blank\” rel=\”noopener\”>Mine Koçak</a>, การท่องเที่ยว &amp; ความอำนวยความสะดวก <a href=\”https://moviatravelhub.vibecodingturkey.com\” target=\”_blank\” rel=\”noopener\”>Movia Travel Hub</a> สตูดิโอเดียว ผู้ชมสามคน",

      "net.kicker": "เครือข่ายสร้างสรรค์",
      "net.h": "สตูดิโอเดียว ผู้ชมสามคน",
      "net.p": "นอกเหนือจากไอพอร์ต และเทคโนโลยี ครอบครัวของเราครอบคลุมไลฟ์สไตล์และการท่องเที่ยว — เพื่อให้แบรนด์สามารถเข้าถึงผู้ชมที่เหมาะสมด้วยใบหน้าที่เหมาะสม ทั้งหมดจาก Bangkok",
      "net.mine.tag": "ไลฟ์สไตล์ &amp; ความงาม", "net.mine.t": "Mine Koçak",
      "net.mine.d": "ไลฟ์สไตล์ &amp; ความงาม UGC — เนื้อหาแท้สำหรับแบรนด์ความงาม wellness และไลฟ์สไตล์",
      "net.mine.cta": "ไปที่ไซต์ <span class=\”arrow\”>→</span>",
      "net.movia.tag": "การท่องเที่ยว &amp; ความอำนวยความสะดวก", "net.movia.t": "Movia Travel Hub",
      "net.movia.d": "เนื้อหาการท่องเที่ยว &amp; ความอำนวยความสะดวกจาก Bangkok — คาเฟ่ โรงแรม ร้านอาหาร และสถานที่ นำเสนอบนกล้อง",
      "net.movia.cta": "ไปที่ไซต์ <span class=\”arrow\”>→</span>",

      "footer.tag": "สร้างสรรค์เนื้อหา AI &amp; UGC จาก Bangkok ของเนื้อหาวิดีโอสั้นที่มุ่งประสิทธิภาพสำหรับแบรนด์อินเทอร์เน็ตสมัยใหม่เป็นภาษาอังกฤษและไทย",
      "footer.explore": "สำรวจ", "footer.connect": "เชื่อมต่อ", "footer.network": "เครือข่าย", "footer.made": "Bangkok, ประเทศไทย · ทำงานทั่วโลก"
    }
  };

  /* ---------------- language apply ---------------- */
  var LS_KEY = "ugc_lang";
  function getStored() { try { return localStorage.getItem(LS_KEY); } catch (e) { return null; } }
  function setStored(l) { try { localStorage.setItem(LS_KEY, l); } catch (e) {} }

  function applyLang(lang) {
    if (lang !== "tr" && lang !== "th") lang = "en";
    var dict = I18N[lang];
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (dict[k] != null) el.textContent = dict[k];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-html");
      if (dict[k] != null) el.innerHTML = dict[k];
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-ph");
      if (dict[k] != null) el.setAttribute("placeholder", dict[k]);
    });
    // buttons that carry markup via data-i18n (arrow/req spans)
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (dict[k] != null && /<|&amp;/.test(dict[k])) el.innerHTML = dict[k];
    });

    document.querySelectorAll(".lang-toggle button").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-lang") === lang);
    });
    window.__lang = lang;
  }

  // 1) instant paint from stored choice or browser language guess
  var stored = getStored();
  var initial = stored || ((navigator.language || "en").toLowerCase().indexOf("tr") === 0 ? "tr" : (navigator.language || "en").toLowerCase().indexOf("th") === 0 ? "th" : "en");
  applyLang(initial);

  // 2) if user has NOT chosen manually, refine by location: Thailand -> th, Turkey -> tr, else -> en
  if (!stored) {
    fetch("https://get.geojs.io/v1/ip/country.json")
      .then(function (r) { return r.json(); })
      .then(function (j) {
        if (getStored()) return; // user chose meanwhile
        var cc = (j && (j.country || j.country_code) || "").toUpperCase();
        if (cc === "TH") applyLang("th");
        else if (cc === "TR") applyLang("tr");
        else applyLang("en");
      })
      .catch(function () { if (!getStored()) applyLang("en"); });
  }

  // manual toggle
  document.querySelectorAll(".lang-toggle button").forEach(function (b) {
    b.addEventListener("click", function () {
      var l = b.getAttribute("data-lang");
      setStored(l); applyLang(l);
      if (window.gtag) gtag("event", "lang_switch", { lang: l });
    });
  });

  /* ---------------- nav scroll + mobile menu ---------------- */
  var nav = document.getElementById("nav");
  function onScroll() { nav.classList.toggle("scrolled", window.scrollY > 12); }
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });

  var burger = document.getElementById("burger");
  var menu = document.getElementById("mobileMenu");
  function closeMenu() { burger.classList.remove("open"); menu.classList.remove("open"); document.body.classList.remove("no-scroll"); }
  burger.addEventListener("click", function () {
    var open = burger.classList.toggle("open");
    menu.classList.toggle("open", open);
    document.body.classList.toggle("no-scroll", open);
  });
  menu.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeMenu); });

  /* ---------------- reveal on scroll ---------------- */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  } else if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------------- marquee: duplicate track for seamless loop ---------------- */
  var mq = document.getElementById("marquee");
  if (mq) { mq.innerHTML += mq.innerHTML; }

  /* ---------------- video: load + play on click ---------------- */
  var playing = null;
  document.querySelectorAll(".vframe[data-src]").forEach(function (frame) {
    frame.addEventListener("click", function (ev) {
      // ignore clicks on links inside (CTA card uses anchor, no data-src)
      var src = frame.getAttribute("data-src");
      if (!src) return;
      ev.preventDefault();
      var existing = frame.querySelector("video");
      if (existing) {
        if (existing.paused) { existing.play(); frame.classList.add("playing"); }
        else { existing.pause(); frame.classList.remove("playing"); }
        return;
      }
      // stop any other
      if (playing && playing !== frame) {
        var pv = playing.querySelector("video");
        if (pv) pv.pause();
        playing.classList.remove("playing");
      }
      var v = document.createElement("video");
      v.src = src; v.controls = true; v.playsInline = true; v.preload = "metadata";
      var poster = frame.querySelector(".poster");
      if (poster) v.setAttribute("poster", poster.getAttribute("src"));
      frame.appendChild(v);
      frame.classList.add("playing");
      v.play().catch(function () {});
      playing = frame;
      if (window.gtag) gtag("event", "video_play", { src: src });
    });
  });

  /* ---------------- lead form -> Supabase edge fn (feeds /manager + email) ---------------- */
  var LEAD_ENDPOINT = "https://bajrnvusqzllvsvipitr.supabase.co/functions/v1/ugc-lead";
  var LEAD_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhanJudnVzcXpsbHZzdmlwaXRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4MzMwNDQsImV4cCI6MjA4OTQwOTA0NH0.ao8f5YlNpbDnVdty5O6QwJaTSQS5cV8VEx2OE8gRa1k";

  // entry attribution (referrer + utm) — same shape the manager dashboard expects
  var ENTRY = (function () {
    var p = new URLSearchParams(location.search);
    var utm = {};
    ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach(function (k) {
      var v = p.get(k); if (v) utm[k] = v;
    });
    var ref = document.referrer || "";
    var channel = "direct";
    if (Object.keys(utm).length) channel = utm.utm_source || "utm";
    else if (ref) {
      if (/tiktok/i.test(ref)) channel = "tiktok";
      else if (/instagram/i.test(ref)) channel = "instagram";
      else if (/linkedin|lnkd/i.test(ref)) channel = "linkedin";
      else if (/google/i.test(ref)) channel = "google";
      else channel = "referral";
    }
    return { channel: channel, entry_referrer: ref, utm: utm };
  })();

  function trS(key) { var l = window.__lang || "en"; return (I18N[l] && I18N[l][key]) || I18N.en[key] || key; }

  var leadForm = document.getElementById("leadForm");
  if (leadForm) {
    leadForm.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var status = document.getElementById("formStatus");
      var btn = leadForm.querySelector("button[type=submit]");
      var fd = new FormData(leadForm);
      if (fd.get("website")) { status.textContent = trS("form.ok"); status.className = "form-status ok"; leadForm.reset(); return; }
      var email = (fd.get("email") || "").trim();
      var product = (fd.get("product") || "").trim();
      if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || !product) {
        status.textContent = trS("form.err"); status.className = "form-status err"; return;
      }
      btn.disabled = true; status.textContent = trS("form.sending"); status.className = "form-status";
      fetch(LEAD_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", apikey: LEAD_ANON, Authorization: "Bearer " + LEAD_ANON },
        body: JSON.stringify({
          action: "submit", kind: "booking", lang: window.__lang || "en",
          name: fd.get("name") || "", email: email, company: fd.get("company") || "",
          product: product, goal: fd.get("goal") || "", message: fd.get("message") || "",
          channel: ENTRY.channel, entry_referrer: ENTRY.entry_referrer, utm: ENTRY.utm
        })
      }).then(function (r) {
        return r.json().catch(function () { return {}; }).then(function (j) { return { ok: r.ok, j: j }; });
      }).then(function (res) {
        if (res.ok && res.j && res.j.ok) {
          status.textContent = trS("form.ok"); status.className = "form-status ok"; leadForm.reset();
          if (window.gtag) gtag("event", "generate_lead", { method: "ugc_form" });
        } else { status.textContent = trS("form.err"); status.className = "form-status err"; }
      }).catch(function () {
        status.textContent = trS("form.err"); status.className = "form-status err";
      }).then(function () { btn.disabled = false; });
    });
  }

  /* ---------------- year ---------------- */
  var y = document.getElementById("year"); if (y) y.textContent = String(new Date().getFullYear());
})();
