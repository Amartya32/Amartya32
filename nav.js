// The tabs at the top of every page.
// To add, rename or reorder a tab, change this list. Each line is ["Tab name", "file name"].
var TABS = [
  ["About", "./"],
  ["Projects", "projects.html"],
  ["Publications", "publications.html"],
  ["Teaching", "teaching.html"],
  ["Media", "media.html"],
  ["Social Entrepreneurship", "social-entrepreneurship.html"],
  ["Demos and Competitions", "demos-competitions.html"],
  ["Open Positions", "positions.html"],
  ["Consulting", "consulting.html"]
];

(function () {
  var root = document.documentElement;

  // Light or dark: the visitor's own choice if they made one, otherwise their device setting
  var saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  var deviceDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.setAttribute("data-theme", saved === "light" || saved === "dark" ? saved : (deviceDark ? "dark" : "light"));

  var header = document.querySelector(".site-header");
  if (!header) return;
  var page = (location.pathname.split("/").pop() || "index").replace(/\.html$/, "");
  // Your name at the top left, on every page except About (where it sits under your photo)
    // No name in the top bar on any page: the tabs and the light/dark button share one row
  header.classList.add("is-home");
  var html = '<nav class="tabs" aria-label="Pages">';
  var name = TABS[i][1] === "./" ? "index" : TABS[i][1].replace(/\.html$/, "");
  html += '<a href="' + TABS[i][1] + '"' + (name === page ? ' aria-current="page"' : "") + ">" + TABS[i][0] + "</a>";
  }
  header.innerHTML = html + '</nav><button type="button" class="theme-toggle"></button>';

  // The sun/moon button
  var MOON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
  var SUN = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.5"/><path d="M12 1.5v2M12 20.5v2M4.6 4.6 6 6M18 18l1.4 1.4M1.5 12h2M20.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4"/></svg>';
  var button = header.querySelector(".theme-toggle");
  function showButton() {
    var dark = root.getAttribute("data-theme") === "dark";
    var label = dark ? "Switch to light mode" : "Switch to dark mode";
    button.innerHTML = dark ? SUN : MOON;
    button.setAttribute("aria-label", label);
    button.title = label;
  }
  showButton();
  button.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    showButton();
  });

  // On phones the tabs scroll sideways; start with the current tab in view
  var nav = header.querySelector(".tabs");
  var current = nav.querySelector('[aria-current="page"]');
  if (current && nav.scrollWidth > nav.clientWidth) {
    nav.scrollLeft = current.offsetLeft - nav.offsetLeft - (nav.clientWidth - current.offsetWidth) / 2;
  }
})();
