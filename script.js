/* Onur Koçak — UGC portfolio · vanilla JS (no deps) */
(function () {
  "use strict";

  /* ---------------- i18n ---------------- */
  var I18N = {
    en: {
      "brand.role": "UGC Creator",
      "nav.create": "What I Create", "nav.work": "Portfolio", "nav.packages": "Packages", "nav.about": "About", "nav.cta": "Work With Me",
      "hero.eyebrow": "AI-Native UGC Creator · Founder · Product Storyteller",
      "hero.title": "UGC Videos That Make <span class=\"hl\">Tech Products</span> Feel Human",
      "hero.sub": "I create short-form UGC, educational reels, founder-style product videos, and AI-native content for apps, SaaS, AI tools, and digital products — in both English and Turkish.",
      "hero.cta1": "Work With Me", "hero.cta2": "View Portfolio",
      "hero.lang": "UGC in Turkish & English", "hero.loc": "Bangkok, Thailand", "hero.world": "Brands worldwide",
      "strip.1": "AI Founder", "strip.2": "App Builder", "strip.3": "Short-Form Creator", "strip.4": "Tech Product Storytelling", "strip.5": "Turkish & English Content",
      "stat.1": "Organic views (recent reels)", "stat.2": "Comments earned", "stat.3": "Tech videos shipped", "stat.4": "Content in both languages",
      "stat.note": "Pulled live from @onurhuseyinkocak.ai — real numbers, no inflated metrics.",
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
      "contact.lead": "Tell me about your product and goal — I’ll send angles and a scope.",
      "contact.email": "Email Me", "contact.dm": "Instagram DM"
    },
    tr: {
      "brand.role": "UGC Üreticisi",
      "nav.create": "Ne Üretiyorum", "nav.work": "Portfolyo", "nav.packages": "Paketler", "nav.about": "Hakkımda", "nav.cta": "Birlikte Çalışalım",
      "hero.eyebrow": "AI-Yerlisi UGC Üreticisi · Kurucu · Ürün Hikâyecisi",
      "hero.title": "<span class=\"hl\">Teknoloji Ürünlerini</span> İnsani Hissettiren UGC Videolar",
      "hero.sub": "Uygulamalar, SaaS, AI araçları ve dijital ürünler için kısa-form UGC, eğitici reels, kurucu tarzı ürün videoları ve AI-yerlisi içerik üretiyorum — hem İngilizce hem Türkçe.",
      "hero.cta1": "Birlikte Çalışalım", "hero.cta2": "Portfolyoyu Gör",
      "hero.lang": "Türkçe & İngilizce UGC", "hero.loc": "Bangkok, Tayland", "hero.world": "Dünya çapında markalar",
      "strip.1": "AI Kurucusu", "strip.2": "Uygulama Geliştirici", "strip.3": "Kısa-Form Üretici", "strip.4": "Teknoloji Ürün Hikâyeciliği", "strip.5": "Türkçe & İngilizce İçerik",
      "stat.1": "Organik izlenme (son reels)", "stat.2": "Toplanan yorum", "stat.3": "Yayınlanan tech video", "stat.4": "İki dilde içerik",
      "stat.note": "@onurhuseyinkocak.ai'dan canlı çekildi — gerçek sayılar, şişirilmiş metrik yok.",
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
      "contact.lead": "Ürününüzü ve hedefinizi anlatın — açıları ve kapsamı göndereyim.",
      "contact.email": "E-posta Gönder", "contact.dm": "Instagram DM"
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
    if (persist) { try { localStorage.setItem("ugc_lang", lang); } catch (e) {} }
  }

  // Language: a saved manual choice wins. Otherwise auto by LOCATION —
  // visitors in Turkey get Turkish, everyone else English. A quick guess from
  // the browser language avoids a flash while the IP lookup resolves.
  var stored = null;
  try { stored = localStorage.getItem("ugc_lang"); } catch (e) {}
  if (stored) {
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
  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
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

  /* ---------------- hero video (autoplay muted, button toggles sound) ---------------- */
  var heroVid = document.querySelector(".hero-video");
  var heroBtn = document.querySelector(".hero-phone-play");
  if (heroVid) {
    heroVid.muted = true;
    var p = heroVid.play();
    if (p && p.catch) p.catch(function () {});
  }
  if (heroVid && heroBtn) {
    heroBtn.addEventListener("click", function () {
      heroVid.muted = !heroVid.muted;
      if (heroVid.paused) heroVid.play();
      heroBtn.style.background = heroVid.muted ? "rgba(255,255,255,.9)" : "#2563eb";
      heroBtn.style.color = heroVid.muted ? "#1b4ed1" : "#fff";
    });
  }
})();
