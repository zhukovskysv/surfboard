(function () {
  let hamburger = document.querySelector('.hamburger');
  let popupMenu = document.querySelector('.popup-menu');
  let body = document.querySelector('body');

  let links = document.querySelectorAll('.popup-menu__link');

  links.forEach(function (element) {
    element.addEventListener('click', toggleMenu);
  });

  function toggleMenu() {
    hamburger.classList.toggle('hamburger--active');
    popupMenu.classList.toggle('popup-menu--active');
    body.classList.toggle('body--active-menu');
  };

  hamburger.addEventListener('click', toggleMenu);
})();
