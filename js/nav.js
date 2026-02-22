// Mobile navigation toggle
document.addEventListener("DOMContentLoaded", function () {
  var btn = document.getElementById("menu-toggle");
  var menu = document.getElementById("mobile-menu");
  var iconOpen = document.getElementById("icon-open");
  var iconClose = document.getElementById("icon-close");

  if (!btn || !menu) return;

  btn.addEventListener("click", function () {
    var isOpen = menu.classList.toggle("open");
    iconOpen.style.display = isOpen ? "none" : "block";
    iconClose.style.display = isOpen ? "block" : "none";
  });

  // Close menu when a link is clicked
  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      menu.classList.remove("open");
      iconOpen.style.display = "block";
      iconClose.style.display = "none";
    });
  });
});
