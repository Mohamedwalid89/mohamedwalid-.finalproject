// ========== Contact Form Toggle ==========
document.addEventListener("DOMContentLoaded", function () {
  const contactBtn = document.getElementById("contactBtn");
  const contactForm = document.getElementById("contactForm");

  contactBtn.addEventListener("click", function (e) {
    e.preventDefault();
    contactForm.classList.toggle("hidden");

    // تغيير النص حسب الحالة
    if (!contactForm.classList.contains("hidden")) {
      contactBtn.textContent = "Hide Form";
    } else {
      contactBtn.textContent = "Contact with us";
    }
  });
});

// ========== Reveal Animation on Scroll ==========
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 100;

  revealElements.forEach((el) => {
    const revealTop = el.getBoundingClientRect().top;

    if (revealTop < windowHeight - revealPoint) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // لتشغيلها عند تحميل الصفحة أول مرة
