const btnOpenMenu = document.querySelector('.openModal');
const btnCloseMenu = document.querySelector('.closeModal');
const modalMenu = document.querySelector('.menuContainer');
const navLinks = document.querySelectorAll('.nav-link');
const body = document.querySelector('body');

// Opening mobile menu
const openMenu = function openModal() {
  modalMenu.classList.remove('hidden');
  modalMenu.classList.add('overlay');
  btnCloseMenu.classList.remove('hidden');
  btnOpenMenu.classList.add('hidden');
  body.classList.add('blurry-text');
};

btnOpenMenu.addEventListener('click', openMenu);

// Close menu button
const closeMenuBtn = function closeMenu() {
  modalMenu.classList.add('hidden');
  modalMenu.classList.remove('overlay');
  btnCloseMenu.classList.add('hidden');
  btnOpenMenu.classList.remove('hidden');
  body.classList.remove('blurry-text');
};
btnCloseMenu.addEventListener('click', closeMenuBtn);

// Close menu after clicking menu option
const closeOnClick = function close() {
  modalMenu.classList.add('hidden');
  modalMenu.classList.remove('overlay');
  btnCloseMenu.classList.add('hidden');
  btnOpenMenu.classList.remove('hidden');
  body.classList.remove('blurry-text');
};

for (let i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener('click', closeOnClick);
}
