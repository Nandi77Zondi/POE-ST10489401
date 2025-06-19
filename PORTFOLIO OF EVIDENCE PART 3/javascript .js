document.addEventListener("DOMContentLoaded", function () {
  // Hamburger menu toggle
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Buy button toggle
  const buyBtn = document.getElementById("buyBtn");
  const message = document.getElementById("message");

  if (buyBtn && message) {
    buyBtn.addEventListener("click", function () {
      message.classList.remove("hidden");
    });
  }

  // Slideshow functionality
  let slideIndex = 0;
  const slides = document.querySelectorAll(".slide");

  function showSlides() {
    slides.forEach(slide => slide.style.display = "none");
    slideIndex = (slideIndex + 1) > slides.length ? 1 : slideIndex + 1;
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // 3 seconds per slide
  }

  if (slides.length > 0) {
    showSlides();
  }
});
function mybit() {
	  document.getElementById"Nandi'soven")innerHTML="lets's convert the text."
}
function today () {
	document.getElementByID("Nandi'soven")innerHTML=Date()
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});
// Mobile Hamburger Toggle
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});
function updateTime() {
  const timeEl = document.getElementById("currentTime");
  const now = new Date();

  const formatted = now.toLocaleString('en-ZA', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  timeEl.textContent = formatted;
  timeEl.setAttribute('datetime', now.toISOString());
}

// Update time every second
setInterval(updateTime, 1000);
updateTime(); // Initial call
  // ======== Scroll to Top Button ========
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ======== Contact Form Validation ========
  const form = document.querySelector('.contact-form form');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Remove old error messages
      const oldErrors = form.querySelectorAll('.error-message');
      oldErrors.forEach(el => el.remove());

      const name = form.querySelector('#name');
      const email = form.querySelector('#email');
      const message = form.querySelector('#message');

      let valid = true;

      if (!name.value.trim()) {
        showError(name, 'Name is required.');
        valid = false;
      }

      if (!email.value.trim()) {
        showError(email, 'Email is required.');
        valid = false;
      } else if (!validateEmail(email.value.trim())) {
        showError(email, 'Please enter a valid email address.');
        valid = false;
      }

      if (!message.value.trim()) {
        showError(message, 'Message is required.');
        valid = false;
      }

      if (valid) {
        alert(`Thank you, ${name.value.trim()}! Your message has been sent.`);
        form.reset();
      }
    });
  }

  // ======== Helper Functions ========
  function showError(input, message) {
    const error = document.createElement('small');
    error.className = 'error-message';
    error.style.color = 'red';
    error.style.display = 'block';
    error.style.marginTop = '5px';
    error.textContent = message;
    input.parentElement.appendChild(error);
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }
});

