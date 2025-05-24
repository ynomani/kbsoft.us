// Toggle Mobile Menu
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('show');
});

// Shrink navbar on scroll
window.onscroll = function() { shrinkNavbar(); };

function shrinkNavbar() {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("shrunk");
  } else {
    navbar.classList.remove("shrunk");
  }
}

// Equalize section heights
function equalizeSectionHeights(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const text = section.querySelector('.text');
  const image = section.querySelector('.image');
  if (!text || !image) return;

  text.style.height = 'auto';
  image.style.height = 'auto';

  const maxHeight = Math.max(text.offsetHeight, image.offsetHeight);
  text.style.height = `${maxHeight}px`;
  image.style.height = `${maxHeight}px`;
}

function equalizeAllSections() {
  equalizeSectionHeights('solutions');
  equalizeSectionHeights('about');
}

window.addEventListener('load', equalizeAllSections);
window.addEventListener('resize', equalizeAllSections);

// Footer year update
document.addEventListener("DOMContentLoaded", function () {
  const currentYear = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = currentYear;
});