// Typewriter Effect
document.addEventListener("DOMContentLoaded", () => {
  const typewriter = document.querySelector(".typewriter");
  const words = ["Web Developer", "Graphic Designer", "Email Marketing Specialist", "UI/UX Designer"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];
    const displayedText = currentWord.substring(0, charIndex);
    typewriter.textContent = displayedText;

    if (!isDeleting && charIndex < currentWord.length) {
      charIndex++;
      setTimeout(type, 100);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(type, 50);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 1000);
    }
  }

  type();
});

// Menu Toggle
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('main-menu');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Intersection Observer for Scroll Animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      
      // Card flip on scroll into view
      if (entry.target.classList.contains('card-wrapper')) {
        const card = entry.target.querySelector('.card');
        setTimeout(() => {
          card.classList.add('flipped');
        }, 300);
      }
    }
  });
}, observerOptions);

// Observe all animated elements
const animatedElements = document.querySelectorAll('.card-wrapper, .about-text, .about-image-grid, .process-step, .contact-container');
animatedElements.forEach(el => observer.observe(el));

// Manual card flip on click
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function() {
    this.classList.toggle('flipped');
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      // Close mobile menu if open
      if (menu.classList.contains('active')) {
        menu.classList.remove('active');
      }
    }
  });
});