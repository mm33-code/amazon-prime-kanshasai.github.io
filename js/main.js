/* ==========================================================================
   main.js — プライム感謝祭 お得ナビ (WordPress Blog Style Interactive Engine)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initProgressBar();
  initCountdown();
  initFAQ();
  initMobileNav();
  initTOCToggle();
});

/* 1. Reading Progress Bar */
function initProgressBar() {
  const bar = document.getElementById('progress-bar');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docH > 0 ? (window.scrollY / docH) * 100 : 0;
    bar.style.width = Math.min(pct, 100) + '%';
  }, { passive: true });
}

/* 2. Countdown Timer */
function initCountdown() {
  // Target date: October 19, 2026 23:59:59 JST
  const TARGET = new Date('2026-10-19T23:59:59+09:00').getTime();

  const dEl = document.getElementById('cd-days');
  const hEl = document.getElementById('cd-hours');
  const mEl = document.getElementById('cd-mins');
  const sEl = document.getElementById('cd-secs');

  if (!dEl || !hEl || !mEl || !sEl) return;

  function update() {
    const now = Date.now();
    const diff = TARGET - now;

    if (diff <= 0) {
      dEl.textContent = '00';
      hEl.textContent = '00';
      mEl.textContent = '00';
      sEl.textContent = '00';
      return;
    }

    const days  = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins  = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs  = Math.floor((diff % (1000 * 60)) / 1000);

    const pad = n => String(n).padStart(2, '0');
    dEl.textContent = pad(days);
    hEl.textContent = pad(hours);
    mEl.textContent = pad(mins);
    sEl.textContent = pad(secs);
  }

  update();
  setInterval(update, 1000);
}

/* 3. WordPress Style FAQ Accordion */
function initFAQ() {
  document.querySelectorAll('.wp-faq-q').forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      if (!answer) return;

      const isOpen = answer.classList.contains('open');
      document.querySelectorAll('.wp-faq-a.open').forEach(a => a.classList.remove('open'));

      if (!isOpen) {
        answer.classList.add('open');
      }
    });
  });
}

/* 4. Mobile Navigation Toggle */
function initMobileNav() {
  const toggleBtn = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!toggleBtn.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove('open');
    }
  });
}

/* 5. Table of Contents (TOC) [閉じる/開く] Toggle */
function initTOCToggle() {
  const toggleBtn = document.getElementById('tocToggle');
  const tocList = document.getElementById('tocList');
  if (!toggleBtn || !tocList) return;

  toggleBtn.addEventListener('click', () => {
    const isHidden = tocList.style.display === 'none';
    if (isHidden) {
      tocList.style.display = 'block';
      toggleBtn.textContent = '[閉じる]';
    } else {
      tocList.style.display = 'none';
      toggleBtn.textContent = '[開く]';
    }
  });
}
