// Navbar Toggle (Hamburger)
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Clear form button
const clearBtn = document.getElementById('clearBtn');
const contactForm = document.getElementById('contactForm');

if (clearBtn && contactForm) {
  clearBtn.addEventListener('click', () => {
    contactForm.reset();
  });
}

// Year auto update
document.getElementById('year').textContent = new Date().getFullYear();
