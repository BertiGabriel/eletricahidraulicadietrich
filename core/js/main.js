/* ═══════════════════════════════════════════
   CORE / MAIN.JS
   JS compartilhado entre todas as páginas
   ═══════════════════════════════════════════ */

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Hamburger menu
document.getElementById('hamburger').addEventListener('click', () => {
  const links = document.querySelector('.nav-links');
  if (links.style.display === 'flex') {
    links.style.display = 'none';
  } else {
    links.style.cssText = 'display:flex;flex-direction:column;position:absolute;top:68px;left:0;right:0;background:rgba(15,29,46,0.98);padding:1.5rem 2rem;gap:1.25rem;';
  }
});
