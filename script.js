document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // Theme Toggle
  const themeToggle = document.querySelector(".theme-toggle");
  const body = document.body;

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      const isDarkMode = body.classList.contains("dark-mode");
      themeToggle.innerHTML = isDarkMode
        ? '<i class="fas fa-sun"></i>' // Sun icon for light mode
        : '<i class="fas fa-moon"></i>'; // Moon icon for dark mode
    });
  }

  // Scroll-to-Top Button
  const scrollToTopButton = document.querySelector(".scroll-to-top");

  if (scrollToTopButton) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollToTopButton.classList.add("visible");
      } else {
        scrollToTopButton.classList.remove("visible");
      }
    });

    scrollToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // Progress Bar
  const progressBar = document.querySelector(".progress-bar");

  if (progressBar) {
    window.addEventListener("scroll", () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      progressBar.style.width = scrolled + "%";
    });
  }

  // Confetti Effect
  function triggerConfetti() {
    if (typeof confetti === "function") {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }

  // Example: Trigger confetti on button click
  const confettiButton = document.querySelector(".btn");

  if (confettiButton) {
    confettiButton.addEventListener("click", triggerConfetti);
  }
});

// Loader Animation
window.addEventListener("load", () => {
  const loaderWrapper = document.querySelector(".loader-wrapper");

  if (loaderWrapper) {
    loaderWrapper.classList.add("hidden");
  }
});
