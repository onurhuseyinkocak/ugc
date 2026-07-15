(function () {
  "use strict";
  var script = document.currentScript;
  var site = script && script.dataset.site;
  if (!site) return;
  var origin = "https://academy.vibecodingturkey.com";
  var controller = new AbortController();
  var timer = window.setTimeout(function () { controller.abort(); }, 2500);

  function make(tag, text, styles) {
    var node = document.createElement(tag);
    if (text) node.textContent = text;
    Object.assign(node.style, styles || {});
    return node;
  }

  function renderMaintenance(status, message) {
    var main = make("main", "", { minHeight: "100dvh", display: "grid", placeItems: "center", padding: "64px 20px", background: "#15120f", color: "#f7f2ea", boxSizing: "border-box" });
    var content = make("div", "", { maxWidth: "720px", textAlign: "center" });
    var badge = make("span", status === "maintenance" ? "PLANNED MAINTENANCE" : "TEMPORARILY PAUSED", { display: "inline-flex", border: "1px solid #574d43", borderRadius: "999px", padding: "6px 11px", color: "#d4ad7a", font: "700 12px Inter, sans-serif", letterSpacing: ".04em" });
    var title = make("h1", site === "ugc-mine" ? "Mine’s portfolio will be back shortly." : "Onur’s portfolio will be back shortly.", { margin: "24px 0 16px", font: "500 clamp(42px, 9vw, 88px)/.98 Fraunces, Georgia, serif", letterSpacing: "-.045em" });
    var copy = make("p", message || "A planned portfolio update is in progress. Existing collaboration requests remain safely stored.", { maxWidth: "580px", margin: "0 auto", color: "#b9ada0", font: "400 16px/1.75 Inter, sans-serif" });
    var link = make("a", "Visit Vibe Coding Turkey", { display: "inline-flex", marginTop: "26px", border: "1px solid #574d43", borderRadius: "999px", padding: "12px 17px", color: "#f7f2ea", font: "700 14px Inter, sans-serif", textDecoration: "none" });
    link.href = "https://vibecodingturkey.com";
    content.append(badge, title, copy, link);
    main.appendChild(content);
    document.body.replaceChildren(main);
  }

  function apply(payload) {
    var config = payload && payload.config && typeof payload.config === "object" ? payload.config : {};
    var features = config.features && typeof config.features === "object" ? config.features : {};
    document.documentElement.dataset.vctApplications = String(features.applications !== false);
    document.documentElement.dataset.vctPurchases = String(features.purchases !== false);
    document.documentElement.dataset.vctPublicApi = String(features.public_api !== false);
    if (payload.status && payload.status !== "active") {
      renderMaintenance(payload.status, typeof config.maintenance_message === "string" ? config.maintenance_message : "");
      return;
    }
    if (typeof config.announcement === "string" && config.announcement.trim()) {
      var banner = make("div", config.announcement.trim(), { position: "relative", zIndex: "10000", padding: "10px 16px", background: "#8a5d35", color: "white", textAlign: "center", font: "700 13px Inter, sans-serif" });
      banner.setAttribute("role", "status");
      document.body.prepend(banner);
    }
    if (features.applications === false) {
      document.querySelectorAll("form").forEach(function (form) {
        form.querySelectorAll("button[type=submit], input[type=submit]").forEach(function (button) { button.disabled = true; button.setAttribute("aria-disabled", "true"); });
        var notice = make("p", "New collaboration requests are temporarily closed.", { color: "#8a5d35", font: "700 13px/1.5 Inter, sans-serif" });
        notice.setAttribute("role", "status");
        form.prepend(notice);
      });
    }
  }

  fetch(origin + "/api/ecosystem/config/" + encodeURIComponent(site), { signal: controller.signal })
    .then(function (response) { return response.ok ? response.json() : null; })
    .then(function (payload) { if (payload) apply(payload); })
    .catch(function () {})
    .finally(function () { window.clearTimeout(timer); });
})();

