// DARK MODE //
function setToggleIcon(btn, isDark) {
  if (!btn) return;
  const icon = btn.querySelector('i');
  if (!icon) return;
  if (isDark) {
    icon.classList.remove('bi-moon-fill');
    icon.classList.add('bi-sun-fill');
  } else {
    icon.classList.remove('bi-sun-fill');
    icon.classList.add('bi-moon-fill');
  }
}

const darkBtn = document.getElementById('dark-toggle');

// Check if the user has previously toggled dark mode
const storedTheme = localStorage.getItem('theme');

// Only apply dark mode if user explicitly chose it
if (storedTheme === 'dark') {
  document.body.classList.add('dark');
}

if (darkBtn) setToggleIcon(darkBtn, document.body.classList.contains('dark'));

if (darkBtn) {
  darkBtn.addEventListener('click', () => {
    const nowDark = document.body.classList.toggle('dark');
    // Save the user choice in localStorage
    localStorage.setItem('theme', nowDark ? 'dark' : 'light');
    setToggleIcon(darkBtn, nowDark);
  });
}



// hamburger handling//
(function(){
  const hamburgers = Array.from(document.querySelectorAll('.hamburger'));
  if (!hamburgers.length) return;

  const getNavLinksFor = (burger) => {
    const targetId = burger.getAttribute('aria-controls');
    if (targetId) {
      const byId = document.getElementById(targetId);
      if (byId) return byId;
    }
    const nav = burger.closest('nav');
    if (nav) {
      const within = nav.querySelector('.nav-links');
      if (within) return within;
    }
    return document.querySelector('.nav-links');
  };

  const clearMobileNavIfNeeded = () => {
    if (window.innerWidth > 768) {
      document.querySelectorAll('.nav-links.active').forEach(nav => nav.classList.remove('active'));
      hamburgers.forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        b.classList.remove('open');
      });
    }
  };

  hamburgers.forEach(burger => {
    try { burger.type = 'button'; } catch (e) {}
    const navLinks = getNavLinksFor(burger);
    if (!navLinks) return;
    burger.setAttribute('aria-expanded', burger.getAttribute('aria-expanded') || 'false');
    burger.addEventListener('click', () => {
      const nowActive = navLinks.classList.toggle('active');
      burger.setAttribute('aria-expanded', nowActive ? 'true' : 'false');
      // animate hamburger icon
      burger.classList.toggle('open', nowActive);
    });
  });

  // Close mobile nav //
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        document.querySelectorAll('.nav-links.active').forEach(nav => nav.classList.remove('active'));
        hamburgers.forEach(b => { b.classList.remove('open'); b.setAttribute('aria-expanded','false'); });
      }
    });
  });

  window.addEventListener('resize', clearMobileNavIfNeeded);
  // ensure correct visibility on load
  clearMobileNavIfNeeded();
})();


const scrollElements = document.querySelectorAll('.fade-in, .slide-in, .zoom-in');
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
};
const displayScrollElement = (el) => { el.classList.add('visible'); };
const handleScrollAnimation = () => {
  scrollElements.forEach(el => { if (elementInView(el, 1.25)) displayScrollElement(el); });
};
window.addEventListener('scroll', handleScrollAnimation);


document.addEventListener('DOMContentLoaded', handleScrollAnimation);

handleScrollAnimation();

// Dropdown toggle //
(function(){
  const dropButtons = Array.from(document.querySelectorAll('.drop-btn'));
  if (!dropButtons || !dropButtons.length) return;
  dropButtons.forEach(btn => {
    try { btn.type = 'button'; } catch(e) {}
    btn.addEventListener('click', (e) => {
      const parent = btn.parentElement;
      const opened = parent.classList.toggle('open');
      btn.setAttribute('aria-expanded', opened ? 'true' : 'false');
    });
  });
})();

// subtle shadow navbar //
(function(){
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  const onScroll = () => {
    if (window.scrollY > 8) nav.classList.add('scrolled'); else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll);
  document.addEventListener('DOMContentLoaded', onScroll);
  onScroll();
})();

