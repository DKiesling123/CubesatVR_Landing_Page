// Toggle Mobile Navigation
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close mobile menu when clicking on a link
const navLinkItems = document.querySelectorAll(".nav-links li a");
navLinkItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Smooth scroll to a specific section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Simple form submission handler (demo only)
const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Basic validation
  if (!name || !email || !message) {
    alert("Please fill in all required fields.");
    return;
  }

  // Here you could implement real form submission logic (AJAX, fetch, etc.)
  alert(`Thank you, ${name}! Your message has been received. We'll respond soon.`);
  contactForm.reset();
});

