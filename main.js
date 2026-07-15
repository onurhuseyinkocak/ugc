/* =========================================================================
   Onur Hüseyin Koçak - portfolio behaviour
   i18n (EN/TR) · geo default (outside Turkey -> EN) · reveal · video · lead form
   ========================================================================= */
(function () {
  "use strict";

  /* ---------------- i18n dictionary ---------------- */
  var I18N = {
    en: {
      "nav.work": "Work", "nav.tiktok": "TikTok", "nav.cases": "Case studies",
      "nav.about": "About", "nav.services": "Services", "nav.cta": "Send a brief",

      "hero.kicker": "Tech-first UGC creator in Bangkok",
      "hero.h": "Make your product<br><em>easy to choose.</em>",
      "hero.sub": "Tech-first UGC plus recurring Canvas UGC for products, apps, places and services, backed by our Bangkok creator network.",
      "hero.cta1": "Send a brief <span class=\"arrow\">→</span>",
      "hero.cta2": "Watch creator intro",
      "hero.chip1": "English &amp; Turkish content",
      "hero.chip2": "Bangkok, Thailand",
      "hero.chip3": "Brands worldwide",
      "hero.badge": "creator introduction",
      "hero.sound": "Play with sound",

      "stat.views": "Recorded views across five reels · 26 Jun snapshot",
      "stat.comments": "Comments on one live Instagram reel · 15 Jul",
      "stat.viral": "Instagram followers · live count on 15 Jul",
      "stat.lang": "Paid spend behind these owned-channel samples",
      "stat.note": "Owned-channel proof with dates shown. Organic platform results, not client campaign ROAS.",

      "work.kicker": "Creator samples",
      "work.h": "See the hook, pacing and delivery.",
      "work.disclosure": "Self-directed videos from my creator channel. Tap any sample to watch it with sound.",
      "work.langpill": "Current samples: Turkish",
      "work.viral": "Owned channel",
      "work.tag.ai": "AI / GEO", "work.tag.tech": "AI / Tools", "work.tag.apps": "Apps / No-code", "work.tag.story": "Tech / Story",
      "work.v4.t": "What GEO means for your product", "work.v4.d": "24.3K recorded views, 3,026 live comments",
      "work.v6.t": "Not an SEO story, it is GEO", "work.v6.d": "A technical concept made concrete",
      "work.v2.t": "Answer Engine Optimization, explained", "work.v2.d": "28,170 organic views",
      "work.v3.t": "The viral AI video trend, for free", "work.v3.d": "Turning a trend into a how-to people save",
      "work.v5.t": "Anyone can build an app now", "work.v5.d": "A product story told in under a minute",
      "work.v1.t": "The 16-year-old who built an AI company", "work.v1.d": "Narrative hooks that hold attention",
      "work.cta.t": "Your product, in motion.", "work.cta.d": "English or Turkish - let's plan your first batch.", "work.cta.b": "Start a project →",

      "tt.kicker": "On TikTok",
      "tt.h": "Built for the <em>For You</em> page.",
      "tt.p": "TikTok rewards a strong hook, a clear story and a reason to stay. That's exactly how I build - content engineered for watch-time, not just views. New AI, tech and travel videos drop regularly.",
      "tt.follow": "Follow on TikTok <span class=\"arrow\">→</span>", "tt.collab": "Collaborate",

      "cases.kicker": "One content breakdown",
      "cases.h": "How an abstract topic earned 3,026 comments.",
      "cases.p": "This is an owned-channel example, included to show the creative thinking behind the result.",
      "case.problem": "Problem", "case.strategy": "Strategy", "case.outcome": "Outcome",
      "case.views": "Views", "case.comments": "Comments", "case.likes": "Likes", "case.spend": "Ad spend",
      "case1.h": "Make the unfamiliar feel immediately relevant.",
      "case1.problem": "“Generative Engine Optimization” is abstract and easy to scroll past. Most explanations sound like a lecture.",
      "case1.strategy": "Open with a sharp contrast hook (SEO vs. GEO), then make it personal: where does your product show up when people ask ChatGPT?",
      "case1.outcome": "The reel recorded 24.3K views and reached 3,026 live comments on 15 July.",
      "case2.h": "28K views on a topic most people haven't heard of.",
      "case2.problem": "Answer Engine Optimization is a niche, jargon-heavy subject with near-zero search demand yet.",
      "case2.strategy": "Lead with the behaviour shift people already feel - “you ask ChatGPT instead of Google now” - then land the term on top of it.",
      "case2.outcome": "Pure curiosity-driven reach: 28,170 views with no ad spend, proving demand for the topic before competitors caught on.",

      "about.kicker": "About", "about.role": "UGC creator for technical products",
      "about.h": "You will not need to teach me what your product does.",
      "about.big": "I build software and explain AI products for a living. I can turn a feature list into a useful story without flattening the product or overpromising.",
      "about.p1": "Most UGC stops at “nice clip.” I start from the business question - who's the buyer, what's the objection, what makes them stop scrolling - and design the content backwards from there. Hooks, pacing, on-screen copy and calls to action are all deliberate, because attention without conversion is just noise.",
      "about.p2": "I create in <strong>fluent English and Turkish</strong>, so a single brief can reach a global audience and a Turkish-speaking one without losing tone or nuance. From Bangkok I work with founders and teams across every time zone - async, fast, and easy to brief.",
      "about.li1": "<strong>English &amp; Turkish</strong> - native-level scripts and delivery in both.",
      "about.li2": "<strong>Performance-minded</strong> - built around hooks, retention and conversion.",
      "about.li3": "<strong>Product-fluent</strong> - I understand AI, SaaS and apps from the inside.",
      "about.li4": "<strong>Fast &amp; remote</strong> - Bangkok-based, working with brands worldwide.",

      "svc.kicker": "What I deliver",
      "svc.h": "A complete video, not just footage.",
      "svc.p": "Every engagement is scoped around the platform, audience, usage and result you need.",
      "svc1.t": "Angles and hooks", "svc1.d": "Audience, objection and platform translated into a clear creative direction before filming.",
      "svc2.t": "Script and shot plan", "svc2.d": "A concise script, screen recordings, B-roll plan and call to action built around one job.",
      "svc3.t": "On-camera delivery", "svc3.d": "Natural creator delivery in English or Turkish, filmed vertically for the target platform.",
      "svc4.t": "Edit and handoff", "svc4.d": "Captions, pacing, platform-ready exports and agreed raw files or hook variations.",
      "svc5.t": "Travel Content", "svc5.d": "Cinematic, on-location storytelling from Bangkok and beyond for travel and lifestyle brands.",
      "svc6.t": "Short-Form Ads", "svc6.d": "Paid-ready creatives built for hooks, retention and conversion across TikTok, Reels and Shorts.",
      "svc7.t": "Creative Strategy", "svc7.d": "Hook angles, content pillars and a posting plan - so every video has a job, not just a view count.",
      "svc8.t": "Content Packages", "svc8.d": "Monthly retainers - a steady drip of on-brand content in EN &amp; TR, planned and shipped for you.",
      "svc9.t": "Canvas UGC Programs", "svc9.d": "Recurring short-form for a brand-owned or dedicated ambassador account: concepts, scripts, filming, edits and optional posting in any category.",

      "why.quote": "Attention is cheap. Attention that turns into customers is the whole job - and that's what I'm hired to deliver.",
      "why.cite": "Onur Hüseyin Koçak - Bangkok",
      "why1.q": "I understand the <span>product</span>, not just the camera.",
      "why1.p": "I build software myself, so I can take a raw feature list and turn it into a story a buyer actually cares about.",
      "why2.q": "Two languages, <span>one brief</span>.",
      "why2.p": "English for the global market, Turkish for one of the fastest-growing creator audiences - produced natively, never translated word-for-word.",
      "why3.q": "I optimise for <span>conversion</span>.",
      "why3.p": "Hooks, pacing and CTAs are designed on purpose. The goal is never just views - it's sign-ups, installs and sales.",

      "contact.kicker": "Send the brief",
      "contact.h": "Send the product. Get a clear creative plan.",
      "contact.sub": "Include the link, goal, language, deadline and usage. I reply with scope, timeline and quote within 24 hours.",
      "contact.response": "Replies within 24 hours on business days.",
      "form.name": "Name", "form.name.ph": "Your name",
      "form.email": "Email <span class=\"req\">*</span>",
      "form.company": "Product URL <span class=\"req\">*</span>", "form.company.ph": "https://yourproduct.com",
      "form.product": "Product type <span class=\"req\">*</span>", "form.product.ph": "Select…",
      "form.opt.ai": "AI product", "form.opt.saas": "SaaS", "form.opt.app": "Mobile app", "form.opt.startup": "Startup", "form.opt.travel": "Travel / hospitality", "form.opt.beauty": "Beauty / lifestyle", "form.opt.food": "Food / beverage", "form.opt.consumer": "Consumer product / service", "form.opt.other": "Other",
      "form.goal": "What's the goal?", "form.goal.ph": "Select…",
      "form.goal.aware": "Awareness &amp; reach", "form.goal.conv": "Conversions &amp; installs", "form.goal.ads": "Paid ad creatives", "form.goal.ongoing": "Ongoing content", "form.goal.canvas": "Canvas UGC / brand account",
      "form.budget": "Budget range", "form.budget.ph": "Select a range", "form.budget.1": "Under €500", "form.budget.2": "€500-€1,500", "form.budget.3": "€1,500-€3,000", "form.budget.4": "€3,000+",
      "form.msg": "Brief", "form.msg.ph": "Deliverables, deadline, target audience, language and usage rights.",
      "form.send": "Send a brief <span class=\"arrow\">→</span>",
      "form.sending": "Sending…", "form.ok": "Thanks - got it. I'll reply within 24 hours.", "form.err": "Add a valid email, product URL and product type, then try again.",
      "form.fallback": "Automatic delivery is temporarily unavailable. Your completed brief is ready as an email draft:", "form.fallback.cta": "Open email",

      "pkg.kicker": "Ways to start",
      "pkg.h": "Start with a paid pilot. Scale what works.",
      "pkg.p": "Pricing depends on deliverables, revisions, raw files and usage rights. Send the product link for a clear quote.",
      "pkg.quote": "Custom quote",
      "pkg1.t": "One-video pilot", "pkg1.d": "One concept, one hook, one edited vertical video. The cleanest way to test fit.",
      "pkg2.t": "Three-video test", "pkg2.d": "Three distinct angles for organic or paid testing, with one shared creative strategy.",
      "pkg3.t": "Product launch batch", "pkg3.d": "Five videos across explainer, demo, objection and founder-led angles.",
      "pkg4.t": "SaaS / App Launch Pack", "pkg4.d": "5 videos, script strategy, demos + founder content around your launch.",
      "pkg5.t": "Canvas UGC Retainer", "pkg5.d": "Recurring concepts, scripts, videos and optional posting for a brand-owned or dedicated ambassador account.",
      "pkg.cta.t": "Tell me your scope", "pkg.cta.d": "Send your product, goal and number of videos - I'll reply with a clear quote.",

      "faq.kicker": "FAQ",
      "faq.h": "Questions brands ask.",
      "faq.p": "The real questions founders and marketers type into Google - or ask ChatGPT - when they're looking for a creator like me.",
      "faq.q1": "What kind of brands do you make content for?",
      "faq.a1": "Every category is welcome: apps, SaaS, beauty, fashion, food, travel, hospitality, wellness, education, services and everyday consumer products. Tech is Onur's lead strength; the creator network matches the brief to the right face and setting.",
      "faq.q2": "Do you create UGC in both English and Turkish?",
      "faq.a2": "Yes. I create in English and Turkish. The public samples here are Turkish, so ask for a short English test read with your brief.",
      "faq.q3": "Can the videos be used as paid ads?",
      "faq.a3": "Yes. Everything is built hook-first for TikTok, Reels and Shorts and works as organic content or paid creative. Usage rights, whitelisting and raw files are agreed up front.",
      "faq.q4": "Do you actually understand technical products?",
      "faq.a4": "I build software myself, so I can read a feature list and turn it into a story a buyer cares about - without getting the product wrong or over-promising.",
      "faq.q5": "How fast can you deliver?",
      "faq.a5": "Fast and fully remote from Bangkok. Most single videos land in days, not weeks; larger batches are scheduled around your launch date.",
      "faq.q6": "How does pricing work?",
      "faq.a6": "Scope-based - from a single test video to a monthly content package. Tell me the product, the goal and how many videos you need, and I'll send a clear quote.",
      "faq.q7": "Can you help with an app or product launch?",
      "faq.a7": "Yes - launch content is a core use case: explainer reels, product demos, founder videos and ad creatives, planned around your release.",
      "faq.q8": "Do you work with international brands?",
      "faq.a8": "Yes. I'm based in Bangkok and work with founders and teams worldwide - async and across time zones, in English or Turkish.",
      "faq.q9": "Do you cover lifestyle or travel content too?",
      "faq.a9": "Through my creator network: <a href=\"https://ugc-mine.vibecodingturkey.com\" target=\"_blank\" rel=\"noopener\">Mine Koçak</a> for lifestyle &amp; beauty, and <a href=\"https://moviatravelhub.vibecodingturkey.com\" target=\"_blank\" rel=\"noopener\">Movia Travel Hub</a> for travel &amp; hospitality. One studio, three audiences.",
      "faq.q10": "Do you offer Canvas UGC and ongoing brand-account content?",
      "faq.a10": "Yes. We can plan, script, film and edit recurring short-form for a brand-owned or dedicated ambassador account, with optional posting and a repeatable testing calendar. The model is available across every brand category.",

      "net.kicker": "Creator network",
      "net.h": "One studio, three audiences.",
      "net.p": "All three creators can serve broad brand categories. We route each brief by its strongest fit: Onur for tech, Mine for lifestyle and Movia for couple travel and places.",
      "net.mine.tag": "Beauty · Lifestyle · Travel", "net.mine.t": "Mine Koçak",
      "net.mine.d": "Beauty, lifestyle, travel and everyday app UGC with a warm, natural female creator perspective.",
      "net.mine.cta": "Visit the site <span class=\"arrow\">→</span>",
      "net.movia.tag": "Couple Travel · Places", "net.movia.t": "Movia Travel Hub",
      "net.movia.d": "Couple travel and venue content for hotels, cafés, restaurants, destinations and travel apps.",
      "net.movia.cta": "Visit the site <span class=\"arrow\">→</span>",

      "footer.tag": "Tech-first UGC by Onur, backed by a Bangkok creator network for lifestyle, travel and hospitality.",
      "footer.explore": "Explore", "footer.connect": "Connect", "footer.network": "Network", "footer.made": "English and Turkish content for brands worldwide."
    },

    tr: {
      "nav.work": "İşler", "nav.tiktok": "TikTok", "nav.cases": "Vaka analizleri",
      "nav.about": "Hakkımda", "nav.services": "Hizmetler", "nav.cta": "Brief gönder",

      "hero.kicker": "Bangkok'ta tech-first UGC üreticisi",
      "hero.h": "Ürününü<br><em>seçmesi kolay hâle getir.</em>",
      "hero.sub": "Tech-first UGC'nin yanında ürün, uygulama, mekân ve hizmetler için düzenli Canvas UGC; Bangkok üretici ağımızla tek brief'ten.",
      "hero.cta1": "Brief gönder <span class=\"arrow\">→</span>",
      "hero.cta2": "Üretici tanıtımını izle",
      "hero.chip1": "İngilizce &amp; Türkçe içerik",
      "hero.chip2": "Bangkok, Tayland",
      "hero.chip3": "Dünya geneli markalar",
      "hero.badge": "üretici tanıtımı",
      "hero.sound": "Sesi aç",

      "stat.views": "Beş Reels videosunda kayıtlı izlenme · 26 Haziran görüntüsü",
      "stat.comments": "Tek bir canlı Instagram Reels yorum sayısı · 15 Temmuz",
      "stat.viral": "Instagram takipçisi · 15 Temmuz canlı sayım",
      "stat.lang": "Bu kişisel kanal örneklerinin reklam harcaması",
      "stat.note": "Tarihleri belirtilmiş kişisel kanal kanıtı. Organik platform sonuçlarıdır; müşteri ROAS verisi değildir.",

      "work.kicker": "İçerik örnekleri",
      "work.h": "Kancayı, ritmi ve sunumu gör.",
      "work.disclosure": "Kendi içerik kanalım için ürettiğim videolar. Sesli izlemek için bir örneğe dokun.",
      "work.langpill": "Mevcut örnekler: Türkçe",
      "work.viral": "Kişisel kanal",
      "work.tag.ai": "AI / GEO", "work.tag.tech": "AI / Araçlar", "work.tag.apps": "Uygulama / No-code", "work.tag.story": "Tech / Hikâye",
      "work.v4.t": "GEO senin ürünün için ne anlama geliyor", "work.v4.d": "24,3 bin kayıtlı izlenme, 3.026 canlı yorum",
      "work.v6.t": "Aslında bir SEO hikâyesi değil", "work.v6.d": "Teknik bir kavramı somutlaştırmak",
      "work.v2.t": "Answer Engine Optimization, sade anlatımla", "work.v2.d": "28.170 organik izlenme",
      "work.v3.t": "Viral AI video trendi, ücretsiz", "work.v3.d": "Bir trendi, insanların kaydettiği bir rehbere çevirmek",
      "work.v5.t": "Artık herkes uygulama yapabilir", "work.v5.d": "Bir dakikadan kısa bir ürün hikâyesi",
      "work.v1.t": "16 yaşında AI şirketi kuran çocuk", "work.v1.d": "Dikkati tutan anlatı kancaları",
      "work.cta.t": "Ürünün, hareket halinde.", "work.cta.d": "İngilizce ya da Türkçe - ilk seti birlikte planlayalım.", "work.cta.b": "Projeye başla →",

      "tt.kicker": "TikTok'ta",
      "tt.h": "<em>Keşfet</em> sayfası için tasarlandı.",
      "tt.p": "TikTok; güçlü bir kanca, net bir hikâye ve kalmak için bir sebep ister. Ben de tam olarak böyle üretiyorum - sadece izlenme değil, izlenme süresi için kurgulanmış içerik. Düzenli olarak yeni AI, teknoloji ve seyahat videoları geliyor.",
      "tt.follow": "TikTok'ta takip et <span class=\"arrow\">→</span>", "tt.collab": "İş birliği yap",

      "cases.kicker": "Bir içerik analizi",
      "cases.h": "Soyut bir konu nasıl 3.026 yorum aldı?",
      "cases.p": "Bu kişisel kanal örneği, sonucun arkasındaki yaratıcı düşünceyi göstermek için paylaşılıyor.",
      "case.problem": "Problem", "case.strategy": "Strateji", "case.outcome": "Sonuç",
      "case.views": "İzlenme", "case.comments": "Yorum", "case.likes": "Beğeni", "case.spend": "Reklam harcaması",
      "case1.h": "Yabancı bir kavramı hemen alakalı hissettirmek.",
      "case1.problem": "”Generative Engine Optimization” soyut ve kolayca atlanan bir konu. Çoğu anlatım ders gibi geliyor.",
      "case1.strategy": "Keskin bir karşıtlık kancasıyla aç (SEO vs. GEO), sonra kişiselleştir: insanlar ChatGPT'ye sorduğunda senin ürünün nerede çıkıyor?",
      "case1.outcome": "Reels 24,3 bin kayıtlı izlenmeye ve 15 Temmuz'da 3.026 canlı yoruma ulaştı.",
      "case2.h": "Çoğu kişinin duymadığı bir konuda 28B izlenme.",
      "case2.problem": "Answer Engine Optimization, henüz neredeyse hiç arama hacmi olmayan, jargon yüklü niş bir konu.",
      "case2.strategy": "İnsanların zaten hissettiği davranış değişimiyle başla - “artık Google yerine ChatGPT'ye soruyorsun” - terimi de bunun üzerine otur.",
      "case2.outcome": "Tamamen meraktan gelen erişim: sıfır reklam harcamasıyla 28.170 izlenme. Rakipler fark etmeden konuya talep olduğunu kanıtladı.",

      "about.kicker": "Hakkımda", "about.role": "Teknik ürünler için UGC üreticisi",
      "about.h": "Ürününün ne yaptığını bana öğretmek zorunda kalmayacaksın.",
      "about.big": "Yazılım geliştiriyor ve AI ürünlerini anlatıyorum. Bir özellik listesini, ürünü basitleştirmeden veya abartmadan işe yarayan bir hikâyeye çevirebilirim.",
      "about.p1": "Çoğu UGC “güzel klip” seviyesinde kalır. Ben iş sorusundan başlarım - alıcı kim, itirazı ne, onu durduran şey ne - ve içeriği oradan geriye doğru kurgularım. Kanca, ritim, ekran yazıları ve harekete geçirici mesajlar bilinçli seçimlerdir; çünkü dönüşüm getirmeyen ilgi sadece gürültüdür.",
      "about.p2": "<strong>Akıcı İngilizce ve Türkçe</strong> içerik üretiyorum; böylece tek bir brief, tonu ve nüansı kaybetmeden hem global hem Türkçe konuşan kitleye ulaşır. Bangkok'tan, her saat diliminden ekiplerle çalışıyorum - hızlı, uzaktan ve brief vermesi kolay.",
      "about.li1": "<strong>İngilizce &amp; Türkçe</strong> - her ikisinde de ana dil seviyesinde senaryo ve sunum.",
      "about.li2": "<strong>Performans odaklı</strong> - kanca, izlenme süresi ve dönüşüm üzerine kurulu.",
      "about.li3": "<strong>Ürüne hâkim</strong> - AI, SaaS ve uygulamaları içeriden biliyorum.",
      "about.li4": "<strong>Hızlı &amp; uzaktan</strong> - Bangkok merkezli, dünya geneli markalarla.",

      "svc.kicker": "Teslimatlar",
      "svc.h": "Sadece görüntü değil, tamamlanmış bir video.",
      "svc.p": "Her iş; platform, kitle, kullanım hakkı ve hedeflenen sonuca göre kapsamlandırılır.",
      "svc1.t": "Açı ve kancalar", "svc1.d": "Kitle, itiraz ve platform çekimden önce net bir yaratıcı yöne dönüştürülür.",
      "svc2.t": "Senaryo ve çekim planı", "svc2.d": "Tek bir hedefe göre kısa senaryo, ekran kaydı, B-roll planı ve harekete geçirici mesaj.",
      "svc3.t": "Kamera önü sunum", "svc3.d": "Hedef platform için dikey çekilmiş, İngilizce veya Türkçe doğal üretici sunumu.",
      "svc4.t": "Kurgu ve teslim", "svc4.d": "Altyazı, ritim, platforma hazır çıktılar ve anlaşılan ham dosya veya kanca varyasyonları.",
      "svc5.t": "Seyahat İçeriği", "svc5.d": "Seyahat ve yaşam tarzı markaları için Bangkok'tan ve ötesinden sinematik, mekânında anlatım.",
      "svc6.t": "Kısa Reklam Videoları", "svc6.d": "TikTok, Reels ve Shorts için kanca, izlenme süresi ve dönüşüme göre kurgulanmış reklama hazır içerik.",
      "svc7.t": "Yaratıcı Strateji", "svc7.d": "Kanca açıları, içerik sütunları ve paylaşım planı - böylece her video bir iş yapar, sadece izlenme toplamaz.",
      "svc8.t": "İçerik Paketleri", "svc8.d": "Aylık anlaşmalar - EN &amp; TR markana uygun içeriğin düzenli akışı, senin için planlanır ve teslim edilir.",
      "svc9.t": "Canvas UGC Programları", "svc9.d": "Marka hesabı veya özel ambassador hesabı için düzenli kısa videolar: konsept, senaryo, çekim, kurgu ve isteğe bağlı yayınlama. Her kategoriye açık.",

      "why.quote": "İlgi ucuzdur. Müşteriye dönüşen ilgi ise işin ta kendisidir - ve ben tam da bunu teslim etmek için işe alınırım.",
      "why.cite": "Onur Hüseyin Koçak - Bangkok",
      "why1.q": "Sadece kamerayı değil, <span>ürünü</span> de anlıyorum.",
      "why1.p": "Yazılımı kendim yazıyorum; bu yüzden ham bir özellik listesini, alıcının gerçekten önemsediği bir hikâyeye çevirebiliyorum.",
      "why2.q": "İki dil, <span>tek brief</span>.",
      "why2.p": "Global pazar için İngilizce, en hızlı büyüyen içerik kitlelerinden biri için Türkçe - kelime kelime çeviri değil, baştan o dilde üretilmiş içerik.",
      "why3.q": "<span>Dönüşüm</span> için optimize ediyorum.",
      "why3.p": "Kanca, ritim ve CTA'lar bilinçli tasarlanır. Hedef hiçbir zaman sadece izlenme değil - kayıt, indirme ve satıştır.",

      "contact.kicker": "Brief gönder",
      "contact.h": "Ürünü gönder. Net bir yaratıcı plan al.",
      "contact.sub": "Linki, hedefi, dili, teslim tarihini ve kullanım şeklini ekle. Kapsam, takvim ve teklifle 24 saat içinde dönerim.",
      "contact.response": "İş günlerinde 24 saat içinde dönüş.",
      "form.name": "İsim", "form.name.ph": "Adın",
      "form.email": "E-posta <span class=\"req\">*</span>",
      "form.company": "Ürün linki <span class=\"req\">*</span>", "form.company.ph": "https://urunlinki.com",
      "form.product": "Ürün tipi <span class=\"req\">*</span>", "form.product.ph": "Seç…",
      "form.opt.ai": "AI ürünü", "form.opt.saas": "SaaS", "form.opt.app": "Mobil uygulama", "form.opt.startup": "Startup", "form.opt.travel": "Seyahat / hospitality", "form.opt.beauty": "Güzellik / lifestyle", "form.opt.food": "Yeme içme", "form.opt.consumer": "Tüketici ürünü / hizmet", "form.opt.other": "Diğer",
      "form.goal": "Hedef ne?", "form.goal.ph": "Seç…",
      "form.goal.aware": "Bilinirlik &amp; erişim", "form.goal.conv": "Dönüşüm &amp; indirme", "form.goal.ads": "Reklam içeriği", "form.goal.ongoing": "Sürekli içerik", "form.goal.canvas": "Canvas UGC / marka hesabı",
      "form.budget": "Bütçe aralığı", "form.budget.ph": "Bir aralık seç", "form.budget.1": "€500 altı", "form.budget.2": "€500-€1.500", "form.budget.3": "€1.500-€3.000", "form.budget.4": "€3.000+",
      "form.msg": "Brief", "form.msg.ph": "Teslimatlar, tarih, hedef kitle, dil ve kullanım hakları.",
      "form.send": "Brief gönder <span class=\"arrow\">→</span>",
      "form.sending": "Gönderiliyor…", "form.ok": "Teşekkürler - aldım. 24 saat içinde döneceğim.", "form.err": "Geçerli e-posta, ürün linki ve ürün tipini ekleyip tekrar dene.",
      "form.fallback": "Otomatik gönderim geçici olarak kapalı. Doldurduğun brief e-posta taslağı olarak hazır:", "form.fallback.cta": "E-postayı aç",

      "pkg.kicker": "Başlangıç seçenekleri",
      "pkg.h": "Ücretli pilotla başla. İşe yarayanı büyüt.",
      "pkg.p": "Fiyat; teslimatlar, revizyon, ham dosya ve kullanım haklarına göre belirlenir. Net teklif için ürün linkini gönder.",
      "pkg.quote": "Özel teklif",
      "pkg1.t": "Tek videoluk pilot", "pkg1.d": "Bir konsept, bir kanca, bir kurgulanmış dikey video. Uyumu test etmenin en temiz yolu.",
      "pkg2.t": "Üç videoluk test", "pkg2.d": "Tek yaratıcı strateji altında organik veya reklam testi için üç farklı açı.",
      "pkg3.t": "Ürün lansmanı seti", "pkg3.d": "Açıklama, demo, itiraz ve kurucu anlatısı açılarını kapsayan beş video.",
      "pkg4.t": "SaaS / App Lansman Paketi", "pkg4.d": "5 video, senaryo stratejisi, lansmanın etrafında demo + kurucu içeriği.",
      "pkg5.t": "Canvas UGC Anlaşması", "pkg5.d": "Marka hesabı veya özel ambassador hesabı için düzenli konsept, senaryo, video ve isteğe bağlı yayınlama.",
      "pkg.cta.t": "Kapsamını anlat", "pkg.cta.d": "Ürününü, hedefini ve video sayısını gönder - net bir teklifle döneyim.",

      "faq.kicker": "SSS",
      "faq.h": "Markaların sorduğu sorular.",
      "faq.p": "Kurucuların ve pazarlamacıların benim gibi bir içerik üreticisi ararken Google'a yazdığı - ya da ChatGPT'ye sorduğu - gerçek sorular.",
      "faq.q1": "Ne tür markalara içerik üretiyorsun?",
      "faq.a1": "Her kategoriye açığız: uygulama, SaaS, güzellik, moda, yeme içme, seyahat, hospitality, wellness, eğitim, hizmet ve gündelik tüketici ürünleri. Onur'un ana gücü tech; brief doğru yüz ve mekâna göre üretici ağına yönlendirilir.",
      "faq.q2": "İçeriği hem İngilizce hem Türkçe üretiyor musun?",
      "faq.a2": "Evet. İngilizce ve Türkçe içerik üretiyorum. Buradaki açık örnekler Türkçe; brief'inle birlikte kısa bir İngilizce test okuması isteyebilirsin.",
      "faq.q3": "Videolar reklam olarak kullanılabilir mi?",
      "faq.a3": "Evet. Her şey TikTok, Reels ve Shorts için kanca-öncelikli kurgulanır; organik içerik ya da reklam olarak çalışır. Kullanım hakları, whitelisting ve ham dosyalar baştan netleşir.",
      "faq.q4": "Teknik ürünleri gerçekten anlıyor musun?",
      "faq.a4": "Yazılımı kendim geliştiriyorum; bir özellik listesini, ürünü yanlış anlatmadan ya da abartmadan, alıcının önemsediği bir hikâyeye çevirebiliyorum.",
      "faq.q5": "Ne kadar hızlı teslim ediyorsun?",
      "faq.a5": "Bangkok'tan hızlı ve tamamen uzaktan. Tek videolar genelde haftalar değil günler içinde; büyük setler lansman tarihine göre planlanır.",
      "faq.q6": "Fiyatlandırma nasıl işliyor?",
      "faq.a6": "Kapsama göre - tek bir test videosundan aylık içerik paketine kadar. Ürünü, hedefi ve kaç video istediğini söyle, net bir teklif göndereyim.",
      "faq.q7": "Uygulama ya da ürün lansmanında yardımcı olur musun?",
      "faq.a7": "Evet - lansman içeriği temel kullanım alanı: açıklayıcı reel'ler, ürün demoları, kurucu videoları ve reklam içerikleri, çıkışına göre planlanır.",
      "faq.q8": "Uluslararası markalarla çalışıyor musun?",
      "faq.a8": "Evet. Bangkok merkezliyim ve dünya genelindeki kurucu ve ekiplerle çalışıyorum - asenkron, farklı saat dilimlerinde, İngilizce ya da Türkçe.",
      "faq.q9": "Lifestyle veya seyahat içeriği de var mı?",
      "faq.a9": "İçerik ağım üzerinden: lifestyle &amp; güzellik için <a href=\"https://ugc-mine.vibecodingturkey.com\" target=\"_blank\" rel=\"noopener\">Mine Koçak</a>, seyahat &amp; ağırlama için <a href=\"https://moviatravelhub.vibecodingturkey.com\" target=\"_blank\" rel=\"noopener\">Movia Travel Hub</a>. Tek stüdyo, üç kitle.",
      "faq.q10": "Canvas UGC ve sürekli marka hesabı içeriği üretiyor musunuz?",
      "faq.a10": "Evet. Marka hesabı veya özel ambassador hesabı için düzenli kısa videoları planlayabilir, yazabilir, çekebilir, kurgulayabilir ve anlaşmaya göre yayınlayabiliriz. Model tüm marka kategorilerine açıktır.",

      "net.kicker": "İçerik ağı",
      "net.h": "Tek stüdyo, üç kitle.",
      "net.p": "Üç üretici de geniş marka kategorilerine hizmet verir. Brief'i en güçlü eşleşmeye yönlendiririz: tech için Onur, lifestyle için Mine, couple travel ve mekân için Movia.",
      "net.mine.tag": "Güzellik · Lifestyle · Travel", "net.mine.t": "Mine Koçak",
      "net.mine.d": "Güzellik, lifestyle, travel ve gündelik uygulamalar için sıcak, doğal kadın üretici bakışı.",
      "net.mine.cta": "Siteyi gör <span class=\"arrow\">→</span>",
      "net.movia.tag": "Couple Travel · Mekân", "net.movia.t": "Movia Travel Hub",
      "net.movia.d": "Otel, kafe, restoran, destinasyon ve travel app'ler için çift seyahat ve mekân içeriği.",
      "net.movia.cta": "Siteyi gör <span class=\"arrow\">→</span>",

      "footer.tag": "Onur'dan tech-first UGC; lifestyle, travel ve hospitality için Bangkok üretici ağı desteği.",
      "footer.explore": "Keşfet", "footer.connect": "Bağlan", "footer.network": "Ağ", "footer.made": "Dünya genelindeki markalar için İngilizce ve Türkçe içerik."
    },

    th: {
      "nav.work": "ผลงาน", "nav.tiktok": "TikTok", "nav.cases": "กรณีศึกษา",
      "nav.about": "เกี่ยวกับ", "nav.services": "บริการ", "nav.cta": "จองการปรึกษา",

      "hero.kicker": "ครีเอเตอร์ UGC สายเทคในกรุงเทพฯ",
      "hero.h": "ทำให้ผลิตภัณฑ์ของคุณ<br><em>เข้าใจง่ายและน่าเลือก</em>",
      "hero.sub": "UGC สายเทค พร้อม Canvas UGC ต่อเนื่องสำหรับสินค้า แอป สถานที่ และบริการ โดยเครือข่ายครีเอเตอร์ในกรุงเทพฯ",
      "hero.cta1": "เริ่มการทำงานร่วมกัน <span class=\"arrow\">→</span>",
      "hero.cta2": "ดูวิดีโอแนะนำตัว",
      "hero.chip1": "เนื้อหาภาษาอังกฤษ &amp; ไทย",
      "hero.chip2": "Bangkok, ประเทศไทย",
      "hero.chip3": "แบรนด์ทั่วโลก",
      "hero.badge": "วิดีโอแนะนำครีเอเตอร์",
      "hero.sound": "เปิดเสียง",

      "stat.views": "ยอดวิวที่บันทึกจาก 5 Reels · ข้อมูล ณ 26 มิ.ย.",
      "stat.comments": "คอมเมนต์บน Instagram Reel หนึ่งคลิป · 15 ก.ค.",
      "stat.viral": "ผู้ติดตาม Instagram · ตัวเลขสด 15 ก.ค.",
      "stat.lang": "งบโฆษณาสำหรับตัวอย่างในช่องของเรา",
      "stat.note": "หลักฐานจากช่องของเราเองพร้อมวันที่ เป็นผลลัพธ์แบบออร์แกนิก ไม่ใช่ ROAS ของลูกค้า",

      "work.kicker": "ผลงานที่เลือก",
      "work.h": "วิดีโอสั้นที่ได้รับการชมชอบ แชร์ และจดจำ",
      "work.langpill": "ถ่ายทำเป็นภาษาอังกฤษ &amp; ไทย",
      "work.viral": "ไวรัล",
      "work.tag.ai": "AI / GEO", "work.tag.tech": "AI / เครื่องมือ", "work.tag.apps": "แอป / No-code", "work.tag.story": "เทค / เรื่องราว",
      "work.v4.t": "GEO หมายถึงอะไรสำหรับผลิตภัณฑ์ของคุณ", "work.v4.d": "ยอดวิวบันทึก 24.3K และคอมเมนต์สด 3,026",
      "work.v6.t": "ไม่ใช่เรื่องราว SEO - มันคือ GEO", "work.v6.d": "3,146 มิวจัดต์วิว - ตัวอย่างสั้น ๆ ของเหตุผลที่ GEO มีความสำคัญ",
      "work.v2.t": "Answer Engine Optimization อธิบายอย่างชัดเจน", "work.v2.d": "28,170 มิวจัดต์วิว - หัวข้อที่ซับซ้อนทำให้เรียบง่าย",
      "work.v3.t": "เทรนด์วิดีโอ AI ไวรัล ฟรี", "work.v3.d": "เปลี่ยนเทรนด์เป็นคู่มือที่ผู้คนบันทึก",
      "work.v5.t": "ตอนนี้ทุกคนสร้างแอปได้", "work.v5.d": "เรื่องราวผลิตภัณฑ์ในเวลาน้อยกว่าหนึ่งนาที",
      "work.v1.t": "เด็ก 16 ปีที่สร้างบริษัท AI", "work.v1.d": "ตัวเบ็ดความสนใจที่ยึดจับได้",
      "work.cta.t": "ผลิตภัณฑ์ของคุณ ในการเคลื่อนไหว", "work.cta.d": "ภาษาอังกฤษหรือไทย - ลองวางแผนชุดแรกของคุณด้วยกัน", "work.cta.b": "เริ่มโครงการ →",

      "tt.kicker": "บน TikTok",
      "tt.h": "สร้างสรรค์สำหรับหน้า <em>For You</em>",
      "tt.p": "TikTok ให้รางวัลแก่ตัวเบ็ดที่แข็งแกร่ง เรื่องราวที่ชัดเจน และเหตุผลที่ต้องอยู่ ฉันสร้างสรรค์อย่างแน่นอนแบบนั้น - เนื้อหาที่ออกแบบมาสำหรับเวลาชมชอบ ไม่ใช่แค่มิวจัดต์วิว วิดีโอ AI, เทคโนโลยี และการท่องเที่ยวใหม่เพิ่มเข้ามาเป็นประจำ",
      "tt.follow": "ติดตามบน TikTok <span class=\"arrow\">→</span>", "tt.collab": "ร่วมมือ",

      "cases.kicker": "กรณีศึกษา",
      "cases.h": "มองข้างหลังวิดีโอสองวิดีโอที่ถูกวิเคราะห์",
      "cases.p": "การเข้าถึงคือส่วนที่ง่าย นี่คือตัวอย่างของการเปลี่ยนหัวข้อที่ยากและนามธรรมให้เป็นเนื้อหาวิดีโอสั้นที่ผู้คนชม จนจบ - และโต้แย้งในส่วนความเห็น",
      "case.problem": "ปัญหา", "case.strategy": "กลยุทธ์", "case.outcome": "ผลลัพธ์",
      "case.views": "มิวจัดต์วิว", "case.comments": "ความเห็น", "case.likes": "ชอบ", "case.spend": "งบประมาณโฆษณา",
      "case1.h": "ทำให้ช่องทางการได้มาใหม่รู้สึกชัดเจน",
      "case1.problem": "”Generative Engine Optimization” เป็นหัวข้อนามธรรมและเพิ่มเติมเข้าไปได้อย่างง่ายดาย คำอธิบายส่วนใหญ่ฟังเหมือนการบรรยาย",
      "case1.strategy": "เปิดด้วยตัวเบ็ดความเปรียบเทียบแหลม (SEO vs. GEO) แล้วทำให้เป็นส่วนตัว: ผลิตภัณฑ์ของคุณปรากฏตัวที่ไหนเมื่อผู้คนถาม ChatGPT?",
      "case1.outcome": "Reel นี้มียอดวิวบันทึก 24.3K และคอมเมนต์สด 3,026 ณ วันที่ 15 กรกฎาคม",
      "case2.h": "28,000 มิวจัดต์วิวในหัวข้อที่ผู้คนส่วนใหญ่ยังไม่ได้ยินมา",
      "case2.problem": "Answer Engine Optimization เป็นหัวข้อเฉพาะที่ยุ่งเหยิงด้วยศัพท์เทคนิคและมีความต้องการการค้นหาเกือบศูนย์ในขณะนี้",
      "case2.strategy": "เริ่มต้นด้วยการเปลี่ยนแปลงพฤติกรรมที่ผู้คนรู้สึกอยู่แล้ว - ”คุณเลยถามไปที่ ChatGPT มากกว่า Google” - จากนั้นวางศัพท์ด้านบน",
      "case2.outcome": "การเข้าถึงที่ขับเคลื่อนด้วยความสนใจล้วนๆ: 28,170 มิวจัดต์วิวโดยไม่มีงบประมาณโฆษณา พิสูจน์ความต้องการของหัวข้อก่อนที่คู่แข่งจะสังเกตเห็น",

      "about.kicker": "เกี่ยวกับ", "about.role": "สร้างสรรค์เนื้อหา AI &amp; UGC · Bangkok",
      "about.h": "สร้างสรรค์เนื้อหาที่เข้าใจผลิตภัณฑ์ที่ถ่ายทำ",
      "about.big": "ฉันคือ Onur - สร้างสรรค์เนื้อหาจาก Bangkok ทำงานกับแบรนด์ AI และเทคโนโลยีทั่วโลก ก่อนกล้องตัวอย่าง ฉันเขียนโปรแกรมและศึกษาวิธีการที่ผู้คนค้นพบผลิตภัณฑ์ออนไลน์ ความแตกต่างอยู่ที่นี่: ฉันไม่ได้สร้างเพียงวิดีโอที่ดูดี ฉันสร้างวิดีโอที่เคลื่อนไหวเมตริกส์ที่คุณสนใจ",
      "about.p1": "UGC ส่วนใหญ่หยุดอยู่ที่ 'คลิปที่ดี' ฉันเริ่มจากคำถามทางธุรกิจ - ผู้ซื้อคือใคร คำคัดค้านคือ อะไรที่ทำให้พวกเขาหยุดสแกน - และออกแบบเนื้อหาย้อนกลับจากที่นั่น ตัวเบ็ด, จังหวะ, สำเนาบนหน้าจอ และการเรียกอำเภออย่างมีจริยธรรม ความสนใจที่ไม่นำไปสู่การแปลงคือเพียงสัญญาณรบกวน",
      "about.p2": "ฉันสร้างสรรค์เนื้อหาเป็น <strong>ภาษาอังกฤษและไทยที่ลื่นไหล</strong>; ดังนั้น brief หนึ่งฉบับสามารถเข้าถึงผู้ชมทั่วโลกและผู้พูดภาษาไทยโดยไม่สูญเสียโทน หรือความแตกต่าง จาก Bangkok ฉันทำงานกับทีมในเขตเวลาทุก ๆ ที่ - อย่างรวดเร็ว ระยะไกล และให้ brief ได้อย่างสะดวก",
      "about.li1": "<strong>ภาษาอังกฤษ &amp; ไทย</strong> - สคริปต์และการส่งมอบระดับเจ้าของภาษาในทั้งสองสิ่ง",
      "about.li2": "<strong>มุ่งเน้นประสิทธิภาพ</strong> - สร้างขึ้นจากตัวเบ็ด เวลาชมชอบ และการแปลง",
      "about.li3": "<strong>ชำนาญผลิตภัณฑ์</strong> - ฉันรู้ AI, SaaS และแอปจากภายใน",
      "about.li4": "<strong>เร็วขึ้น &amp; ระยะไกล</strong> - ศูนย์กลาง Bangkok แบรนด์ทั่วโลก",

      "svc.kicker": "บริการ",
      "svc.h": "ทุกสิ่งที่คุณต้องการเพื่อปรากฏตัวและแปลง",
      "svc.p": "เลือกวิดีโอเดียว หรือเครื่องยนต์เนื้อหาที่สมบูรณ์ ทั้งหมดสามารถผลิตเป็นภาษาอังกฤษ ไทย หรือทั้งสองอย่าง",
      "svc1.t": "วิดีโอ UGC", "svc1.d": "เนื้อหาแท้ที่สนทนากับกล้อง - รู้สึกเหมือนคำแนะนำจากเพื่อน ไม่ใช่โฆษณา",
      "svc2.t": "เนื้อหา TikTok", "svc2.d": "ปกติวิดีโอสั้นที่ออกแบบสำหรับหน้า For You - ตัวเบ็ดที่แข็งแกร่ง จังหวะแน่นตัน เวลาชมชอบสูง",
      "svc3.t": "เนื้อหาผลิตภัณฑ์ AI", "svc3.d": "อธิบายผลิตภัณฑ์ AI ที่ซับซ้อนอย่างชัดเจน แสดงค่าที่แท้จริงในเวลาไม่กี่วินาที ความชำนาญของฉัน",
      "svc4.t": "เนื้อหาผลิตภัณฑ์ SaaS", "svc4.d": "ทัวร์คุณสมบัติ เดโมกรณีการใช้งาน และเรื่องราวผู้ก่อตั้งที่เปลี่ยนการทดลองเป็นผู้ใช้ที่ต้องจ่าย",
      "svc5.t": "เนื้อหาการท่องเที่ยว", "svc5.d": "การเล่าเรื่องภาพยนตร์ในสถานที่ - สำหรับแบรนด์การท่องเที่ยวและไลฟ์สไตล์ จาก Bangkok และไกลออกไป",
      "svc6.t": "โฆษณาวิดีโอสั้น", "svc6.d": "สร้างสรรค์ที่พร้อมจ่ายแล้ว - สร้างขึ้นสำหรับตัวเบ็ด เวลาชมชอบ และการแปลงทั่วทั้ง TikTok, Reels และ Shorts",
      "svc7.t": "กลยุทธ์สร้างสรรค์", "svc7.d": "มุมตัวเบ็ด เสาเนื้อหา และแผนการโพสต์ - ดังนั้นวิดีโอทุกชุดมีการทำงาน ไม่ใช่แค่นับมิวจัดต์วิว",
      "svc8.t": "แพ็คเนื้อหา", "svc8.d": "สัญญาแบบรายเดือน - การไหลของเนื้อหาที่สม่ำเสมอสำหรับแบรนด์อังกฤษ &amp; ไทย วางแผนและส่งมอบให้คุณ",
      "svc9.t": "โปรแกรม Canvas UGC", "svc9.d": "วิดีโอสั้นต่อเนื่องสำหรับบัญชีแบรนด์หรือบัญชีแอมบาสเดอร์เฉพาะ รวมคอนเซปต์ สคริปต์ ถ่ายทำ ตัดต่อ และลงโพสต์ตามตกลง สำหรับทุกหมวดแบรนด์",

      "why.quote": "ความสนใจนั้นราคาถูก ความสนใจที่เปลี่ยนเป็นลูกค้าคือทั้งงาน - และนั่นคือสิ่งที่ฉันได้รับการว่าจ้างให้ส่งมอบ",
      "why.cite": "Onur Hüseyin Koçak - Bangkok",
      "why1.q": "ฉันเข้าใจ <span>ผลิตภัณฑ์</span>, ไม่ใช่แค่กล้อง",
      "why1.p": "ฉันเขียนโปรแกรมเอง ดังนั้นฉันจึงสามารถใช้รายการฟีเจอร์ดิบและเปลี่ยนเป็นเรื่องราวที่ผู้ซื้อสนใจจริง ๆ",
      "why2.q": "สองภาษา <span>brief เดียว</span>",
      "why2.p": "ภาษาอังกฤษสำหรับตลาดโลก ไทยสำหรับผู้ชมที่เติบโตเร็วที่สุดแห่งหนึ่ง - ผลิตแบบเจ้าของภาษา ไม่ใช่แบบแปลคำต่อคำ",
      "why3.q": "ฉันเพิ่มประสิทธิภาพสำหรับ <span>การแปลง</span>",
      "why3.p": "ตัวเบ็ด จังหวะ และ CTA ออกแบบมาโดยตั้งใจ เป้าหมายจะไม่เป็นเพียงมิวจัดต์วิว - มันคือการลงทะเบียน การดาวน์โหลด และการขาย",

      "contact.kicker": "มาทำงานร่วมกันกัน",
      "contact.h": "มีผลิตภัณฑ์ที่คุ่มค่าในการพูดถึงหรือไม่?",
      "contact.sub": "บอกฉันว่าคุณกำลังสร้างและสิ่งที่สำเร็จหมายถึงอะไรกับคุณ ฉันจะยอมรับความซื่อสัตย์และแผน - โดยปกติภายใน 24 ชั่วโมง",
      "contact.response": "ยอมรับการร่วมมือใหม่ · ตอบกลับภายใน 24 ชั่วโมง",
      "form.name": "ชื่อ", "form.name.ph": "ชื่อของคุณ",
      "form.email": "อีเมล <span class=\"req\">*</span>",
      "form.company": "บริษัท", "form.company.ph": "แบรนด์ / สตาร์ตอัป",
      "form.product": "ประเภทผลิตภัณฑ์ <span class=\"req\">*</span>", "form.product.ph": "เลือก…",
      "form.opt.ai": "ผลิตภัณฑ์ AI", "form.opt.saas": "SaaS", "form.opt.app": "แอปโทรศัพท์มือถือ", "form.opt.startup": "สตาร์ตอัป", "form.opt.travel": "ท่องเที่ยว / hospitality", "form.opt.beauty": "ความงาม / ไลฟ์สไตล์", "form.opt.food": "อาหาร / เครื่องดื่ม", "form.opt.consumer": "สินค้าอุปโภคบริโภค / บริการ", "form.opt.other": "อื่น ๆ",
      "form.goal": "เป้าหมายคืออะไร?", "form.goal.ph": "เลือก…",
      "form.goal.aware": "การรับรู้ &amp; เข้าถึง", "form.goal.conv": "การแปลง &amp; ดาวน์โหลด", "form.goal.ads": "สร้างสรรค์โฆษณา", "form.goal.ongoing": "เนื้อหาที่กำลังดำเนิน", "form.goal.canvas": "Canvas UGC / บัญชีแบรนด์",
      "form.msg": "บอกฉันเกี่ยวกับ", "form.msg.ph": "คุณกำลังสร้างอะไร และคุณต้องภาษาใด - อังกฤษ ไทย หรือทั้งสองอย่าง?",
      "form.send": "ส่งการสอบถาม <span class=\"arrow\">→</span>",
      "form.sending": "กำลังส่ง…", "form.ok": "ขอบคุณ - ฉันได้รับแล้ว ฉันจะตอบกลับภายใน 24 ชั่วโมง", "form.err": "เพิ่มอีเมลและประเภทผลิตภัณฑ์ แล้วลองอีกครั้ง",
      "form.fallback": "ระบบส่งอัตโนมัติไม่พร้อมใช้งานชั่วคราว บรีฟของคุณถูกเตรียมเป็นอีเมลแล้ว:", "form.fallback.cta": "เปิดอีเมล",

      "pkg.kicker": "แพ็กเกจ",
      "pkg.h": "เลือกจุดเริ่มต้น ปรับขนาดจากที่นั่น",
      "pkg.p": "ขอบเขตที่ชัดเจน ไม่มีการล็อก แพ็คเกจแต่ละแพ็คจะอ้างอิงถึง brief ของคุณ - บอกฉันว่าผลิตภัณฑ์ เป้าหมาย และจำนวนวิดีโอ ฉันจะตอบกลับด้วยใจเต็มไป",
      "pkg.quote": "บอกเขาขอบเขตของคุณ",
      "pkg1.t": "วิดีโอ UGC เริ่มต้น", "pkg1.d": "วิดีโอ UGC เดียว ตัวเบ็ดมุมเดียว แก้ไข + ดิบ เหมาะสำหรับการทดสอบครั้งแรก",
      "pkg2.t": "แพ็ค Growth UGC", "pkg2.d": "3 วิดีโอ ตัวเบ็ดหลาย ๆ อัน สร้างสำหรับการทดสอบออร์แกนิค + จ่าย",
      "pkg3.t": "แพ็คสร้างสรรค์โฆษณา", "pkg3.d": "สร้างสรรค์พร้อมใช้โฆษณา - พร้อมตัวเบ็ดต่าง ๆ สำหรับ TikTok, Reels &amp; Meta",
      "pkg4.t": "แพ็ค SaaS / App Launch", "pkg4.d": "5 วิดีโอ กลยุทธ์สคริปต์ เดโมและเนื้อหาผู้ก่อตั้ง รอบการเปิดตัว",
      "pkg5.t": "แพ็กเกจ Canvas UGC", "pkg5.d": "คอนเซปต์ สคริปต์ วิดีโอ และการลงโพสต์ตามตกลงแบบต่อเนื่อง สำหรับบัญชีแบรนด์หรือบัญชีแอมบาสเดอร์เฉพาะ",
      "pkg.cta.t": "บอกเขาขอบเขตของคุณ", "pkg.cta.d": "ส่งผลิตภัณฑ์ เป้าหมาย และจำนวนวิดีโอ - ฉันจะส่งอัตราป้องกันที่ชัดเจน",

      "faq.kicker": "คำถามที่พบบ่อย",
      "faq.h": "คำถามที่แบรนด์ถาม",
      "faq.p": "คำถามที่แท้จริงที่ผู้ก่อตั้งและสมาชิกการตลาดพิมพ์ลงใน Google - หรือถามไปที่ ChatGPT - เมื่อพวกเขากำลังมองหาสร้างสรรค์เนื้อหาเหมือนฉัน",
      "faq.q1": "คุณสร้างเนื้อหาให้กับแบรนด์ประเภทใด?",
      "faq.a1": "รับทุกหมวดแบรนด์ เช่น แอป SaaS ความงาม แฟชั่น อาหาร ท่องเที่ยว hospitality wellness การศึกษา บริการ และสินค้าในชีวิตประจำวัน จุดแข็งหลักของ Onur คือเทค และเราจะเลือกครีเอเตอร์กับโลเคชันให้เหมาะกับบรีฟ",
      "faq.q2": "คุณสร้างเนื้อหา UGC ทั้งภาษาอังกฤษและไทยหรือไม่?",
      "faq.a2": "ใช่ - เจ้าของภาษาในทั้งสอง brief หนึ่งฉบับสามารถเป็นเวอร์ชันภาษาอังกฤษสำหรับผู้ชมทั่วโลกและเวอร์ชันภาษาไทยสำหรับตลาดท้องถิ่น โดยมีโทนที่เหมาะสมในแต่ละรุ่น ไม่ใช่การแปลคำต่อคำ",
      "faq.q3": "วิดีโอของคุณสามารถใช้เป็นโฆษณาจ่ายแล้วหรือไม่?",
      "faq.a3": "ใช่ ทุกสิ่งถูกสร้างสรรค์ด้วยตัวเบ็ดแรกสำหรับ TikTok, Reels และ Shorts และใช้งานได้เป็นเนื้อหาแบบออร์แกนิคหรือเป็นสร้างสรรค์โฆษณา สิทธิการใช้งาน whitelisting และไฟล์ดิบตกลงตั้งแต่แรก",
      "faq.q4": "คุณเข้าใจผลิตภัณฑ์ทางเทคนิคจริง ๆ หรือไม่?",
      "faq.a4": "ฉันเขียนโปรแกรมเอง ดังนั้นฉันจึงสามารถใช้รายการคุณสมบัติและเปลี่ยนเป็นเรื่องราวที่ผู้ซื้อสนใจจริง ๆ - โดยไม่ทำให้ผลิตภัณฑ์นั้นผิดพลาดหรือเกินจริง",
      "faq.q5": "คุณส่งมอบเร็วแค่ไหน?",
      "faq.a5": "อย่างรวดเร็วและระยะไกลจาก Bangkok แล้ว วิดีโอเดียวส่วนใหญ่มาในไม่กี่วันไม่ใช่สัปดาห์; แบตช์ขนาดใหญ่ตามแผนรอบวันที่เปิดตัว",
      "faq.q6": "ราคากำหนดอย่างไร?",
      "faq.a6": "ขอบเขต - จากวิดีโอทดสอบเดียวไปถึงแพ็คเนื้อหารายเดือน บอกฉันถึงผลิตภัณฑ์ เป้าหมาย และจำนวนวิดีโอที่คุณต้องการ ฉันจะส่งใจเต็มไป",
      "faq.q7": "คุณช่วยเหลือด้วยแอปหรือการเปิดตัวผลิตภัณฑ์ได้หรือไม่?",
      "faq.a7": "ใช่ - เนื้อหาการเปิดตัวคือกรณีการใช้งานหลัก: อธิบายอ่าน เดโมผลิตภัณฑ์ วิดีโอผู้ก่อตั้ง และสร้างสรรค์โฆษณา วางแผนรอบการปล่อยของคุณ",
      "faq.q8": "คุณทำงานกับแบรนด์ระหว่างประเทศหรือไม่?",
      "faq.a8": "ใช่ ฉันศูนย์กลาง Bangkok และทำงานกับผู้ก่อตั้งและทีมทั่วโลก - อะซิงค์ และหลายเขตเวลา ภาษาอังกฤษหรือไทย",
      "faq.q9": "คุณเคลื่อนไปสู่ไลฟ์สไตล์หรือเนื้อหาการท่องเที่ยวด้วยหรือไม่?",
      "faq.a9": "ผ่านเครือข่ายสร้างสรรค์ของฉัน: ไลฟ์สไตล์ &amp; ความงาม <a href=\"https://ugc-mine.vibecodingturkey.com\" target=\"_blank\" rel=\"noopener\">Mine Koçak</a>, การท่องเที่ยว &amp; ความอำนวยความสะดวก <a href=\"https://moviatravelhub.vibecodingturkey.com\" target=\"_blank\" rel=\"noopener\">Movia Travel Hub</a> สตูดิโอเดียว ผู้ชมสามคน",
      "faq.q10": "รับทำ Canvas UGC และคอนเทนต์ต่อเนื่องสำหรับบัญชีแบรนด์ไหม?",
      "faq.a10": "รับ เราวางแผน เขียนสคริปต์ ถ่ายทำ ตัดต่อ และลงโพสต์ตามข้อตกลงสำหรับบัญชีแบรนด์หรือบัญชีแอมบาสเดอร์เฉพาะได้ พร้อมตารางทดสอบคอนเทนต์ต่อเนื่องสำหรับทุกหมวดแบรนด์",

      "net.kicker": "เครือข่ายสร้างสรรค์",
      "net.h": "สตูดิโอเดียว ผู้ชมสามคน",
      "net.p": "ครีเอเตอร์ทั้งสามรับงานได้หลายหมวด เราเลือกคนที่เหมาะที่สุดกับบรีฟ: Onur สำหรับเทค, Mine สำหรับไลฟ์สไตล์ และ Movia สำหรับคู่รักท่องเที่ยวกับสถานที่",
      "net.mine.tag": "ความงาม · ไลฟ์สไตล์ · ท่องเที่ยว", "net.mine.t": "Mine Koçak",
      "net.mine.d": "UGC สำหรับความงาม ไลฟ์สไตล์ ท่องเที่ยว และแอปในชีวิตประจำวัน ด้วยมุมมองครีเอเตอร์หญิงที่เป็นธรรมชาติ",
      "net.mine.cta": "ไปที่ไซต์ <span class=\"arrow\">→</span>",
      "net.movia.tag": "คู่รักท่องเที่ยว · สถานที่", "net.movia.t": "Movia Travel Hub",
      "net.movia.d": "คอนเทนต์คู่รักท่องเที่ยวและรีวิวสถานที่สำหรับโรงแรม คาเฟ่ ร้านอาหาร จุดหมาย และแอปท่องเที่ยว",
      "net.movia.cta": "ไปที่ไซต์ <span class=\"arrow\">→</span>",

      "footer.tag": "UGC สายเทคโดย Onur พร้อมเครือข่ายครีเอเตอร์ในกรุงเทพฯ สำหรับไลฟ์สไตล์ ท่องเที่ยว และธุรกิจบริการ",
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

  // Use English as the acquisition default. A location-based language swap
  // made international buyers in Bangkok land on an unintended Thai version.
  var stored = getStored();
  var isPortfolioHome = document.body.classList.contains("portfolio-home");
  var initial = stored || "en";
  applyLang(initial);

  // Preserve the older geo behaviour only on legacy landing pages. The home
  // page stays English until the visitor explicitly switches language.
  if (!stored && !isPortfolioHome) {
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

  // The supplied creator introduction is the shared EN/TH hero asset for now.
  // Turkish can be swapped independently when the localized recording arrives.
  var heroVideo = document.querySelector("[data-hero-video]");
  var heroSound = document.querySelector("[data-hero-sound]");
  if (heroVideo && heroSound) {
    heroSound.addEventListener("click", function () {
      heroVideo.muted = false;
      heroVideo.loop = false;
      heroVideo.currentTime = 0;
      heroVideo.play().catch(function () {});
      heroSound.hidden = true;
    });
    heroVideo.addEventListener("volumechange", function () {
      heroSound.hidden = !heroVideo.muted;
    });
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      heroVideo.autoplay = false;
      heroVideo.pause();
    }
  }

  /* ---------------- nav scroll + mobile menu ---------------- */
  var nav = document.getElementById("nav");
  nav.classList.add("scrolled");

  var burger = document.getElementById("burger");
  var menu = document.getElementById("mobileMenu");
  function closeMenu() {
    burger.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
    menu.classList.remove("open");
    document.body.classList.remove("no-scroll");
  }
  burger.addEventListener("click", function () {
    var open = burger.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(open));
    menu.classList.toggle("open", open);
    document.body.classList.toggle("no-scroll", open);
  });
  menu.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeMenu); });
  document.addEventListener("keydown", function (ev) { if (ev.key === "Escape") closeMenu(); });

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

  // entry attribution (referrer + utm) - same shape the manager dashboard expects
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

  function mailFallback(status, fd) {
    var rows = [
      ["Name", fd.get("name")], ["Email", fd.get("email")], ["Product URL", fd.get("company")],
      ["Product type", fd.get("product")], ["Goal", fd.get("goal")], ["Budget", fd.get("budget")],
      ["Brief", fd.get("message")]
    ];
    var body = rows.map(function (row) { return row[0] + ": " + String(row[1] || "").trim(); }).join("\n");
    var href = "mailto:onurhuseyinkocak@gmail.com?subject=" + encodeURIComponent("UGC project brief") + "&body=" + encodeURIComponent(body);
    status.textContent = trS("form.fallback") + " ";
    var link = document.createElement("a");
    link.href = href; link.textContent = trS("form.fallback.cta"); link.style.textDecoration = "underline";
    status.appendChild(link); status.className = "form-status err";
    window.location.href = href;
  }

  var leadForm = document.getElementById("leadForm");
  if (leadForm) {
    leadForm.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var status = document.getElementById("formStatus");
      var btn = leadForm.querySelector("button[type=submit]");
      var fd = new FormData(leadForm);
      if (fd.get("website")) { status.textContent = trS("form.ok"); status.className = "form-status ok"; leadForm.reset(); return; }
      var email = (fd.get("email") || "").trim();
      var company = (fd.get("company") || "").trim();
      var product = (fd.get("product") || "").trim();
      if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || !/^https?:\/\/\S+$/i.test(company) || !product) {
        status.textContent = trS("form.err"); status.className = "form-status err"; return;
      }
      btn.disabled = true; status.textContent = trS("form.sending"); status.className = "form-status";
      fetch(LEAD_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", apikey: LEAD_ANON, Authorization: "Bearer " + LEAD_ANON },
        body: JSON.stringify({
          action: "submit", kind: "booking", lang: window.__lang || "en",
          name: fd.get("name") || "", email: email, company: company,
          product: product, goal: fd.get("goal") || "", budget: fd.get("budget") || "", message: fd.get("message") || "",
          channel: ENTRY.channel, entry_referrer: ENTRY.entry_referrer, utm: ENTRY.utm
        })
      }).then(function (r) {
        return r.json().catch(function () { return {}; }).then(function (j) { return { ok: r.ok, j: j }; });
      }).then(function (res) {
        if (res.ok && res.j && res.j.ok) {
          status.textContent = trS("form.ok"); status.className = "form-status ok"; leadForm.reset();
          if (window.gtag) gtag("event", "generate_lead", { method: "ugc_form" });
        } else { mailFallback(status, fd); }
      }).catch(function () {
        mailFallback(status, fd);
      }).then(function () { btn.disabled = false; });
    });
  }

  /* ---------------- year ---------------- */
  var y = document.getElementById("year"); if (y) y.textContent = String(new Date().getFullYear());
})();
