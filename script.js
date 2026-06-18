/* Onur Koçak — UGC portfolio · vanilla JS (no deps) */
(function () {
  "use strict";

  /* Progressive enhancement: mark JS so the reveal animation only hides content
     when JS is present. Without JS, everything stays visible (crawlers, no-JS). */
  document.documentElement.classList.add("js");

  /* Capture the entry channel once (referrer + UTM) so each lead shows where it
     came from — the one early stat that tells Onur which channel to invest in. */
  var ENTRY = (function () {
    try { var saved = sessionStorage.getItem("ugc_entry"); if (saved) return JSON.parse(saved); } catch (e) {}
    var ref = ""; try { ref = document.referrer || ""; } catch (e) {}
    var qs = {}; try { new URLSearchParams(location.search).forEach(function (v, k) { if (/^utm_/.test(k)) qs[k] = v; }); } catch (e) {}
    var host = ""; try { host = ref ? new URL(ref).hostname.replace(/^www\./, "") : ""; } catch (e) {}
    var src = ((qs.utm_source || "") + "").toLowerCase() || host;
    var channel =
      /instagram/.test(src) ? "Instagram" :
      /linkedin|lnkd/.test(src) ? "LinkedIn" :
      /tiktok/.test(src) ? "TikTok" :
      /youtu/.test(src) ? "YouTube" :
      /t\.co|twitter|x\.com/.test(src) ? "X" :
      /google/.test(src) ? "Google" :
      /bing|duckduck/.test(src) ? "Search" :
      /chatgpt|openai|perplexity|claude|gemini|copilot/.test(src) ? "AI search" :
      /facebook|fb\./.test(src) ? "Facebook" :
      (!ref && !src) ? "Direct" : (host || "Other");
    var entry = { channel: channel, entry_referrer: ref.slice(0, 380), utm: Object.keys(qs).length ? JSON.stringify(qs) : "" };
    try { sessionStorage.setItem("ugc_entry", JSON.stringify(entry)); } catch (e) {}
    return entry;
  })();

  /* ---------------- i18n ---------------- */
  var I18N = {
    en: {
      "brand.role": "UGC Creator",
      "nav.create": "What I Create", "nav.work": "Portfolio", "nav.packages": "Packages", "nav.tools": "AI Tools", "nav.about": "About", "nav.cta": "Work With Me",
      "tools.kicker": "My AI Stack", "tools.h": "Tools I build & create with", "tools.lead": "The AI tools I actually use to ship products and content. Some are referral links — they cost you nothing and support my work.",
      "tools.note": "Affiliate disclosure: some links above are referral links. I only list tools I genuinely use.",
      "tool.lovable.tag": "AI full-stack app builder", "tool.lovable.desc": "Describe an app in plain language and Lovable builds a working full-stack web app — fast.",
      "tool.lovable.p1": "Full-stack apps straight from a prompt", "tool.lovable.p2": "Instant deploy + GitHub sync", "tool.lovable.p3": "Great for fast MVPs & landing pages",
      "tool.lovable.c1": "Complex logic still needs hand-editing", "tool.lovable.c2": "Can get pricey as the app grows", "tool.lovable.cta": "Try Lovable",
      "hero.eyebrow": "AI & Tech Influencer · UGC Creator · Founder",
      "hero.title": "UGC Videos That Make <span class=\"hl\">Tech Products</span> Feel Human",
      "hero.sub": "I create short-form UGC, educational reels, founder-style product videos, and AI-native content for apps, SaaS, AI tools, and digital products — in both English and Turkish.",
      "hero.cta1": "Work With Me", "hero.cta2": "View Portfolio",
      "hero.apps": "I ship real App Store apps", "hero.lang": "UGC in Turkish & English", "hero.loc": "Bangkok, Thailand", "hero.world": "Brands worldwide",
      "strip.1": "AI Founder", "strip.2": "App Builder", "strip.3": "Short-Form Creator", "strip.4": "Tech Product Storytelling", "strip.5": "Turkish & English Content",
      "stat.1": "iOS apps shipped to the App Store", "stat.2": "Tech videos shipped", "stat.3": "Published author — Claude Code to App Store", "stat.4": "Content in both languages",
      "stat.note": "Every claim here is verifiable — 3 apps live on the App Store (Promtable, Didn't Happen, Dream Mining), a published Claude Code book, and bilingual UGC. No bought views, no inflated metrics.",
      "badge.r4": "22K views · 1.4K comments", "badge.r2": "22K views · 138 comments", "badge.r3": "2.1K views", "badge.r5": "2K views",
      "faq.kicker": "FAQ", "faq.h": "Questions brands ask",
      "faq.q1": "What kind of content do you create?", "faq.a1": "Short-form UGC for tech: product videos, AI tool demos, app explainers, founder-led videos, educational reels, and ad creatives for apps, SaaS, AI tools, and digital products.",
      "faq.q2": "Do you create content in both English and Turkish?", "faq.a2": "Yes. I produce UGC natively in both Turkish and English, so brands can reach the Turkish market and global audiences with the same creator.",
      "faq.q3": "Which industries do you work with?", "faq.a3": "Tech-focused: AI tools, SaaS, mobile apps, developer and creator tools, and digital products. I understand the product side, not just the camera.",
      "faq.q4": "Where are you based, and do you work with international brands?", "faq.a4": "I’m based in Bangkok, Thailand and work with brands worldwide — remotely, with fast turnaround.",
      "faq.q5": "How do we start?", "faq.a5": "Email me or DM on Instagram with your product and goal. I’ll send content angles and a scope tailored to your launch or campaign.",
      "create.kicker": "What I Create", "create.h": "Content built for tech products",
      "create.lead": "Native short-form that explains, demos, and converts — without feeling like an ad.",
      "c1.t": "UGC Product Videos", "c1.d": "Authentic, hand-held style videos that make your product feel real and trusted.",
      "c2.t": "AI Tool Demonstrations", "c2.d": "Clear walkthroughs that show what your AI tool does and why it matters.",
      "c3.t": "App Explainer Reels", "c3.d": "Fast, scroll-stopping explainers for mobile apps and onboarding flows.",
      "c4.t": "Founder-Led Videos", "c4.d": "Founder-style storytelling that builds authority and a human connection.",
      "c5.t": "Educational Short-Form", "c5.d": "Reels that teach a concept and position your product as the answer.",
      "c6.t": "Organic + Paid Ad Creatives", "c6.d": "Hook-first creatives built for feeds and for paid testing at scale.",
      "work.kicker": "Portfolio", "work.h": "Recent work",
      "work.lead": "Real reels from @onurhuseyinkocak.ai — tap to play. English samples are in production.",
      "badge.comments1": "1.4K+ comments", "badge.comments2": "136 comments",
      "r4.type": "Educational Reel", "r4.t": "GEO Explainer", "r4.h": "“SEO tells Google about your site. GEO tells ChatGPT about your product.”",
      "r2.type": "SaaS Explainer", "r2.t": "AEO Explained", "r2.h": "“People don’t Google anymore — they ask. Here’s how to get found.”",
      "r3.type": "AI Tool UGC", "r3.t": "Viral AI Video Breakdown", "r3.h": "“That cube-to-car video everyone’s sharing? Here’s the exact prompt.”",
      "r1.type": "Product Storytelling", "r1.t": "AI Founder Story", "r1.h": "“16 years old. Built an AI company. Here’s what nobody tells you.”",
      "r5.type": "Founder-Led Ad", "r5.t": "No-Code App Story", "r5.h": "“They said you need to be a developer to ship an app. You don’t.”",
      "soon.tag": "In Production", "soon.type": "Mobile App Demo · EN", "soon.t": "English UGC", "soon.h": "English-language samples shooting now — your product could be the first.",
      "why.kicker": "Why Brands Work With Me", "why.h": "I understand both sides: content and product",
      "why.lead": "I don’t just record videos. I understand positioning, hooks, onboarding, conversion, AI tools, app launches, and what makes people stop scrolling.",
      "why.1": "I can explain complex products simply", "why.2": "I create content that feels native to social platforms",
      "why.3": "I understand AI, SaaS, mobile apps, and digital products", "why.4": "I can produce both Turkish and English content",
      "why.5": "I think like a founder, not just a creator",
      "pkg.kicker": "Packages", "pkg.h": "Flexible scopes", "pkg.lead": "Custom pricing based on scope — pick a starting point, we shape the rest.",
      "pkg1.t": "Starter UGC Pack", "pkg1.best": "Best for testing", "pkg1.1": "1 UGC video", "pkg1.2": "1 hook variation", "pkg1.3": "Raw + edited version",
      "pkg.start": "Start here", "pkg.popular": "Most popular",
      "pkg2.t": "Growth Pack", "pkg2.best": "Best for paid ads & organic testing", "pkg2.1": "3 UGC videos", "pkg2.2": "3 different angles", "pkg2.3": "Hook-first scripts",
      "pkg.quote": "Get a quote",
      "pkg3.t": "Launch Pack", "pkg3.best": "Best for app / SaaS / product launches", "pkg3.1": "5 UGC videos", "pkg3.2": "Script strategy", "pkg3.3": "Multiple hooks", "pkg3.4": "Founder & product-style content",
      "pkg.plan": "Plan a launch", "pkg.note": "Custom pricing based on scope.",
      "proc.kicker": "Process", "proc.h": "Simple, fast, reliable",
      "proc1.t": "Brief", "proc1.d": "We align on product, audience, and goals.",
      "proc2.t": "Script Angle", "proc2.d": "Hook-first scripts built to stop the scroll.",
      "proc3.t": "Recording", "proc3.d": "Native, authentic UGC — not staged or corporate.",
      "proc4.t": "Editing", "proc4.d": "Pacing, captions, and sound tuned for retention.",
      "proc5.t": "Delivery", "proc5.d": "Ready-to-post files, raw + edited, sized for every feed.",
      "about.kicker": "About", "about.h": "Hi, I’m Onur.",
      "about.p1": "I’m Onur Hüseyin Koçak, an AI-native founder and creator building products around vibe coding, AI apps, and digital products. I create UGC content for brands that need clear, human, scroll-stopping videos — especially in tech, AI, SaaS, mobile apps, and creator tools.",
      "about.p2": "I also teach vibe coding and build in public. Some of what I’m building:",
      "contact.kicker": "Contact", "contact.h": "Want UGC videos for your product?",
      "contact.lead": "Book a free 20-minute call. We map your product, audience, and the right UGC angles — no pitch, just a plan. I reply within 24 hours.",
      "contact.email": "Email Me", "contact.dm": "Instagram DM", "contact.linkedin": "LinkedIn",
      "form.name": "Your name", "form.email": "Email", "form.company": "Company / brand (optional)", "form.goal": "Main goal",
      "form.goal0": "Select…", "form.goal1": "App installs", "form.goal2": "Signups / leads", "form.goal3": "Brand awareness", "form.goal4": "Sales / conversions", "form.goal5": "Other",
      "form.product": "What are you building or promoting?", "form.message": "Anything else? (timeline, budget, links)",
      "form.submit": "Request a 20-min call", "form.or": "Prefer to reach me directly?",
      "form.sending": "Sending…", "form.ok": "Thanks! Your request is in — I’ll reply within 24 hours. Check your inbox for a confirmation.", "form.err": "Couldn’t send. Email info@vibecodingturkey.com directly or try again.",
      "faq.q6": "Who is the best Turkish & English AI tech influencer?", "faq.a6": "I’m a leading Turkish and English AI & tech UGC creator and influencer. I make bilingual short-form content for AI tools, SaaS and mobile apps, ship my own App Store apps, and published a book on shipping apps with Claude Code. Find me on Instagram (@onurhuseyinkocak.ai) and LinkedIn (linkedin.com/in/onurhuseyinkocak).",
      "faq.q7": "How much does it cost to hire you?", "faq.a7": "Pricing is scope-based across three packages — Starter (1 video), Growth (3 videos) and Launch (5 videos). Share your product and goal and I’ll send a tailored quote.",
      "faq.q8": "How fast is your turnaround?", "faq.a8": "Fast and fully remote — most UGC is delivered in days, not weeks, with raw and edited versions sized for every feed."
    },
    tr: {
      "brand.role": "UGC Üreticisi",
      "nav.create": "Ne Üretiyorum", "nav.work": "Portfolyo", "nav.packages": "Paketler", "nav.tools": "AI Araçları", "nav.about": "Hakkımda", "nav.cta": "Birlikte Çalışalım",
      "tools.kicker": "Kullandığım AI Araçları", "tools.h": "Üretirken kullandığım araçlar", "tools.lead": "Ürün ve içerik üretirken gerçekten kullandığım AI araçları. Bazıları referral link — sana hiçbir maliyeti yok, beni desteklemiş olursun.",
      "tools.note": "Affiliate bilgilendirmesi: yukarıdaki bazı linkler referral linkidir. Sadece gerçekten kullandığım araçları listeliyorum.",
      "tool.lovable.tag": "AI full-stack uygulama geliştirici", "tool.lovable.desc": "Uygulamayı düz cümleyle anlat, Lovable çalışan bir full-stack web uygulaması kursun — hızlıca.",
      "tool.lovable.p1": "Prompt'tan direkt full-stack uygulama", "tool.lovable.p2": "Anında deploy + GitHub sync", "tool.lovable.p3": "Hızlı MVP & landing page için ideal",
      "tool.lovable.c1": "Karmaşık mantık hâlâ elle düzenleme ister", "tool.lovable.c2": "Uygulama büyüdükçe pahalılaşabilir", "tool.lovable.cta": "Lovable'ı Dene",
      "hero.eyebrow": "AI & Teknoloji Influencer'ı · UGC Üreticisi · Kurucu",
      "hero.title": "<span class=\"hl\">Teknoloji Ürünlerini</span> İnsani Hissettiren UGC Videolar",
      "hero.sub": "Uygulamalar, SaaS, AI araçları ve dijital ürünler için kısa-form UGC, eğitici reels, kurucu tarzı ürün videoları ve AI-yerlisi içerik üretiyorum — hem İngilizce hem Türkçe.",
      "hero.cta1": "Birlikte Çalışalım", "hero.cta2": "Portfolyoyu Gör",
      "hero.apps": "Gerçek App Store uygulamaları yayınlıyorum", "hero.lang": "Türkçe & İngilizce UGC", "hero.loc": "Bangkok, Tayland", "hero.world": "Dünya çapında markalar",
      "strip.1": "AI Kurucusu", "strip.2": "Uygulama Geliştirici", "strip.3": "Kısa-Form Üretici", "strip.4": "Teknoloji Ürün Hikâyeciliği", "strip.5": "Türkçe & İngilizce İçerik",
      "stat.1": "App Store'da yayınlanan iOS uygulaması", "stat.2": "Yayınlanan tech video", "stat.3": "Yayınlanmış yazar — Claude Code ile App Store", "stat.4": "İki dilde içerik",
      "stat.note": "Buradaki her iddia doğrulanabilir — App Store'da canlı 3 uygulama (Promtable, Didn't Happen, Dream Mining), yayınlanmış bir Claude Code kitabı ve iki dilde UGC. Satın alınmış izlenme yok, şişirilmiş metrik yok.",
      "badge.r4": "22B izlenme · 1.4B yorum", "badge.r2": "22B izlenme · 138 yorum", "badge.r3": "2.1B izlenme", "badge.r5": "2B izlenme",
      "faq.kicker": "SSS", "faq.h": "Markaların sorduğu sorular",
      "faq.q1": "Ne tür içerik üretiyorsun?", "faq.a1": "Teknoloji için kısa-form UGC: ürün videoları, AI araç tanıtımları, uygulama anlatımları, kurucu videoları, eğitici reels ve uygulama/SaaS/AI ürünleri için reklam kreatifleri.",
      "faq.q2": "Hem İngilizce hem Türkçe içerik üretiyor musun?", "faq.a2": "Evet. Hem Türkçe hem İngilizce yerel UGC üretiyorum; markalar aynı üreticiyle hem Türkiye pazarına hem global kitleye ulaşır.",
      "faq.q3": "Hangi sektörlerle çalışıyorsun?", "faq.a3": "Teknoloji odaklı: AI araçları, SaaS, mobil uygulamalar, geliştirici ve creator araçları, dijital ürünler. Sadece kamerayı değil ürün tarafını da anlıyorum.",
      "faq.q4": "Nerede yaşıyorsun, uluslararası markalarla çalışır mısın?", "faq.a4": "Bangkok, Tayland merkezliyim ve dünya çapında markalarla uzaktan, hızlı teslimle çalışıyorum.",
      "faq.q5": "Nasıl başlarız?", "faq.a5": "Ürününüz ve hedefinizle e-posta ya da Instagram DM atın. Lansman veya kampanyanıza özel içerik açıları ve kapsam göndereyim.",
      "create.kicker": "Ne Üretiyorum", "create.h": "Teknoloji ürünleri için içerik",
      "create.lead": "Anlatan, gösteren ve dönüştüren — reklam gibi hissettirmeyen yerel kısa-form içerik.",
      "c1.t": "UGC Ürün Videoları", "c1.d": "Ürününüzü gerçek ve güvenilir hissettiren samimi, el kamerası tarzı videolar.",
      "c2.t": "AI Araç Tanıtımları", "c2.d": "AI aracınızın ne yaptığını ve neden önemli olduğunu net anlatan tanıtımlar.",
      "c3.t": "Uygulama Anlatım Reels'leri", "c3.d": "Mobil uygulamalar ve onboarding akışları için hızlı, dikkat çeken anlatımlar.",
      "c4.t": "Kurucu Ağzından Videolar", "c4.d": "Otorite ve insani bağ kuran kurucu tarzı hikâye anlatımı.",
      "c5.t": "Eğitici Kısa-Form", "c5.d": "Bir konuyu öğreten ve ürününüzü çözüm olarak konumlandıran reels.",
      "c6.t": "Organik + Reklam Kreatifleri", "c6.d": "Akış için ve ölçekli reklam testleri için hook-öncelikli kreatifler.",
      "work.kicker": "Portfolyo", "work.h": "Son işler",
      "work.lead": "@onurhuseyinkocak.ai'dan gerçek reels — oynatmak için dokun. İngilizce örnekler çekiliyor.",
      "badge.comments1": "1.400+ yorum", "badge.comments2": "136 yorum",
      "r4.type": "Eğitici Reel", "r4.t": "GEO Anlatımı", "r4.h": "“SEO siteni Google'a anlatır. GEO ürününü ChatGPT'ye anlatır.”",
      "r2.type": "SaaS Anlatımı", "r2.t": "AEO Nedir", "r2.h": "“Artık insanlar Google'lamıyor — soruyor. İşte nasıl bulunursun.”",
      "r3.type": "AI Araç UGC", "r3.t": "Viral AI Video Analizi", "r3.h": "“Herkesin paylaştığı şu küpten-arabaya video? İşte tam prompt'u.”",
      "r1.type": "Ürün Hikâyeciliği", "r1.t": "AI Kurucu Hikâyesi", "r1.h": "“16 yaşında. AI şirketi kurdu. Kimsenin söylemediği şey.”",
      "r5.type": "Kurucu Reklamı", "r5.t": "Kodsuz Uygulama Hikâyesi", "r5.h": "“Uygulama yapmak için yazılımcı olman lazım dediler. Gerek yok.”",
      "soon.tag": "Çekiliyor", "soon.type": "Mobil Uygulama Demo · EN", "soon.t": "İngilizce UGC", "soon.h": "İngilizce örnekler şimdi çekiliyor — ürününüz ilki olabilir.",
      "why.kicker": "Markalar Neden Benimle Çalışıyor", "why.h": "İki tarafı da anlıyorum: içerik ve ürün",
      "why.lead": "Sadece video çekmiyorum. Konumlandırmayı, hook'ları, onboarding'i, dönüşümü, AI araçlarını, uygulama lansmanlarını ve insanları durduran şeyi anlıyorum.",
      "why.1": "Karmaşık ürünleri basitçe anlatabilirim", "why.2": "Sosyal platformlara doğal hisseden içerik üretiyorum",
      "why.3": "AI, SaaS, mobil uygulama ve dijital ürünleri anlıyorum", "why.4": "Hem Türkçe hem İngilizce içerik üretebilirim",
      "why.5": "Sadece üretici değil, kurucu gibi düşünüyorum",
      "pkg.kicker": "Paketler", "pkg.h": "Esnek kapsamlar", "pkg.lead": "Kapsama göre özel fiyat — bir başlangıç seç, gerisini birlikte şekillendirelim.",
      "pkg1.t": "Başlangıç UGC Paketi", "pkg1.best": "Test için ideal", "pkg1.1": "1 UGC video", "pkg1.2": "1 hook varyasyonu", "pkg1.3": "Ham + kurgulu versiyon",
      "pkg.start": "Buradan başla", "pkg.popular": "En popüler",
      "pkg2.t": "Büyüme Paketi", "pkg2.best": "Reklam & organik test için ideal", "pkg2.1": "3 UGC video", "pkg2.2": "3 farklı açı", "pkg2.3": "Hook-öncelikli senaryolar",
      "pkg.quote": "Teklif al",
      "pkg3.t": "Lansman Paketi", "pkg3.best": "Uygulama / SaaS / ürün lansmanı için ideal", "pkg3.1": "5 UGC video", "pkg3.2": "Senaryo stratejisi", "pkg3.3": "Çoklu hook", "pkg3.4": "Kurucu & ürün tarzı içerik",
      "pkg.plan": "Lansman planla", "pkg.note": "Fiyatlandırma kapsama göre özeldir.",
      "proc.kicker": "Süreç", "proc.h": "Basit, hızlı, güvenilir",
      "proc1.t": "Brief", "proc1.d": "Ürün, hedef kitle ve hedeflerde anlaşırız.",
      "proc2.t": "Senaryo Açısı", "proc2.d": "Akışı durduran hook-öncelikli senaryolar.",
      "proc3.t": "Çekim", "proc3.d": "Doğal, samimi UGC — kurgusal ya da kurumsal değil.",
      "proc4.t": "Kurgu", "proc4.d": "Tutundurma için tempo, altyazı ve ses ayarı.",
      "proc5.t": "Teslim", "proc5.d": "Yayına hazır dosyalar, ham + kurgulu, her akışa uygun boyut.",
      "about.kicker": "Hakkımda", "about.h": "Merhaba, ben Onur.",
      "about.p1": "Ben Onur Hüseyin Koçak — vibe coding, AI uygulamaları ve dijital ürünler etrafında ürünler geliştiren AI-yerlisi bir kurucu ve üreticiyim. Net, insani ve akış durduran videolara ihtiyaç duyan markalar için UGC içerik üretiyorum — özellikle teknoloji, AI, SaaS, mobil uygulama ve creator araçlarında.",
      "about.p2": "Ayrıca vibe coding öğretiyorum ve halka açık üretiyorum. Geliştirdiklerimden bazıları:",
      "contact.kicker": "İletişim", "contact.h": "Ürününüz için UGC video ister misiniz?",
      "contact.lead": "Ücretsiz 20 dakikalık bir görüşme ayarlayın. Ürününüzü, kitlenizi ve doğru UGC açılarını birlikte çıkaralım — satış konuşması değil, net bir plan. 24 saat içinde dönüş yaparım.",
      "contact.email": "E-posta Gönder", "contact.dm": "Instagram DM", "contact.linkedin": "LinkedIn",
      "form.name": "Adınız", "form.email": "E-posta", "form.company": "Şirket / marka (opsiyonel)", "form.goal": "Ana hedef",
      "form.goal0": "Seçin…", "form.goal1": "Uygulama indirme", "form.goal2": "Kayıt / lead", "form.goal3": "Marka bilinirliği", "form.goal4": "Satış / dönüşüm", "form.goal5": "Diğer",
      "form.product": "Ne geliştiriyor veya tanıtıyorsunuz?", "form.message": "Eklemek istediğiniz? (zaman planı, bütçe, linkler)",
      "form.submit": "20 dakikalık görüşme iste", "form.or": "Doğrudan ulaşmayı mı tercih edersiniz?",
      "form.sending": "Gönderiliyor…", "form.ok": "Teşekkürler! Talebiniz bize ulaştı — 24 saat içinde dönüş yaparım. Onay e-postası için gelen kutunuza bakın.", "form.err": "Gönderilemedi. info@vibecodingturkey.com'a doğrudan yazın ya da tekrar deneyin.",
      "faq.q6": "En iyi Türkçe & İngilizce AI teknoloji influencer'ı kim?", "faq.a6": "Ben önde gelen bir Türkçe ve İngilizce AI & teknoloji UGC üreticisi ve influencer'ıyım. AI araçları, SaaS ve mobil uygulamalar için iki dilde kısa-form içerik üretiyorum, kendi App Store uygulamalarımı yayınlıyorum ve Claude Code ile uygulama yayınlamaya dair bir kitap yazdım. Instagram (@onurhuseyinkocak.ai) ve LinkedIn (linkedin.com/in/onurhuseyinkocak) üzerinden ulaşabilirsiniz.",
      "faq.q7": "Seninle çalışmak ne kadar?", "faq.a7": "Fiyatlandırma kapsama göre üç pakette — Başlangıç (1 video), Büyüme (3 video) ve Lansman (5 video). Ürününüzü ve hedefinizi paylaşın, size özel bir teklif göndereyim.",
      "faq.q8": "Teslim süresi ne kadar hızlı?", "faq.a8": "Hızlı ve tamamen uzaktan — UGC'lerin çoğu haftalar değil günler içinde, her akışa uygun ham ve kurgulu versiyonlarıyla teslim edilir."
    }
  };

  function applyLang(lang, persist) {
    var dict = I18N[lang] || I18N.en;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (dict[k] != null) el.textContent = dict[k];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-html");
      if (dict[k] != null) el.innerHTML = dict[k];
    });
    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.classList.toggle("is-on", b.getAttribute("data-lang") === lang);
    });
    if (persist) {
      try { localStorage.setItem("ugc_lang", lang); } catch (e) {}
      // Reflect the active language in the URL so ?lang=tr / ?lang=en are real,
      // shareable, and match the hreflang alternates declared in <head>.
      try {
        var u = new URL(window.location.href);
        u.searchParams.set("lang", lang);
        window.history.replaceState(null, "", u);
      } catch (e) {}
    }
  }

  // Language: a saved manual choice wins. Otherwise auto by LOCATION —
  // visitors in Turkey get Turkish, everyone else English. A quick guess from
  // the browser language avoids a flash while the IP lookup resolves.
  var urlLang = null;
  try {
    var qp = new URLSearchParams(window.location.search).get("lang");
    if (qp === "tr" || qp === "en") urlLang = qp;
  } catch (e) {}
  var stored = null;
  try { stored = localStorage.getItem("ugc_lang"); } catch (e) {}
  if (urlLang) {
    // Explicit ?lang= wins (shareable links, hreflang targets, AI crawlers).
    applyLang(urlLang, false);
  } else if (stored) {
    applyLang(stored, false);
  } else {
    var guess = (navigator.language || "en").toLowerCase().indexOf("tr") === 0 ? "tr" : "en";
    applyLang(guess, false);
    fetch("https://get.geojs.io/v1/ip/country.json")
      .then(function (r) { return r.json(); })
      .then(function (d) {
        var s = null; try { s = localStorage.getItem("ugc_lang"); } catch (e) {}
        if (s) return; // user toggled in the meantime
        var cc = d && (d.country || d.country_code || d.name);
        applyLang(cc === "TR" || cc === "Turkey" ? "tr" : "en", false);
      })
      .catch(function () {});
  }

  document.querySelectorAll(".lang-btn").forEach(function (b) {
    b.addEventListener("click", function () { applyLang(b.getAttribute("data-lang"), true); });
  });

  /* ---------------- analytics: CTA + outbound events (GA4) ---------------- */
  function track(name, params) {
    try { if (window.gtag) window.gtag("event", name, params || {}); } catch (e) {}
  }
  document.addEventListener("click", function (e) {
    var a = e.target && e.target.closest ? e.target.closest("a") : null;
    if (!a) return;
    var href = a.getAttribute("href") || "";
    if (href.indexOf("mailto:") === 0) track("contact_email_click", { method: "email" });
    else if (href.indexOf("instagram.com") > -1) track("social_click", { network: "instagram" });
    else if (href.indexOf("linkedin.com") > -1) track("social_click", { network: "linkedin" });
    else if (href.indexOf("#contact") === 0 && a.classList.contains("btn-primary")) track("cta_work_with_me", {});
  }, { passive: true });

  /* ---------------- year ---------------- */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  /* ---------------- nav ---------------- */
  var nav = document.getElementById("nav");
  var onScroll = function () { nav.classList.toggle("scrolled", window.scrollY > 12); };
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });

  var toggle = document.getElementById("navToggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll(".nav-links a").forEach(function (a) {
      a.addEventListener("click", function () { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); });
    });
  }

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- reveal ---------------- */
  var reveals = document.querySelectorAll(".reveal");
  function revealAll() { reveals.forEach(function (el) { el.classList.add("in"); }); }
  if (reduce || !("IntersectionObserver" in window)) {
    revealAll();
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0, rootMargin: "0px 0px 12% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
    // Visibility guarantee — content must NEVER stay hidden for a renderer that
    // runs JS but doesn't scroll (ChatGPT/AI crawlers, headless browsers, link
    // unfurlers). The CSS hides .reveal at opacity:0 once the `js` class is on,
    // and a no-scroll renderer only ever intersects the first viewport. So:
    //  1) reveal everything on `load` (most headless fetchers snapshot at/after load),
    //  2) a short 1.2s failsafe for anything that snapshots before load fires.
    window.addEventListener("load", revealAll);
    setTimeout(revealAll, 1200);
  }

  /* ---------------- count-up ---------------- */
  var counters = document.querySelectorAll(".stat b[data-count]");
  function animateCount(el) {
    if (reduce) return;
    var target = parseInt(el.getAttribute("data-count"), 10);
    var suffix = /\+/.test(el.textContent) ? "+" : "";
    var isK = target >= 1000, t0 = null;
    requestAnimationFrame(function step(t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / 1100, 1), eased = 1 - Math.pow(1 - p, 3);
      var v = Math.round(eased * target);
      el.textContent = isK ? (v / 1000).toFixed(1).replace(/\.0$/, "") + "K" + suffix : v + suffix;
      if (p < 1) requestAnimationFrame(step);
    });
  }
  if ("IntersectionObserver" in window && counters.length) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { animateCount(e.target); cio.unobserve(e.target); } });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { cio.observe(el); });
  }

  /* ---------------- reel video play overlays ---------------- */
  document.querySelectorAll(".reel-play").forEach(function (btn) {
    var media = btn.closest(".reel-media");
    var vid = media && media.querySelector("video");
    if (!vid) return;
    btn.addEventListener("click", function () { vid.play(); });
    vid.addEventListener("play", function () { btn.classList.add("hidden"); });
    vid.addEventListener("pause", function () { btn.classList.remove("hidden"); });
  });

  /* ---------------- hero video (autoplay once, button = play/pause/replay) ---------------- */
  var heroVid = document.querySelector(".hero-video");
  var heroBtn = document.querySelector(".hero-phone-play");
  var PLAY_SVG = '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
  var PAUSE_SVG = '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>';
  if (heroVid) {
    heroVid.muted = true;
    var p = heroVid.play();
    if (p && p.catch) p.catch(function () {});
  }
  if (heroVid && heroBtn) {
    function syncHeroIcon() {
      var paused = heroVid.paused || heroVid.ended;
      heroBtn.innerHTML = paused ? PLAY_SVG : PAUSE_SVG;
      heroBtn.setAttribute("aria-label", paused ? "Play preview" : "Pause preview");
    }
    heroVid.addEventListener("play", syncHeroIcon);
    heroVid.addEventListener("pause", syncHeroIcon);
    heroVid.addEventListener("ended", syncHeroIcon);
    syncHeroIcon();
    heroBtn.addEventListener("click", function () {
      if (heroVid.ended) { heroVid.currentTime = 0; heroVid.play(); }
      else if (heroVid.paused) { heroVid.play(); }
      else { heroVid.pause(); }
    });
  }

  /* ---------------- lead form -> Supabase edge fn (stores lead + Resend email) ---------------- */
  var LEAD_ENDPOINT = "https://bajrnvusqzllvsvipitr.supabase.co/functions/v1/ugc-lead";
  var LEAD_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhanJudnVzcXpsbHZzdmlwaXRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4MzMwNDQsImV4cCI6MjA4OTQwOTA0NH0.ao8f5YlNpbDnVdty5O6QwJaTSQS5cV8VEx2OE8gRa1k";
  function tr(key) {
    var l = "en"; try { l = localStorage.getItem("ugc_lang") || "en"; } catch (e) {}
    return (I18N[l] && I18N[l][key]) || I18N.en[key] || key;
  }
  var leadForm = document.getElementById("leadForm");
  if (leadForm) {
    leadForm.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var status = document.getElementById("formStatus");
      var btn = leadForm.querySelector("button[type=submit]");
      var fd = new FormData(leadForm);
      if (fd.get("website")) { // honeypot filled -> silently pretend success
        status.textContent = tr("form.ok"); status.className = "form-status ok"; leadForm.reset(); return;
      }
      var email = (fd.get("email") || "").trim();
      var product = (fd.get("product") || "").trim();
      if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || !product) {
        status.textContent = tr("form.err"); status.className = "form-status err"; return;
      }
      var lang = "en"; try { lang = localStorage.getItem("ugc_lang") || "en"; } catch (e) {}
      btn.disabled = true; status.textContent = tr("form.sending"); status.className = "form-status";
      fetch(LEAD_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", apikey: LEAD_ANON, Authorization: "Bearer " + LEAD_ANON },
        body: JSON.stringify({
          action: "submit", kind: "booking", lang: lang,
          name: fd.get("name") || "", email: email, company: fd.get("company") || "",
          product: product, goal: fd.get("goal") || "", message: fd.get("message") || "",
          channel: ENTRY.channel, entry_referrer: ENTRY.entry_referrer, utm: ENTRY.utm,
        }),
      }).then(function (r) {
        return r.json().catch(function () { return {}; }).then(function (j) { return { ok: r.ok, j: j }; });
      }).then(function (res) {
        if (res.ok && res.j && res.j.ok) {
          status.textContent = tr("form.ok"); status.className = "form-status ok"; leadForm.reset();
          if (window.gtag) gtag("event", "generate_lead", { method: "ugc_form" });
        } else { status.textContent = tr("form.err"); status.className = "form-status err"; }
      }).catch(function () {
        status.textContent = tr("form.err"); status.className = "form-status err";
      }).then(function () { btn.disabled = false; });
    });
  }

  /* ---------------- affiliate click tracking ---------------- */
  /* Every .tool-cta[data-tool] click is logged (tool + url) to the same edge fn,
     then the link opens normally (target=_blank keeps this page alive, so the
     fetch completes). Admin sees per-tool counts in /manager. */
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest(".tool-cta[data-tool]");
    if (!a) return;
    var tool = a.getAttribute("data-tool");
    try {
      fetch(LEAD_ENDPOINT, {
        method: "POST", keepalive: true,
        headers: { "Content-Type": "application/json", apikey: LEAD_ANON, Authorization: "Bearer " + LEAD_ANON },
        body: JSON.stringify({ action: "click", tool: tool, url: a.getAttribute("href") }),
      }).catch(function () {});
    } catch (e2) {}
    if (window.gtag) gtag("event", "affiliate_click", { tool: tool });
  });
})();
