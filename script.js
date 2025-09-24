// Fade-in animation on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 200; // trigger slightly before reaching
    const height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.style.opacity = 1;
      sec.style.transform = 'translateY(0)';
    }
  });
});

// Set initial hidden styles when page loads
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('section').forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = 'translateY(40px)';
    sec.style.transition = 'all 0.6s ease-out';
  });

  console.log("Portfolio animations initialized ✅");
});
