const btnBurger = document.querySelector('.header__burger'),
      burger = document.querySelector('.menu__body'),
      overlay = document.querySelector('.overlay')

btnBurger.addEventListener('click', () => {
    burger.classList.add('menu__body_active');
    overlay.classList.add('overlay_active');
})
overlay.addEventListener('click', () => {
    burger.classList.remove('menu__body_active');
    overlay.classList.remove('overlay_active');
})


