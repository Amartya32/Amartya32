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
  ["Open Positions and Consulting", "positions-consulting.html"]
];

(function () {
  var header = document.querySelector(".site-header");
  if (!header) return;
  var page = (location.pathname.split("/").pop() || "index").replace(/\.html$/, "");
  var html = page === "index" ? "" : '<a class="wordmark" href="./">Amartya Ganguly</a>';
  html += '<nav class="tabs" aria-label="Pages">';
  for (var i = 0; i < TABS.length; i++) {
    var name = TABS[i][1] === "./" ? "index" : TABS[i][1].replace(/\.html$/, "");
    html += '<a href="' + TABS[i][1] + '"' + (name === page ? ' aria-current="page"' : "") + ">" + TABS[i][0] + "</a>";
  }
  header.innerHTML = html + "</nav>";
  // On small screens the tabs scroll sideways; start with the current tab in view
  var nav = header.querySelector(".tabs");
  var current = nav.querySelector('[aria-current="page"]');
  if (current && nav.scrollWidth > nav.clientWidth) {
    nav.scrollLeft = current.offsetLeft - nav.offsetLeft - (nav.clientWidth - current.offsetWidth) / 2;
  }
})();
