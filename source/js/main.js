var toggleMenu = document.querySelector('.page-header__toggle-menu');
var mainNav = document.querySelector('.main-nav');

mainNav.classList.remove('main-nav--nojs');
toggleMenu.classList.remove('page-header__toggle-menu--nojs');

toggleMenu.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (toggleMenu.classList.contains('page-header__toggle-menu--closed')) {
    toggleMenu.classList.remove('page-header__toggle-menu--closed');
    mainNav.classList.remove('main-nav--closed');
    toggleMenu.classList.add('page-header__toggle-menu--opened');
    mainNav.classList.add('main-nav--opened');
  } else {
    toggleMenu.classList.remove('page-header__toggle-menu--opened');
    mainNav.classList.remove('main-nav--opened');
    toggleMenu.classList.add('page-header__toggle-menu--closed');
    mainNav.classList.add('main-nav--closed');
  }
});
