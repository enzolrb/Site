const bouton = document.querySelector('.bouton');
const sousMenu = document.querySelector('.sous-menu');

bouton.addEventListener('mouseleave', () => {
  sousMenu.style.display = 'none';
});
