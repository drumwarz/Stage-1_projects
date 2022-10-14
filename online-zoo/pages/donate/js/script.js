const btnBurger = document.querySelector('.header__burger'),
      burger = document.querySelector('.menu__body'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.menu__close');
btnBurger.addEventListener('click', () => {
    burger.classList.add('menu__body_active');
    overlay.classList.add('overlay_active');
})
overlay.addEventListener('click', () => {
    burger.classList.remove('menu__body_active');
    overlay.classList.remove('overlay_active');
})

close.addEventListener('click', () => {
    burger.classList.remove('menu__body_active');
    overlay.classList.remove('overlay_active');
})






const input = document.querySelector('input[type=number]');
input.addEventListener('input', () => {
        if (input.value.length > 4) { input.value = input.value.substr(0, 4) }
    });


    

    

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
        input.value = dollars[i].textContent.slice(1);
    });
};
input.addEventListener('input', () => {
    for (let i = 0; i < dot.length; i++) {
        if (dollars[i].textContent.slice(1) === input.value) {
            for (let i = 0; i < dot.length; i++) {
                dotActive[i].classList.remove('pay__dot_active');
                dollars[i].classList.remove('pay__dollar_active');
            }
            dotActive[i].classList.add('pay__dot_active');
            dollars[i].classList.add('pay__dollar_active');
        } else {
            dotActive[i].classList.remove('pay__dot_active');
            dollars[i].classList.remove('pay__dollar_active'); 
        }
    }
})