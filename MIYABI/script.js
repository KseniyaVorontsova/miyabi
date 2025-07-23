// Для поддержки старых браузеров (опционально)
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});
// Плавный переход к разделу 'Путешествия' по кнопке
document.querySelector('.gold-btn').addEventListener('click', function() {
  const journeysSection = document.getElementById('journeys');
  if (journeysSection) {
    journeysSection.scrollIntoView({ behavior: 'smooth' });
  }
  this.blur(); // Снимает фокус с кнопки, возвращая цвет к исходному
});

// --- Мобильное меню ---
const burger = document.getElementById('burger-menu');
const nav = document.querySelector('.nav');
const mobileBg = document.getElementById('mobile-nav-bg');
const navLinks = document.querySelectorAll('.nav-link, .lang-toggle');

function closeMenu() {
  burger.classList.remove('active');
  nav.classList.remove('open');
  mobileBg.classList.remove('active');
  document.body.style.overflow = '';
}

burger.addEventListener('click', function() {
  const isOpen = nav.classList.toggle('open');
  burger.classList.toggle('active', isOpen);
  mobileBg.classList.toggle('active', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

mobileBg.addEventListener('click', closeMenu);
navLinks.forEach(link => link.addEventListener('click', closeMenu)); 