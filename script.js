// ===========================
// NAV SCROLL STATE
// ===========================
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// ===========================
// MOBILE MENU
// ===========================
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
const mmLinks = document.querySelectorAll('.mm-link');

burger.addEventListener('click', () => mobileMenu.classList.add('open'));
closeMenu.addEventListener('click', () => mobileMenu.classList.remove('open'));
mmLinks.forEach(link => link.addEventListener('click', () => mobileMenu.classList.remove('open')));

// ===========================
// PROJECT FILTER
// ===========================
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.proj-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    projectCards.forEach(card => {
      if (filter === 'all') {
        card.classList.remove('hidden');
      } else {
        const cats = card.dataset.cat || '';
        card.classList.toggle('hidden', !cats.includes(filter));
      }
    });
  });
});

// ===========================
// SCROLL REVEAL
// ===========================
const revealElements = document.querySelectorAll(
  '.section-header, .about-grid, .research-card, .interests-grid, .proj-card, .skill-group, .honor-item, .contact-item, .hero-stats, .hero-content, .filter-bar'
);

revealElements.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

revealElements.forEach(el => revealObserver.observe(el));

// Hero elements visible immediately (above the fold)
document.querySelector('.hero-content').classList.add('visible');
setTimeout(() => {
  document.querySelector('.hero-stats').classList.add('visible');
}, 200);

// ===========================
// ACTIVE NAV LINK ON SCROLL
// ===========================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${entry.target.id}`
          ? 'var(--text)'
          : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(section => sectionObserver.observe(section));
