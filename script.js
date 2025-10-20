// === Navbar toggle ===
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// === Dynamic year ===
document.getElementById('year').textContent = new Date().getFullYear();

// === Form functionality ===
const form = document.getElementById('contactForm');
const clearBtn = document.getElementById('clearBtn');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Terima kasih! Pesan Anda telah dikirim.');
  form.reset();
});

clearBtn.addEventListener('click', () => {
  form.reset();
});
