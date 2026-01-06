document.addEventListener('DOMContentLoaded', function () {
  // Trigger hero/load animations
  window.setTimeout(() => document.body.classList.add('is-loaded'), 80);

  // Selectors (fall back to common class names)
  const toggle = document.getElementById('menuToggle') || document.querySelector('.nav-toggle') || document.querySelector('#menu-toggle');
  const nav = document.querySelector('.site-nav') || document.querySelector('.top-nav') || document.getElementById('main-navigation');
  const NAV_OPEN_CLASS = 'nav-open';

  // Toggle navigation (adds class to body and nav for styling)
  function openNav() {
    document.body.classList.add(NAV_OPEN_CLASS);
    if (nav) nav.classList.add(NAV_OPEN_CLASS);
    if (toggle) toggle.setAttribute('aria-expanded', 'true');
  }

  function closeNav() {
    document.body.classList.remove(NAV_OPEN_CLASS);
    if (nav) nav.classList.remove(NAV_OPEN_CLASS);
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  }

  function isNavOpen() {
    return document.body.classList.contains(NAV_OPEN_CLASS) || (nav && nav.classList.contains(NAV_OPEN_CLASS));
  }

  if (toggle) {
    // Ensure aria attribute exists
    if (!toggle.hasAttribute('aria-expanded')) toggle.setAttribute('aria-expanded', 'false');

    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      if (isNavOpen()) closeNav(); else openNav();
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isNavOpen()) closeNav();
    });

    // Click outside to close
    document.addEventListener('click', (e) => {
      if (!isNavOpen()) return;
      const target = e.target;
      if (target === toggle) return;
      if (nav && (nav === target || nav.contains(target))) return;
      closeNav();
    });

    // Reset on resize (desktop breakpoint)
    window.addEventListener('resize', () => {
      if (window.innerWidth > 767 && isNavOpen()) closeNav();
    });
  }

  // Smooth scrolling for internal links starting with '#'
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      // allow bare hashes or external handlers
      if (!href || href === '#') return;
      const targetEl = document.querySelector(href);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Move focus for accessibility
        try {
          targetEl.setAttribute('tabindex', '-1');
          targetEl.focus({ preventScroll: true });
        } catch (err) {
          // ignore
        }
        // Update the URL hash without jumping
        if (history.pushState) history.pushState(null, '', href);
        else location.hash = href;
      }
    });
  });

  // Header shadow on scroll: toggle .scrolled on the header
  const headerEl = document.querySelector('.site-header');
  function updateHeaderScroll() {
    if (!headerEl) return;
    if (window.scrollY > 12) headerEl.classList.add('scrolled'); else headerEl.classList.remove('scrolled');
  }
  // init and bind
  updateHeaderScroll();
  window.addEventListener('scroll', updateHeaderScroll, {passive:true});
});
  // Back-to-top button behavior
  const backBtn = document.getElementById('backToTop');
  function updateBackToTop() {
    if (!backBtn) return;
    if (window.scrollY > 300) backBtn.classList.add('visible'); else backBtn.classList.remove('visible');
  }
  if (backBtn) {
    updateBackToTop();
    window.addEventListener('scroll', updateBackToTop, {passive:true});
    backBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({top:0,behavior:'smooth'});
    });
  }
