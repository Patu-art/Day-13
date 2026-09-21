'use strict';

// Mobile menu: proper aria state, overlay closure, keyboard support and resize reset.
const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
function closeMenu({ restoreFocus = false } = {}) {
  if (!menuButton || !mobileNav) return;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  mobileNav.hidden = true;
  document.body.classList.remove('nav-open');
  if (restoreFocus) menuButton.focus();
}
function openMenu() {
  if (!menuButton || !mobileNav) return;
  menuButton.setAttribute('aria-expanded', 'true');
  menuButton.setAttribute('aria-label', 'Close navigation');
  mobileNav.hidden = false;
  document.body.classList.add('nav-open');
  mobileNav.querySelector('a')?.focus();
}
if (menuButton && mobileNav) {
  menuButton.addEventListener('click', () => {
    menuButton.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu();
  });
  mobileNav.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      closeMenu({ restoreFocus: true });
    }
    if (event.key === 'Tab' && menuButton.getAttribute('aria-expanded') === 'true') {
      const links = [...mobileNav.querySelectorAll('a')];
      const first = links[0], last = links[links.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault(); menuButton.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault(); menuButton.focus();
      } else if (event.shiftKey && document.activeElement === menuButton) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && document.activeElement === menuButton) {
        event.preventDefault(); first.focus();
      }
    }
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) closeMenu();
  });
  document.addEventListener('pointerdown', (event) => {
    if (menuButton.getAttribute('aria-expanded') === 'true' &&
        !mobileNav.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
  });
}

// Purposeful, optional day-to-night art direction for the hero. Does not change real operating hours.
const moodSwitch = document.getElementById('mood-switch');
const switchLabel = document.getElementById('switch-label');
const heroImage = document.getElementById('hero-image');
const heroImageCaption = document.getElementById('hero-image-caption');
const heroDescription = document.getElementById('hero-description');
if (moodSwitch && switchLabel && heroImage && heroImageCaption && heroDescription) {
  moodSwitch.addEventListener('click', () => {
    const night = document.body.dataset.mood !== 'night';
    document.body.dataset.mood = night ? 'night' : 'day';
    moodSwitch.setAttribute('aria-pressed', String(night));
    moodSwitch.setAttribute('aria-label', night ? 'Switch to daytime café view' : 'Switch to evening bar view');
    switchLabel.textContent = night ? 'BACK TO DAYTIME?' : 'AFTER DARK?';
    heroImage.src = night ? 'assets/cocktail.svg' : 'assets/coffee.svg';
    heroImage.alt = night ? 'Illustration of two drinks at a bar' : 'Illustration of coffee in a ceramic cup';
    heroImageCaption.textContent = night ? '02 — ONE MORE ROUND' : '01 — FIRST CUP';
    heroDescription.textContent = night
      ? 'The last coffee was hours ago. The conversation is still going. Make an evening of it on Manchester Road.'
      : 'A coffee that becomes a catch-up. A catch-up that becomes another round. Meet us on Manchester Road.';
  });
}

// Reveal only when supported; otherwise all content remains visible. Avoid motion for those who request it.
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('js-motion');
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }
  }, { rootMargin: '0px 0px -35px 0px', threshold: 0.09 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}
