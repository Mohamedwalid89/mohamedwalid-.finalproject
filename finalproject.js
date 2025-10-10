// ===== SCROLL ANIMATION =====
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;
    if (revealTop < windowHeight - 150) {
      el.classList.add("active");
    }
  });
});

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) navbar.classList.add("scrolled");
  else navbar.classList.remove("scrolled");
});

// ===== CONTACT FORM =====
const contactBtn = document.getElementById("contactBtn");
const contactForm = document.getElementById("contactForm");
const popup = document.getElementById("popup");

contactBtn.addEventListener("click", () => {
  contactForm.classList.toggle("show");
});

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  popup.classList.add("show");
  setTimeout(() => popup.classList.remove("show"), 3000);
  contactForm.reset();
});
