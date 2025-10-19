// ===== ABRIR / CERRAR MENÚ =====
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sideMenu = document.getElementById('side-menu');

menuBtn.addEventListener('click', () => {
  sideMenu.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  sideMenu.classList.remove('open');
});

document.addEventListener('click', (e) => {
  if (!sideMenu.contains(e.target) && !menuBtn.contains(e.target)) {
    sideMenu.classList.remove('open');
  }
});

// ===== CARRUSEL AUTOMÁTICO =====
let index = 0;
const slides = document.querySelectorAll('.slider img');

function showSlide() {
  slides.forEach(img => (img.style.display = 'none'));
  index = (index + 1) % slides.length;
  slides[index].style.display = 'block';
}

setInterval(showSlide, 3000);