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


const dot = document.querySelectorAll('.pay__circle');
const dotActive = document.querySelectorAll('.pay__dot');
const dollars = document.querySelectorAll('.pay__dollar');
for (let i = 0; i < dot.length; i++) {
    dot[i].addEventListener('click', () => {
        for (let i = 0; i < dot.length; i++) {
            dotActive[i].classList.remove('pay__dot_active');
            dollars[i].classList.remove('pay__dollar_active');
        }
        dotActive[i].classList.add('pay__dot_active');
        dollars[i].classList.add('pay__dollar_active');
    });
};
