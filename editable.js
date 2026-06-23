/* UGC content-override layer.
   Applies admin-edited overrides on top of the hardcoded site content, per
   language. Reads from the ugc-content edge function (public GET). Re-applies
   when the page language changes (the i18n system sets <html lang>), so
   overrides survive EN/TR/TH switches.

   Each page sets, before this script:
     window.UGC_ADMIN_SITE = "onur" | "mine" | "movia";
     window.UGC_ANON = "<supabase anon key>";
*/
(function () {
  var SITE = window.UGC_ADMIN_SITE;
  if (!SITE) return;
  var FN = "https://bajrnvusqzllvsvipitr.supabase.co/functions/v1/ugc-content";
  var ANON = window.UGC_ANON || "";

  function curLang() { return (document.documentElement.lang || "en").slice(0, 2); }

  function apply() {
    var ov = window.__UGC_OVERRIDES;
    if (!ov) return;
    var lang = curLang();
    function pick(o) { return o[lang] != null ? o[lang] : (o.all != null ? o.all : null); }
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var o = ov[el.getAttribute("data-i18n")]; if (!o) return;
      var v = pick(o); if (v != null) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var o = ov[el.getAttribute("data-i18n-html")]; if (!o) return;
      var v = pick(o); if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll("[data-edit]").forEach(function (el) {
      var o = ov[el.getAttribute("data-edit")]; if (!o) return;
      var v = pick(o); if (v != null) el.textContent = v;
    });
    document.querySelectorAll("[data-edit-src]").forEach(function (el) {
      var o = ov[el.getAttribute("data-edit-src")]; if (o && o.all != null) el.src = o.all;
    });
    document.querySelectorAll("[data-edit-href]").forEach(function (el) {
      var o = ov[el.getAttribute("data-edit-href")]; if (o && o.all != null) el.setAttribute("href", o.all);
    });
  }
  window.__ugcApplyOverrides = apply;

  fetch(FN + "?site=" + encodeURIComponent(SITE), { headers: ANON ? { apikey: ANON } : {} })
    .then(function (r) { return r.json(); })
    .then(function (d) {
      var rows = (d && d.content) || [];
      var ov = {};
      rows.forEach(function (row) {
        (ov[row.key] = ov[row.key] || {})[row.lang] = row.value;
      });
      window.__UGC_OVERRIDES = ov;
      apply();
      // Re-apply whenever the language changes (i18n updates <html lang>).
      try {
        new MutationObserver(apply).observe(document.documentElement, {
          attributes: true, attributeFilter: ["lang"],
        });
      } catch (e) {}
    })
    .catch(function () {});
})();
