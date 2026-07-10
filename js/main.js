// A.L.E Electrical: small bits of interactivity

// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  // Close the menu after tapping a link (mobile)
  links.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Auto year in footer
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Contact form: submit in the background and show a fading thank-you popup
const enquiryForm = document.getElementById('enquiryForm');
if (enquiryForm) {
  const showToast = (message, ok) => {
    const toast = document.createElement('div');
    toast.className = 'toast' + (ok ? '' : ' toast--error');
    toast.setAttribute('role', 'status');
    toast.textContent = message;
    document.body.appendChild(toast);
    // fade in
    requestAnimationFrame(() => toast.classList.add('toast--show'));
    // fade out and remove
    setTimeout(() => {
      toast.classList.remove('toast--show');
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  };

  enquiryForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = enquiryForm.querySelector('button[type="submit"]');
    const original = btn ? btn.textContent : '';
    if (btn) { btn.disabled = true; btn.textContent = 'Sending...'; }
    try {
      const res = await fetch(enquiryForm.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(enquiryForm),
      });
      const data = await res.json();
      if (data.success) {
        enquiryForm.reset();
        showToast("Thanks for your message! We'll be in touch soon.", true);
      } else {
        showToast('Sorry, something went wrong. Please call 027 497 7992.', false);
      }
    } catch (err) {
      showToast('Sorry, something went wrong. Please call 027 497 7992.', false);
    } finally {
      if (btn) { btn.disabled = false; btn.textContent = original; }
    }
  });
}
