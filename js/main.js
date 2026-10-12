/* main.js — Amazon プライム感謝祭 2026 */

/* ---- Reading Progress Bar ---- */
function initProgressBar() {
  const bar = document.getElementById('progress-bar');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docH > 0 ? (window.scrollY / docH) * 100 : 0;
    bar.style.width = Math.min(pct, 100) + '%';
  }, { passive: true });
}

/* ---- Countdown Timer ---- */
function initCountdown() {
  const el = document.getElementById('countdown');
  if (!el) return;

  // Sale end: October 19, 2026 23:59:59 JST (UTC+9)
  const TARGET = new Date('2026-10-19T23:59:59+09:00').getTime();

  function update() {
    const now = Date.now();
    const diff = TARGET - now;

    if (diff <= 0) {
      el.innerHTML = '<span class="sale-ended">セール終了</span>';
      return;
    }

    const days  = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins  = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs  = Math.floor((diff % (1000 * 60)) / 1000);

    const pad = n => String(n).padStart(2, '0');

    document.getElementById('cd-days').textContent  = pad(days);
    document.getElementById('cd-hours').textContent = pad(hours);
    document.getElementById('cd-mins').textContent  = pad(mins);
    document.getElementById('cd-secs').textContent  = pad(secs);
  }

  update();
  setInterval(update, 1000);
}

/* ---- FAQ Accordion ---- */
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));

      // Open clicked (unless it was already open)
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* ---- Hamburger Menu ---- */
function initNav() {
  const ham = document.querySelector('.hamburger');
  const links = document.querySelector('.nav-links');
  if (!ham || !links) return;

  ham.addEventListener('click', () => {
    const open = links.style.display === 'flex';
    if (open) {
      links.style.display = 'none';
    } else {
      links.style.cssText = 'display:flex;flex-direction:column;position:absolute;top:60px;left:0;right:0;background:rgba(13,13,20,0.97);padding:1rem 1.5rem;gap:1rem;border-bottom:1px solid rgba(255,255,255,0.07);z-index:999;';
    }
  });
}

/* ---- Fade-in on Scroll ---- */
function initFadeIn() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.card, .article-card, .rank-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
    observer.observe(el);
  });

  // "visible" class triggers entrance
  const style = document.createElement('style');
  style.textContent = '.visible { opacity: 1 !important; transform: none !important; }';
  document.head.appendChild(style);
}

/* ---- Init All ---- */
document.addEventListener('DOMContentLoaded', () => {
  initProgressBar();
  initCountdown();
  initFAQ();
  initNav();
  initFadeIn();
});
