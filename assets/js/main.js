// ===============================
// Ameya School of Dance - Main JS
// ===============================

// ---- Page-wide Animation ----
document.addEventListener("DOMContentLoaded", function () {
  const animatedSections = document.querySelectorAll(".animate-fade");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    { threshold: 0.2 }
  );

  animatedSections.forEach((section) => observer.observe(section));
});

// ---- Mobile Menu Toggle ----
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".site-header_toggle");
  const navMenu = document.querySelector(".site-header_menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      menuToggle.classList.toggle("open");

      // Accessibility
      const expanded = menuToggle.getAttribute("aria-expanded") === "true" || false;
      menuToggle.setAttribute("aria-expanded", !expanded);
    });
  }
});
