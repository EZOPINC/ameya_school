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


// Add to main.js (or inline on events page)
document.addEventListener('DOMContentLoaded', function () {
  const countdownEl = document.getElementById('next-event-countdown');
  if (!countdownEl) return;

  // event-date in YYYY-MM-DD
  const dateStr = countdownEl.dataset.eventDate;
  // create Date at local timezone midnight of event date
  const eventDate = new Date(dateStr + 'T00:00:00');

  function updateCountdown() {
    const now = new Date();
    let diff = eventDate - now;

    if (diff <= 0) {
      countdownEl.textContent = 'Happening today or already passed.';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);
    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);
    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);
    const seconds = Math.floor(diff / 1000);

    countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
});

