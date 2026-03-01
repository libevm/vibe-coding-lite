/* Vibe Coding Lite — main.js */

(function () {
  "use strict";

  /* ===========================
     Step 13 — Error handler
     =========================== */

  window.onerror = function (message, source, lineno, colno, error) {
    console.error("[VibeCodingLite] Error:", {
      message: message,
      source: source,
      line: lineno,
      column: colno,
      error: error
    });
  };

  /* ===========================
     Step 11 — Copy-to-clipboard
     =========================== */

  function initCopyButtons() {
    var pres = document.querySelectorAll("pre");

    pres.forEach(function (pre) {
      // Skip mermaid diagram blocks
      if (pre.classList.contains("mermaid")) return;

      var btn = document.createElement("button");
      btn.className = "copy-btn";
      btn.textContent = "Copy";
      btn.setAttribute("aria-label", "Copy code to clipboard");
      btn.type = "button";

      btn.addEventListener("click", function () {
        var code = pre.querySelector("code");
        var text = code ? code.textContent : pre.textContent;

        navigator.clipboard.writeText(text).then(function () {
          btn.textContent = "Copied";
          setTimeout(function () {
            btn.textContent = "Copy";
          }, 2000);
        }).catch(function () {
          btn.textContent = "Failed";
          setTimeout(function () {
            btn.textContent = "Copy";
          }, 2000);
        });
      });

      pre.appendChild(btn);
    });
  }

  /* ===========================
     Step 12 — Active section indicator
     =========================== */

  function initActiveNav() {
    var sections = document.querySelectorAll("main section[id]");
    var navLinks = document.querySelectorAll("nav a");

    if (!sections.length || !navLinks.length) return;

    // Build a map of id -> nav link
    var linkMap = {};
    navLinks.forEach(function (link) {
      var hash = link.getAttribute("href");
      if (hash && hash.startsWith("#")) {
        linkMap[hash.substring(1)] = link;
      }
    });

    var currentActive = null;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.id;
          if (currentActive) {
            currentActive.classList.remove("active");
          }
          if (linkMap[id]) {
            linkMap[id].classList.add("active");
            currentActive = linkMap[id];
          }
        }
      });
    }, {
      rootMargin: "-10% 0px -80% 0px",
      threshold: 0
    });

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  /* ===========================
     Init
     =========================== */

  document.addEventListener("DOMContentLoaded", function () {
    initCopyButtons();
    initActiveNav();
  });

})();
