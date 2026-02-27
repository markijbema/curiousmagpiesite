// Mobile navigation toggle
document.addEventListener("DOMContentLoaded", function () {
  var animateVariant = new URLSearchParams(window.location.search).get("animate");
  if (/^[1-3]$/.test(animateVariant)) {
    document.querySelectorAll(".logo-img").forEach(function (logoImg) {
      logoImg.src = logoImg.src.replace(
        /ekster(?:-ani[1-3])?\.svg$/,
        "ekster-ani" + animateVariant + ".svg"
      );
    });
  }

  var btn = document.getElementById("menu-toggle");
  var menu = document.getElementById("mobile-menu");
  var iconOpen = document.getElementById("icon-open");
  var iconClose = document.getElementById("icon-close");

  if (!btn || !menu) return;

  btn.addEventListener("click", function () {
    var isOpen = menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", isOpen);
    btn.setAttribute("aria-label", isOpen ? "Menu sluiten" : "Menu openen");
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
